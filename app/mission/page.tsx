import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { ScriptureCard } from "@/components/marketing/ScriptureCard";
import { DonationCTA } from "@/components/marketing/DonationCTA";
import { scriptureByRef } from "@/content/scriptures";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mission",
  description: site.defaultDescription,
};

export default function MissionPage() {
  const proverbs = scriptureByRef("Proverbs 18:10")!;
  const galatians = scriptureByRef("Galatians 5:1")!;
  return (
    <>
      <PageHeader
        eyebrow="Our mission"
        title="A Christ-centred refuge for digital freedom."
        lede="Strong Tower exists to help people walk in freedom from pornography through stronger digital protection, honest accountability, and the gospel of Jesus Christ."
      />
      <SectionShell size="lg">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Prose>
            <p>
              We are donation-funded. Nothing we build should be locked behind a
              paywall. The people who most need protection and recovery are
              often the least able to pay for it. We refuse to make the gospel
              of freedom a product.
            </p>
            <h2>Why this mission exists</h2>
            <p>
              Pornography is doing quiet damage — to faith, marriages,
              families, and the way a generation sees itself and one another.
              Most people fighting it are fighting alone, with tools that were
              never designed for the scale and persistence of what they are up
              against.
            </p>
            <p>
              Strong Tower is being built to be different: stronger, layered
              protection on the technical side, and Christ-centred recovery on
              the relational side. Neither alone is enough. Together, they are
              a refuge.
            </p>
            <h2>What we believe</h2>
            <ul>
              <li>
                Lasting freedom is found in Christ, not in willpower or
                technology alone.
              </li>
              <li>
                Honest, consent-based accountability heals. Surveillance and
                shame do not.
              </li>
              <li>
                Protection should be free at the point of need, funded by a
                community that believes this matters.
              </li>
              <li>
                Privacy is not optional. We never log graphic content and we
                never sell personal data.
              </li>
            </ul>
            <h2>What we will not do</h2>
            <ul>
              <li>We will not lock protection behind a paywall.</li>
              <li>We will not pretend any tool is impossible to bypass.</li>
              <li>We will not use shame as a strategy.</li>
              <li>We will not log what someone watched.</li>
            </ul>
          </Prose>
          <div className="flex flex-col gap-4">
            <ScriptureCard scripture={proverbs} />
            <ScriptureCard scripture={galatians} />
          </div>
        </div>
      </SectionShell>
      <DonationCTA />
    </>
  );
}
