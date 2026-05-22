# Strong Tower — Recommended Google Sheet Columns

**Audience:** the team setting up the triage layer in the Strong Tower Google Sheet.

**Principle:** the columns the API writes are fixed. Manual triage columns go to the **right** of the API-written columns. Do not insert, rename, or reorder API columns — that breaks form persistence.

The API writes columns in a strict order set in `lib/google-sheets.ts` and the three route handlers. If you want to confirm them yourself, look at `app/api/{waitlist,support-interest,contact}/route.ts` — every value is positional.

---

## Pilot Waitlist tab

### API-written columns (do not change)

Left-to-right, in the order the API appends:

| # | Column | Source |
| --- | --- | --- |
| A | `submittedAt` | API: ISO 8601 timestamp |
| B | `firstName` | Form field |
| C | `email` | Form field |
| D | `country` | Form field |
| E | `joiningAs` | Form field (`individual` / `parent` / `church leader` / `accountability partner` / `donor` / `technical volunteer`) |
| F | `devices` | Form field (comma-joined list) |
| G | `interestLevel` | Form field |
| H | `message` | Form field |
| I | `source` | API: `<host>/pilot` |
| J | `userAgent` | API: truncated to 200 chars |
| K | `ipHash` | API: salted SHA-256 hash of the client IP, first 16 hex chars |

### Recommended manual columns (add to the right)

Add these as columns **L onward**. Pick the column letters that suit your sheet — they don't need to start at exactly L, just be to the right of K.

| Column | Type | Purpose | Suggested values |
| --- | --- | --- | --- |
| `status` | Dropdown (Data → Data validation → List from a range) | Triage state | **New**, **Reviewed**, **Needs reply**, **Replied**, **Waiting**, **Pilot candidate**, **Not now**, **Archived** |
| `priority` | Dropdown | Urgency | **High**, **Medium**, **Low** |
| `category` | Dropdown | Audience bucket | **Individual**, **Parent**, **Church**, **Accountability Partner**, **Donor**, **Technical Volunteer** |
| `assignedTo` | Free text | Name of the team member handling the row | A short initial or first name |
| `firstResponseSentAt` | Date/time | When the first reply went out | ISO date or sheet-native date |
| `followUpDate` | Date | When to check back in | Sheet-native date so you can sort/filter |
| `notes` | Free text | One short line per interaction | Keep non-graphic and short |

Set the `status` and `category` default values manually when triaging — the API will not touch them.

---

## Support Interest tab

### API-written columns (do not change)

| # | Column | Source |
| --- | --- | --- |
| A | `submittedAt` | API |
| B | `firstName` | Form |
| C | `email` | Form |
| D | `country` | Form |
| E | `interestType` | Form (`one-time gift` / `monthly supporter` / `sponsor a protected device` / `sponsor a church pilot` / `volunteer technical skills` / `church or ministry partner`) |
| F | `message` | Form |
| G | `source` | API |
| H | `userAgent` | API |
| I | `ipHash` | API |

### Recommended manual columns

Add these as columns **J onward**.

| Column | Type | Purpose | Suggested values |
| --- | --- | --- | --- |
| `status` | Dropdown | Triage state | **New**, **Reviewed**, **Needs reply**, **Replied**, **Waiting**, **Founding supporter**, **Not now**, **Archived** |
| `supportType` | Dropdown | Refined category for internal use (separate from the public `interestType`) | **Monthly supporter**, **One-time gift**, **Device sponsor**, **Church-pilot sponsor**, **Skills volunteer**, **Ministry partner** |
| `priority` | Dropdown | Urgency | **High**, **Medium**, **Low** |
| `assignedTo` | Free text | Team owner |
| `firstResponseSentAt` | Date/time | When the first reply went out |
| `followUpDate` | Date | When to check back in |
| `notes` | Free text | One short line per interaction |

The `Founding supporter` status is the equivalent of `Pilot candidate` on the Pilot Waitlist tab: people who replied, are willing to remain in contact, and have agreed in principle to be told when the donation pathway opens.

---

## Contact Messages tab

### API-written columns (do not change)

| # | Column | Source |
| --- | --- | --- |
| A | `submittedAt` | API |
| B | `name` | Form |
| C | `email` | Form |
| D | `subject` | Form (`general` / `partnership` / `press` / `pastoral` / `technical`) |
| E | `message` | Form |
| F | `source` | API |
| G | `userAgent` | API |
| H | `ipHash` | API |

### Recommended manual columns

Add these as columns **I onward**.

| Column | Type | Purpose | Suggested values |
| --- | --- | --- | --- |
| `status` | Dropdown | Triage state | **New**, **Reviewed**, **Needs reply**, **Replied**, **Waiting**, **Resolved**, **Not now**, **Archived** |
| `enquiryType` | Dropdown | Refined internal category | **General**, **Partnership**, **Press**, **Pastoral**, **Technical**, **Safeguarding** |
| `priority` | Dropdown | Urgency | **High**, **Medium**, **Low** |
| `assignedTo` | Free text | Team owner |
| `firstResponseSentAt` | Date/time | When the first reply went out |
| `followUpDate` | Date | When to check back in |
| `notes` | Free text | One short line per interaction |

`enquiryType = Safeguarding` is reserved for messages that describe a present safeguarding concern. See the *Safeguarding and pastoral escalation* section in [`pilot-operations.md`](./pilot-operations.md) — these get same-day attention.

---

## Practical setup tips

1. **Freeze the header row** in each tab (View → Freeze → 1 row).
2. **Add data validation dropdowns** for the categorical columns (`status`, `priority`, `category`, `supportType`, `enquiryType`). Without dropdowns, free text drifts (Pilot Candidate vs Pilot candidate vs candidate) and filters stop working.
3. **Set conditional formatting** if it helps — e.g. `status = "New"` light gold background. Keep it calm; don't make the sheet feel alarming.
4. **Use a filter view per category** so the church-lead reviewer and the technical-volunteer reviewer can each work without disturbing each other.
5. **Do not delete API-written columns**, even if they look empty. They are positional. Leaving a blank cell is fine — deleting the column shifts everything one position to the left and breaks the next write.

---

## What not to add to the sheet

- No payment details. Ever.
- No card numbers, bank account numbers, government IDs, passport numbers, or medical records.
- No screenshots or copies of graphic content.
- No passwords or API tokens.
- No private third-party data (e.g. a child's name and school).
- If someone volunteers any of the above in a message, ask if they'd like it removed and trim the row down to what's needed to respond.

---

## Quick links

- Workflow → [`pilot-operations.md`](./pilot-operations.md)
- Response templates → [`response-templates.md`](./response-templates.md)
- Internal web reference → `/internal/pilot-workflow` (not linked publicly)
