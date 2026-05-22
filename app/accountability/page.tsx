import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";

export const metadata: Metadata = {
  title: "Accountability partners",
  description:
    "Healthy accountability is invited, consent-based, non-graphic, and full of grace and truth. Here is how to do it well.",
};

const healthy = [
  "Invited, not imposed",
  "Consent-based and clearly framed",
  "Non-graphic in what is shared",
  "Quick, calm, and judgement-free",
  "Oriented around prayer and the gospel",
];

const unhealthy = [
  "Forced or surveillance-style",
  "Reading off graphic logs of what was viewed",
  "Shame-heavy or punitive tone",
  "Cold silence after a slip",
  "Treating the person as the problem",
];

export default function AccountabilityPage() {
  return (
    <>
      <PageHeader
        eyebrow="For accountability partners"
        title="Walked-with, not watched."
        lede="Accountability done well heals. Done badly, it deepens shame. Here is how to do it well — and how Strong Tower hopes to support you."
      />
      <SectionShell size="md">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Card>
            <Eyebrow>Healthy accountability</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
              {healthy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <Eyebrow>What to avoid</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
              {unhealthy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <Prose className="mx-auto">
          <h2>What good alerts look like</h2>
          <p>
            When Strong Tower&rsquo;s technical layers are live, alerts to
            accountability partners will be designed to be useful without being
            graphic. The goal is to let you know that <em>something has
            happened</em> — for example, that protection was disabled or a
            profile was removed — so you can reach out with care. The goal is
            not to put graphic content in front of you, ever.
          </p>
          <h2>Suggested response language</h2>
          <p>
            When a partner reaches out after a slip, the words you use matter.
            A few you can borrow:
          </p>
          <blockquote>
            &ldquo;Thanks for telling me. I&rsquo;m glad you said something.
            Want to pray together now, or talk first?&rdquo;
          </blockquote>
          <blockquote>
            &ldquo;You are not your worst night. Let&rsquo;s read something
            together and pray.&rdquo;
          </blockquote>
          <blockquote>
            &ldquo;What was happening in the hours before? Tired, lonely,
            angry, restless? Let&rsquo;s look at the pattern, not just the
            moment.&rdquo;
          </blockquote>
          <h2>One last thing</h2>
          <p>
            Being an accountability partner is a ministry. It is also a
            burden. Pace yourself. Pray for the person you are walking with.
            Keep a pastor or trusted brother or sister of your own. You are
            not the saviour. He is.
          </p>
        </Prose>
      </SectionShell>
      <PilotWaitlistCTA />
    </>
  );
}
