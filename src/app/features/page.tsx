import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries — BLACK&",
  description: "Discover the industries where BLACK& develops businesses, technologies, and long-term strategic opportunities.",
};

const layers = [
  {
    num: "01",
    cat: "Technology",
    desc: "Development of software platforms, artificial intelligence solutions, digital infrastructure, data systems, and emerging technologies.",
    metrics: [
      { label: "Focus", val: "AI & SOFTWARE" },
      { label: "Growth", val: "HIGH" },
      { label: "Status", val: "ACTIVE" },
    ],
  },
  {
    num: "02",
    cat: "Construction",
    desc: "Civil, commercial, and industrial construction projects focused on sustainable development and long-term infrastructure value.",
    metrics: [
      { label: "Sector", val: "INDUSTRIAL" },
      { label: "Scope", val: "MULTI-ASSET" },
    ],
  },
  {
    num: "03",
    cat: "Defense",
    desc: "Strategic participation in defense-related technologies, security systems, industrial capabilities, and innovation initiatives.",
    metrics: [
      { label: "Focus", val: "SECURITY" },
      { label: "Status", val: "STRATEGIC" },
    ],
  },
  {
    num: "04",
    cat: "Clothing",
    desc: "Development of consumer brands, apparel manufacturing, distribution networks, and international market expansion.",
    metrics: [
      { label: "Market", val: "GLOBAL" },
      { label: "Model", val: "BRAND-LED" },
    ],
  },
  {
    num: "05",
    cat: "Food & Hospitality",
    desc: "Investment and development of food production, hospitality concepts, restaurant operations, and consumer-focused experiences.",
    metrics: [
      { label: "Sector", val: "CONSUMER" },
      { label: "Growth", val: "EXPANDING" },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Industries</div>
        <h1 className="max-w-[500px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Building across industries with intelligence and opportunity.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          BLACK& develops and supports businesses across strategic sectors where
          innovation, execution, and long-term value creation intersect.
        </p>
        <div className="mt-8">
          <a href="#system-stack" className="btn btn-secondary">Explore Industries</a>
        </div>
      </section>

      <section id="system-stack" className="py-24">
        <div className="mb-12 text-center">
          <div className="eyebrow justify-center">Strategic Focus</div>
          <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em] max-md:text-[28px]">Industry Portfolio</h2>
        </div>

        <div className="flex flex-col gap-px">
          {layers.map((l) => (
            <div key={l.num} className="aeth-card flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-[500px]">
                <span className="section-number">{l.num} // {l.cat}</span>
                <p className="mt-3 text-sm leading-relaxed text-secondary">{l.desc}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-2">
                {l.metrics.map((m) => (
                  <div key={m.label} className="data-point text-right">
                    <span className="data-label">{m.label}</span>
                    <span className="data-value">{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center py-24 text-center">
        <div className="eyebrow justify-center">Opportunities</div>
        <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em]">Let's build the future together.</h2>
        <p className="mt-4 max-w-[440px] text-secondary">
          We are open to discussing strategic partnerships, investments, and new opportunities.
        </p>
        <div className="mt-8">
          <Link href="/login" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
