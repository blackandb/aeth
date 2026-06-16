import { FadeIn } from "@/components/fade-in";

const benefits = [
  { num: "01", title: "Intelligence-Driven", desc: "We identify opportunities through market research, strategic analysis, technology, and data-driven decision making." },
  { num: "02", title: "Diversified Platform", desc: "Our portfolio spans multiple strategic industries, reducing dependency on a single market cycle." },
  { num: "03", title: "Operational Excellence", desc: "We prioritize disciplined execution, efficiency, accountability, and measurable business outcomes." },
  { num: "04", title: "Long-Term Vision", desc: "Every initiative is designed to create sustainable value and resilient growth over time." },
  { num: "05", title: "Technology Enabled", desc: "Technology, automation, and AI are embedded across our operations, processes, and decision-making systems." },
  { num: "06", title: "Strategic Partnerships", desc: "We collaborate with founders, operators, investors, and industry leaders to accelerate growth and unlock new opportunities." },
];

export function BenefitsSection() {
  return (
    <section className="section-elevated flex min-h-[80vh] flex-col justify-center py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* Left: sticky headline */}
        <FadeIn className="max-w-[360px] shrink-0 lg:sticky lg:top-32">
          <div className="eyebrow">Why BLACK&</div>
          <h2 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
            Building value through intelligence, execution, and diversification
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-secondary">
            BLACK& combines strategic thinking, operational expertise, and technology
            to build businesses, develop assets, and create long-term value across
            multiple industries.
          </p>
        </FadeIn>

        {/* Right: benefit items with left accent borders */}
        <FadeIn delay={0.2} direction="right" className="flex flex-1 flex-col gap-0">
          {benefits.map((b) => (
            <div key={b.num} className="group flex items-start gap-5 border-b border-[rgba(255,255,255,0.06)] py-6 transition-colors hover:bg-[rgba(0,240,255,0.02)]">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-accent-cyan/20 font-[var(--font-mono)] text-xs text-accent-cyan transition-colors group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/5">
                {b.num}
              </span>
              <div>
                <h3 className="text-lg font-bold">{b.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-secondary">{b.desc}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
