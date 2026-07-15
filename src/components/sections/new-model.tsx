import { FadeIn } from "@/components/fade-in";

const pillars = [
  { num: "01", title: "Intelligence Technologies", desc: "AI-powered platforms, decision-support systems, industry intelligence products and advanced information environments designed to transform complexity into clarity." },
  { num: "02", title: "Strategic Ventures", desc: "New companies and initiatives created around high-conviction opportunities identified through research, intelligence and market understanding." },
  { num: "03", title: "Operating Businesses", desc: "Businesses with sustainable competitive advantages, strong leadership and long-term growth potential." },
  { num: "04", title: "Strategic Assets", desc: "Investments and ownership positions designed to create durable value across multiple economic cycles." },
];

const industries = [
  { label: "Innovation", name: "Technology" },
  { label: "Infrastructure", name: "Construction" },
  { label: "Security", name: "Defense" },
  { label: "Consumer", name: "Clothing" },
  { label: "Production", name: "Food Industry" },
  { label: "Experience", name: "Hospitality" },
];

export function NewModelSection() {
  return (
    <section className="section-elevated py-32">
      <div className="mb-20">
        <FadeIn>
          <div className="eyebrow">What We Build</div>
        </FadeIn>
        <h2 className="text-[48px] font-bold leading-[1.1] tracking-[-0.03em] max-md:text-[32px]">
          What We Build
        </h2>
        <FadeIn delay={0.3}>
          <p className="mt-8 max-w-[640px] text-lg leading-[1.7] text-secondary">
            BLACK& operates across a diverse range of sectors united by a common 
            principle: intelligence creates opportunity.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={0.15 * index}>
            <div className="aeth-card">
              <span className="section-number mb-4 block">
                {pillar.num}{" // "}{pillar.title}
              </span>
              <h3 className="mb-4 text-2xl font-bold">{pillar.title}</h3>
              <p className="leading-relaxed text-secondary">
                {pillar.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.6}>
        <div className="mt-16 flex flex-wrap gap-8 justify-center">
          {industries.map((ind) => (
            <div key={ind.name} className="text-center">
              <span className="block text-xs uppercase tracking-widest text-secondary">{ind.label}</span>
              <span className="block text-lg font-bold">{ind.name}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.8}>
        <p className="mt-12 text-center font-mono text-sm text-accent-cyan">
          Intelligence Technologies • Strategic Ventures • Operating Businesses • Strategic Assets
        </p>
      </FadeIn>
    </section>
  );
}
