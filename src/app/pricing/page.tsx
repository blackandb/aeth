import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — AETH",
  description: "Simple pricing, no surprises. Start free, scale as you grow. Every plan includes the core intelligence layer.",
};

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "For founders exploring a new approach to their web presence.",
    features: ["1 site", "Core page builder", "Basic AI structuring", "Community support", "Subdomain hosting"],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "For teams ready to build an intelligent, conversion-ready system.",
    features: ["3 sites", "Advanced page builder", "Full AI structuring & scoring", "Automation workflows", "Personalization engine", "Custom domain", "Priority support", "Analytics dashboard"],
    cta: "Start with Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations that need white-label, scale, and dedicated support.",
    features: ["Unlimited sites", "White-label platform", "Custom integrations", "Dedicated account manager", "SLA guarantees", "SSO & advanced security"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">System Pricing</div>
        <h1 className="max-w-[500px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Simple pricing. No surprises.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          Start free, scale as you grow. Every plan includes the core intelligence layer.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`aeth-card flex flex-col ${plan.highlighted ? "border-accent-cyan/30" : ""}`}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-block w-fit bg-accent-cyan px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-black">
                  Recommended
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
