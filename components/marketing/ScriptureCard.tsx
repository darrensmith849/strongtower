import { Card } from "@/components/primitives/Card";
import { type Scripture } from "@/content/scriptures";

type Props = {
  scripture: Scripture;
  className?: string;
};

export function ScriptureCard({ scripture, className }: Props) {
  return (
    <Card className={className}>
      <blockquote className="font-display text-xl leading-relaxed text-foreground/95">
        &ldquo;{scripture.text}&rdquo;
      </blockquote>
      <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-gold">
        <span className="h-px w-6 bg-gold/60" aria-hidden />
        {scripture.reference}
      </div>
    </Card>
  );
}
