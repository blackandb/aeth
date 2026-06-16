import { FadeIn } from "@/components/fade-in";

const segments = [
  {
    num: "01",
    title: "Entrepreneurs",
    desc: "Founders and business builders looking to create, scale, and diversify companies across strategic industries.",
    tag: "FOUNDERS",
  },
  {
    num: "02",
    title: "Strategic Partners",
    desc: "Organizations seeking long-term partnerships, joint ventures, and collaboration opportunities.",
    tag: "PARTNERSHIPS",
  },
  {
    num: "03",
    title: "Investors",
    desc: "Private investors, family offices, and institutional capital seeking exposure to high-potential opportunities.",
    tag: "CAPITAL",
  },
  {
    num: "04",
    title: "Corporate & Institutional Clients",
    desc: "Businesses, public entities, and institutions looking for innovation, execution, and strategic development capabilities.",
    tag: "ENTERPRISE",
  },
];

export function AudienceSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col items-center justify-center py-24 text-center">
      <FadeIn>
        <div className="eyebrow justify-center">Who We Work With</div>
        <h2 className="max-w-[600px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          Building value alongside ambitious people and organizations.
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          BLACK& collaborates with entrepreneurs, investors, partners, and institutions
          that share a long-term vision for growth and value creation.
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
