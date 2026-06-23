import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates — BLACK&",
  description: "Latest updates, milestones, and developments from BLACK& across our portfolio and strategic initiatives.",
  alternates: { canonical: "https://blackandi.com/updates" },
  openGraph: {
    title: "Updates — BLACK&",
    description: "Latest developments and milestones.",
    url: "https://blackandi.com/updates",
    images: [{ url: "/og-updates.jpg", width: 1200, height: 630 }],
  },
};

const updates = [
  {
    date: "2026-06-20",
    version: "V1.01",
    title: "Platform Launch",
    description: "BLACK& digital platform launched with full portfolio visibility and investor relations capabilities.",
    tags: ["Platform", "Launch"],
  },
  {
    date: "2026-05-15",
    version: "—",
    title: "New Partnership Announced",
    description: "Strategic partnership established with leading technology firm to accelerate AI development across portfolio companies.",
    tags: ["Partnership", "Technology"],
  },
  {
    date: "2026-04-30",
    version: "—",
    title: "Construction Division Expansion",
    description: "Expanded construction operations with new sustainable development projects in key markets.",
    tags: ["Construction", "Growth"],
  },
  {
    date: "2026-03-20",
    version: "—",
    title: "Defense Sector Entry",
    description: "Strategic entry into defense-related technologies and security systems through targeted acquisition.",
    tags: ["Defense", "Acquisition"],
  },
  {
    date: "2026-02-10",
    version: "—",
    title: "Hospitality Portfolio Growth",
    description: "Added two new hospitality concepts to the portfolio, expanding consumer experience offerings.",
    tags: ["Hospitality", "Portfolio"],
  },
];

export default function UpdatesPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Updates</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Latest developments and milestones.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          Track our progress, portfolio developments, and strategic initiatives
          across industries.
        </p>
      </section>

      <section className="py-24">
        <div className="mb-12">
          <div className="eyebrow">Timeline</div>
          <h2 className="mt-4 text-[32px] font-bold tracking-[-0.04em]">
            Recent Updates
          </h2>
        </div>

        <div className="flex flex-col gap-px">
          {updates.map((update) => (
            <div key={update.title} className="aeth-card">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-[600px]">
                  <div className="flex items-center gap-3">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-accent-cyan">
                      {update.version}
                    </span>
                    <time className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
                      {new Date(update.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="mt-3 text-xl font-bold">{update.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary">
                    {update.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  {update.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[rgba(255,255,255,0.1)] px-3 py-1 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
