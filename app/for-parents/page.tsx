import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";

export const metadata: Metadata = {
  title: "For parents",
  description:
    "Practical protection, honest conversation, and discipleship for the digital lives of your children and your home.",
};

const principles = [
  {
    title: "Protection without panic",
    body: "Set up layered protection across the home network and individual devices. Calm, layered, default-on.",
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

export default function ForParentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For parents"
        title="Discipleship that takes the digital world seriously."
        lede="Your job is not to install the perfect filter. Your job is to walk with your children through a world that did not exist a generation ago. Strong Tower wants to help."
      />
      <SectionShell size="md">
        <div className="max-w-3xl">
          <Eyebrow>Principles</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Four anchors for the parenting journey.
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

      <SectionShell size="md" className="border-t border-border">
        <Prose className="mx-auto">
          <h2>What we are building for families</h2>
          <p>
            Strong Tower&rsquo;s future protection layers are being designed
            with families in mind: home-network filtering that follows children
            from device to device, managed profiles that resist casual removal,
            and tamper-evident alerts that bring parents into the picture
            without humiliating the child.
          </p>
          <p>
            Join the pilot if you want to be one of the first families we walk
            alongside.
          </p>
        </Prose>
      </SectionShell>
      <PilotWaitlistCTA />
    </>
  );
}
