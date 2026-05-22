import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { PullQuote } from "@/components/marketing/PullQuote";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";

export const metadata: Metadata = {
  title: "For individuals",
  description:
    "If you are personally struggling, you are not alone, not beyond hope, and not the project. There is a way forward.",
};

export default function ForIndividualsPage() {
  return (
    <>
      <PageHeader
        eyebrow="For individuals"
        title="You are not the project. You are the person."
        lede="If you are personally struggling with pornography, you are not alone. You are not beyond hope. You are not too far gone. Strong Tower is being built for people like you."
      />
      <SectionShell size="lg">
        <Prose className="mx-auto">
          <p>
            We will not lecture you here. You probably already know more than
            enough about what this has cost. What you may not have is a
            stronger, layered way out — and a community willing to walk it with
            you.
          </p>
          <h2>What we will offer</h2>
          <ul>
            <li>
              <strong>Stronger protection</strong> — when the pilot opens,
              guidance and tools for setting up device controls, network
              filtering, and trusted accountability that does not depend on
              your willpower in the moment of weakness.
            </li>
            <li>
              <strong>Trusted accountability</strong> — language, framing, and
              tools to invite the right people into the journey, in a way that
              is honest without being graphic.
            </li>
            <li>
              <strong>Gospel-centred recovery</strong> — Scripture, prayer,
              and pastoral resources at the centre, because the heart matters
              more than the filter.
            </li>
          </ul>
          <h2>One honest word</h2>
        </Prose>
        <div className="mx-auto mt-8 max-w-2xl">
          <PullQuote attribution="A Strong Tower commitment">
            You are not what you did last night. You are who Christ says you
            are. We will treat you that way, from the first email.
          </PullQuote>
        </div>
      </SectionShell>
      <PilotWaitlistCTA />
    </>
  );
}
