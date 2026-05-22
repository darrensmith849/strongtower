import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-gold/90",
        className,
      )}
    >
      <span className="h-px w-6 bg-gold/60" aria-hidden />
      {children}
    </div>
  );
}
