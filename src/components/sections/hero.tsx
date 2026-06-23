"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const metrics = [
  { label: "Strategic_Readiness", value: "94%", status: "OPTIMAL" },
  { label: "Opportunity_Index", value: "99.8%", status: "ACTIVE" },
  { label: "Value_Creation", value: "+44%", status: "TRACKING" },
  { label: "Market_Position", value: "98/100", status: "INDEXED" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      {/* Monolith visual — centered, scaled down on mobile */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px]">
          <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,85,0.15)_0%,transparent_70%)] blur-[40px] animate-[breathe_8s_ease-in-out_infinite]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[250px] sm:w-[350px] md:w-[400px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] opacity-60 animate-[pulse_4s_infinite]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[350px] sm:w-[500px] md:w-[600px] -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] opacity-30" />
          <div className="absolute left-1/2 top-1/2 h-px w-[300px] sm:w-[400px] md:w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-[160deg] bg-[linear-gradient(90deg,transparent,#FF2D55,transparent)] opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_80px_rgba(255,45,85,0.2),inset_0_0_40px_rgba(0,240,255,0.1)]" />
        </div>
      </div>

      {/* Content — responsive layout */}
      <div className="relative z-10 flex w-full flex-col items-start gap-12 lg:flex-row lg:items-end lg:justify-between">
        {/* Left: headline + CTA */}
        <div className="max-w-full lg:max-w-[520px]">
          <FadeIn delay={0}>
            <div className="eyebrow">Built on Intelligence. Driven by Opportunity.</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-[clamp(32px,8vw,72px)] font-bold leading-[0.9] tracking-[-0.04em] sm:mb-8">
              Building companies. Creating value.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-8 max-w-full text-base leading-[1.5] text-secondary sm:mb-12 sm:max-w-[440px] sm:text-lg">
              BLACK& develops technology, builds companies, and creates long-term
              value across strategic industries including construction, defense,
              clothing, food industry, and hospitality.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
              <Link href="/contact" className="btn btn-primary text-center">
                Contact Us
              </Link>
              <Link href="/industries" className="btn btn-secondary text-center">
                Explore BLACK&
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right: data telemetry panel */}
        <FadeIn delay={0.4} direction="right" className="flex w-full flex-row flex-wrap gap-4 sm:gap-6 lg:mt-0 lg:w-auto lg:flex-col">
          {metrics.map((m) => (
            <div key={m.label} className="min-w-[140px] border-l border-[rgba(255,255,255,0.1)] pl-4">
              <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
                {m.label}
              </span>
              <span className="mt-1 block text-xl font-bold tracking-tight sm:text-2xl">{m.value}</span>
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
