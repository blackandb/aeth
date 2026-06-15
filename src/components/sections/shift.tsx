import { FadeIn } from "@/components/fade-in";

const problems = [
  { num: "01", cat: "Architecture", title: "Static by design", desc: "Built as fixed templates that require manual updates for every change in market or product positioning." },
  { num: "02", cat: "Distribution", title: "Dependent on platforms", desc: "Relies entirely on external algorithms and social feeds for visibility rather than owning its search intent." },
  { num: "03", cat: "Readability", title: "Hard for AI to understand", desc: "Obscure semantics and heavy scripts prevent LLMs from accurately indexing your value proposition." },
  { num: "04", cat: "Integration", title: "Too fragmented", desc: "Disconnected from the actual tools founders use to run their business, creating a lag in data reporting." },
  { num: "05", cat: "Performance", title: "Weak at conversion", desc: "Optimized for \u201Ctraffic\u201D rather than the specific, high-intent interactions that move the needle for modern independent founders." },
];

export function ShiftSection() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
        {/* Left column */}
        <FadeIn className="max-w-[480px] shrink-0">
          <div className="eyebrow">The Shift</div>
          <h2 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
            Most websites were built for the last version of the internet.
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-secondary">
            Traditional digital presences are silos designed for manual browsing.
            In a world where AI agents and LLMs are the primary consumers of data,
            the old architecture creates friction, loss of signal, and missed opportunities.
          </p>
          <p className="mt-8 border-l border-secondary/30 pl-4 font-[var(--font-mono)] text-sm text-secondary">
            In the AI era, your website cannot be a static page. It has to be a system.
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
