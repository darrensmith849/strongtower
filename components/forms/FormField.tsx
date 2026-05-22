import { cn } from "@/lib/cn";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
};

export function FormLabel({ htmlFor, children, required, className }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "block text-sm font-medium text-foreground",
        className,
      )}
    >
      {children}
      {required && <span className="ml-1 text-gold/80" aria-hidden>*</span>}
    </label>
  );
}

type HelpProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function FormHelp({ children, className, id }: HelpProps) {
  return (
    <p id={id} className={cn("mt-1.5 text-xs text-muted", className)}>
      {children}
    </p>
  );
}

type ErrorProps = {
  children?: React.ReactNode;
  id?: string;
};

export function FormError({ children, id }: ErrorProps) {
  if (!children) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-300">
      {children}
    </p>
  );
}

const baseInput =
  "w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-[15px] text-foreground placeholder:text-muted/70 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export const inputClass = baseInput;

export const errorRing =
  "border-red-400/60 focus:border-red-300 focus:ring-red-300/30";
