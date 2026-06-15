import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

export function FinalCtaSection() {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <FadeIn>
          <div className="eyebrow justify-center">Make the Shift</div>
          <h2 className="mt-6 max-w-[800px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
            Build a website that is ready for how the internet works now.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mx-auto mt-8 max-w-[560px] text-lg leading-[1.5] text-secondary">
            If your website still acts like a brochure, it is already behind. AETH helps
            you build a system that is clearer, smarter, and more useful to the people
            and machines that shape demand.
          </p>
          <div className="mt-12 flex items-center justify-center gap-5">
            <Link href="/contact" className="btn btn-primary">Book a demo</Link>
            <Link href="/features" className="btn btn-secondary">Explore the system</Link>
          </div>
          <p className="mt-8 font-[var(--font-mono)] text-xs uppercase tracking-[0.15em] text-secondary">
            See how AETH can turn your website into owned digital infrastructure.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
