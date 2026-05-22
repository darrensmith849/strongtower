import { Eyebrow } from "@/components/primitives/Eyebrow";
import { CTAButton } from "@/components/primitives/CTAButton";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gold-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-faint opacity-40" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px"
        aria-hidden
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(212,168,90,0.6), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-3xl">
          <Eyebrow>A donation-based Christ-centred mission</Eyebrow>
          <h1 className="mt-6 font-display text-5xl tracking-tight text-foreground sm:text-6xl md:text-[4.5rem] md:leading-[1.02]">
            Freedom needs more than{" "}
            <span className="text-gradient-gold">willpower</span>.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
            {site.name} is a donation-based Christ-centred mission building
            stronger digital protection, trusted accountability, and
            gospel-rooted recovery for people serious about leaving pornography
            behind.
          </p>
          <p className="mt-4 max-w-2xl text-base italic text-muted">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/pilot" size="lg" withArrow>
              Join the pilot
            </CTAButton>
            <CTAButton href="/support" size="lg" variant="secondary">
              Support the mission
            </CTAButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.18em] text-muted">
            <span>Donation-funded</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
            <span>Gospel-centred</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-border-strong" />
            <span>Privacy-conscious</span>
          </div>
        </div>
      </div>
    </section>
  );
}
