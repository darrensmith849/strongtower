import type { Metadata } from "next";
import {
  LayoutDashboard,
  Globe,
  ShieldCheck,
  Cpu,
  AlertTriangle,
  Users,
  HeartHandshake,
  Lock,
} from "lucide-react";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Badge } from "@/components/primitives/Badge";
import { PullQuote } from "@/components/marketing/PullQuote";
import { RoadmapSection } from "@/components/marketing/RoadmapSection";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

export const metadata: Metadata = {
  title: "Technical vision",
  description:
    "An honest roadmap for the Strong Tower protection platform: dashboard, DNS and VPN filtering, managed-device profiles, tamper detection, accountability alerts, recovery, and privacy-first reporting.",
};

const layers = [
  {
    icon: LayoutDashboard,
    title: "Website dashboard as control centre",
    body: "The site itself is the long-term control centre — where individuals, families, and church partners configure protection and view tamper-evident events.",
  },
  {
    icon: Globe,
    title: "DNS and router filtering",
    body: "Filtering at the network level, so protection follows the device across Wi-Fi networks and homes, not just inside an app.",
  },
  {
    icon: ShieldCheck,
    title: "Always-on VPN filtering",
    body: "An on-device VPN layer that keeps DNS-level protection active even on cellular data, hotel networks, or unfamiliar connections.",
  },
  {
    icon: Cpu,
    title: "Managed-device profiles",
    body: "Configuration profiles designed to be harder to remove than a normal app, with clear, honest visibility into what is enforced.",
  },
  {
    icon: AlertTriangle,
    title: "Tamper detection",
    body: "When protection is disabled, a profile is removed, or filtering is bypassed, the right people are told — without graphic detail.",
  },
  {
    icon: Users,
    title: "Accountability alerts",
    body: "Consent-based notifications to trusted partners, designed to invite conversation rather than humiliate the person being walked with.",
  },
  {
    icon: HeartHandshake,
    title: "Recovery dashboard",
    body: "A simple place to track rhythms, prayer, Scripture engagement, and conversations with an accountability partner — without surveillance or graphic logging.",
  },
  {
    icon: Lock,
    title: "Privacy-first reporting",
    body: "Reporting is built around signals and consent, not content. We will never log what someone watched.",
  },
];

export default function TechnicalVisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technical vision"
        title="The protection platform we are building."
        lede="An honest map of what Strong Tower is designed to become — layer by layer. Most of this is future, not present. We will not claim otherwise."
      />
      <SectionShell size="md">
        <Prose className="mx-auto">
          <p>
            What follows is a roadmap, not a feature list. Some of these layers
            are in early pilot. Others are still in design. None of them is
            available as a finished product today. The first thing we are
            building is the relationships, the mission, and the public site.
            The technical platform follows.
          </p>
        </Prose>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {layers.map(({ icon: Icon, title, body }) => (
            <Card as="li" key={title} className="flex h-full gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-gold">
                <Icon size={18} aria-hidden />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-display text-lg tracking-tight text-foreground">
                    {title}
                  </h2>
                  <Badge tone="gold">Future</Badge>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/75">
                  {body}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="max-w-3xl">
          <Eyebrow>An honest line</Eyebrow>
        </div>
        <div className="mt-6">
          <PullQuote attribution="A Strong Tower commitment">
            Strong Tower will not pretend that ordinary apps can be impossible
            to bypass. The goal is stronger layered protection: make compromise
            harder, make tampering visible, and bring trusted support into the
            moment of weakness.
          </PullQuote>
        </div>
      </SectionShell>
      <RoadmapSection
        eyebrow="Roadmap"
        title="Where we are on the journey."
        lede="The honest map: what is live, what is being built now, and what is still future research."
      />
      <FoundingPilotCTA />
    </>
  );
}
