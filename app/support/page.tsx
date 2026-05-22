import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SupportInterestForm } from "@/components/forms/SupportInterestForm";
import { WhatHappensNext } from "@/components/marketing/WhatHappensNext";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

export const metadata: Metadata = {
  title: "Support the mission",
  description:
    "Strong Tower is donation-funded. Protection resources should not be locked behind payment. Register your interest in supporting the mission.",
};

const fundingCategories = [
  {
    title: "Engineering",
    body: "Building protection layers, the pilot workflow, and the dashboard — carefully, openly, and with the people we are building for.",
  },
  {
    title: "Device testing",
    body: "Testing across phones, laptops, routers, and family networks so protection holds in the real world, not just in a demo.",
  },
  {
    title: "Filtering infrastructure research",
    body: "DNS and VPN-level filtering research and pilot infrastructure that follows a device across networks.",
  },
  {
    title: "Pastoral resources",
    body: "Gospel-centred recovery content, accountability covenants, and pastoral one-pagers for partner churches.",
  },
  {
    title: "Privacy and legal readiness",
    body: "Privacy-conscious design, POPIA and GDPR readiness, safeguarding policy, and lawful donation handling.",
  },
  {
    title: "Church and family pilot programmes",
    body: "Supporting the first partner churches and families through the pilot so the next wave is built on what actually works.",
  },
];

const waysToHelpNow = [
  "Register your support interest below so we can contact you when the donation pathway opens.",
  "Join the founding pilot — every individual, parent, and church partner makes the mission stronger.",
  "Share the mission with a pastor, a friend, a small group, or anyone you know who needs this.",
  "Pray for the people behind this mission and the people it will walk with.",
];

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support the mission"
        title="Help build the shield."
        lede="Strong Tower is donation-funded. Protection resources should not be locked behind payment. Your support helps fund engineering, device testing, filtering infrastructure research, pastoral resources, privacy and legal readiness, and church and family pilot programmes."
      />

      <SectionShell size="md">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <Eyebrow>Why donation-based</Eyebrow>
              <p className="mt-5 text-[16px] leading-relaxed text-foreground/85">
                Strong Tower is donation-based because protection and recovery
                should not be locked behind payment. Nothing we build will be
                kept from someone who cannot pay for it.
              </p>
            </div>

            <div>
              <Eyebrow>Where support will go</Eyebrow>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {fundingCategories.map((c) => (
                  <li
                    key={c.title}
                    className="rounded-card border border-border bg-surface/60 p-4"
                  >
                    <p className="font-display text-[15px] tracking-tight text-foreground">
                      {c.title}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground/75">
                      {c.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <Card>
              <Eyebrow>Current support status</Eyebrow>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
                Payment processing is not live yet. We will not ask for card
                details on this site today. For now, register your interest
                and we will contact founding supporters once the donation
                pathway is ready. When donations do open, we will publish a
                clear annual record of where the money has gone.
              </p>
            </Card>

            <div>
              <Eyebrow>Ways to help before payments are live</Eyebrow>
              <ol className="mt-5 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
                {waysToHelpNow.map((w, i) => (
                  <li key={w} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-[12px] font-medium text-gold-soft"
                    >
                      {i + 1}
                    </span>
                    {w}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <Prose>
              <h2 className="!mt-0">Register your support interest</h2>
              <p className="text-muted">
                No card details. No commitment. Just a way to be told first
                when the donation pathway is ready.
              </p>
            </Prose>
            <div className="mt-6">
              <SupportInterestForm />
            </div>
          </div>
        </div>
      </SectionShell>

      <WhatHappensNext
        intro="Honest expectations about what you can expect after registering interest."
        steps={[
          "We are preparing donation pathways carefully — lawful, privacy-conscious, and as low-friction as possible.",
          "Your support interest helps us understand who wants to fund the mission and which categories matter most.",
          "No payment is taken on this site yet. We will contact founding supporters when the donation pathway opens.",
          "When donations begin, we will publish a clear annual record of where the money has gone.",
        ]}
      />

      <FoundingPilotCTA />
    </>
  );
}
