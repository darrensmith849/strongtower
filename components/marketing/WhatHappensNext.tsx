import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";

type Props = {
  /** Section heading. Defaults to "What happens next?". */
  title?: string;
  /** Optional intro line under the heading. */
  intro?: string;
  /** Ordered list of next-step paragraphs. */
  steps: string[];
};

/**
 * Reusable "What happens next?" block — used below the pilot, support,
 * and contact forms to set honest expectations after submission.
 */
export function WhatHappensNext({
  title = "What happens next?",
  intro,
  steps,
}: Props) {
  return (
    <SectionShell size="md" className="border-t border-border bg-surface/30">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>{title}</Eyebrow>
        <h2 className="mt-5 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
          A clear, calm picture of what to expect.
        </h2>
        {intro && (
          <p className="mt-5 text-[16px] leading-relaxed text-foreground/85">
            {intro}
          </p>
        )}
        <ol className="mt-8 space-y-4">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex gap-4 rounded-card border border-border bg-surface/60 p-5"
            >
              <span
                aria-hidden
                className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-[12px] font-medium text-gold-soft"
              >
                {i + 1}
              </span>
              <p className="text-[15px] leading-relaxed text-foreground/85">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
