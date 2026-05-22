import { CTAButton } from "@/components/primitives/CTAButton";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionShell } from "@/components/primitives/SectionShell";

export function DonationCTA() {
  return (
    <SectionShell size="md" className="border-b border-border bg-surface/30">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <Eyebrow>Support the mission</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Help build the shield.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/85">
            Strong Tower is donation-funded. Protection resources should not be
            locked behind payment. Support helps fund engineering, device
            testing, filtering infrastructure, pastoral resources, privacy and
            legal compliance, and church and family pilot programmes.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
            Payment processing is not live yet. For now, register your interest
            and we will be in touch as donation pathways open.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <CTAButton href="/support" size="lg" withArrow className="w-full justify-center">
            Become a founding supporter
          </CTAButton>
          <CTAButton
            href="/mission"
            size="lg"
            variant="secondary"
            className="w-full justify-center"
          >
            Read the mission
          </CTAButton>
        </div>
      </div>
    </SectionShell>
  );
}
