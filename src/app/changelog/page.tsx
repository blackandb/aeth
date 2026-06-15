import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — AETH",
  description: "Track every update, improvement, and new feature shipped in the AETH platform.",
};

const entries = [
  { version: "0.4.1", date: "Mar 15, 2026", title: "AI Readiness Score improvements", changes: ["Refined scoring algorithm for semantic structure analysis", "Added schema.org validation layer", "Improved LLM citation tracking accuracy by 23%"] },
  { version: "0.4.0", date: "Mar 1, 2026", title: "Automation workflows launch", changes: ["New visual workflow builder for lead routing", "Intent-based visitor segmentation engine", "Automated follow-up sequences", "Webhook integrations for external tools"] },
  { version: "0.3.2", date: "Feb 15, 2026", title: "Personalization engine beta", changes: ["Dynamic content blocks based on visitor context", "A/B testing for CTA variants", "Geo-based content adaptation"] },
  { version: "0.3.0", date: "Feb 1, 2026", title: "Dashboard redesign", changes: ["New system overview with 7 key metric widgets", "Real-time conversion signal tracking", "Recommended next actions panel"] },
  { version: "0.2.0", date: "Jan 15, 2026", title: "Content structuring engine", changes: ["AI-powered content analysis and restructuring", "Automatic semantic hierarchy generation", "Knowledge block system for AI discoverability"] },
  { version: "0.1.0", date: "Jan 1, 2026", title: "Initial launch", changes: ["Core page builder with visual editor", "Template library with 12 industry presets", "Basic analytics dashboard", "Custom domain support"] },
];

export default function ChangelogPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="eyebrow">System Log</div>
        <h1 className="text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          What&apos;s new.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          A running log of updates, features, and improvements to the AETH platform.
        </p>
      </section>

      <section className="pb-24">
        <div className="flex flex-col gap-px">
          {entries.map((entry) => (
            <div key={entry.version} className="aeth-card">
              <div className="mb-3 flex items-center gap-4">
                <span className="font-[var(--font-mono)] text-xs text-accent-cyan">v{entry.version}</span>
                <span className="system-label">{entry.date}</span>
              </div>
              <h2 className="text-lg font-bold">{entry.title}</h2>
              <ul className="mt-3 space-y-1.5">
                {entry.changes.map((change, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1.5 inline-block h-1 w-1 shrink-0 bg-accent-cyan" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
