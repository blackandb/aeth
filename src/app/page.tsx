import { HeroSection } from "@/components/sections/hero";
import { ShiftSection } from "@/components/sections/opportunity-shift";
import { NewModelSection } from "@/components/sections/new-model";
import { HowWeBuildSection } from "@/components/sections/how-we-build";
import { WhyBlackandSection } from "@/components/sections/why-blackand";
import { WhoWeWorkWithSection } from "@/components/sections/who-we-work-with";
import { OurPrinciplesSection } from "@/components/sections/our-principles";
import { BuiltOnIntelligenceSection } from "@/components/sections/built-on-intelligence";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShiftSection />
      <NewModelSection />
      <HowWeBuildSection />
      <WhyBlackandSection />
      <WhoWeWorkWithSection />
      <OurPrinciplesSection />
      <BuiltOnIntelligenceSection />
    </main>
  );
}
