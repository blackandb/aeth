import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function FinalCtaSection() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <FadeIn>
          <div className="eyebrow justify-center">Building What Comes Next</div>
          <h2 className="mt-6 max-w-[800px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
            We transform information into intelligence, intelligence into enterprise and enterprise into enduring assets.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-8 max-w-[560px] text-lg leading-[1.5] text-secondary">
            BLACK& develops intelligence technologies, deploys strategic capital
            and builds enterprises designed to create lasting value across generations.
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
            Information → Intelligence → Enterprise → Assets
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
