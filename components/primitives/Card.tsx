import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: As = "div",
  interactive = false,
}: Props) {
  return (
    <As
      className={cn(
        "rounded-card border border-border bg-surface/80 p-6 sm:p-7",
        "shadow-soft transition-colors",
        interactive && "hover:border-border-gold hover:bg-elevated",
        className,
      )}
    >
      {children}
    </As>
  );
}
