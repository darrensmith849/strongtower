import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { Prose } from "@/components/primitives/Prose";
import { SupportInterestForm } from "@/components/forms/SupportInterestForm";

export const metadata: Metadata = {
  title: "Support the mission",
  description:
    "Strong Tower is donation-funded. Protection resources should not be locked behind payment. Register your interest in supporting the mission.",
};

export default function SupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Support the mission"
        title="Help build the shield."
        lede="Strong Tower is donation-funded. Protection resources should not be locked behind payment. Your support helps fund engineering, device testing, filtering infrastructure, pastoral resources, privacy and legal compliance, and church and family pilot programmes."
      />
      <SectionShell size="lg">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_1.8fr] lg:gap-16">
          <Prose>
            <h2>Where support goes</h2>
            <ul>
              <li>Engineering and pilot infrastructure</li>
              <li>Device testing across phones, laptops, and routers</li>
              <li>Network filtering and DNS infrastructure</li>
              <li>Pastoral and gospel-centred recovery resources</li>
              <li>Privacy, safeguarding, and legal compliance</li>
              <li>Church and family pilot programmes</li>
            </ul>
            <h2>Payment is not live yet</h2>
            <p>
              Payment processing has not been turned on. We will not ask for
              card details on this site today. For now, register your interest
              and we will be in touch as donation pathways open.
            </p>
            <p>
              When donations do open, we will publish a clear, annual record
              of where the money has gone.
            </p>
          </Prose>
          <div>
            <SupportInterestForm />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
