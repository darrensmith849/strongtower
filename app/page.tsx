import { Hero } from "@/components/marketing/Hero";
import { MissionStatement } from "@/components/marketing/MissionStatement";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { WhyBlockersFailSection } from "@/components/marketing/WhyBlockersFailSection";
import { LayeredProtectionSection } from "@/components/marketing/LayeredProtectionSection";
import { GospelRecoverySection } from "@/components/marketing/GospelRecoverySection";
import { ChurchFamilyCTA } from "@/components/marketing/ChurchFamilyCTA";
import { PilotWaitlistCTA } from "@/components/marketing/PilotWaitlistCTA";
import { DonationCTA } from "@/components/marketing/DonationCTA";
import { FAQ } from "@/components/marketing/FAQ";
import { homeFaq } from "@/content/faq";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionStatement />
      <ProblemSection />
      <WhyBlockersFailSection />
      <LayeredProtectionSection />
      <GospelRecoverySection />
      <ChurchFamilyCTA />
      <PilotWaitlistCTA />
      <DonationCTA />
      <FAQ items={homeFaq} />
    </>
  );
}
