import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  attribution?: string;
  className?: string;
};

export function PullQuote({ children, attribution, className }: Props) {
  return (
    <figure
      className={cn(
        "relative rounded-card border border-border-gold bg-gold/[0.04] p-8 sm:p-10",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute -top-4 left-8 text-6xl font-display text-gold/60"
      >
        &ldquo;
      </div>
      <blockquote className="font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-gold/80">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
