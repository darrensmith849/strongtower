import type { Metadata } from "next";
import {
  ResourceShell,
  ResourceSection,
} from "@/components/marketing/ResourceShell";
import { CTAButton } from "@/components/primitives/CTAButton";

export const metadata: Metadata = {
  title: "Church pilot one-pager",
  description:
    "A one-page overview of the Strong Tower mission, the founding pilot, what is live now, what is future, and how your church can register interest.",
};

export default function ChurchPilotOnePager() {
  return (
    <ResourceShell
      eyebrow="For churches & ministries"
      title="Church pilot one-pager"
      purpose="A single page you can read in a leadership meeting and circulate to elders, pastors, or ministry heads. Print it, share it, talk about it."
      scriptures={[
        { reference: "Proverbs 18:10" },
        { reference: "1 Thessalonians 5:11" },
        { reference: "Galatians 6:9–10" },
      ]}
    >
      <ResourceSection title="What Strong Tower is">
        <p>
          Strong Tower is a donation-based Christ-centred mission building
          stronger digital protection, trusted accountability, and
          gospel-rooted recovery for people serious about leaving
          pornography behind. The full nonprofit name is{" "}
          <em>The Strong Tower Project</em>.
        </p>
        <blockquote className="border-l border-border-gold pl-4 italic text-foreground/90 print-card">
          &ldquo;The name of the LORD is a strong tower; the righteous run
          to it and are safe.&rdquo; — Proverbs 18:10
        </blockquote>
      </ResourceSection>

      <ResourceSection title="The pilot we are gathering">
        <p>
          The founding pilot is a small, trusted group of individuals,
          parents, churches, accountability partners, donors, and
          technical volunteers willing to walk this out with us before the
          deeper protection layers are built.
        </p>
        <p>
          For a church, the pilot is light-touch and pastoral. We are not
          asking for a programme launch or a Sunday slot. We are asking
          for a few honest conversations about what your people are
          actually facing, and what would actually help.
        </p>
      </ResourceSection>

      <ResourceSection title="What is live today">
        <ul className="list-disc space-y-2 pl-5">
          <li>A public mission site with honest language about what is and isn&rsquo;t built.</li>
          <li>A private intake for pilot, support, and contact submissions.</li>
          <li>Resource pages — including this one — for parents, accountability partners, and churches.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="What is future">
        <ul className="list-disc space-y-2 pl-5">
          <li>DNS and router-level filtering research.</li>
          <li>Always-on VPN and managed-device pilots.</li>
          <li>Tamper-evident alerts to trusted, consent-based partners.</li>
          <li>An accountability and recovery dashboard — signal-based, never graphic logs.</li>
          <li>A donation pathway. Nothing is locked behind payment.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="Our promises to the local church">
        <ul className="list-disc space-y-2 pl-5">
          <li>We will not push graphic logs into the hands of pastors.</li>
          <li>We will not encourage shame-based reporting.</li>
          <li>We will take safeguarding and privacy seriously.</li>
          <li>We will be honest about what is built and what is being built.</li>
          <li>Nothing we build will be locked behind payment.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="How your church can register interest">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Visit <strong>strongtower-kappa.vercel.app/pilot</strong> (or
            our main site).
          </li>
          <li>
            Choose <em>&ldquo;church leader&rdquo;</em> on the pilot form.
          </li>
          <li>Add a short note about your context and what you would find useful.</li>
          <li>We will be in touch — pastorally, not as a sales process.</li>
        </ol>
      </ResourceSection>

      <ResourceSection title="Contact">
        <p>
          For partnership, pastoral, or press enquiries, please use the
          contact form on the site. We read every message.
        </p>
      </ResourceSection>

      <div className="no-print mt-10 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/pilot" withArrow className="w-full justify-center sm:w-auto">
          Register church interest
        </CTAButton>
        <CTAButton
          href="/for-churches"
          variant="secondary"
          className="w-full justify-center sm:w-auto"
        >
          Back to the church page
        </CTAButton>
      </div>
    </ResourceShell>
  );
}
