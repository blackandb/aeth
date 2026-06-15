"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const metrics = [
  { label: "AI_Readiness", value: "94%", status: "OPTIMAL" },
  { label: "LLM_Parse_Rate", value: "99.8%", status: "ACTIVE" },
  { label: "Conversion_Lift", value: "+44%", status: "TRACKING" },
  { label: "SEO_Health", value: "98/100", status: "INDEXED" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center">
      {/* Monolith visual — centered */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-[320px] w-[320px]">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,45,85,0.15)_0%,transparent_70%)] blur-[40px] animate-[breathe_8s_ease-in-out_infinite]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[400px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] opacity-60 animate-[pulse_4s_infinite]" />
          <div className="absolute left-1/2 top-1/2 h-px w-[600px] -translate-x-1/2 -translate-y-1/2 -rotate-[30deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] opacity-30" />
          <div className="absolute left-1/2 top-1/2 h-px w-[500px] -translate-x-1/2 -translate-y-1/2 rotate-[160deg] bg-[linear-gradient(90deg,transparent,#FF2D55,transparent)] opacity-40" />
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-[0_0_80px_rgba(255,45,85,0.2),inset_0_0_40px_rgba(0,240,255,0.1)]" />
        </div>
      </div>

      {/* Content — two-column balanced layout */}
      <div className="relative z-10 flex w-full items-end justify-between gap-12 max-lg:flex-col max-lg:items-start">
        {/* Left: headline + CTA */}
        <div className="max-w-[520px]">
          <FadeIn delay={0}>
            <div className="eyebrow">Built for the AI era</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mb-8 text-[72px] font-bold leading-[0.9] tracking-[-0.04em] max-lg:text-[48px] max-md:text-[36px]">
              Your website should do more than exist.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-12 max-w-[440px] text-lg leading-[1.5] text-secondary">
              AETH helps founders build websites that are clear to visitors,
              readable by AI, structured for search, and designed to turn attention
              into pipeline.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex items-center gap-5">
              <Link href="/contact" className="btn btn-primary">
                Book a demo
              </Link>
              <Link href="/features" className="btn btn-secondary">
                See the system
              </Link>
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
