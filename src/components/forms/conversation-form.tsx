"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const topics = [
  "Strategy",
  "Operations",
  "AI & Automation",
  "Technology",
  "Venture",
  "PRIZM",
  "Something else",
];

export function ConversationForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      startedAt,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "The inquiry could not be submitted. Please try again.");
      }
      form.reset();
      setState("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "The inquiry could not be submitted. Please try again."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        className="rounded-[32px] border border-[var(--azva-border)] bg-[var(--azva-canvas)] p-8 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <p className="eyebrow mb-6">Thank you</p>
        <h2 className="text-4xl font-medium tracking-[-0.055em] text-[var(--azva-primary)] sm:text-5xl">
          Your inquiry has been received.
        </h2>
        <p className="body-lg mt-6 max-w-2xl">
          Every inquiry is reviewed personally. If there is a potential fit,
          you can expect a response within approximately two business days.
        </p>
        <button
          type="button"
          className="azva-institutional-link mt-8"
          onClick={() => setState("idle")}
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[var(--azva-border)] bg-[var(--azva-canvas)] p-6 sm:p-8 lg:p-10"
      noValidate
    >
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input id="name" name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" className="azva-input" />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" className="azva-input" />
        </Field>
        <Field label="Organization" htmlFor="organization">
          <input id="organization" name="organization" type="text" maxLength={160} autoComplete="organization" className="azva-input" />
        </Field>
        <Field label="What would you like to discuss?" htmlFor="topic">
          <select id="topic" name="topic" defaultValue="" className="azva-input">
            <option value="">Select a topic</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field
          label="Tell us about the decision, challenge, or opportunity you're navigating."
          htmlFor="message"
          required
        >
          <textarea
            id="message"
            name="message"
            required
            minLength={30}
            maxLength={4000}
            rows={8}
            className="azva-input resize-y"
            placeholder="A little context helps us understand whether and how AZVA may be useful."
          />
        </Field>
      </div>

      {state === "error" ? (
        <p className="mt-6 text-sm leading-6 text-red-700" role="alert" aria-live="assertive">
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-[rgba(14,14,14,0.52)]">
          Required fields are marked with an asterisk. Your information is used only to review and respond to this inquiry.
        </p>
        <button type="submit" className="btn-primary min-w-[210px]" disabled={state === "submitting"}>
          {state === "submitting" ? "Submitting..." : "Start the Conversation"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-3 block text-sm font-medium text-[var(--azva-primary)]">
        {label}{required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
