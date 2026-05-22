# Strong Tower — Pilot Operations Workflow

**Audience:** the small Strong Tower team handling pilot, support, contact, and partner submissions.

**Purpose:** a lightweight, pastoral, repeatable rhythm for responding to people who reach out — without overpromising, without shaming, and without claiming protection is live.

This document is the **source of truth** for the team. The companion documents are:

- [`response-templates.md`](./response-templates.md) — seven warm, gospel-centred response templates.
- [`sheet-columns.md`](./sheet-columns.md) — recommended manual columns to add to the live Google Sheet after the existing API-written columns.

> The live website does not have an admin dashboard. All triage happens in the Google Sheet plus your inbox plus this team rhythm. Keep it simple, keep it kind, keep it honest.

---

## What is live today, and what isn't

**Live**
- The public marketing site at `strongtower-kappa.vercel.app`.
- Three Zod-validated forms: `/pilot`, `/support`, `/contact`.
- Persistence: every valid submission appends a row to the Strong Tower Google Sheet (tabs: *Pilot Waitlist*, *Support Interest*, *Contact Messages*).
- The resource hub at `/resources` with four printable guides.

**Not live yet**
- Resend email delivery (env vars exist, values not configured).
- Payment processing.
- Auth, admin dashboard, or any "logged-in" area.
- Device or network blocking. No DNS, VPN, or managed-device profiles are built or deployed.

Every conversation with a pilot applicant must keep this honest line in view.

---

## Where form data lands

| Form | Public route | API route | Sheet tab |
| --- | --- | --- | --- |
| Pilot waitlist | `/pilot` | `/api/waitlist` | **Pilot Waitlist** |
| Support interest | `/support` | `/api/support-interest` | **Support Interest** |
| Contact | `/contact` | `/api/contact` | **Contact Messages** |

The API writes columns in a fixed order — see [`sheet-columns.md`](./sheet-columns.md). The team can add manual triage columns to the right of the API-written ones without affecting the API.

---

## Weekly review rhythm

Once a week, ideally at the same time, a single owner walks the Sheet end-to-end. The whole pass should take 20–40 minutes once the rhythm is established.

1. **Open the Sheet.** Sort each tab by `submittedAt` descending.
2. **Filter for `status = "New"`** (after you've added the manual columns).
3. **For each new row:**
   1. Read the message and the role/category.
   2. Decide a category (Individual / Parent / Church / Accountability Partner / Donor / Technical Volunteer).
   3. Set priority (High / Medium / Low). High = pastoral concern, church leader, or anything that smells urgent.
   4. Pick the matching response template from [`response-templates.md`](./response-templates.md), adapt it, and send.
   5. Fill `firstResponseSentAt`, set `status = "Replied"`, set `assignedTo`, and add a one-line note.
   6. If a follow-up is needed, set `followUpDate` (e.g. +14 days).
4. **Filter for `followUpDate <= today`.** Send a short, warm follow-up. Update the date or move to `status = "Waiting"` or `Pilot candidate`.
5. **Filter for stale `Waiting` or `Pilot candidate`** older than 6 weeks. Decide: bring back into active conversation, move to `Not now`, or `Archived`.

Keep notes short and non-graphic. The Sheet is a triage record, not a journal.

---

## Per-audience workflows

Each workflow uses the same Sheet + template approach. The differences are in **pace, posture, and escalation rules**.

### 1. Individual pilot triage (`joiningAs = "individual"`)

- **Pace:** reply within 7 days. The act of reaching out matters.
- **Posture:** warm, non-shaming, gospel-centred. Do not ask for graphic detail. Do not lecture.
- **First reply:** Template — *Individual pilot signup* (see `response-templates.md`).
- **Follow-up:** point them to `/resources/emergency-temptation-plan`, `/accountability`, and `/resources/accountability-covenant`.
- **Escalation:** if their message mentions self-harm, abuse, or acute crisis, see *Safeguarding* below.

### 2. Parent / Family pilot workflow (`joiningAs = "parent"`)

- **Pace:** reply within 7 days. Parents are usually anxious — a calm, quick reply lowers temperature.
- **Posture:** practical, not fear-based. Treat them as the loving expert in their own family.
- **First reply:** Template — *Parent/family pilot signup*. Point them to `/resources/parent-conversation-guide`.
- **Follow-up:** ask one specific question about devices or ages so we learn what families actually need.
- **Escalation:** if the message describes a child in distress or active harm, escalate to a designated team lead the same day.

### 3. Church / Ministry pilot workflow (`joiningAs = "church leader"`)

- **Pace:** reply within 3 working days. Church leaders are influential and respond well to attentiveness.
- **Posture:** pastoral peer-to-peer. Avoid sales language. Avoid pretending we have a programme to "sell".
- **First reply:** Template — *Church/ministry pilot signup*. Attach or link `/resources/church-pilot-one-pager`.
- **Follow-up:** offer a 20-minute call when relevant. Capture: church size band, denomination/network (if shared), and what they think their people most need.
- **Escalation:** if they raise a safeguarding case, do not act as the safeguarding service. Acknowledge, refer them to their denomination's safeguarding lead or local equivalent, and signpost.

### 4. Accountability partner workflow (`joiningAs = "accountability partner"`)

- **Pace:** reply within 7 days.
- **Posture:** equip them. Treat them as a peer doing ministry.
- **First reply:** Template — *Accountability partner interest*. Point them to `/accountability` and `/resources/accountability-covenant`.
- **Follow-up:** ask if they are walking with one person or several, and whether they would like the covenant template adapted for a small group.
- **Escalation:** if they describe a partner in crisis, gently coach them to bring a pastor or counsellor in — they are not a solo carer.

### 5. Donor / Support interest workflow (`joiningAs = "donor"` or any `/support` submission)

- **Pace:** reply within 5 working days. Treat every donor inquiry with care, regardless of size.
- **Posture:** honest. We have no payment pathway live. Don't manufacture urgency.
- **First reply:** Template — *Donor / support interest*. State clearly that the donation pathway is being prepared.
- **Follow-up:** when the donation pathway opens, send a separate, short notice to everyone in *Support Interest*. Do not pressure.
- **Escalation:** if a donor offers significant resources (e.g. infrastructure, legal, pastoral) outside money, flag to the team lead.

### 6. Technical volunteer workflow (`joiningAs = "technical volunteer"`)

- **Pace:** reply within 7 days. Tech people respect promptness and specificity.
- **Posture:** real engineer-to-engineer. Be honest about what's built and what isn't.
- **First reply:** Template — *Technical volunteer interest*. Ask one concrete question about their stack or area of interest.
- **Follow-up:** point them at the public repo (read-only for now) and `/technical-vision`. Don't promise contributor access without team agreement.
- **Escalation:** if they offer security-relevant help (e.g. infra audit, penetration testing), check team capacity to act on findings *before* accepting.

### 7. General contact (any `/contact` submission)

- **Pace:** reply within 5 working days.
- **Posture:** plain, gracious. Press, journalists, and partners get the same care as a private enquirer.
- **First reply:** Template — *General contact response*, tuned to the subject (general / partnership / press / pastoral / technical).
- **Escalation:** *pastoral* enquiries that describe crisis → reply with care, but also signpost to local pastor / counsellor / emergency services and note we are not a crisis service.

---

## The "founding cohort" idea

The founding cohort is a small group of pilot participants you actively walk with — not just an inbox of names. Use the `status = "Pilot candidate"` value in the Sheet to flag people who:

- replied to your first message,
- are willing to be in contact more than once, and
- represent a category you want to learn from (e.g. a family with teens, a youth pastor, an accountability pair, a technical volunteer with relevant skills).

Keep the founding cohort small enough that **every person feels walked-with**, not herded. Twenty or thirty is plenty for the first cohort. Quality over quantity.

### How to label high-priority church/family leads

- Church leader of a congregation of meaningful size → `priority = High`.
- Parent who mentions a specific present situation (not a hypothetical) → `priority = High`.
- Anything with the word "urgent", "scared", "lost", "today" in the message → read carefully, default to High unless context says otherwise.
- High-priority leads get a same-week reply. Don't let them sit.

### How to follow up well

- Short, warm, specific. "Hi, just checking in — when we last spoke you mentioned X. How is that landing?"
- Ask one question. Don't list five.
- Pray for them between contacts. It changes how you write.
- If they go quiet for 6 weeks, send one gentle nudge, then mark `Waiting`. Don't chase a third time without a reason.

### How to record notes

- One short line per interaction. Date, what happened, next step.
- Never graphic. Never quote someone's struggle in detail. *"Followed up after first reply, asked about devices, awaiting answer"* is the shape.
- Never use the Sheet to store secrets, passwords, account details, or anything beyond what someone willingly shared in their submission.

### How to avoid overpromising

- Don't claim protection is live.
- Don't claim a launch date you can't keep.
- Don't claim a feature is "coming soon" unless someone on the team is actually building it this quarter.
- If unsure, use the standard line: *"That's something we're researching for a future phase. I'll let you know as soon as we have something honest to share."*

---

## Safeguarding and pastoral escalation

If a submission or follow-up describes any of the following, **escalate the same day** to a designated team lead, and respond with care + signposting (not silence):

- Active self-harm, suicidal ideation, or threats of harm to self or others.
- Disclosure of abuse — past or present, of the writer or someone else, especially a minor.
- A child in present danger.
- A safeguarding concern inside a church or youth setting.

**Strong Tower is not a crisis service, a clinical service, or an emergency line.** Our reply, in these cases, is:

1. Acknowledge what they shared, briefly and warmly.
2. Encourage them to contact a trusted pastor, a qualified counsellor, or local emergency services right away.
3. Where appropriate, name a specific national or regional resource.
4. Offer to remain in light contact, but do not pretend to be the support they need.

If you ever doubt whether to escalate, escalate. Two people deciding together is always safer than one person carrying it alone.

---

## What not to say

- Do not say *"we can fix this"*, *"we'll protect your child"*, or *"we have you covered"*. We are not at that capability yet, and the over-promise will collapse trust later.
- Do not say *"it's not that bad"* or *"just pray more"*. Both are dismissive.
- Do not say *"this is your fault"*. Never.
- Do not say *"don't worry about the cost"*. Donation language is honest: nothing is locked behind payment, but we don't have a payment pathway yet.
- Do not say *"we'll let you know when we launch"* without saying what *we* and *launch* mean. Be specific or be quiet.

## What to say

- *"Thank you for reaching out. That took something."*
- *"I read your message and I want to take it seriously."*
- *"Here's what is true today, and here's what is still being built."*
- *"Is it OK if I check back in two weeks?"*
- *"Would you like me to pray for you this week?"* (Where appropriate; never pushed.)

---

## Privacy and data hygiene

- The Google Sheet is shared with the service account (`strong-tower-sheets@...iam.gserviceaccount.com`) and with **a small named team only**. Do not add new collaborators casually. Audit shared access at least quarterly.
- Never copy-paste private submission content into chats, social media, or screenshots that could leak it.
- Never use someone's submission text in a public talk, newsletter, or testimonial without explicit written permission.
- Never store sensitive personal data (financial details, ID numbers, medical detail, sexual content) in the Sheet. If someone volunteers that, ask if they'd like it removed and keep only what's needed to respond.
- If anyone asks to be removed, remove their row promptly and confirm by email.

---

## Current limitations (as of writing)

- **No email delivery.** All replies go from a team member's own inbox. Once Resend is configured, transactional confirmations can land at submission time.
- **No automated triage.** Every column described in `sheet-columns.md` is filled in by a person.
- **No analytics on response time.** If you want to measure it, the `submittedAt` / `firstResponseSentAt` columns are enough — a simple sheet formula gives you the gap.
- **No queryable submission history beyond the Sheet itself.** Everything is in the Sheet. Don't lose access to it.

When any of the above becomes a real bottleneck, that's the trigger for the next phase of operations work — not before.

---

## Quick links

- Workflow doc *(this file)* → `docs/pilot-operations.md`
- Response templates → [`docs/response-templates.md`](./response-templates.md)
- Recommended Sheet columns → [`docs/sheet-columns.md`](./sheet-columns.md)
- Internal web reference (same workflow, rendered) → `/internal/pilot-workflow` (not linked publicly)
