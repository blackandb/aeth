"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { HeroBackground } from "@/components/hero-background";
import { TextReveal } from "@/components/text-reveal";
import { MagneticButton } from "@/components/magnetic-button";

const metrics = [
  { label: "Strategic_Readiness", value: "94%", status: "OPTIMAL" },
  { label: "Opportunity_Index", value: "99.8%", status: "ACTIVE" },
  { label: "Value_Creation", value: "+44%", status: "TRACKING" },
  { label: "Market_Position", value: "98/100", status: "INDEXED" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center">
      {/* Fundal animat — înlocuiește monolith-ul static */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 flex w-full items-end justify-between gap-12 max-lg:flex-col max-lg:items-start">
        {/* Left: headline + CTA */}
        <div className="max-w-[520px]">
          <FadeIn delay={0}>
            <div className="eyebrow">Built on Intelligence. Driven by Opportunity.</div>
          </FadeIn>

          <h1 className="mb-8 text-[72px] font-bold leading-[0.9] tracking-[-0.04em] max-lg:text-[48px] max-md:text-[36px]">
            <TextReveal text="Building companies." delay={0.2} />
            <br />
            <TextReveal text="Creating value." delay={0.5} />
          </h1>

          <FadeIn delay={0.8}>
            <p className="mb-12 max-w-[440px] text-lg leading-[1.5] text-secondary">
              BLACK& develops technology, builds companies, and creates long-term
              value across strategic industries including construction, defense,
              clothing, food industry, and hospitality.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex items-center gap-5">
              <MagneticButton className="btn btn-primary">
                <Link href="/contact">Contact Us</Link>
              </MagneticButton>
              <MagneticButton className="btn btn-secondary">
                <Link href="/industries">Explore BLACK&</Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        {/* Right: data telemetry panel */}
        <FadeIn delay={0.4} direction="right" className="flex flex-col gap-4 max-lg:mt-12 max-lg:flex-row max-lg:flex-wrap max-lg:gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="border-l border-[rgba(255,255,255,0.1)] pl-4">
              <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
                {m.label}
              </span>
              <span className="mt-1 block text-2xl font-bold tracking-tight">{m.value}</span>
              <span className="mt-0.5 flex items-center gap-1.5 font-[var(--font-mono)] text-[10px] uppercase text-accent-cyan">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {m.status}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
