import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { CTAButton } from "@/components/primitives/CTAButton";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

export const metadata: Metadata = {
  title: "For parents",
  description:
    "Protection without panic, conversation before control, and a calm family pilot pathway for the digital lives of your children.",
};

const principles = [
  {
    title: "Protection without panic",
    body: "Set up layered protection across the home network and individual devices. Calm, layered, default-on — not fear-driven.",
  },
  {
    title: "Conversation over surveillance",
    body: "Talk early, talk often, talk gently. Tools support conversation — they cannot replace it.",
  },
  {
    title: "Age-appropriate discipleship",
    body: "Help your children see their identity, body, and relationships through the eyes of Scripture, not the algorithm.",
  },
  {
    title: "Grace when something slips through",
    body: "Filters fail. Curiosity is real. How you respond in those moments shapes whether they will come to you again.",
  },
];

const blockerLimits = [
  "An app icon can be deleted, the app can be force-closed, or the device can be reset.",
  "A determined moment of curiosity defeats a single screen-time toggle in seconds.",
  "Many blockers see only the browser. They miss in-app, embedded, and cellular-data routes entirely.",
  "On a new Wi-Fi network or a friend’s phone, the protection often is not there at all.",
];

export default function ForParentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For parents & families"
        title="Discipleship that takes the digital world seriously."
        lede="Your job is not to install the perfect filter. Your job is to walk with your children through a world that did not exist a generation ago. Strong Tower wants to help."
      />

      <SectionShell size="md">
        <div className="max-w-3xl">
          <Eyebrow>Four anchors for the parenting journey</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Calm, layered, gospel-rooted.
          </h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {principles.map((p) => (
            <Card as="li" key={p.title}>
              <h3 className="font-display text-xl tracking-tight text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                {p.body}
              </p>
            </Card>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Why ordinary app blockers are not enough</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Honest about what a single app can and cannot do.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-foreground/85">
            Ordinary blockers behave like apps. That makes them easier to
            remove or work around than most parents realise. None of this is
            said to scare you — only to set realistic expectations so what
            you build at home is actually load-bearing.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
            {blockerLimits.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-card border border-border bg-surface/60 p-4"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <Prose className="mx-auto">
          <h2>What we are building for families</h2>
          <p>
            Strong Tower&rsquo;s future protection layers are being designed
            with families in mind: home-network filtering that follows
            children from device to device, managed profiles that resist
            casual removal, and tamper-evident alerts that bring parents
            into the picture without humiliating the child.
          </p>
          <p>
            None of those layers is live yet. The family pilot is how we
            learn what actually helps before we build it.
          </p>
          <h2>Family pilot interest</h2>
          <p>
            Join the founding pilot if you want to be one of the first
            families we walk alongside. Choose &ldquo;parent&rdquo; on the
            pilot form — we will be in touch.
          </p>
        </Prose>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <CTAButton
            href="/pilot"
            withArrow
            className="w-full justify-center sm:w-auto"
          >
            Register family pilot interest
          </CTAButton>
          <CTAButton
            href="/resources/parent-conversation-guide"
            variant="secondary"
            className="w-full justify-center sm:w-auto"
          >
            Parent conversation guide
          </CTAButton>
        </div>
      </SectionShell>

      <FoundingPilotCTA />
    </>
  );
}
