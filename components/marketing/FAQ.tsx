import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { type FaqItem } from "@/content/faq";

type Props = {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
};

export function FAQ({ items, eyebrow = "Questions", title = "Common questions." }: Props) {
  return (
    <SectionShell size="md" className="border-b border-border bg-surface/30">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-16">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {items.map((item) => (
            <details
              key={item.question}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base font-medium text-foreground transition-colors hover:text-gold-soft">
                <span>{item.question}</span>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform group-open:rotate-45 group-open:border-border-gold group-open:text-gold"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
