"use client";

import { Printer } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  label?: string;
  className?: string;
};

/**
 * Small client-only "Print this guide" button. Hidden when printing.
 * Calls window.print(); the @media print styles in globals.css take
 * care of the actual layout.
 */
export function PrintButton({ label = "Print this guide", className }: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      className={cn(
        "no-print inline-flex items-center gap-2 rounded-full border border-border-gold bg-gold/[0.06] px-4 py-2 text-sm font-medium text-foreground/90 transition-colors hover:border-gold hover:text-foreground",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        className,
      )}
    >
      <Printer size={15} aria-hidden />
      {label}
    </button>
  );
}
