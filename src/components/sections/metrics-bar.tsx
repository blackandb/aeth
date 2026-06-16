import { FadeIn } from "@/components/fade-in";

const stats = [
  { label: "Technology", value: "01", accent: false },
  { label: "Construction", value: "02", accent: true },
  { label: "Defense", value: "03", accent: false },
  { label: "Clothing", value: "04", accent: false },
  { label: "Food_Industry", value: "05", accent: true },
  { label: "Hospitality", value: "06", accent: false },
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
