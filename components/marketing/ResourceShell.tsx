import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { PrintButton } from "./PrintButton";

type Scripture = { reference: string; text?: string };

type Props = {
  eyebrow: string;
  title: string;
  purpose: string;
  scriptures?: Scripture[];
  children: React.ReactNode;
  /** Pastoral disclaimer shown at the foot of every guide. */
  disclaimer?: string;
};

const defaultDisclaimer =
  "This guide is a tool, not a replacement for pastoral care, professional counselling, clinical support, or emergency services. If you are in immediate crisis, please reach out to a trusted pastor, a qualified counsellor, or your local emergency support services.";

/**
 * Shared shell for /resources/* guides. Provides:
 * - a back link to the hub
 * - the eyebrow / title / purpose pattern
 * - print button (hidden when printing)
 * - print-friendly layout via the .print-page class
 * - optional Scripture references at the bottom
 * - a consistent pastoral disclaimer
 */
export function ResourceShell({
  eyebrow,
  title,
  purpose,
  scriptures,
  children,
  disclaimer = defaultDisclaimer,
}: Props) {
  return (
    <SectionShell size="lg">
      <article className="print-page mx-auto max-w-3xl">
        <div className="no-print mb-8 flex items-center justify-between gap-4">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
          >
            <ChevronLeft size={15} aria-hidden />
            Back to resources
          </Link>
          <PrintButton />
        </div>

        <header>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-foreground/85">
            {purpose}
          </p>
        </header>

        <div className="mt-12 space-y-10 text-[16px] leading-relaxed text-foreground/85">
          {children}
        </div>

        {scriptures && scriptures.length > 0 && (
          <section className="mt-14 rounded-card border border-border bg-surface/60 p-6 print-card">
            <Eyebrow>Scripture for this guide</Eyebrow>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-relaxed text-foreground/85">
              {scriptures.map((s) => (
                <li key={s.reference}>
                  <span className="font-display text-gold-soft">
                    {s.reference}
                  </span>
                  {s.text ? <span className="text-foreground/80"> — {s.text}</span> : null}
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-12 border-t border-border pt-6 text-xs leading-relaxed text-muted">
          {disclaimer}
        </footer>
      </article>
    </SectionShell>
  );
}

/** Section heading for use inside a ResourceShell body. */
export function ResourceSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
