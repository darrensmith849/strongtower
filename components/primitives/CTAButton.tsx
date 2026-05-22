import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type AnchorProps = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type Props = AnchorProps | ButtonProps;

const sizeMap: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base",
};

const variantMap: Record<Variant, string> = {
  primary:
    "bg-gold text-background hover:bg-gold-soft shadow-[0_8px_30px_-10px_rgba(212,168,90,0.6)]",
  secondary:
    "border border-border-gold text-foreground hover:border-gold hover:bg-gold/[0.06]",
  ghost: "text-foreground/90 hover:text-foreground hover:bg-surface",
};

export function CTAButton(props: Props) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
    "disabled:opacity-60 disabled:cursor-not-allowed",
    sizeMap[size],
    variantMap[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={16} aria-hidden />}
    </>
  );

  if ("href" in props && props.href) {
    const isInternal = props.href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={props.href} className={classes} onClick={props.onClick}>
          {content}
        </Link>
      );
    }
    return (
      <a
        href={props.href}
        className={classes}
        onClick={props.onClick}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
