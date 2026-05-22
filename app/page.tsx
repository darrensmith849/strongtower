import { Hero } from "@/components/marketing/Hero";
import { MissionStatement } from "@/components/marketing/MissionStatement";
import { ProblemSection } from "@/components/marketing/ProblemSection";
import { WhyBlockersFailSection } from "@/components/marketing/WhyBlockersFailSection";
import { LayeredProtectionSection } from "@/components/marketing/LayeredProtectionSection";
import { GospelRecoverySection } from "@/components/marketing/GospelRecoverySection";
import { MissionNotProduct } from "@/components/marketing/MissionNotProduct";
import { RoadmapSection } from "@/components/marketing/RoadmapSection";
import { ChurchFamilyCTA } from "@/components/marketing/ChurchFamilyCTA";
import { FoundingPilotCTA } from "@/components/marketing/FoundingPilotCTA";
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
      <MissionNotProduct />
      <RoadmapSection />
      <ChurchFamilyCTA />
      <FoundingPilotCTA />
      <DonationCTA />
      <FAQ items={homeFaq} />
    </>
  );
}
