import type { Metadata } from "next";
import {
  ResourceShell,
  ResourceSection,
} from "@/components/marketing/ResourceShell";
import { CTAButton } from "@/components/primitives/CTAButton";

export const metadata: Metadata = {
  title: "Accountability covenant",
  description:
    "A short accountability covenant template between two trusted partners. Consent-based, non-graphic, grace-and-truth centred.",
};

export default function AccountabilityCovenant() {
  return (
    <ResourceShell
      eyebrow="For accountability partners"
      title="Accountability covenant"
      purpose="A short, signable covenant for two trusted partners. Read it together. Adapt the language to your friendship. Keep it on hand so the agreement is clear when a hard week comes."
      scriptures={[
        { reference: "James 5:16" },
        { reference: "Galatians 6:1–2" },
        { reference: "Proverbs 27:17" },
        { reference: "Hebrews 10:24–25" },
      ]}
    >
      <ResourceSection title="Our shared posture">
        <ul className="list-disc space-y-2 pl-5">
          <li>This is invited, not imposed. Either of us can pause it.</li>
          <li>This is non-graphic. We talk about patterns, not content.</li>
          <li>This is gospel-centred. We pray, we read, we trust Christ.</li>
          <li>This is private. What is said here stays between us, unless someone is in danger.</li>
          <li>This is consistent. We meet whether or not anyone failed this week.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="Our weekly rhythm">
        <p>We agree to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Meet (in person, call, or video) for roughly <em>____</em> minutes, <em>____</em> times per week / month.</li>
          <li>Begin with prayer. End with prayer.</li>
          <li>
            Ask each other a small, honest set of questions — for example:
            <ul className="mt-2 list-[circle] space-y-1 pl-5">
              <li>How has your week been with the Lord?</li>
              <li>What has felt hard or heavy?</li>
              <li>Has anything tested your integrity online?</li>
              <li>Where do you need help in the coming week?</li>
              <li>How can I pray for you?</li>
            </ul>
          </li>
          <li>Trust the answers without interrogation.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="If one of us slips">
        <ul className="list-disc space-y-2 pl-5">
          <li>Tell each other quickly. A short message is enough.</li>
          <li>Lead with grace. Skip the interrogation. We respond with prayer and presence first.</li>
          <li>Talk about triggers, tired, lonely, angry, restless — not graphic detail.</li>
          <li>Choose one small next step together: a verse, a sleep, a phone call, a confession to a pastor or spouse where appropriate.</li>
          <li>We do not weaponise what is shared here. Not in conflict. Not in conversation. Not later.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="What we will not do">
        <ul className="list-disc space-y-2 pl-5">
          <li>We will not ask for graphic detail.</li>
          <li>We will not lecture, shame, or compare.</li>
          <li>We will not pretend we are each other&rsquo;s saviour.</li>
          <li>We will not let this replace pastoral care, counselling, or — where needed — clinical help.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="Care for the carer">
        <p>
          Walking with someone is heavy work. Each of us agrees to keep our
          own pastor, mentor, or trusted brother/sister, and to bring our
          own struggles into our own places of support too.
        </p>
      </ResourceSection>

      <ResourceSection title="Sign and date">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-card border border-border p-5 print-card">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Partner one
            </p>
            <p className="mt-6">Name: ____________________________</p>
            <p className="mt-3">Signed: __________________________</p>
            <p className="mt-3">Date: ____________________________</p>
          </div>
          <div className="rounded-card border border-border p-5 print-card">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Partner two
            </p>
            <p className="mt-6">Name: ____________________________</p>
            <p className="mt-3">Signed: __________________________</p>
            <p className="mt-3">Date: ____________________________</p>
          </div>
        </div>
      </ResourceSection>

      <div className="no-print mt-10 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/accountability" withArrow className="w-full justify-center sm:w-auto">
          Read accountability guidance
        </CTAButton>
        <CTAButton
          href="/pilot"
          variant="secondary"
          className="w-full justify-center sm:w-auto"
        >
          Join the founding pilot
        </CTAButton>
      </div>
    </ResourceShell>
  );
}
