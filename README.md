# Strong Tower

The public website for **The Strong Tower Project** — a donation-based, Christ-centred mission building stronger digital protection, trusted accountability, and gospel-rooted recovery for people serious about leaving pornography behind.

> "The name of the LORD is a strong tower; the righteous run to it and are safe." — Proverbs 18:10

This repo is the Phase 1 public site plus Phase 2 form persistence, the Phase 3 launch-credibility polish, a Phase 4 resource hub, Phase 5 pilot workflow UX, and the Phase 7 internal pilot operations workflow. There is no auth, no payments, no database, no CMS, and no device-blocking code.

## Current production status

| Area | Status |
| --- | --- |
| Phase 1 public website | **Live** |
| Phase 2 Google Sheets persistence | **Live** |
| Forms saving to Google Sheets when env vars are configured | **Live** |
| Phase 3 launch credibility polish | **Live** |
| Phase 4 resource hub (`/resources` + 4 printable guides) | **Live** |
| Phase 5 pilot workflow polish (success + "what happens next") | **Live** |
| Phase 7 internal pilot operations workflow (docs + internal page) | **Live** |
| Resend email delivery | Env-var keys exist, values not yet configured |
| Payment processing | Not built |
| Custom domain | Not connected |
| Auth / dashboard | Not built |
| Actual device or network blocking | Not built — future phases |

If Resend env vars are absent or empty, form submissions still succeed and persist to Google Sheets; emails simply aren't sent.

## Testing the forms safely

The three forms (`/pilot`, `/support`, `/contact`) all POST to App Router API routes that validate input with Zod, drop honeypot-tripped submissions silently, and persist to the configured destinations.

Safe ways to test on the live site:

- Submit one clearly-labelled test row per form. Avoid bulk testing — every row lands in the live Google Sheet.
- Use obvious test data (e.g. firstName "QA Test", email `qa-test@example.com`) so it's easy to spot and delete in the Sheet afterwards.
- Expect a successful response of `{ ok: true, delivered: <bool>, saved: <bool> }`. With Sheets configured, `saved: true` is the success indicator.
- The honeypot field is named `website` — leaving it empty is correct.

## Secret hygiene

- **Never commit secrets.** `.env*` files are gitignored by default; only `.env.example` is tracked.
- **Google Sheets env vars must remain in Vercel.** They're set on the `strongtower` Vercel project, scoped to Production and Preview. Removing them silently breaks form persistence.
- **Service account JSON keys should not be kept locally after setup.** Download the key, paste the values into Vercel, delete the downloaded JSON. If you ever need a new key, generate a fresh one in Google Cloud Console.
- The site exposes no secrets in client-side bundles — all secret-using code runs in App Router `runtime: "nodejs"` route handlers.

## Pilot operations workflow

The Strong Tower team triages every pilot, support, and contact submission through a lightweight, pastoral, repeatable rhythm — no admin dashboard, no automation, no surveillance. Three internal docs hold the playbook:

- [`docs/pilot-operations.md`](./docs/pilot-operations.md) — the workflow doc. Per-audience triage (individual / parent / church / accountability partner / donor / technical volunteer), weekly review rhythm, safeguarding escalation rules, what to say, what not to say, and how to label and follow up the founding cohort.
- [`docs/response-templates.md`](./docs/response-templates.md) — seven warm, gospel-centred response templates plus reusable building blocks for the team's first replies.
- [`docs/sheet-columns.md`](./docs/sheet-columns.md) — recommended manual triage columns to add to the **right** of the API-written columns on each Sheet tab. The API columns are positional — never insert, rename, or reorder them.

### Where form data lands

| Form | Public route | API route | Sheet tab |
| --- | --- | --- | --- |
| Pilot waitlist | `/pilot` | `/api/waitlist` | **Pilot Waitlist** |
| Support interest | `/support` | `/api/support-interest` | **Support Interest** |
| Contact | `/contact` | `/api/contact` | **Contact Messages** |

### Weekly review process (summary)

Once a week, a single owner walks the Sheet end-to-end. Sort each tab by `submittedAt` desc, filter `status = New`, pick a category and priority, send a tailored response from `docs/response-templates.md`, then fill `firstResponseSentAt`, `status = Replied`, `assignedTo`, and a one-line note. Set `followUpDate` and check stale rows weekly. Full detail in `docs/pilot-operations.md`.

### Internal-only web reference

There is also a web-rendered version of the workflow at `/internal/pilot-workflow`. It is:

- A static page — no live data, no Sheets fetch, no admin functionality.
- Excluded from the public nav, footer, and sitemap.
- Explicitly set to `noindex, nofollow` via page metadata.
- Disallowed in `robots.txt`.

It is not an authenticated surface. Treat it as obscured, not secret. Do not put applicant data, secrets, or sensitive personal detail there. The markdown docs in `/docs` are the source of truth; the page is just a convenience.

### Current limitations of the operations workflow

- No automated triage. Every triage column is filled in by a person.
- No transactional confirmation emails until Resend is configured.
- No queryable submission history beyond the Sheet itself — don't lose access to it.
- No admin dashboard. When the Sheet stops being enough, that's the trigger for the next phase of operations work — not before.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Zod** + **react-hook-form** for forms
- **Resend** for email delivery (optional)
- **Google Sheets** for row-by-row submission persistence (optional, zero-dep)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

The site works out of the box without any environment variables. Form submissions are logged to the server console until you configure either Resend or Google Sheets.

## Production scripts

```bash
npm run lint
npm run build
npm run start
```

## Environment variables

All variables are **optional**. Copy `.env.example` to `.env.local` and fill in whichever destinations you want to use.

```env
# Resend (email delivery)
RESEND_API_KEY=
MAIL_FROM=
MAIL_TO_PILOT=
MAIL_TO_SUPPORT=
MAIL_TO_CONTACT=

# Google Sheets (row persistence)
GOOGLE_SHEETS_CLIENT_EMAIL=
GOOGLE_SHEETS_PRIVATE_KEY=
GOOGLE_SHEETS_SPREADSHEET_ID=
GOOGLE_SHEETS_PILOT_SHEET_NAME=Pilot Waitlist
GOOGLE_SHEETS_SUPPORT_SHEET_NAME=Support Interest
GOOGLE_SHEETS_CONTACT_SHEET_NAME=Contact Messages
```

**Do not commit real secrets.** `.env*` files are gitignored by default.

## Google Sheets setup

The three forms (pilot waitlist, support interest, contact) can persist every submission to a Google Sheet. Setup is a one-time five-minute job.

### 1. Create the spreadsheet

Create a new Google Sheet with **three tabs**, named exactly:

- `Pilot Waitlist`
- `Support Interest`
- `Contact Messages`

(If you want different names, set the `GOOGLE_SHEETS_*_SHEET_NAME` env vars to match.)

You do **not** need to add header rows — the API appends raw data rows in this column order:

| Tab | Columns |
| --- | --- |
| Pilot Waitlist | `submittedAt`, `firstName`, `email`, `country`, `joiningAs`, `devices`, `interestLevel`, `message`, `source`, `userAgent`, `ipHash` |
| Support Interest | `submittedAt`, `firstName`, `email`, `country`, `interestType`, `message`, `source`, `userAgent`, `ipHash` |
| Contact Messages | `submittedAt`, `name`, `email`, `subject`, `message`, `source`, `userAgent`, `ipHash` |

Add header rows yourself if you want them — the API uses `INSERT_ROWS`, so it always appends below existing content.

Grab the spreadsheet ID from the URL — it's the part between `/d/` and `/edit`:

```
https://docs.google.com/spreadsheets/d/THIS_IS_THE_ID/edit
```

Set it as `GOOGLE_SHEETS_SPREADSHEET_ID`.

### 2. Create a Google Cloud service account

1. Open <https://console.cloud.google.com/> and create a new project (or pick an existing one).
2. **APIs & Services → Library** → search for **Google Sheets API** → **Enable**.
3. **APIs & Services → Credentials → Create credentials → Service account**.
   - Give it a name (e.g. `strong-tower-sheets`).
   - Grant role: leave blank or set **Editor** at the project level (project-level role is not required; sheet-level sharing is enough).
4. After creating, open the service account → **Keys → Add key → Create new key → JSON**. Download the JSON file.

You will use two fields from that JSON:

- `client_email` → `GOOGLE_SHEETS_CLIENT_EMAIL`
- `private_key` → `GOOGLE_SHEETS_PRIVATE_KEY`

### 3. Share the spreadsheet with the service account

In your Google Sheet:

1. Click **Share**.
2. Paste the service account's `client_email` address (looks like `something@your-project.iam.gserviceaccount.com`).
3. Give it **Editor** access. Untick "Notify people".

This is the step people miss. Without it, every append will return a 403.

### 4. Set the env vars

#### Locally — `.env.local`

```env
GOOGLE_SHEETS_CLIENT_EMAIL=strong-tower-sheets@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...truncated...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=1AbCdEf...
```

The private key must be wrapped in double quotes and have literal `\n` between lines (which is exactly how it appears in the downloaded JSON).

#### On Vercel — Project → Settings → Environment Variables

Add the same three variables. Vercel handles the `\n` escapes correctly when you paste the value from the JSON file's `private_key` field. Apply to **Production**, **Preview**, and (optionally) **Development**.

After saving, **redeploy** so the next runtime picks them up.

### 5. Test it

#### Locally

```bash
npm run dev
```

Submit any of the three forms with test data. Check:

- The form shows a normal success state.
- A new row appears at the bottom of the matching tab in your Google Sheet.
- The server console shows no errors.

If the env vars are missing or wrong, the form still succeeds (the submission is logged to the server console) — by design, a Sheets outage cannot break the user-facing form.

#### On Vercel

After redeploying with the env vars set, submit a form on the live URL and confirm the row appears in the sheet.

## How form persistence behaves

The three API routes (`/api/waitlist`, `/api/support-interest`, `/api/contact`) try **both** Resend and Google Sheets in parallel on every submission. The response is shaped:

```json
{ "ok": true, "delivered": false, "saved": true }
```

- `delivered` — true when Resend accepted the email.
- `saved` — true when Google Sheets appended a row.

If neither destination is configured, both flags are `false` and the submission is logged to the server console. The user still sees a normal success message.

The API only returns an error (HTTP 502) when **every configured** destination failed — i.e. the submission would otherwise be lost. The client form never shows raw error details.

## Privacy notes

- The `ipHash` column is a salted SHA-256 hash of the client IP, truncated to 16 hex chars. Useful for spam triage, not for forensic identification. Raw IPs are never stored or logged.
- The `userAgent` column is truncated to 200 chars.
- No form content beyond the declared fields is collected or transmitted.
- Honeypot trips return a normal `{ ok: true }` response and discard the submission silently — no row written, no email sent.

## Project layout

```
app/                  Marketing routes + 3 API routes + sitemap/robots/404
  api/
    waitlist/         POST → pilot persistence
    support-interest/ POST → support-interest persistence
    contact/          POST → contact persistence
components/
  forms/              react-hook-form + Zod forms
  layout/             Site header, footer, mobile nav
  marketing/          Home-page sections + reusable marketing blocks
  primitives/         Buttons, cards, page header, dividers, eyebrows
content/              Static nav, FAQ, and Scripture data
lib/
  email.ts            Resend wrapper with graceful no-op
  google-sheets.ts    Zero-dep Sheets append via service account JWT
  request-meta.ts     Truncated UA + salted IP hash
  persistence-response.ts  Decides 200 vs 502 from both results
  validation/         Zod schemas for each form
```

## Deploying

The site is built for Vercel. Push to `main` and Vercel will deploy automatically. No build configuration changes are required.

## Limitations of this site

A website alone cannot block pornography across a phone, laptop, or network. Phase 1 of Strong Tower is a public mission site, pilot waitlist, support-interest pathway, and contact form. The actual protection platform — DNS and VPN filtering, managed-device profiles, tamper-evident alerts, accountability flows — belongs to future phases and lives outside this repo.
