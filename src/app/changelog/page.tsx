import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milestones — BLACK&",
  description: "Key milestones, strategic developments, and major initiatives across the BLACK& ecosystem.",
};

const entries = [
  {
    version: "2026",
    date: "Q4 2026",
    title: "Expansion Across Strategic Industries",
    changes: [
      "Expansion of the BLACK& portfolio across multiple sectors",
      "Launch of new strategic development initiatives",
      "Strengthening international partnerships and collaborations",
    ],
  },
  {
    version: "2026",
    date: "Q3 2026",
    title: "Technology & Innovation Growth",
    changes: [
      "Development of AI-driven technology projects",
      "Expansion of digital infrastructure capabilities",
      "Launch of new innovation-focused business initiatives",
    ],
  },
  {
    version: "2026",
    date: "Q2 2026",
    title: "Operational Development",
    changes: [
      "Growth of construction and industrial activities",
      "Expansion of operational capabilities",
      "Implementation of new strategic frameworks",
    ],
  },
  {
    version: "2026",
    date: "Q1 2026",
    title: "Portfolio Diversification",
    changes: [
      "Expansion into additional market segments",
      "Evaluation of new investment opportunities",
      "Development of long-term growth initiatives",
    ],
  },
  {
    version: "2025",
    date: "Q4 2025",
    title: "Strategic Foundation",
    changes: [
      "Formation of BLACK& business group strategy",
      "Definition of core operating principles",
      "Identification of priority industries and opportunities",
    ],
  },
  {
    version: "2025",
    date: "Q3 2025",
    title: "BLACK& Formation",
    changes: [
      "Establishment of the BLACK& vision",
      "Creation of long-term development roadmap",
      "Foundation for future business growth",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="eyebrow">Company Timeline</div>
        <h1 className="text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Milestones.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          A timeline of strategic developments, growth initiatives, and major milestones across BLACK&.
        </p>
      </section>

      <section className="pb-24">
        <div className="flex flex-col gap-px">
          {entries.map((entry) => (
            <div key={`${entry.version}-${entry.date}`} className="aeth-card">
              <div className="mb-3 flex items-center gap-4">
                <span className="font-[var(--font-mono)] text-xs text-accent-cyan">
                  {entry.version}
                </span>
                <span className="system-label">{entry.date}</span>
              </div>

              <h2 className="text-lg font-bold">{entry.title}</h2>

              <ul className="mt-3 space-y-1.5">
                {entry.changes.map((change, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-secondary"
                  >
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
