import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Build — BLACK&",
  description: "From opportunity to operating company. Discover how BLACK& transforms strategic opportunities into scalable businesses and long-term assets.",
  alternates: { canonical: "https://blackandi.com/how-we-build" },
  openGraph: {
    title: "How We Build — BLACK&",
    description: "From opportunity to operating company.",
    url: "https://blackandi.com/how-we-build",
    images: [{ url: "/og-how-we-build.jpg", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    num: "01",
    cat: "Identify",
    title: "Identify opportunities",
    desc: "We analyze markets, sectors, trends, and strategic gaps to identify opportunities with long-term potential.",
    focus: "Market Intelligence",
    signal: "High Potential",
  },
  {
    num: "02",
    cat: "Build",
    title: "Build the foundation",
    desc: "We structure companies, technologies, partnerships, and operating models designed for disciplined execution.",
    focus: "Company Building",
    signal: "Scalable",
  },
  {
    num: "03",
    cat: "Execute",
    title: "Scale operations",
    desc: "We focus on execution, operational systems, strategic partnerships, and measurable growth across active industries.",
    focus: "Active Execution",
    signal: "Operations Aligned",
  },
  {
    num: "04",
    cat: "Create",
    title: "Create long-term value",
    desc: "We develop resilient businesses and strategic assets built to generate sustainable value over time.",
    focus: "Long-Term Value",
    signal: "Strategic Vision",
  },
];

export default function HowWeBuildPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">How We Build</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          From opportunity to operating company.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          BLACK& transforms strategic opportunities into companies, platforms,
          partnerships, and assets built for long-term growth.
        </p>
      </section>

      <section className="py-24">
        <div className="flex flex-col gap-px">
          {steps.map((step) => (
            <div
              key={step.num}
              className="aeth-card flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between"
            >
              <div className="max-w-[500px]">
                <span className="section-number">
                  {step.num} // {step.cat}
                </span>
                <h2 className="mt-3 text-2xl font-bold">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {step.desc}
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-2">
                <div className="data-point text-right">
                  <span className="data-label">Focus</span>
                  <span className="data-value">{step.focus}</span>
                </div>
                <div className="data-point text-right">
                  <span className="data-label">Signal</span>
                  <span className="data-value text-accent-cyan">
                    {step.signal}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center py-24 text-center">
        <div className="eyebrow justify-center">Start Building</div>
        <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em]">
          Ready to build with us?
        </h2>
        <p className="mt-4 max-w-[440px] text-secondary">
          Let's discuss how we can transform your opportunity into a thriving
          business.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
