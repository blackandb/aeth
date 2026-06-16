import { FadeIn } from "@/components/fade-in";

const stats = [
  { label: "Innovation", value: "Technology", accent: true },
  { label: "Infrastructure", value: "Construction", accent: false },
  { label: "Security", value: "Defense", accent: true },
  { label: "Consumer", value: "Clothing", accent: false },
  { label: "Production", value: "Food Industry", accent: true },
  { label: "Experience", value: "Hospitality", accent: false },
];

export function MetricsBar() {
  return (
    <div className="glow-line-wrap py-16">
      <div className="glow-line mb-12 opacity-40" />
      <FadeIn className="flex flex-wrap items-center justify-between gap-8">
        {stats.map((s) => (
          <div key={s.value} className="text-center">
            <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
              {s.label}
            </span>
            <span
              className={`mt-1 block text-3xl font-bold tracking-tight ${
                s.accent ? "text-accent-cyan" : "text-primary"
              }`}
            >
              {s.value}
            </span>
          </div>
        ))}
      </FadeIn>
      <div className="glow-line mt-12 opacity-40" />
    </div>
  );
}
