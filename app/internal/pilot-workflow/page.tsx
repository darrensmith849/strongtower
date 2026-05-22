import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ShieldAlert } from "lucide-react";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";

/**
 * Internal-only workflow reference. Static guidance for the Strong Tower
 * team. NOT linked from public nav or footer. NOT in sitemap. Explicitly
 * noindex/nofollow via metadata, and disallowed in robots.ts.
 *
 * This page must NEVER:
 *  - fetch or render private submission data
 *  - reach out to the Google Sheet
 *  - expose secrets, env vars, or admin functionality
 *
 * It is a convenient web rendering of the markdown docs in /docs.
 * The markdown files in the repo are the source of truth.
 */
export const metadata: Metadata = {
  title: "Internal — Pilot operations workflow",
  description: "Internal workflow reference. Not for public sharing.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

const audiences = [
  {
    name: "Individual pilot",
    pace: "Reply within 7 days",
    template: "Individual pilot signup",
    posture:
      "Warm, non-shaming, gospel-centred. Point them to the emergency temptation plan and accountability page.",
  },
  {
    name: "Parent / family pilot",
    pace: "Reply within 7 days",
    template: "Parent / family pilot signup",
    posture:
      "Practical, not fear-based. Treat the parent as the loving expert. Point to the parent conversation guide.",
  },
  {
    name: "Church / ministry pilot",
    pace: "Reply within 3 working days",
    template: "Church / ministry pilot signup",
    posture:
      "Pastoral peer-to-peer. No sales language. Attach the church pilot one-pager.",
  },
  {
    name: "Accountability partner",
    pace: "Reply within 7 days",
    template: "Accountability partner interest",
    posture:
      "Equip them. Point to /accountability and the covenant template. Ask if one-to-one or small group.",
  },
  {
    name: "Donor / support interest",
    pace: "Reply within 5 working days",
    template: "Donor / support interest",
    posture:
      "Honest. No payment pathway live. Don't manufacture urgency. Single gentle notice when donations open.",
  },
  {
    name: "Technical volunteer",
    pace: "Reply within 7 days",
    template: "Technical volunteer interest",
    posture:
      "Engineer-to-engineer. Be honest about what's built. Ask one concrete question about their area.",
  },
  {
    name: "General contact",
    pace: "Reply within 5 working days",
    template: "General contact response",
    posture:
      "Plain, gracious. Press, partners, and private enquirers get equal care. Tune to the subject field.",
  },
];

const guardrails = [
  "Do not shame people. Ever.",
  "Do not request graphic detail.",
  "Do not promise protection is live.",
  "Do not present Strong Tower as clinical care, medical care, or a crisis service.",
  "Do not store unnecessary sensitive detail in the Sheet.",
  "Do not share submissions outside the trusted team.",
  "Handle minors, families, and churches with extra care.",
];

const weeklyRhythm = [
  "Open the Sheet. Sort each tab by submittedAt descending.",
  "Filter for status = New. Read each row.",
  "Set category and priority. Pick a response template and adapt it.",
  "Reply, then fill firstResponseSentAt, status = Replied, assignedTo, and a one-line note.",
  "Set followUpDate (typically +14 days).",
  "Filter for followUpDate <= today. Send a short, warm check-in.",
  "Filter stale Waiting / Pilot candidate older than 6 weeks. Bring back, move to Not now, or Archive.",
];

const escalation = [
  "Active self-harm, suicidal ideation, or threats of harm.",
  "Disclosure of abuse — past or present — especially involving a minor.",
  "A child in present danger.",
  "A safeguarding concern in a church or youth setting.",
];

export default function InternalPilotWorkflowPage() {
  return (
    <>
      <SectionShell size="sm">
        <div
          role="alert"
          className="rounded-card border border-amber-400/40 bg-amber-400/[0.07] p-6"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle
              className="mt-0.5 h-6 w-6 shrink-0 text-amber-300"
              aria-hidden
            />
            <div>
              <h2 className="font-display text-lg tracking-tight text-foreground">
                Internal workflow reference. Not linked publicly.
              </h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/85">
                Do not store secrets, private applicant data, or sensitive
                personal detail on this page. This is a static workflow
                summary — there is no admin functionality, no Google Sheet
                fetch, and no submission rendering. The page is excluded from
                the sitemap, set to{" "}
                <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[12.5px]">
                  noindex
                </code>
                , and disallowed in{" "}
                <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[12.5px]">
                  robots.txt
                </code>
                . Treat the markdown docs in{" "}
                <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[12.5px]">
                  /docs
                </code>{" "}
                as the source of truth.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell size="md">
        <div className="max-w-3xl">
          <Eyebrow>Internal — Pilot operations</Eyebrow>
          <h1 className="mt-5 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            Pilot operations workflow.
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-foreground/85">
            A lightweight, repeatable rhythm for triaging and responding to
            pilot, support, church, family, accountability, donor, and
            technical-volunteer submissions — without overpromising, without
            shaming, and without claiming protection is live.
          </p>
        </div>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="max-w-3xl">
          <Eyebrow>Weekly review rhythm</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Once a week, end-to-end. 20–40 minutes.
          </h2>
        </div>
        <ol className="mt-8 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
          {weeklyRhythm.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-4 rounded-card border border-border bg-surface/60 p-4"
            >
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-[12px] font-medium text-gold-soft"
              >
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <div className="max-w-3xl">
          <Eyebrow>Per-audience workflow</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Same Sheet + template approach. Different pace and posture.
          </h2>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {audiences.map((a) => (
            <Card as="li" key={a.name}>
              <div className="font-display text-lg tracking-tight text-foreground">
                {a.name}
              </div>
              <div className="mt-3 text-[13.5px] uppercase tracking-[0.16em] text-gold/90">
                {a.pace}
              </div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/80">
                {a.posture}
              </p>
              <div className="mt-4 text-xs text-muted">
                Template:{" "}
                <span className="text-foreground/85">{a.template}</span>{" "}
                — see{" "}
                <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[12px]">
                  docs/response-templates.md
                </code>
              </div>
            </Card>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Safety guardrails</Eyebrow>
            <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground">
              What we never do.
            </h2>
            <ul className="mt-6 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
              {guardrails.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted"
                  />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Same-day pastoral escalation</Eyebrow>
            <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground">
              If a submission describes any of these:
            </h2>
            <ul className="mt-6 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
              {escalation.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3 rounded-card border border-amber-400/30 bg-amber-400/[0.04] p-4"
                >
                  <ShieldAlert
                    size={16}
                    aria-hidden
                    className="mt-0.5 shrink-0 text-amber-300"
                  />
                  {e}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-relaxed text-muted">
              Strong Tower is not a crisis service. Acknowledge, signpost to
              a trusted pastor / qualified counsellor / emergency services,
              and escalate to a designated team lead the same day.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <div className="mx-auto max-w-3xl text-[15px] leading-relaxed text-foreground/85">
          <Eyebrow>Source of truth</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground">
            The markdown docs in <code>/docs</code>.
          </h2>
          <p className="mt-4">
            This page is a convenient web rendering of the same guidance.
            For the full text — including recommended Google Sheet columns,
            all seven response templates, common building blocks, and the
            privacy / data-hygiene notes — read the markdown files in the
            repo:
          </p>
          <ul className="mt-5 flex flex-col gap-2">
            <li>
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[13px]">
                docs/pilot-operations.md
              </code>{" "}
              — the workflow doc (this page in long form)
            </li>
            <li>
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[13px]">
                docs/response-templates.md
              </code>{" "}
              — the seven response templates
            </li>
            <li>
              <code className="rounded bg-foreground/10 px-1.5 py-0.5 text-[13px]">
                docs/sheet-columns.md
              </code>{" "}
              — recommended manual triage columns
            </li>
          </ul>
          <p className="mt-6 text-muted">
            Public-facing pilot pathway:{" "}
            <Link
              href="/pilot"
              className="text-gold-soft underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              /pilot
            </Link>
            . Public church one-pager:{" "}
            <Link
              href="/resources/church-pilot-one-pager"
              className="text-gold-soft underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              /resources/church-pilot-one-pager
            </Link>
            .
          </p>
        </div>
      </SectionShell>
    </>
  );
}
