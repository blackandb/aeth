import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Architecture — AETH",
  description: "Explore the multi-layered architecture behind AETH: AI readiness, personalization, automation, SEO, and telemetry.",
};

const layers = [
  { num: "01", cat: "AI Readiness Layer", desc: "Structures content semantically for Large Language Models. Generates parseable knowledge, AI-ready metadata, and optimized entity relationships ensuring AI correctly interprets and recommends your product or company.", metrics: [{ label: "Proto_Level", val: "AI" }, { label: "Parse_Rate", val: "99.8%" }, { label: "Compliance", val: "IDEAL" }] },
  { num: "02", cat: "Dynamic Personalization", desc: "Adapts UI and messaging based on visitor intent, referral source, and firmographic data. Creates tailored experiences without complex rules engines, powered by predictive modelling.", metrics: [{ label: "Personalization_Rate", val: "<50ms" }, { label: "Match_Type", val: "DYNAMIC" }] },
  { num: "03", cat: "Workflow Automation", desc: "Connects engagement directly to pipeline. Triggers sequences, updates CTAs, and notifies sales teams based on behaviour scoring calculated from interactions.", metrics: [{ label: "Proto_Active_Seq", val: "200+ ACTIVE" }, { label: "Throughput", val: "HIGH" }] },
  { num: "04", cat: "Search Discoverability", desc: "Automated technical SEO optimization. Handles core web vitals, semantic indexing, cross-linking, and structured data surfacing without manual intervention.", metrics: [{ label: "Proto_Seo_Health", val: "98/100 AVG" }, { label: "Status", val: "OPTIMIZED" }] },
  { num: "05", cat: "Telemetry & Insights", desc: "Cross-channel analytics feeding AI-powered attribution models. Tracks user journeys from first touch to closed-won, identifying friction points automatically.", metrics: [{ label: "Proto_Insight", val: "MULTI-100+" }, { label: "Signal_Type", val: "CROSS-CHANNEL" }] },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Product Architecture</div>
        <h1 className="max-w-[500px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          The anatomy of a living digital presence.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          AETH operates on a multi-layered architecture designed to process, structure,
          and optimize your website for both human engagement and artificial intelligence indexing.
        </p>
        <div className="mt-8">
          <a href="#system-stack" className="btn btn-secondary">Explore Stack</a>
        </div>
      </section>

      <section id="system-stack" className="py-24">
        <div className="mb-12 text-center">
          <div className="eyebrow justify-center">Technical Blueprint</div>
          <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em] max-md:text-[28px]">System Stack</h2>
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
        <div className="eyebrow justify-center">System Initialization</div>
        <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em]">Deploy the AETH stack.</h2>
        <p className="mt-4 max-w-[440px] text-secondary">
          Upgrade your digital presence to a system built for modern distribution.
        </p>
        <div className="mt-8">
          <Link href="/login" className="btn btn-primary">Initialize Demo</Link>
        </div>
      </section>
    </>
  );
}
