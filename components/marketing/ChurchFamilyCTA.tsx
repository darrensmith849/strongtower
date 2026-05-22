import { Users, Home, Heart } from "lucide-react";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Card } from "@/components/primitives/Card";
import Link from "next/link";

const audiences = [
  {
    icon: Heart,
    title: "For individuals",
    body: "If you are personally struggling, you are not alone, not beyond hope, and not the project. There is a way forward.",
    href: "/for-individuals",
    cta: "I am struggling personally",
  },
  {
    icon: Home,
    title: "For parents",
    body: "Practical protection, honest conversation, and discipleship for the digital lives of your children and your home.",
    href: "/for-parents",
    cta: "I am protecting my family",
  },
  {
    icon: Users,
    title: "For churches",
    body: "Pastoral support, men's groups, youth leaders, and church-wide pilots. Discipleship that takes screens seriously.",
    href: "/for-churches",
    cta: "I am leading a church",
  },
];

export function ChurchFamilyCTA() {
  return (
    <SectionShell size="md" className="border-b border-border">
      <div className="max-w-3xl">
        <Eyebrow>Pathways</Eyebrow>
        <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
          A way forward, whoever you are.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-foreground/85">
          Whether you are walking this out personally, leading a household, or
          shepherding a church, Strong Tower is being built with you in mind.
        </p>
      </div>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {audiences.map(({ icon: Icon, title, body, href, cta }) => (
          <Card as="li" key={title} interactive className="flex h-full flex-col gap-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-gold bg-gold/10 text-gold">
              <Icon size={18} aria-hidden />
            </div>
            <h3 className="font-display text-xl tracking-tight text-foreground">
              {title}
            </h3>
            <p className="text-[15px] leading-relaxed text-foreground/75">{body}</p>
            <Link
              href={href}
              className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-gold-soft hover:text-gold"
            >
              {cta} →
            </Link>
          </Card>
        ))}
      </ul>
    </SectionShell>
  );
}
