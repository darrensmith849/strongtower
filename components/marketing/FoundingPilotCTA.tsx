import { CTAButton } from "@/components/primitives/CTAButton";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionShell } from "@/components/primitives/SectionShell";

type Props = {
  /** Optional override of the section background style. */
  className?: string;
};

/**
 * Shared CTA block for the founding pilot. Reused on the homepage,
 * /pilot, /for-churches, /for-parents, /accountability, /support,
 * and the resources hub. Kept deliberately small and self-contained
 * so it can be dropped into any page without layout changes.
 */
export function FoundingPilotCTA({ className }: Props) {
  return (
    <SectionShell size="md" className={className ?? "border-b border-border"}>
      <div className="relative isolate overflow-hidden rounded-card border border-border-gold bg-elevated/60 p-10 sm:p-14">
        <div className="absolute inset-0 bg-gold-glow opacity-80" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <Eyebrow>The founding pilot</Eyebrow>
            <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              Help build a refuge for digital freedom.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/85">
              Strong Tower is gathering a founding pilot of individuals,
              parents, churches, accountability partners, donors, and
              technical volunteers before deeper protection layers are
              built.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <CTAButton
              href="/pilot"
              size="lg"
              withArrow
              className="w-full justify-center"
            >
              Join the founding pilot
            </CTAButton>
            <CTAButton
              href="/support"
              size="lg"
              variant="secondary"
              className="w-full justify-center"
            >
              Support the mission
            </CTAButton>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
