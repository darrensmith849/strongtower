import type { Metadata } from "next";
import {
  ResourceShell,
  ResourceSection,
} from "@/components/marketing/ResourceShell";
import { CTAButton } from "@/components/primitives/CTAButton";

export const metadata: Metadata = {
  title: "Parent conversation guide",
  description:
    "A calm, non-panic guide for parents starting wise conversations about digital temptation, protection, and discipleship.",
};

export default function ParentConversationGuide() {
  return (
    <ResourceShell
      eyebrow="For parents & families"
      title="Parent conversation guide"
      purpose="A calm starter for the conversations you would rather not avoid. Designed to be opened on a phone in a kitchen, or printed and kept in a drawer for when the moment comes."
      scriptures={[
        { reference: "Deuteronomy 6:6–7" },
        { reference: "Proverbs 22:6" },
        { reference: "Ephesians 6:4" },
        { reference: "1 Corinthians 13:4–7" },
      ]}
    >
      <ResourceSection title="Before the conversation">
        <p>
          Aim for short and warm, not long and rehearsed. The goal is
          presence, not a perfect script. Pray briefly first. Ask the Lord
          for gentleness, courage, and the right pace.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Pick a moment with low pressure — a car ride, a walk, washing
            up, before bed.
          </li>
          <li>Lead with curiosity, not interrogation.</li>
          <li>Open the door once. You can leave it open and walk away.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="Conversation openers by age band">
        <p className="text-muted">
          Adapt to your child. These are starting points, not scripts.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Younger children (roughly 6–9):</strong> &ldquo;If you
            ever see something on a screen that feels confusing or makes
            your tummy feel funny, will you tell me? You won&rsquo;t be in
            trouble.&rdquo;
          </li>
          <li>
            <strong>Older children (roughly 10–12):</strong> &ldquo;A lot
            of children your age have already seen things they wish they
            hadn&rsquo;t. I want you to know that if that happens, we can
            talk about it together. No shouting.&rdquo;
          </li>
          <li>
            <strong>Teenagers:</strong> &ldquo;I am not naive about what is
            on a phone today. I love you too much to leave you to figure
            this out alone. Can we have a real conversation about it,
            without me freaking out?&rdquo;
          </li>
        </ul>
      </ResourceSection>

      <ResourceSection title="What to do if something has already happened">
        <ol className="list-decimal space-y-2 pl-5">
          <li>Breathe. Your first ten seconds matter most.</li>
          <li>
            Thank them for telling you, even if they didn&rsquo;t tell you
            — finding out is also a chance to respond well.
          </li>
          <li>
            Do not ask for graphic detail. You don&rsquo;t need it and they
            don&rsquo;t need to relive it.
          </li>
          <li>
            Ask what felt hard, what triggered it, and what would help
            tomorrow.
          </li>
          <li>
            Make one small change together — a phone in the kitchen at
            night, a new filter, a check-in time.
          </li>
          <li>Pray with them, briefly and gently.</li>
        </ol>
      </ResourceSection>

      <ResourceSection title="Light-touch household rhythms">
        <ul className="list-disc space-y-2 pl-5">
          <li>Phones charge in a shared room overnight.</li>
          <li>Screens off thirty minutes before sleep.</li>
          <li>One weekly &ldquo;how are you, really?&rdquo; check-in.</li>
          <li>Open conversations about what apps friends are using.</li>
          <li>
            Layered protection at the network, the device, and the
            relational level — not just one filter.
          </li>
        </ul>
      </ResourceSection>

      <ResourceSection title="What not to do">
        <ul className="list-disc space-y-2 pl-5">
          <li>Do not lead with punishment.</li>
          <li>Do not turn the conversation into surveillance.</li>
          <li>Do not pretend you have no struggles of your own.</li>
          <li>Do not catastrophise — one conversation will not fix it all.</li>
          <li>Do not make this the last conversation.</li>
        </ul>
      </ResourceSection>

      <ResourceSection title="When to bring in extra help">
        <p>
          If you sense compulsive behaviour, abuse, severe distress, or
          self-harm, please involve a trusted pastor, a qualified
          counsellor, or your local emergency support services. You are
          not failing by asking for help — you are loving your child well.
        </p>
      </ResourceSection>

      <div className="no-print mt-10 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/pilot" withArrow className="w-full justify-center sm:w-auto">
          Join the founding pilot
        </CTAButton>
        <CTAButton
          href="/accountability"
          variant="secondary"
          className="w-full justify-center sm:w-auto"
        >
          Read accountability guidance
        </CTAButton>
      </div>
    </ResourceShell>
  );
}
