import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden border-b border-border",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gold-glow opacity-90" aria-hidden />
      <div className="absolute inset-0 bg-grid-faint opacity-40" aria-hidden />
      <div
        className={cn(
          "relative mx-auto max-w-5xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20",
          align === "center" && "text-center",
        )}
      >
        {eyebrow && (
          <div className={cn(align === "center" && "flex justify-center")}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        <h1
          className={cn(
            "mt-5 font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-[3.5rem] md:leading-[1.05]",
          )}
        >
          {title}
        </h1>
        {lede && (
          <p
            className={cn(
              "mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80",
              align === "center" && "mx-auto",
            )}
          >
            {lede}
          </p>
        )}
      </div>
    </div>
  );
}
