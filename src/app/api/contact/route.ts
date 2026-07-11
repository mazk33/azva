import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  topic?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

type RateRecord = { count: number; resetAt: number };

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const MIN_SUBMISSION_MS = 4_000;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1000;

const globalRateStore = globalThis as typeof globalThis & {
  __azvaContactRateStore?: Map<string, RateRecord>;
};

const rateStore =
  globalRateStore.__azvaContactRateStore ??
  (globalRateStore.__azvaContactRateStore = new Map<string, RateRecord>());

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return jsonError("This submission could not be verified.", 403);
    }

    const contentLength = Number(request.headers.get("content-length") ?? "0");
    if (contentLength > 20_000) {
      return jsonError("The submitted message is too large.", 413);
    }

    const ip = getClientIp(request);
    if (!allowRequest(ip)) {
      return jsonError(
        "Too many inquiries were submitted from this connection. Please try again later.",
        429
      );
    }

    const body = (await request.json()) as ContactPayload;

    // Honeypot. Return success so automated tools receive no useful signal.
    if (cleanText(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const startedAt =
      typeof body.startedAt === "number" ? body.startedAt : Number(body.startedAt);
    const elapsed = Date.now() - startedAt;

    if (
      !Number.isFinite(startedAt) ||
      elapsed < MIN_SUBMISSION_MS ||
      elapsed > MAX_FORM_AGE_MS
    ) {
      return jsonError("Please reload the page and try again.", 400);
    }

    const name = cleanText(body.name, 100);
    const email = cleanText(body.email, 160).toLowerCase();
    const organization = cleanText(body.organization, 160);
    const topic = cleanText(body.topic, 80);
    const message = cleanMultiline(body.message, 4000);

    if (name.length < 2) return jsonError("Please provide your name.", 400);
    if (!isValidEmail(email)) return jsonError("Please provide a valid email address.", 400);
    if (message.length < 30) {
      return jsonError("Please provide a little more context about the inquiry.", 400);
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resendApiKey || !toEmail || !fromEmail) {
      console.error("Contact form email environment variables are missing.");
      return jsonError(
        "The inquiry service is temporarily unavailable. Please try again later.",
        503
      );
    }

    const subjectTopic = topic || "General inquiry";
    const subject = `[AZVA Inquiry] ${subjectTopic} — ${name}`;
    const text = [
      "New AZVA conversation request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization: ${organization || "Not provided"}`,
      `Topic: ${subjectTopic}`,
      "",
      "Message:",
      message,
      "",
      `Submitted: ${new Date().toISOString()}`,
      `IP: ${ip}`,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;color:#1E2A38;line-height:1.6">
        <h1 style="font-size:24px;margin:0 0 24px">New AZVA conversation request</h1>
        <table style="border-collapse:collapse;width:100%;max-width:680px">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Organization", organization || "Not provided")}
          ${row("Topic", subjectTopic)}
        </table>
        <h2 style="font-size:18px;margin:28px 0 10px">Message</h2>
        <div style="white-space:pre-wrap;background:#F8F4EE;border:1px solid rgba(30,42,56,.12);border-radius:12px;padding:18px">${escapeHtml(
          message
        )}</div>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject,
        html,
        text,
        tags: [
          { name: "source", value: "azva_website" },
          { name: "topic", value: slugTag(subjectTopic) },
        ],
      }),
    });

    if (!resendResponse.ok) {
      const providerError = await resendResponse.text();
      console.error("Resend contact delivery failed:", providerError);
      return jsonError(
        "The inquiry could not be delivered. Please try again shortly.",
        502
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return jsonError("The inquiry could not be submitted. Please try again.", 500);
  }
}

function isAllowedOrigin(request: Request) {
  const configuredOrigin = process.env.CONTACT_ALLOWED_ORIGIN;
  if (!configuredOrigin) return true;
  return request.headers.get("origin") === configuredOrigin;
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? request.headers.get("cf-connecting-ip") ?? "unknown";
}

function allowRequest(key: string) {
  const now = Date.now();
  const current = rateStore.get(key);
  if (!current || current.resetAt <= now) {
    rateStore.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    pruneRateStore(now);
    return true;
  }
  if (current.count >= RATE_LIMIT) return false;
  current.count += 1;
  rateStore.set(key, current);
  return true;
}

function pruneRateStore(now: number) {
  if (rateStore.size < 500) return;
  for (const [key, record] of rateStore.entries()) {
    if (record.resetAt <= now) rateStore.delete(key);
  }
}

function cleanText(value: unknown, maxLength: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength: number) {
  return String(value ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value) && value.length <= 160;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function row(label: string, value: string) {
  return `<tr><td style="padding:8px 14px 8px 0;font-weight:700;vertical-align:top">${escapeHtml(
    label
  )}</td><td style="padding:8px 0">${escapeHtml(value)}</td></tr>`;
}

function slugTag(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 80) || "general";
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status });
}
