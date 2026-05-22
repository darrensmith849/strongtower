import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircleHeart,
  Handshake,
  ScrollText,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Card } from "@/components/primitives/Card";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical, printable, gospel-centred guides for parents, accountability partners, churches, and people in the moment of temptation.",
};

const guides = [
  {
    href: "/resources/parent-conversation-guide",
    icon: MessageCircleHeart,
    title: "Parent conversation guide",
    body: "A calm, non-panic guide for parents starting wise conversations about digital temptation, protection, and discipleship.",
  },
  {
    href: "/resources/accountability-covenant",
    icon: Handshake,
    title: "Accountability covenant",
    body: "A short covenant template for two trusted partners — consent-based, non-graphic, grace-and-truth centred.",
  },
  {
    href: "/resources/church-pilot-one-pager",
    icon: ScrollText,
    title: "Church pilot one-pager",
    body: "A single-page overview of the mission, the pilot, what is live now, what is future, and how to register your church.",
  },
  {
    href: "/resources/emergency-temptation-plan",
    icon: ShieldAlert,
    title: "Emergency temptation plan",
    body: "A practical, immediate-response plan for the moment of temptation. Safe, non-graphic, pastoral.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Practical guides you can read, print, and keep."
        lede="Each guide is short, printable, and designed to be useful in the real world — in a kitchen conversation, a small group, a moment of weakness, or a leadership meeting."
      />

      <SectionShell size="md">
        <ul className="grid gap-5 sm:grid-cols-2">
          {guides.map(({ href, icon: Icon, title, body }) => (
            <Card
              as="li"
              key={href}
              interactive
              className="flex h-full flex-col gap-4"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-gold">
                <Icon size={18} aria-hidden />
              </div>
              <h2 className="font-display text-xl tracking-tight text-foreground">
                {title}
              </h2>
              <p className="text-[15px] leading-relaxed text-foreground/75">
                {body}
              </p>
              <Link
                href={href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gold-soft hover:text-gold"
              >
                Open the guide
                <ArrowRight size={14} aria-hidden />
              </Link>
            </Card>
          ))}
        </ul>

        <p className="mt-10 text-sm text-muted">
          Each guide includes a &ldquo;Print this guide&rdquo; button. Use
          it to save a clean copy as a PDF from your browser&rsquo;s print
          dialog.
        </p>
      </SectionShell>

      <FoundingPilotCTA />
    </>
  );
}
