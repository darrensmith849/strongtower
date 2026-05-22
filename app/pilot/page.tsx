import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { PilotWaitlistForm } from "@/components/forms/PilotWaitlistForm";
import { WhatHappensNext } from "@/components/marketing/WhatHappensNext";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

export const metadata: Metadata = {
  title: "Join the founding pilot",
  description:
    "Register your interest in the Strong Tower founding pilot — for individuals, parents, church leaders, accountability partners, donors, and technical volunteers.",
};

const whoFor = [
  "Individuals serious about leaving pornography behind.",
  "Parents protecting and discipling their families.",
  "Pastors, youth leaders, and church partners.",
  "Accountability partners who want to do it well.",
  "Donors and founding supporters who want to fund the mission.",
  "Technical volunteers with engineering, security, or product skills.",
];

const meansList = [
  "You are willing to help us understand the real-world needs of people, families, churches, accountability partners, and technical volunteers who want stronger protection and gospel-centred recovery.",
  "We may contact you with light-touch questions, early resources, or invitations to give feedback.",
  "Your details stay private. We never sell or pass them on for marketing.",
];

const doesNotMean = [
  "The protection system is not live yet. The current website is an intake and mission pathway.",
  "Joining is not a commitment to pay anything, ever. Strong Tower is donation-based and protection will not be locked behind payment.",
  "Deeper protection layers will be researched, tested, and built carefully — we will not pretend they exist before they do.",
];

export default function PilotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the founding pilot"
        title="Help us build something better."
        lede="The Strong Tower founding pilot is for people serious about freedom — individuals, parents, churches, accountability partners, donors, and technical volunteers. Tell us who you are and how you would like to be involved."
      />

      <SectionShell size="md">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="space-y-10">
            <div>
              <Eyebrow>Who the founding pilot is for</Eyebrow>
              <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
                {whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <Eyebrow>What joining means</Eyebrow>
                <ul className="mt-4 flex flex-col gap-3 text-[14.5px] leading-relaxed text-foreground/80">
                  {meansList.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </Card>
              <Card>
                <Eyebrow>What joining does not mean</Eyebrow>
                <ul className="mt-4 flex flex-col gap-3 text-[14.5px] leading-relaxed text-foreground/80">
                  {doesNotMean.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <PilotWaitlistForm />
          </div>
        </div>
      </SectionShell>

      <WhatHappensNext
        intro="Honest expectations about what you can expect after submitting."
        steps={[
          "We review pilot interest as it comes in. Nothing is automated; every response is read by a person.",
          "We group responses by individual, parent, church, accountability partner, donor, or technical volunteer so we can be useful to each group.",
          "We use your feedback to shape the next protection layers — what is built, in what order, and how it is tested.",
          "We will not claim protection is live before it is properly tested. If something changes, we will tell you clearly.",
        ]}
      />

      <FoundingPilotCTA />
    </>
  );
}
