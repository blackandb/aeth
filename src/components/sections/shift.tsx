import { FadeIn } from "@/components/fade-in";

const problems = [
  { num: "01", cat: "Strategy", title: "Markets move fast", desc: "Opportunities change quickly across industries, requiring clear intelligence, disciplined analysis, and fast execution." },
  { num: "02", cat: "Execution", title: "Ideas need structure", desc: "Strong ideas only become valuable when they are transformed into companies, systems, operations, and measurable outcomes." },
  { num: "03", cat: "Technology", title: "Digital advantage matters", desc: "Modern businesses need technology, automation, data, and AI to compete, scale, and remain relevant in changing markets." },
  { num: "04", cat: "Portfolio", title: "Growth must be diversified", desc: "Long-term value is created by building across multiple strategic sectors rather than depending on a single market cycle." },
  { num: "05", cat: "Value", title: "Execution creates value", desc: "BLACK& focuses on turning opportunity into operational businesses, strategic assets, and sustainable long-term growth." },
];

export function ShiftSection() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* Left column */}
        <FadeIn className="max-w-[480px] shrink-0">
          <div className="eyebrow">The Opportunity Shift</div>
          <h2 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
            The next generation of companies will be built on intelligence.
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-secondary">
            Markets are changing faster than traditional businesses can react.
            BLACK& exists to identify opportunities, build scalable companies,
            and create value across strategic industries.
          </p>
          <p className="mt-8 border-l border-secondary/30 pl-4 font-[var(--font-mono)] text-sm text-secondary">
            In the new economy, opportunity is not enough. Execution is the advantage.
          </p>
        </FadeIn>

        {/* Right column - problem cards */}
        <FadeIn delay={0.2} direction="right" className="grid flex-1 grid-cols-1 gap-px sm:grid-cols-2">
          {problems.map((p, i) => (
            <div key={p.num} className={`aeth-card ${i === problems.length - 1 ? "sm:col-span-2" : ""}`}>
              <span className="section-number">{p.num} // {p.cat}</span>
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 max-w-[600px] text-sm leading-relaxed text-secondary">{p.desc}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
