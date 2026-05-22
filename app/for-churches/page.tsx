import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { CTAButton } from "@/components/primitives/CTAButton";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

export const metadata: Metadata = {
  title: "For churches",
  description:
    "Why churches need practical digital discipleship, what Strong Tower can help with later, and how to register your church for the founding pilot.",
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
    body: "Walk with us through the founding pilot as one of the first partner churches. Limited spots in the first cohort.",
  },
];

const nowList = [
  "Read the resource hub and download the church pilot one-pager to share with your leadership.",
  "Register your church for the founding pilot through the pilot form (choose “church leader”).",
  "Open a quiet conversation with a few men, women, parents, or youth leaders. Ask what they actually need.",
  "Pray for the family of God in this — for honesty, for grace, and for protection that actually holds.",
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
        <Prose className="mx-auto">
          <h2>Why churches need practical digital discipleship</h2>
          <p>
            Pornography is the quiet weight under a great many of the
            conversations pastors are already having — marriages, men&rsquo;s
            ministries, youth, singleness, mental health, even Sunday-morning
            attention spans. Most churches know this. Few have a clear, calm,
            non-shaming pathway for it.
          </p>
          <p>
            Strong Tower is not here to blame the local church. We are here to
            build the layered protection, accountability rhythms, and recovery
            resources that pastors, parents, and partners can actually use.
          </p>
        </Prose>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <div className="max-w-3xl">
          <Eyebrow>How Strong Tower can help churches later</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Built for the rhythms of the local church.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-foreground/85">
            These are the church-facing capabilities being designed and tested
            through the founding pilot. None of them is a finished product
            today — they are the rhythms we want to support well, when the
            time comes.
          </p>
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

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>What your church can do now</Eyebrow>
          <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            Practical steps before deeper protection layers are live.
          </h2>
          <ol className="mt-8 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
            {nowList.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-card border border-border bg-surface/60 p-4"
              >
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-[12px] font-medium text-gold-soft"
                >
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border">
        <Prose className="mx-auto">
          <h2>Safeguarding and privacy</h2>
          <p>
            Anything Strong Tower builds for churches will take safeguarding
            and privacy seriously. We will not push graphic logs into the
            hands of pastors. We will not encourage shame-based reporting. We
            will work with you to make accountability invited, consent-based,
            and healing.
          </p>
          <h2>Register your church&rsquo;s interest</h2>
          <p>
            If you would like your church to be considered for the founding
            pilot, register through the pilot page and choose &ldquo;church
            leader&rdquo; — we will be in touch.
          </p>
        </Prose>
        <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <CTAButton
            href="/pilot"
            withArrow
            className="w-full justify-center sm:w-auto"
          >
            Register church interest
          </CTAButton>
          <CTAButton
            href="/resources/church-pilot-one-pager"
            variant="secondary"
            className="w-full justify-center sm:w-auto"
          >
            Church pilot one-pager
          </CTAButton>
          <CTAButton
            href="/contact"
            variant="ghost"
            className="w-full justify-center sm:w-auto"
          >
            Talk to us first
          </CTAButton>
        </div>
      </SectionShell>

      <FoundingPilotCTA />
    </>
  );
}
