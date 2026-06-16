import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const steps = [
  { num: "01", cat: "Market_Intelligence", title: "Identify opportunities", desc: "We analyze markets, industries, and emerging trends to identify high-potential opportunities.", tags: ["Market Analysis", "Strategic Intelligence"] },
  { num: "02", cat: "Company_Building", title: "Build and develop", desc: "We create companies, technologies, and operational structures designed for long-term growth.", tags: ["Business Creation", "Technology Development"] },
  { num: "03", cat: "Execution_Model", title: "Scale and execute", desc: "We focus on disciplined execution, operational excellence, and sustainable expansion across strategic sectors.", tags: ["Operational Systems", "Scalable Growth"] },
  { num: "04", cat: "Value_Creation", title: "Create long-term value", desc: "We generate value through innovation, diversification, strategic partnerships, and intelligent capital allocation.", tags: ["Strategic Partnerships", "Long-Term Value"] },
];

export function HowItWorksSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col justify-center py-24">
      <FadeIn>
        <div className="eyebrow">How We Build</div>
        <h2 className="max-w-[600px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          From opportunity to operating company
        </h2>
        <p className="mt-6 max-w-[600px] text-lg leading-[1.5] text-secondary">
          BLACK& transforms strategic opportunities into companies, platforms, and
          assets built for long-term value creation.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2">
        {steps.map((s) => (
          <div key={s.num} className="aeth-card">
            <span className="section-number">{s.num} // {s.cat}</span>
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
