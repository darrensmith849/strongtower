import { Smartphone, EyeOff, Power, ArrowRight } from "lucide-react";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";

const points = [
  {
    icon: Smartphone,
    title: "They live on the device",
    body: "An app installed on a phone can be removed, paused, or worked around by the same person who installed it.",
  },
  {
    icon: Power,
    title: "They rely on willpower at the moment of weakness",
    body: "Most blockers ask the struggling person to also be the gatekeeper. That is the moment the gate fails.",
  },
  {
    icon: EyeOff,
    title: "They miss the relational layer",
    body: "Even a strong technical setup does not heal the heart. Without trusted accountability and the gospel, freedom is fragile.",
  },
];

export function WhyBlockersFailSection() {
  return (
    <SectionShell size="md" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <Eyebrow>Why current tools are not enough</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Most blockers behave like apps.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-foreground/80">
            Apps can be closed, removed, bypassed, or ignored. A determined
            moment of weakness defeats a screen-time toggle in seconds. This is
            not a moral failure of the user. It is a design failure of the
            tool.
          </p>
          <a
            href="/why-blockers-fail"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-soft hover:text-gold"
          >
            Read the full explanation
            <ArrowRight size={14} aria-hidden />
          </a>
        </div>
        <ul className="grid gap-4 sm:grid-cols-1">
          {points.map(({ icon: Icon, title, body }) => (
            <Card as="li" key={title} className="flex gap-4">
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-gold">
                <Icon size={18} aria-hidden />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/75">
                  {body}
                </p>
              </div>
            </Card>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
