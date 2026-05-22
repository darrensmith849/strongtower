import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  id?: string;
  as?: "section" | "div" | "article";
  size?: "sm" | "md" | "lg";
  bleed?: boolean;
};

const sizeMap = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-24",
  lg: "py-24 sm:py-32",
};

export function SectionShell({
  children,
  className,
  innerClassName,
  id,
  as: As = "section",
  size = "md",
  bleed = false,
}: Props) {
  return (
    <As id={id} className={cn(sizeMap[size], className)}>
      <div
        className={cn(
          bleed ? "" : "mx-auto max-w-7xl px-6",
          innerClassName,
        )}
      >
        {children}
      </div>
    </As>
  );
}
