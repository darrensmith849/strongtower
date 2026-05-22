import Link from "next/link";
import { primaryNav } from "@/content/nav";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { CTAButton } from "@/components/primitives/CTAButton";
import { ShieldMark } from "@/components/primitives/ShieldMark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Strong Tower — home"
        >
          <ShieldMark className="h-7 w-7 text-gold transition-transform group-hover:scale-105" />
          <span className="font-display text-lg tracking-tight text-foreground">
            Strong Tower
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <CTAButton href="/support" variant="ghost" size="sm">
            Support
          </CTAButton>
          <CTAButton href="/pilot" size="sm">
            Join the pilot
          </CTAButton>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
