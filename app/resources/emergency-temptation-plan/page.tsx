import type { Metadata } from "next";
import {
  ResourceShell,
  ResourceSection,
} from "@/components/marketing/ResourceShell";
import { CTAButton } from "@/components/primitives/CTAButton";

export const metadata: Metadata = {
  title: "Emergency temptation plan",
  description:
    "A practical, immediate-response plan for the moment of temptation. Safe, non-graphic, and pastoral.",
};

export default function EmergencyTemptationPlan() {
  return (
    <ResourceShell
      eyebrow="For individuals"
      title="Emergency temptation plan"
      purpose="A short, practical plan for the moment temptation arrives. The aim is not perfection — the aim is to take one good action, then another, until the pressure passes. Read it now, print it, save it where you can find it fast."
      scriptures={[
        { reference: "1 Corinthians 10:13" },
        { reference: "Psalm 50:15" },
        { reference: "Romans 8:1" },
        { reference: "2 Timothy 2:22" },
      ]}
    >
      <ResourceSection title="In the next 60 seconds">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Stop. Stand up. Speak the name of Jesus out loud, even if it
            sounds awkward.
          </li>
          <li>
            Put the device down — physically, not just minimised. In
            another room if you can.
          </li>
          <li>
            Take three slow breaths. In for four, out for six. Repeat once
            more.
          </li>
          <li>
            Pray a one-line prayer: <em>&ldquo;Lord, help me. I belong to
            You.&rdquo;</em>
          </li>
        </ol>
      </ResourceSection>

      <ResourceSection title="In the next 10 minutes">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Message your accountability partner with one short line:
            &ldquo;Pressure&rsquo;s on. Pray for me.&rdquo;
          </li>
          <li>Drink a glass of water. Eat something small. The body matters.</li>
          <li>
            Move — walk, stretch, step outside, change rooms. Change your
            posture and your light.
          </li>
          <li>
            Read one verse out loud. Try{" "}
            <strong>1 Corinthians 10:13</strong>:{" "}
            <em>
              &ldquo;No temptation has overtaken you that is not common to
              man. God is faithful, and he will not let you be tempted
              beyond your ability, but with the temptation he will also
              provide the way of escape, that you may be able to endure
              it.&rdquo;
            </em>
          </li>
        </ol>
      </ResourceSection>

      <ResourceSection title="The first hour">
        <ul className="list-disc space-y-2 pl-5">
          <li>Talk to someone. Even a short voice call breaks the spiral.</li>
          <li>
            Name what is underneath: tired, lonely, angry, restless,
            anxious, bored, ashamed. Temptation almost always sits on top
            of one of those.
          </li>
          <li>
            Address the underneath. Sleep if you are tired. Eat if you are
            empty. Reach out if you are lonely. Apologise if you are
            angry. Confess if you are ashamed.
          </li>
          <li>
            Choose the next small obedience. Not the rest of your life —
            just the next hour.
          </li>
        </ul>
      </ResourceSection>

      <ResourceSection title="If you have already slipped">
        <ul className="list-disc space-y-2 pl-5">
          <li>Stop the spiral. Do not let one moment become a whole evening.</li>
          <li>Confess to the Lord. Briefly. Honestly. He already knows.</li>
          <li>Confess to your accountability partner. Quickly, not in detail.</li>
          <li>
            Read <strong>Romans 8:1</strong>:{" "}
            <em>&ldquo;There is therefore now no condemnation for those
            who are in Christ Jesus.&rdquo;</em>
          </li>
          <li>
            Go to sleep at a normal time. Wake up tomorrow and walk with
            God. Shame thrives in isolation; grace thrives in honesty.
          </li>
        </ul>
      </ResourceSection>

      <ResourceSection title="What this plan is not">
        <p>
          This is not a substitute for pastoral care, counselling, clinical
          help, or — in moments of crisis — emergency services. If you are
          in danger, in despair, or in a pattern that feels compulsive,
          please reach out to a trusted pastor, a qualified counsellor, or
          your local emergency support services. You are loved. You are
          not alone. There is a way through.
        </p>
      </ResourceSection>

      <div className="no-print mt-10 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/accountability" withArrow className="w-full justify-center sm:w-auto">
          Find an accountability partner
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
