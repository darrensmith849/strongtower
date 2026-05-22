import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ScriptureCard } from "./ScriptureCard";
import { scriptureByRef } from "@/content/scriptures";

export function GospelRecoverySection() {
  const galatians = scriptureByRef("Galatians 5:1")!;
  const romans = scriptureByRef("Romans 12:2")!;

  return (
    <SectionShell size="md" className="border-b border-border">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <Eyebrow>Gospel-centred recovery</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Behaviour change without heart change rarely lasts.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Strong Tower is built around the conviction that lasting freedom is
            found in Christ — through renewed minds, honest confession,
            practical protection, and a community that keeps walking with you.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Recovery is not a programme to graduate from. It is a way of
            walking — daily, honestly, and not alone.
          </p>
        </div>
        <div className="grid gap-4">
          <ScriptureCard scripture={galatians} />
          <ScriptureCard scripture={romans} />
        </div>
      </div>
    </SectionShell>
  );
}
