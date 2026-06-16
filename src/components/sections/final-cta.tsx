import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function FinalCtaSection() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <FadeIn>
          <div className="eyebrow justify-center">Built on Intelligence</div>
          <h2 className="mt-6 max-w-[800px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
            Creating companies, developing industries, building long-term value.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-8 max-w-[560px] text-lg leading-[1.5] text-secondary">
            BLACK& identifies opportunities, develops businesses, and partners with
            entrepreneurs, investors, corporations, and institutions to create
            sustainable growth across strategic industries.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>

            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <p className="mt-8 font-[var(--font-mono)] text-xs uppercase tracking-[0.15em] text-secondary">
            Technology • Construction • Defense • Clothing • Food Industry • Hospitality
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
