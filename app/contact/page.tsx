import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Strong Tower — for general, partnership, press, pastoral, or technical enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us."
        lede="If you are a pastor, parent, donor, partner, journalist, or just want to learn more — write to us. We read every message."
      />
      <SectionShell size="lg">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <div className="text-[15px] leading-relaxed text-foreground/85">
            <h2 className="font-display text-xl tracking-tight text-foreground">
              Other ways to reach us
            </h2>
            <p className="mt-4">
              You can also email us directly at{" "}
              <a
                href={`mailto:${site.email.contact}`}
                className="text-gold-soft underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
              >
                {site.email.contact}
              </a>
              .
            </p>
            <p className="mt-4 text-muted">
              For urgent pastoral matters, please also reach out to a trusted
              local pastor or church leader. We are not a crisis service.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
