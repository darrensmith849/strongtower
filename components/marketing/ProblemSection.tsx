import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";

export function ProblemSection() {
  return (
    <SectionShell size="md" className="border-b border-border bg-surface/30">
      <div className="max-w-3xl">
        <Eyebrow>The problem</Eyebrow>
        <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          Quiet damage, done in plain sight.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/85">
          Pornography is doing quiet damage — to faith, to marriages, to
          families, to the way a generation sees itself and one another. Most
          people fighting it are fighting alone, with tools that were never
          built to win.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The problem is not weakness. The problem is that the systems most
          people rely on were never designed for the scale and persistence of
          what they are up against.
        </p>
      </div>
    </SectionShell>
  );
}
