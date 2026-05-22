import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";

export const metadata: Metadata = {
  title: "Why blockers fail",
  description:
    "Most blockers behave like apps. Apps can be closed, removed, bypassed, or ignored. Strong Tower is being built differently.",
};

export default function WhyBlockersFailPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why current tools are not enough"
        title="Most blockers behave like apps."
        lede="Apps can be closed, removed, bypassed, or ignored. That is not a moral failure of the user — it is a design failure of the tool."
      />
      <SectionShell size="lg">
        <Prose className="mx-auto">
          <p>
            We owe people honesty about why the tools they have already tried
            keep letting them down. We are not going to publish a how-to guide
            for bypassing blockers — but we will name the categories of
            failure, because naming them makes a stronger solution possible.
          </p>
          <h2>1. The tool lives on the device that is being protected</h2>
          <p>
            If the same hands that need protection can also uninstall,
            disable, or reconfigure the protection, the system is fundamentally
            self-defeating. A determined moment of weakness will defeat a
            screen-time toggle in seconds.
          </p>
          <h2>2. The struggling person is also the gatekeeper</h2>
          <p>
            Most blockers rely on the person who is trying to leave to also be
            the person guarding the gate. That is exactly the moment the gate
            fails. Real protection brings other trusted people into the system
            with consent.
          </p>
          <h2>3. The accountability layer is missing or shame-based</h2>
          <p>
            Some tools forward graphic logs of what someone watched. This is
            not accountability — it is surveillance, and it tends to deepen
            shame rather than heal it. Honest accountability is consent-based,
            non-graphic, and oriented towards walking with someone, not
            cataloguing them.
          </p>
          <h2>4. There is no recovery layer at all</h2>
          <p>
            A blocked page does not heal a heart. Without prayer, Scripture,
            confession, and community, even the best technical protection
            leaves the underlying weight untouched.
          </p>
          <h2>5. The network layer is ignored</h2>
          <p>
            Blocking that lives only on the device disappears the moment the
            device joins a new network, switches off Wi-Fi, or finds an
            alternative path. Filtering needs to live at the network and DNS
            level too — independent of any single app.
          </p>
          <h2>What stronger looks like</h2>
          <p>
            Stronger means layered. Device controls, network filtering,
            tamper-evident alerts, consent-based accountability, and
            gospel-centred recovery — each layer covering the gaps in the
            others.
          </p>
          <p>
            Stronger does not mean impossible. We will never claim that. We
            will say honestly: harder to bypass, more visible when tampered
            with, and far less lonely.
          </p>
        </Prose>
      </SectionShell>
      <PilotWaitlistCTA />
    </>
  );
}
