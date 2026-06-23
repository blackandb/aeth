import { FadeIn } from "@/components/fade-in";

const segments = [
  {
    num: "01",
    title: "Technology Platforms",
    desc: "Intelligence products, decision-support systems and advanced information environments that transform complexity into clarity.",
    tag: "TECHNOLOGY",
  },
  {
    num: "02",
    title: "Strategic Ventures",
    desc: "New companies and initiatives created around high-conviction opportunities identified through research, intelligence and market understanding.",
    tag: "VENTURES",
  },
  {
    num: "03",
    title: "Operating Businesses",
    desc: "Businesses with sustainable competitive advantages, strong leadership and long-term growth potential across strategic sectors.",
    tag: "OPERATIONS",
  },
  {
    num: "04",
    title: "Strategic Assets",
    desc: "Investments and ownership positions designed to create durable value across multiple economic cycles.",
    tag: "ASSETS",
  },
];

export function AudienceSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col items-center justify-center py-24 text-center">
      <FadeIn>
        <div className="eyebrow justify-center">The Companies We Build</div>
        <h2 className="max-w-[600px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          The Companies We Build
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          BLACK& is not limited to a single industry. Our model is designed to create,
          support and scale companies wherever intelligence can create lasting advantage.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 grid w-full grid-cols-1 gap-px sm:grid-cols-2">
        {segments.map((s) => (
          <div key={s.num} className="aeth-card text-left">
            <div className="flex items-center justify-between">
              <span className="section-number">{s.num}</span>
              <span className="border border-accent-cyan/20 px-2 py-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-accent-cyan">
                {s.tag}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{s.desc}</p>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
