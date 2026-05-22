import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "gold";
};

export function Badge({ children, className, tone = "default" }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-tight",
        tone === "gold"
          ? "border-border-gold bg-gold/10 text-gold-soft"
          : "border-border bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
