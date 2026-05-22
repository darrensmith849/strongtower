import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { site } from "@/lib/site";

export function MissionStatement() {
  return (
    <SectionShell size="md" className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            A Christ-centred refuge for digital freedom.
          </h2>
        </div>
        <div className="text-[16.5px] leading-[1.75] text-foreground/85">
          <p>
            {site.name} exists to help people walk in freedom from pornography
            through stronger digital protection, honest accountability, and the
            gospel of Jesus Christ. We are donation-funded. Nothing we build
            should be locked behind a paywall.
          </p>
          <blockquote className="mt-7 border-l border-border-gold pl-5 italic text-foreground/90">
            &ldquo;{site.anchor.text}&rdquo;
            <footer className="not-italic mt-2 text-xs uppercase tracking-[0.18em] text-gold/80">
              {site.anchor.reference}
            </footer>
          </blockquote>
        </div>
      </div>
    </SectionShell>
  );
}
