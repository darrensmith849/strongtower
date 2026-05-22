import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { LayeredProtectionSection } from "@/components/marketing/LayeredProtectionSection";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";

export const metadata: Metadata = {
  title: "The Strong Tower approach",
  description:
    "Layered protection: device controls, network filtering, tamper-evident alerts, accountability in the moment, and gospel-centred recovery working together.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Strong Tower approach"
        title="Layered protection, not another app."
        lede="Five layers, each covering the gaps in the others. None of them is impossible to bypass. Together, they are much harder."
      />
      <LayeredProtectionSection />
      <SectionShell size="md">
        <Prose className="mx-auto">
          <h2>Why layers?</h2>
          <p>
            Any single layer can be defeated. A determined person can
            uninstall an app, switch networks, ignore an alert, or hide a
            screen. But when device controls, network filtering,
            tamper-evident alerts, accountability partners, and gospel-centred
            recovery work together — defeating one layer triggers another.
            Compromise becomes harder. Tampering becomes visible. Isolation
            becomes very difficult to sustain.
          </p>
          <h2>What is, and is not, built today</h2>
          <p>
            Today, Strong Tower is a public mission site, a pilot waitlist, a
            support-interest pathway, and a growing set of gospel-centred
            recovery resources. The technical protection layers — managed
            profiles, DNS and VPN filtering, tamper-evident alerts — are in
            design and pilot testing. We will not claim they exist before they
            do.
          </p>
        </Prose>
      </SectionShell>
      <PilotWaitlistCTA />
    </>
  );
}
