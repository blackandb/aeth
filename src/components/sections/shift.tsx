import { FadeIn } from "@/components/fade-in";

const pillars = [
  { num: "01", cat: "Intelligence", title: "Understanding what others miss", desc: "We acquire knowledge, generate insight and develop conviction that others cannot replicate." },
  { num: "02", cat: "Technology", title: "Building tools that create leverage", desc: "We build AI-powered platforms, decision-support systems and advanced information environments." },
  { num: "03", cat: "Capital", title: "Deploying resources with discipline", desc: "We deploy strategic capital with conviction, discipline and long-term orientation." },
  { num: "04", cat: "Execution", title: "Turning ideas into operating realities", desc: "We turn intelligence into opportunity, opportunity into enterprise and enterprise into enduring assets." },
];

export function ShiftSection() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-24">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-12">
        {/* Left column — fixed width, doesn't stretch */}
        <FadeIn className="w-full max-w-[480px] shrink-0 lg:w-[480px]">
          <div className="eyebrow">Intelligence Is The Foundation</div>
          <h2 className="text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
            Intelligence Is The Foundation Of Modern Enterprise
          </h2>
          <p className="mt-6 text-lg leading-[1.5] text-secondary">
            The most valuable organizations of the future will not be defined solely
            by capital, scale or infrastructure. They will be defined by their ability
            to acquire knowledge, generate insight and act with conviction.
          </p>
          <p className="mt-8 border-l border-secondary/30 pl-4 font-[var(--font-mono)] text-sm text-secondary">
            In a world overwhelmed by information, intelligence has become the ultimate competitive advantage.
          </p>
        </FadeIn>

        {/* Right column — cards in a compact grid */}
        <FadeIn delay={0.2} direction="right" className="w-full lg:flex-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-4">
            {pillars.map((p) => (
              <div key={p.num} className="aeth-card">
                <span className="section-number">{p.num} // {p.cat}</span>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{p.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
