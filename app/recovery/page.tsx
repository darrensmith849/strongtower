import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { ScriptureCard } from "@/components/marketing/ScriptureCard";
import { scriptures } from "@/content/scriptures";

export const metadata: Metadata = {
  title: "Gospel-centred recovery",
  description:
    "Freedom in Christ, renewing the mind, confession and accountability, fleeing temptation, identity before behaviour, grace after failure, and an emergency temptation plan.",
};

const themes = [
  {
    title: "Freedom in Christ",
    body: "Lasting freedom is a gift before it is a goal. The cross is where shame goes to die.",
  },
  {
    title: "Renewing the mind",
    body: "What we feed our thoughts shapes what our hands do next. Recovery is a daily, deliberate renewing.",
  },
  {
    title: "Confession and accountability",
    body: "Confession is the door to healing. Honest, consent-based accountability turns isolation into companionship.",
  },
  {
    title: "Fleeing temptation",
    body: "Wisdom flees what willpower cannot survive. Stronger protection makes fleeing possible.",
  },
  {
    title: "Identity before behaviour",
    body: "You are not what you did last night. You are who Christ says you are. Behaviour follows identity, not the other way around.",
  },
  {
    title: "Grace after failure",
    body: "Falling is not the end of the road. Grace meets you exactly where you are and walks you forward.",
  },
  {
    title: "Emergency temptation plan",
    body: "When the moment hits, plans beat willpower. A short, written plan you can read in 30 seconds is worth a year of vague intentions.",
  },
];

export default function RecoveryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gospel-centred recovery"
        title="Behaviour change without heart change rarely lasts."
        lede="A hub for gospel-rooted thinking on freedom, accountability, and the daily walk. We will keep adding to this over time."
      />
      <SectionShell size="md">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Card as="li" key={theme.title}>
              <h2 className="font-display text-xl tracking-tight text-foreground">
                {theme.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground/75">
                {theme.body}
              </p>
            </Card>
          ))}
        </ul>
      </SectionShell>

      <SectionShell size="md" className="border-t border-border bg-surface/30">
        <div className="max-w-3xl">
          <Eyebrow>Scripture</Eyebrow>
          <h2 className="mt-5 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
            Walked-with, not alone.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            These passages return often in this work. Read them slowly. Read
            them with someone.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {scriptures.map((s) => (
            <li key={s.reference} className="contents">
              <ScriptureCard scripture={s} />
            </li>
          ))}
        </ul>
      </SectionShell>
    </>
  );
}
