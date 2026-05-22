"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { fullNav } from "@/content/nav";
import { CTAButton } from "@/components/primitives/CTAButton";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground/90 hover:border-border-gold hover:text-foreground"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div
          className="fixed inset-0 top-16 z-40 overflow-y-auto bg-background/95 backdrop-blur"
          role="dialog"
          aria-modal="true"
        >
          <nav className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-10">
            {fullNav.map((group) => (
              <div key={group.group}>
                <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted">
                  {group.group}
                </div>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-2 py-2 text-base text-foreground/90 hover:bg-surface hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <CTAButton href="/pilot" onClick={() => setOpen(false)} className="w-full justify-center">
                Join the pilot
              </CTAButton>
              <CTAButton
                href="/support"
                variant="secondary"
                onClick={() => setOpen(false)}
                className="w-full justify-center"
              >
                Support the mission
              </CTAButton>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
