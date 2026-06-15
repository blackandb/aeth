import { FadeIn } from "@/components/fade-in";

const benefits = [
  { num: "01", title: "Own your digital presence", desc: "Reduce dependence on platforms you do not control." },
  { num: "02", title: "Explain your business better", desc: "Give visitors and AI systems a clearer understanding of what you do and why it matters." },
  { num: "03", title: "Improve discoverability", desc: "Make your content easier to find, interpret, and surface in the AI era." },
  { num: "04", title: "Create better journeys", desc: "Guide different visitors to the right message, offer, or next step." },
  { num: "05", title: "Automate more of the path to conversion", desc: "Support lead capture, routing, follow-up, and decision-making with less manual work." },
  { num: "06", title: "Build for what comes next", desc: "Create a web presence designed for how the internet is changing, not how it used to work." },
];

export function BenefitsSection() {
  return (
    <section className="section-elevated flex min-h-[80vh] flex-col justify-center py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* Left: sticky headline */}
        <FadeIn className="max-w-[360px] shrink-0 lg:sticky lg:top-32">
          <div className="eyebrow">What You Get</div>
          <h2 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
            A website that becomes an asset, not a placeholder
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-secondary">
            AETH helps founders move from fragmented tools and passive pages to a system
            that supports trust, discoverability, and conversion.
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
