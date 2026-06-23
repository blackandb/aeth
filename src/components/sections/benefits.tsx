import { FadeIn } from "@/components/fade-in";

const benefits = [
  { num: "01", title: "Intelligence Before Capital", desc: "Insight creates conviction. Capital follows. We understand what others miss before deploying resources." },
  { num: "02", title: "Long-Term By Design", desc: "We build with decades in mind. Every initiative is designed to create sustainable value and resilient growth over time." },
  { num: "03", title: "Enterprise Over Speculation", desc: "We prioritize real businesses, real products and real value creation. Not ideas. Not trends. Enterprise." },
  { num: "04", title: "Conviction Over Consensus", desc: "Meaningful opportunities rarely emerge from conventional thinking. We act on conviction, not crowd consensus." },
  { num: "05", title: "Execution Creates Value", desc: "Ideas inspire. Execution compounds. We turn intelligence into operating realities that generate measurable outcomes." },
  { num: "06", title: "Enduring Assets Matter", desc: "Our objective is not temporary success. Our objective is lasting relevance. We build assets that endure and compound." },
];

export function BenefitsSection() {
  return (
    <section className="section-elevated flex min-h-[80vh] flex-col justify-center py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-12">
        {/* Left: fixed width headline */}
        <FadeIn className="w-full max-w-[360px] shrink-0 lg:w-[360px]">
          <div className="eyebrow">Why We Exist</div>
          <h2 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
            We believe the future belongs to organizations that think differently and build for the long term.
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-secondary">
            The world does not need more information. It needs better intelligence.
            It does not need more ideas. It needs more execution. BLACK& exists to bridge that gap.
          </p>
        </FadeIn>

        {/* Right: benefit items in a compact container */}
        <FadeIn delay={0.2} direction="right" className="w-full lg:flex-1">
          <div className="flex flex-col">
            {benefits.map((b) => (
              <div key={b.num} className="group flex items-start gap-5 border-b border-[rgba(255,255,255,0.06)] py-6 transition-colors hover:bg-[rgba(0,240,255,0.02)]">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-accent-cyan/20 font-[var(--font-mono)] text-xs text-accent-cyan transition-colors group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/5">
                  {b.num}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
