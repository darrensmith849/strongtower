import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { CTAButton } from "@/components/primitives/CTAButton";

export const metadata: Metadata = {
  title: "For churches",
  description:
    "Pastoral support, men's groups, youth leaders, and church-wide pilots. Discipleship that takes screens seriously.",
};

const offerings = [
  {
    title: "Men's groups",
    body: "Frameworks, conversation guides, and accountability covenants designed for small-group rhythms.",
  },
  {
    title: "Youth ministry",
    body: "Age-appropriate teaching, parent partnership, and protection guidance for the young people in your care.",
  },
  {
    title: "Pastoral care",
    body: "Resources for pastors walking with people one-to-one, with emphasis on grace, confession, and confidentiality.",
  },
  {
    title: "Church pilot",
    body: "Walk with us through the pilot programme as one of the first partner churches. Limited spots in the first cohort.",
  },
];

export default function ForChurchesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For churches & ministries"
        title="Practical digital discipleship for the local church."
        lede="Most pastors know this is a battle their people are fighting. Few have the resources to walk it out at scale. Strong Tower is being built to help."
      />
      <SectionShell size="md">
        <div className="max-w-3xl">
          <Eyebrow>How we can serve</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Built for the rhythms of the local church.
          </h2>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {offerings.map((o) => (
            <Card as="li" key={o.title}>
              <h3 className="font-display text-xl tracking-tight text-foreground">
                {o.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                {o.body}
              </p>
            </Card>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <Prose className="mx-auto">
          <h2>Safeguarding and privacy</h2>
          <p>
            Anything Strong Tower builds for churches will take safeguarding
            and privacy seriously. We will not push graphic logs into the hands
            of pastors. We will not encourage shame-based reporting. We will
            work with you to make accountability invited, consent-based, and
            healing.
          </p>
          <h2>Register your church&rsquo;s interest</h2>
          <p>
            If you would like your church to be considered for the pilot,
            register through the pilot page and choose &ldquo;church
            leader&rdquo; — we will be in touch.
          </p>
        </Prose>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <CTAButton href="/pilot" withArrow className="w-full justify-center sm:w-auto">
            Register church interest
          </CTAButton>
          <CTAButton href="/contact" variant="secondary" className="w-full justify-center sm:w-auto">
            Talk to us first
          </CTAButton>
        </div>
      </SectionShell>
    </>
  );
}
