import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Prose({ children, className }: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl text-[16.5px] leading-[1.7] text-foreground/85",
        "[&_p+p]:mt-5",
        "[&_h2]:font-display [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4",
        "[&_h3]:font-medium [&_h3]:text-lg [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3",
        "[&_ul]:my-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_ul]:list-disc [&_ul]:marker:text-gold/70",
        "[&_ol]:my-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2 [&_ol]:pl-5 [&_ol]:list-decimal [&_ol]:marker:text-gold/70",
        "[&_a]:text-gold-soft [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-gold/40 hover:[&_a]:decoration-gold",
        "[&_strong]:text-foreground [&_strong]:font-semibold",
        "[&_blockquote]:border-l [&_blockquote]:border-border-gold [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-foreground/90 [&_blockquote]:my-6",
        className,
      )}
    >
      {children}
    </div>
  );
}
