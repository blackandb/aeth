import { FadeIn } from "@/components/fade-in";

const levels = [
  { label: "For Strategy", desc: "Market intelligence, opportunity analysis, disciplined decision-making, and clear direction across industries." },
  { label: "For Companies", desc: "Business creation, operational structure, technology development, and execution systems built for scale." },
  { label: "For Value", desc: "Diversified growth, long-term assets, strategic partnerships, and measurable value creation over time." },
];

export function NewModelSection() {
  return (
    <section className="section-elevated flex min-h-[80vh] flex-col items-center justify-center py-24 text-center">
      <FadeIn>
        <div className="eyebrow justify-center">A New Model</div>
        <h2 className="max-w-[700px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          BLACK& is built as a platform for companies, technology, and opportunity.
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-lg leading-[1.5] text-secondary">
          The new standard is not a single business in a single industry. It is a
          diversified platform that identifies opportunities, builds companies, and
          creates long-term value.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-16 grid w-full grid-cols-1 gap-px md:grid-cols-3">
        {levels.map((l, i) => (
          <div key={l.label} className="aeth-card text-left">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center border border-accent-cyan/30 font-[var(--font-mono)] text-xs text-accent-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-accent-cyan">{l.label}</span>
            </div>
            <p className="text-sm leading-relaxed text-secondary">{l.desc}</p>
          </div>
        ))}
      </FadeIn>

      <p className="mt-12 font-[var(--font-mono)] text-sm text-secondary">
        [ ANALYSIS: THIS IS NOT A SINGLE COMPANY. IT IS A VALUE CREATION PLATFORM. ]
      </p>
    </section>
  );
}
