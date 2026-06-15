import { FadeIn } from "@/components/fade-in";

const stats = [
  { label: "Websites_Deployed", value: "2,400+", accent: false },
  { label: "Avg_AI_Score", value: "94.2%", accent: true },
  { label: "Conversion_Uplift", value: "+44%", accent: false },
  { label: "Pages_Indexed", value: "1.2M", accent: false },
  { label: "Uptime", value: "99.98%", accent: true },
];

export function MetricsBar() {
  return (
    <div className="glow-line-wrap py-16">
      <div className="glow-line mb-12 opacity-40" />
      <FadeIn className="flex flex-wrap items-center justify-between gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
              {s.label}
            </span>
            <span className={`mt-1 block text-3xl font-bold tracking-tight ${s.accent ? "text-accent-cyan" : "text-primary"}`}>
              {s.value}
            </span>
          </div>
        ))}
      </FadeIn>
      <div className="glow-line mt-12 opacity-40" />
    </div>
  );
}
