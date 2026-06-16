import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — BLACK&",
  description: "BLACK& is a diversified business group focused on building companies, developing technology, and creating long-term value across strategic industries.",
};

const values = [
  { num: "01", title: "Intelligence First", desc: "We use data, technology, and strategic analysis to identify opportunities and create sustainable competitive advantages." },
  { num: "02", title: "Long-Term Value", desc: "We focus on building resilient businesses and assets designed to generate lasting value across economic cycles." },
  { num: "03", title: "Operational Excellence", desc: "Execution matters. We prioritize efficiency, discipline, and measurable outcomes in every project we undertake." },
  { num: "04", title: "Diversified Growth", desc: "Our portfolio spans technology, construction, defense, clothing, food industry, and hospitality to capture opportunities across sectors." },
];

export default function AboutPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Company Overview</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Built on Intelligence. Driven by Opportunity.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          BLACK& is a diversified business group focused on identifying opportunities,
          building companies, and creating long-term value across strategic industries.
        </p>
      </section>

      <section className="py-24">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="max-w-[400px] shrink-0">
            <div className="eyebrow">Mission</div>
            <h2 className="text-[40px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[28px]">
              Intelligence creates opportunity. Execution creates value.
            </h2>
          </div>
          <div className="max-w-[500px] space-y-6 text-sm leading-relaxed text-secondary">
            <p>BLACK& operates across multiple industries where innovation, execution, and long-term thinking create competitive advantage.</p>
            <p>Our activities span technology, construction, defense, clothing, food industry, hospitality, and emerging opportunities aligned with our strategic vision.</p>
            <p>We combine market intelligence, operational expertise, and disciplined execution to develop businesses capable of generating sustainable growth and long-term value.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="eyebrow">Core Values</div>
        <h2 className="text-[40px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[28px]">Our principles.</h2>
        <div className="mt-12 grid grid-cols-1 gap-px md:grid-cols-2">
          {values.map((v) => (
            <div key={v.num} className="aeth-card">
              <span className="section-number">[{v.num}]</span>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="eyebrow">Vision</div>
        <h2 className="max-w-[500px] text-[40px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[28px]">Where we are going.</h2>
        <p className="mt-6 max-w-[500px] text-sm leading-relaxed text-secondary">
          We envision BLACK& as a globally recognized business group developing
          companies, technologies, and strategic initiatives that create lasting
          economic value while contributing to the advancement of the industries
          in which we operate.
        </p>
        <div className="mt-8">
          <Link href="/login" className="btn btn-primary">Explore Opportunities</Link>
        </div>
      </section>
    </>
  );
}
