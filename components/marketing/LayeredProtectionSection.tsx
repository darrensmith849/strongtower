import {
  Cpu,
  Globe,
  ShieldAlert,
  Users,
  HeartHandshake,
} from "lucide-react";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { FeatureCard } from "./FeatureCard";

const layers = [
  {
    icon: Cpu,
    title: "Device protection",
    body: "Managed profiles designed to resist casual removal — not impossible to bypass, but much harder.",
  },
  {
    icon: Globe,
    title: "Network filtering",
    body: "DNS and VPN-level blocking that follows the device, so protection does not vanish on a new Wi-Fi network.",
  },
  {
    icon: ShieldAlert,
    title: "Tamper-evident alerts",
    body: "If something changes — protection disabled, profile removed, app sideloaded — the right people know.",
  },
  {
    icon: Users,
    title: "Accountability in the moment",
    body: "Trusted partners brought in early, not after the fact. Consent-based, never graphic, never shaming.",
  },
  {
    icon: HeartHandshake,
    title: "Gospel-centred recovery",
    body: "Scripture, prayer, and pastoral resources at the centre — not bolted on as an afterthought.",
  },
];

export function LayeredProtectionSection() {
  return (
    <SectionShell size="md" className="border-b border-border bg-surface/30">
      <div className="max-w-3xl">
        <Eyebrow>The Strong Tower approach</Eyebrow>
        <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          Layered protection, not another app.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/85">
          {`Strong Tower is being built as a layered protection environment —
          device controls, network filtering, accountability alerts, and
          gospel-centred recovery working together. Not impossible to bypass.
          Just much harder, much more visible, and much less lonely.`}
        </p>
      </div>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {layers.map((layer) => (
          <li key={layer.title} className="contents">
            <FeatureCard icon={layer.icon} title={layer.title} body={layer.body} />
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-card border border-border-gold bg-gold/[0.04] p-6 sm:p-8">
        <p className="text-[15.5px] leading-relaxed text-foreground/85">
          <span className="font-medium text-gold-soft">An honest note.</span>{" "}
          Strong Tower does not pretend that ordinary apps can be impossible to
          bypass. The goal is stronger layered protection: make compromise
          harder, make tampering visible, and bring trusted support into the
          moment of weakness.
        </p>
      </div>
    </SectionShell>
  );
}
