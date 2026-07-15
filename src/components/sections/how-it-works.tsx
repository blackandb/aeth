import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const steps = [
  { num: "01", cat: "Information", title: "Signals, data, knowledge", desc: "Every enterprise begins with signals, data, knowledge and market observations.", tags: ["Data Acquisition", "Market Signals"] },
  { num: "02", cat: "Intelligence", title: "Analysis, context, conviction", desc: "We transform information into analysis, context, conviction and strategic understanding.", tags: ["Strategic Analysis", "Context Building"] },
  { num: "03", cat: "Enterprise", title: "Companies, technologies, products", desc: "We build companies, technologies, products and operating businesses designed for long-term growth.", tags: ["Business Creation", "Technology Development"] },
  { num: "04", cat: "Assets", title: "Long-term value", desc: "We create long-term value designed to endure, grow and compound across multiple economic cycles.", tags: ["Enduring Value", "Compounding Growth"] },
];

export function HowItWorksSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col justify-center py-24">
      <FadeIn>
        <div className="eyebrow">From Information To Enduring Assets</div>
        <h2 className="max-w-[600px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          From Information To Enduring Assets
        </h2>
        <p className="mt-6 max-w-[600px] text-lg leading-[1.5] text-secondary">
          Every enterprise begins with information. Most organizations stop there.
          BLACK& follows a different path.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2">
        {steps.map((s) => (
          <div key={s.num} className="aeth-card">
            <span className="section-number">{s.num}{" // "}{s.cat}</span>
            <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{s.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span key={t} className="border border-[rgba(255,255,255,0.1)] px-3 py-1 font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-secondary">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </FadeIn>

      <FadeIn delay={0.3} className="mt-12">
        <Link href="/contact" className="btn btn-primary">Contact Us</Link>
      </FadeIn>
    </section>
  );
}
