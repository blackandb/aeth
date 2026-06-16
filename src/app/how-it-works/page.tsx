import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Build — BLACK&",
  description: "Discover how BLACK& identifies opportunities, builds companies, scales operations, and creates long-term value.",
};

const steps = [
  { num: "01", cat: "Identify", title: "Identify opportunities", desc: "We analyze markets, sectors, trends, and strategic gaps to identify opportunities with long-term potential.", metrics: [{ l: "Focus", v: "Market Intelligence" }, { l: "Signal", v: "High Potential" }] },
  { num: "02", cat: "Build", title: "Build the foundation", desc: "We structure companies, technologies, partnerships, and operating models designed for disciplined execution.", metrics: [{ l: "Model", v: "Company Building" }, { l: "Structure", v: "Scalable" }] },
  { num: "03", cat: "Execute", title: "Scale operations", desc: "We focus on execution, operational systems, strategic partnerships, and measurable growth across active industries.", metrics: [{ l: "Execution", v: "Active" }, { l: "Operations", v: "Aligned" }] },
  { num: "04", cat: "Create", title: "Create long-term value", desc: "We develop resilient businesses and strategic assets built to generate sustainable value over time.", metrics: [{ l: "Value", v: "Long-Term" }, { l: "Vision", v: "Strategic" }] },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Operating Model</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          From opportunity to operating company.
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-[1.5] text-secondary">
          BLACK& transforms strategic opportunities into companies, platforms,
          partnerships, and assets built for long-term growth.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2">
          {steps.map((s) => (
            <div key={s.num} className="aeth-card">
              <span className="section-number">{s.num} // {s.cat}</span>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{s.desc}</p>
              <div className="mt-4 flex gap-6">
                {s.metrics.map((m) => (
                  <div key={m.l} className="data-point">
                    <span className="data-label">{m.l}</span>
                    <span className="data-value">{m.v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/login" className="btn btn-primary">LOGIN</Link>
        </div>
      </section>
    </>
  );
}
