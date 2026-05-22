import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { CTAButton } from "@/components/primitives/CTAButton";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

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

const framework = [
  {
    word: "Invited",
    body: "The person asked you in, and they can pause or end the arrangement at any time.",
  },
  {
    word: "Honest",
    body: "Tell the truth quickly and gently. Honesty is the door grace walks through.",
  },
  {
    word: "Non-graphic",
    body: "Talk about patterns, triggers, and rhythms. Never ask for or describe the content itself.",
  },
  {
    word: "Quick",
    body: "Respond fast and warmly. A short, kind reply now beats a long, polished one tomorrow.",
  },
  {
    word: "Prayerful",
    body: "Pray together — short, real, present-tense. Bring God into the room before you bring strategy.",
  },
  {
    word: "Practical",
    body: "Help name one next step. A walk, a phone call, a verse, a sleep, a confession.",
  },
  {
    word: "Consistent",
    body: "Show up week after week, not only after a slip. Most of the work is the boring middle.",
  },
];

const responses = [
  {
    when: "When someone asks for help before failing",
    say: "“Thanks for messaging. I’m glad you reached out before. Want to pray for two minutes together, then talk about what would make the next hour easier?”",
  },
  {
    when: "When someone admits they struggled",
    say: "“You are not your worst night. Thank you for telling me. Want to read something together, pray, and then talk about what was going on in the hours before?”",
  },
  {
    when: "When someone disables protection",
    say: "“I noticed protection came off. I’m not angry — I just want to check in. What was happening? Let’s talk before we turn anything back on.”",
  },
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
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
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
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>A healthy accountability framework</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Seven words to keep on the table.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-foreground/85">
            Read it before a conversation. Come back to it after a hard one.
            The goal is not perfect performance — the goal is faithful
            presence over time.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {framework.map((f) => (
            <li
              key={f.word}
              className="rounded-card border border-border bg-surface/80 p-5"
            >
              <div className="font-display text-lg tracking-tight text-gold-soft">
                {f.word}
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground/80">
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Suggested response language</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Three moments you will face. Three honest things you can say.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-foreground/85">
            Adapt the words. Keep the posture: grace, truth, prayer, and a
            next step that is small enough to do today.
          </p>
        </div>
        <ul className="mx-auto mt-10 flex max-w-3xl flex-col gap-5">
          {responses.map((r) => (
            <li
              key={r.when}
              className="rounded-card border border-border-gold bg-gold/[0.04] p-6"
            >
              <div className="text-xs uppercase tracking-[0.18em] text-gold/90">
                {r.when}
              </div>
              <p className="mt-3 text-[15.5px] leading-relaxed text-foreground/90">
                {r.say}
              </p>
            </li>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <Prose className="mx-auto">
          <h2>What good alerts look like</h2>
          <p>
            When Strong Tower&rsquo;s technical layers are live, alerts to
            accountability partners will be designed to be useful without
            being graphic. The goal is to let you know that{" "}
            <em>something has happened</em> — for example, that protection
            was disabled or a profile was removed — so you can reach out
            with care. The goal is not to put graphic content in front of
            you, ever.
          </p>
          <h2>One last thing</h2>
          <p>
            Being an accountability partner is a ministry. It is also a
            burden. Pace yourself. Pray for the person you are walking
            with. Keep a pastor or trusted brother or sister of your own.
            You are not the saviour. He is.
          </p>
        </Prose>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <CTAButton
            href="/resources/accountability-covenant"
            withArrow
            className="w-full justify-center sm:w-auto"
          >
            Accountability covenant
          </CTAButton>
          <CTAButton
            href="/pilot"
            variant="secondary"
            className="w-full justify-center sm:w-auto"
          >
            Join the founding pilot
          </CTAButton>
        </div>
      </SectionShell>

      <FoundingPilotCTA />
    </>
  );
}
