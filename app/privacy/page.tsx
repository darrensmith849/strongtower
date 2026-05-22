import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy promise",
  description:
    "How Strong Tower handles data: no graphic logging, no selling of data, consent-based accountability, and data minimisation.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy promise"
        title="We never log what you watched."
        lede="Privacy is not a footnote in this mission. It is a foundation. Here is how we think about your data, today and as the platform grows."
      />
      <SectionShell size="lg">
        <Prose className="mx-auto">
          <h2>Our promises today</h2>
          <ul>
            <li>
              <strong>We never log graphic content.</strong> The website never
              asks for, displays, or stores any content of what someone has
              viewed.
            </li>
            <li>
              <strong>We never sell personal data.</strong> Not to advertisers,
              not to data brokers, not to anyone.
            </li>
            <li>
              <strong>We collect only what we need.</strong> Pilot, support, and
              contact forms collect the minimum required to respond to you and
              walk with you.
            </li>
            <li>
              <strong>Consent comes first.</strong> Future accountability
              tooling will be invitation-based, consent-driven, and non-graphic
              by design.
            </li>
          </ul>

          <h2>What we collect on this site</h2>
          <ul>
            <li>
              <strong>Pilot waitlist:</strong> first name, email, country, role,
              devices you would like protected, level of interest, optional
              message, consent.
            </li>
            <li>
              <strong>Support interest:</strong> first name, email, country,
              support type, optional message, consent.
            </li>
            <li>
              <strong>Contact form:</strong> name, email, subject, message,
              consent.
            </li>
          </ul>

          <h2>How we use it</h2>
          <p>
            We use this information only to respond to you, organise the pilot,
            and operate the mission. We do not pass it to third parties for
            marketing.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep your details for as long as the relationship is active. If
            you ask to be removed, we will remove your details promptly. Email{" "}
            <a href={`mailto:${site.email.contact}`}>{site.email.contact}</a>{" "}
            to ask to be removed.
          </p>

          <h2>Future accountability tools</h2>
          <p>
            When Strong Tower&rsquo;s technical layers are live, accountability
            will be designed around <em>signals and consent</em>, not content
            surveillance. Partners will be told that something has happened —
            for example, that protection was disabled — without graphic
            content ever being shared.
          </p>

          <h2>POPIA and GDPR</h2>
          <p>
            Our lawful basis for collecting and storing your details is your
            consent. You can request access to your information, correct it,
            or ask us to delete it at any time by emailing{" "}
            <a href={`mailto:${site.email.contact}`}>{site.email.contact}</a>.
          </p>

          <h2>A final word</h2>
          <p>
            We will keep this promise plain and visible. If we ever need to
            change it, we will tell you clearly and explain why.
          </p>
        </Prose>
      </SectionShell>
    </>
  );
}
