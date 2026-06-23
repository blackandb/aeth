import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opportunities — BLACK&",
  description: "Strategic opportunities for partnerships, business building, and investment with BLACK& across multiple industries.",
  alternates: { canonical: "https://blackandi.com/opportunities" },
  openGraph: {
    title: "Opportunities — BLACK&",
    description: "Strategic opportunities, built for long-term growth.",
    url: "https://blackandi.com/opportunities",
    images: [{ url: "/og-opportunities.jpg", width: 1200, height: 630 }],
  },
};

const opportunities = [
  {
    title: "Strategic Partnerships",
    status: "Collaboration",
    description:
      "For companies, founders, and operators seeking long-term cooperation with BLACK&.",
    items: [
      "Joint ventures",
      "Business development",
      "Market access",
      "Operational support",
      "Strategic alignment",
    ],
    cta: "Discuss Partnership",
    href: "/contact",
    accent: false,
  },
  {
    title: "Business Building",
    status: "Active Development",
    description:
      "For opportunities that can be transformed into scalable companies, platforms, or operating businesses.",
    items: [
      "Company creation",
      "Technology development",
      "Operational structure",
      "Growth strategy",
      "Execution support",
      "Market expansion",
      "Strategic management",
      "Long-term planning",
    ],
    cta: "Explore Opportunity",
    href: "/contact",
    accent: true,
  },
  {
    title: "Investment Approach",
    status: "Selective Review",
    description:
      "For projects, assets, and ventures with strong strategic fit and long-term value potential.",
    items: [
      "Opportunity evaluation",
      "Industry analysis",
      "Capital allocation",
      "Strategic partnerships",
      "Portfolio development",
      "Long-term value focus",
    ],
    cta: "Contact BLACK&",
    href: "/contact",
    accent: false,
  },
];

export default function OpportunitiesPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Opportunities</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Strategic opportunities, built for long-term growth.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          BLACK& works with entrepreneurs, partners, investors, and institutions
          to develop companies, assets, and initiatives across strategic
          industries.
        </p>
      </section>

      <section className="py-24">
        <div className="flex flex-col gap-px">
          {opportunities.map((opp, i) => (
            <div
              key={opp.title}
              className={`aeth-card flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between ${
                opp.accent ? "border-accent-cyan/20" : ""
              }`}
            >
              <div className="max-w-[500px]">
                <span className="section-number">
                  {String(i + 1).padStart(2, "0")} // {opp.status}
                </span>
                <h2 className="mt-3 text-2xl font-bold">{opp.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-secondary">
                  {opp.description}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {opp.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 font-[var(--font-mono)] text-[11px] uppercase tracking-wider text-secondary"
                  >
                    <span className="text-accent-cyan">+</span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="shrink-0">
                <Link
                  href={opp.href}
                  className={`btn ${opp.accent ? "btn-primary" : "btn-secondary"}`}
                >
                  {opp.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center py-24 text-center">
        <div className="eyebrow justify-center">Get Started</div>
        <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em]">
          Ready to explore opportunities?
        </h2>
        <p className="mt-4 max-w-[440px] text-secondary">
          Reach out to discuss how BLACK& can help build your next venture.
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
