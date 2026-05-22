"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function NavLink({ href, children, className, onClick }: Props) {
  const pathname = usePathname();
  const active = pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center text-sm transition-colors",
        active
          ? "text-foreground"
          : "text-muted hover:text-foreground",
        className,
      )}
    >
      {children}
      {active && (
        <span
          aria-hidden
          className="absolute -bottom-1.5 left-0 right-0 mx-auto h-px w-6 bg-gold"
        />
      )}
    </Link>
  );
}
