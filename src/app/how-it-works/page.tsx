import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — AETH",
  description: "From website to intelligent system: build, structure, automate, and optimize your digital presence with AETH.",
};

const steps = [
  { num: "01", cat: "Build", title: "Build the foundation", desc: "Create pages, sections, and core messaging in a clean visual workflow.", metrics: [{ l: "Pages", v: "12 active" }, { l: "Sections", v: "48 deployed" }] },
  { num: "02", cat: "Structure", title: "Structure the content", desc: "Turn your website into a clear knowledge layer that AI and search systems can interpret.", metrics: [{ l: "AI_Readiness", v: "94%" }, { l: "Semantic_Score", v: "A+" }] },
  { num: "03", cat: "Automate", title: "Add logic and flows", desc: "Connect forms, intent paths, automations, and personalized experiences.", metrics: [{ l: "Workflows", v: "6 running" }, { l: "Automations", v: "12 active" }] },
  { num: "04", cat: "Optimize", title: "Improve over time", desc: "Use signals, content performance, and conversion insights to keep refining the system.", metrics: [{ l: "Conversion", v: "+34%" }, { l: "AI_Citations", v: "18/week" }] },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Operating Protocol</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          The Architecture of Action.
        </h1>
        <p className="mt-6 max-w-[560px] text-lg leading-[1.5] text-secondary">
          AETH gives founders one platform to build, structure, and evolve a website
          that works across people, AI, and search.
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
          <Link href="/login" className="btn btn-primary">Initialize Workflow</Link>
        </div>
      </section>
    </>
  );
}
