import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const steps = [
  { num: "01", cat: "Structural_Foundation", title: "Build the foundation", desc: "Create pages, sections, and core messaging in a clean visual workflow.", tags: ["Page Builder", "Component Library"] },
  { num: "02", cat: "Knowledge_Graphing", title: "Structure the content", desc: "Turn your website into a clear knowledge layer that AI and search systems can interpret.", tags: ["AI Structuring", "Semantic Content Layer"] },
  { num: "03", cat: "Logic_Orchestration", title: "Add logic and flows", desc: "Connect forms, intent paths, automations, and personalized experiences.", tags: ["Personalization Logic", "Automation Workflows"] },
  { num: "04", cat: "Signal_Optimization", title: "Improve over time", desc: "Use signals, content performance, and conversion insights to keep refining the system.", tags: ["Insight Signals", "Feedback Loops"] },
];

export function HowItWorksSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col justify-center py-24">
      <FadeIn>
        <div className="eyebrow">How It Works</div>
        <h2 className="max-w-[600px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          From website to intelligent system
        </h2>
        <p className="mt-6 max-w-[600px] text-lg leading-[1.5] text-secondary">
          AETH gives founders one platform to build, structure, and evolve a website
          that works across people, AI, and search.
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
        <Link href="/contact" className="btn btn-primary">Book a demo</Link>
      </FadeIn>
    </section>
  );
}
