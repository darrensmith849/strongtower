import type { Metadata } from "next";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SectionShell } from "@/components/primitives/SectionShell";
import { PilotWaitlistForm } from "@/components/forms/PilotWaitlistForm";

export const metadata: Metadata = {
  title: "Join the pilot",
  description:
    "Register your interest in the Strong Tower pilot — for individuals, parents, church leaders, accountability partners, donors, and technical volunteers.",
};

export default function PilotPage() {
  return (
    <>
      <PageHeader
        eyebrow="Join the pilot"
        title="Help us build something better."
        lede="The Strong Tower pilot is for people serious about freedom — individuals, parents, churches, accountability partners, donors, and technical volunteers. Tell us who you are and how you would like to be involved."
      />
      <SectionShell size="lg">
        <div className="mx-auto max-w-2xl">
          <PilotWaitlistForm />
        </div>
      </SectionShell>
    </>
  );
}
