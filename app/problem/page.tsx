import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { PullQuote } from "@/components/marketing/PullQuote";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";

export const metadata: Metadata = {
  title: "The problem",
  description:
    "Pornography is doing quiet damage to faith, marriages, families, and a generation. Most people are fighting alone with tools that were never built to win.",
};

export default function ProblemPage() {
  return (
    <>
      <PageHeader
        eyebrow="The problem"
        title="Quiet damage, done in plain sight."
        lede="The problem is not weakness. The problem is that the systems most people rely on were never designed for what they are up against."
      />
      <SectionShell size="lg">
        <Prose className="mx-auto">
          <p>
            For many believers, pornography is the unspoken battle — fought
            late at night, alone, on a device that goes everywhere. The
            personal cost is real: a quietly hardening conscience, a slow
            erosion of intimacy, prayer that becomes harder to begin, a sense
            of self that feels increasingly fractured.
          </p>
          <p>
            The relational cost is real too. Trust in marriages takes years to
            build and minutes to break. Children watch the adults around them.
            Friendships grow hollow when honesty becomes too costly.
          </p>
          <p>
            And the cultural cost is not abstract. A generation is being shaped
            by content that was never meant to teach them anything about love,
            intimacy, or the dignity of another human being made in the image
            of God.
          </p>
          <h2>Why is this so hard to fight?</h2>
          <p>
            Because the same device that brings sermons, Scripture, family
            photos, and work is also the front door to a near-infinite supply
            of the very thing someone is trying to leave behind. Because the
            algorithms on the other side of that door are very good at their
            job. Because most blockers and filters are designed to be
            removable by the same person who installs them.
          </p>
          <p>
            We are not naïve about how serious this is — and we will not be
            sensational about it either. We will not make exaggerated medical
            claims. We will not use graphic detail. We will tell the truth, and
            then we will get to work.
          </p>
          <h2>The honest line</h2>
        </Prose>
        <div className="mx-auto mt-8 max-w-2xl">
          <PullQuote>
            Strong Tower does not pretend that ordinary apps can be impossible
            to bypass. The goal is stronger layered protection: make compromise
            harder, make tampering visible, and bring trusted support into the
            moment of weakness.
          </PullQuote>
        </div>
      </SectionShell>
      <PilotWaitlistCTA />
    </>
  );
}
