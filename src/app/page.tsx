import { HeroSection } from "@/components/sections/hero";
import { IntelligenceFoundationSection } from "@/components/sections/intelligence-foundation";
import { EnduringAssetsSection } from "@/components/sections/enduring-assets";
import { WhatWeBuildSection } from "@/components/sections/what-we-build";
import { OperatingModelSection } from "@/components/sections/operating-model";
import { CompaniesSection } from "@/components/sections/companies";
import { WhyWeExistSection } from "@/components/sections/why-we-exist";
import { PrinciplesSection } from "@/components/sections/principles";
import { FinalCTASection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntelligenceFoundationSection />
      <EnduringAssetsSection />
      <WhatWeBuildSection />
      <OperatingModelSection />
      <CompaniesSection />
      <WhyWeExistSection />
      <PrinciplesSection />
      <FinalCTASection />
    </main>
  );
}
