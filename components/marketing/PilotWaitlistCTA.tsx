import { CTAButton } from "@/components/primitives/CTAButton";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionShell } from "@/components/primitives/SectionShell";

export function PilotWaitlistCTA() {
  return (
    <SectionShell size="md" className="border-b border-border">
      <div className="relative isolate overflow-hidden rounded-card border border-border-gold bg-elevated/60 p-10 sm:p-14">
        <div className="absolute inset-0 bg-gold-glow opacity-80" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Join the pilot</Eyebrow>
            <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
              Help us build something better.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/85">
              The Strong Tower pilot is for people serious about freedom —
              individuals, parents, churches, accountability partners, donors,
              and technical volunteers willing to help us build something
              better. Tell us who you are and how you would like to be
              involved.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <CTAButton href="/pilot" size="lg" withArrow className="w-full justify-center">
              Join the pilot
            </CTAButton>
            <CTAButton
              href="/for-churches"
              size="lg"
              variant="secondary"
              className="w-full justify-center"
            >
              Church pilot
            </CTAButton>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
