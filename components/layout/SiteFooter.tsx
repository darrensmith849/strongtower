import Link from "next/link";
import { fullNav } from "@/content/nav";
import { ShieldMark } from "@/components/primitives/ShieldMark";
import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="Strong Tower — home">
              <ShieldMark className="h-7 w-7 text-gold" />
              <span className="font-display text-lg tracking-tight text-foreground">
                Strong Tower
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A donation-based Christ-centred mission building stronger digital protection,
              trusted accountability, and gospel-rooted recovery.
            </p>
            <blockquote className="mt-6 border-l border-border-gold pl-4 text-sm italic text-muted">
              &ldquo;{site.anchor.text}&rdquo;
              <footer className="not-italic mt-1 text-xs uppercase tracking-[0.18em] text-gold/80">
                {site.anchor.reference}
              </footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {fullNav.map((group) => (
              <div key={group.group}>
                <div className="mb-3 text-xs uppercase tracking-[0.18em] text-gold/80">
                  {group.group}
                </div>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {site.fullName}. All rights reserved.</p>
          <p className="text-muted/80">
            Donation-funded · Not a paid service · Not a medical service
          </p>
        </div>
      </div>
    </footer>
  );
}
