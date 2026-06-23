import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Opportunities — BLACK&",
  description: "Explore how BLACK& approaches partnerships, strategic opportunities, and long-term business development.",
};

const plans = [
  {
    name: "Partnerships",
    price: "Strategic",
    period: "collaboration",
    desc: "For companies, founders, and operators seeking long-term cooperation with BLACK&.",
    features: ["Joint ventures", "Business development", "Market access", "Operational support", "Strategic alignment"],
    cta: "Discuss Partnership",
    highlighted: false,
  },
  {
    name: "Business Building",
    price: "Active",
    period: "development",
    desc: "For opportunities that can be transformed into scalable companies, platforms, or operating businesses.",
    features: ["Company creation", "Technology development", "Operational structure", "Growth strategy", "Execution support", "Market expansion", "Strategic management", "Long-term planning"],
    cta: "Explore Opportunity",
    highlighted: true,
  },
  {
    name: "Investment Approach",
    price: "Selective",
    period: "review",
    desc: "For projects, assets, and ventures with strong strategic fit and long-term value potential.",
    features: ["Opportunity evaluation", "Industry analysis", "Capital allocation", "Strategic partnerships", "Portfolio development", "Long-term value focus"],
    cta: "Contact BLACK&",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Opportunities</div>
        <h1 className="max-w-[500px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Strategic opportunities, built for long-term growth.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          BLACK& works with entrepreneurs, partners, investors, and institutions to develop companies, assets, and initiatives across strategic industries.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`aeth-card flex flex-col ${plan.highlighted ? "border-accent-cyan/30" : ""}`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit bg-accent-cyan px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-black">
                  Core Focus
                </span>
              )}
              <span className="system-label">{plan.name}</span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-secondary">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{plan.desc}</p>

              <ul className="mt-6 flex-1 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-secondary">
                    <span className="text-accent-cyan">+</span> {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className={plan.highlighted ? "btn btn-primary mt-8" : "btn btn-secondary mt-8"}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
