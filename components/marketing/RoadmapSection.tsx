import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { cn } from "@/lib/cn";

type Status = "live" | "current" | "future";

type Stage = {
  phase: string;
  title: string;
  body: string;
  status: Status;
};

const stages: Stage[] = [
  {
    phase: "Phase 1",
    title: "Public mission site",
    body: "A clear, honest public home for the mission, the pilot, and gospel-centred recovery resources.",
    status: "live",
  },
  {
    phase: "Phase 2",
    title: "Secure form submission storage",
    body: "Pilot and support forms write each submission to a private spreadsheet so nothing is lost in early days.",
    status: "live",
  },
  {
    phase: "Phase 3",
    title: "Founding pilot and supporter readiness",
    body: "Gather the first individuals, parents, churches, accountability partners, donors, and technical volunteers willing to walk this out with us.",
    status: "current",
  },
  {
    phase: "Phase 4",
    title: "Resource hub and printable guides",
    body: "Practical guides for parent conversations, accountability covenants, emergency temptation plans, and a church pilot one-pager.",
    status: "current",
  },
  {
    phase: "Phase 5",
    title: "Church, family, and accountability pilot workflow",
    body: "Light-touch workflows for partner churches and families joining the pilot. Still consent-based, still non-graphic, still privacy-conscious.",
    status: "future",
  },
  {
    phase: "Phase 6",
    title: "DNS and router protection research",
    body: "Research and test network-level filtering that follows a device across Wi-Fi networks. Honest about what is hard.",
    status: "future",
  },
  {
    phase: "Phase 7",
    title: "Always-on VPN and managed-device pilot",
    body: "Early pilots of always-on filtering and managed-device profiles designed to be much harder to remove than an ordinary app.",
    status: "future",
  },
  {
    phase: "Phase 8",
    title: "Accountability and recovery dashboard",
    body: "A consent-based dashboard for partners and people in recovery — signal- and rhythm-based, never graphic logs.",
    status: "future",
  },
];

const statusStyle: Record<Status, { label: string; chip: string; ring: string }> = {
  live: {
    label: "Live",
    chip: "bg-emerald-400/15 text-emerald-200 border-emerald-400/30",
    ring: "border-emerald-400/30",
  },
  current: {
    label: "In progress",
    chip: "bg-gold/15 text-gold-soft border-gold/40",
    ring: "border-gold/40",
  },
  future: {
    label: "Future",
    chip: "bg-foreground/5 text-foreground/70 border-border",
    ring: "border-border",
  },
};

type Props = {
  /** Optional eyebrow override. */
  eyebrow?: string;
  /** Optional headline override. */
  title?: string;
  /** Optional lede override. */
  lede?: string;
};

export function RoadmapSection({
  eyebrow = "Roadmap",
  title = "Honest about what is built and what is being built.",
  lede = "We will not pretend the protection layers are finished. Here is what is live today, what we are working on now, and what is still to come.",
}: Props) {
  return (
    <SectionShell size="md" className="border-b border-border bg-surface/30">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/85">
          {lede}
        </p>
      </div>
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage) => {
          const s = statusStyle[stage.status];
          const Icon =
            stage.status === "live"
              ? CheckCircle2
              : stage.status === "current"
                ? ArrowRight
                : Clock;
          return (
            <li
              key={stage.phase}
              className={cn(
                "flex h-full flex-col rounded-card border bg-surface/80 p-5",
                "shadow-soft",
                s.ring,
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  {stage.phase}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.14em]",
                    s.chip,
                  )}
                >
                  <Icon size={12} aria-hidden />
                  {s.label}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg tracking-tight text-foreground">
                {stage.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-foreground/75">
                {stage.body}
              </p>
            </li>
          );
        })}
      </ol>
    </SectionShell>
  );
}
