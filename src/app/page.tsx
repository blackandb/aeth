import { HeroSection } from "@/components/sections/hero";
import { ShiftSection } from "@/components/sections/shift";
import { NewModelSection } from "@/components/sections/new-model";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { BenefitsSection } from "@/components/sections/benefits";
import { AudienceSection } from "@/components/sections/audience";
import { SocialProofSection } from "@/components/sections/social-proof";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShiftSection />
      <NewModelSection />
      <MetricsBar />
      <HowItWorksSection />
      <BenefitsSection />
      <AudienceSection />
      <SocialProofSection />
      <FinalCtaSection />
    </>
  );
}
