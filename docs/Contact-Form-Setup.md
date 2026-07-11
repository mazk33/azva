# AZVA Conversation Request Setup

## Architecture

The form submits to a Next.js App Router Route Handler at `/api/contact` and sends the inquiry through the Resend REST API.

## Included protection

- Hidden honeypot field
- Minimum completion time of four seconds
- Maximum form age of 24 hours
- Same-origin validation in production
- Server-side validation and length limits
- HTML escaping before email rendering
- Best-effort limit of five submissions per IP per hour
- Generic success response for honeypot submissions

## Important limitation

The included in-memory rate limiter is best-effort. Serverless instances do not share durable memory. For stronger distributed protection after launch, add Cloudflare Turnstile, Vercel Firewall rate limiting, or Upstash Redis. Do not add a visible CAPTCHA unless abuse justifies it.

## Resend setup

1. Create a Resend account.
2. Verify the `azva.us` domain.
3. Create an API key restricted to sending access.
4. Add the variables from `.env.example` to `.env.local`.
5. Add the same variables to the Vercel project.
6. Redeploy after adding environment variables.

The route sends a `POST` request to `https://api.resend.com/emails` using Bearer authentication and sets the inquiry email as `reply_to`.

## Local testing

For local development, use:

```text
CONTACT_ALLOWED_ORIGIN=http://localhost:3000
```

Then run:

```bash
npm run dev
```

Submit at `http://localhost:3000/connect`.

## Perspective links

Update both featured-note links to:

```text
/perspectives/operational-leverage-is-designed
```

Locations:
- Homepage Perspectives preview
- `/perspectives` featured card
