import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type LinkAction = { href: string; label: string };

type Props = {
  title: string;
  message: string;
  /** Optional extra paragraphs shown below the main message. */
  paragraphs?: string[];
  /** Optional list of follow-on links shown as a stack of subtle CTAs. */
  links?: LinkAction[];
};

export function FormSuccess({ title, message, paragraphs, links }: Props) {
  return (
    <div
      role="status"
      className="rounded-card border border-border-gold bg-gold/[0.05] p-6"
    >
      <div className="flex items-start gap-4">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-gold" aria-hidden />
        <div className="flex-1">
          <h3 className="font-display text-xl tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-foreground/85">
            {message}
          </p>
          {paragraphs && paragraphs.length > 0 && (
            <div className="mt-3 space-y-2 text-[14.5px] leading-relaxed text-foreground/80">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          {links && links.length > 0 && (
            <ul className="mt-5 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-gold-soft hover:text-gold"
                  >
                    {l.label}
                    <ArrowRight
                      size={14}
                      aria-hidden
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
