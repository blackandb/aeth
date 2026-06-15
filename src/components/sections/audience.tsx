import { FadeIn } from "@/components/fade-in";

const segments = [
  { num: "01", title: "Startup founders", desc: "Build a clearer, more credible digital presence that supports fundraising, hiring, and customer acquisition.", tag: "SEED → SERIES B" },
  { num: "02", title: "AI and SaaS teams", desc: "Connect your product velocity to your marketing layer with structured, machine-readable content.", tag: "PRODUCT-LED" },
  { num: "03", title: "Premium service businesses", desc: "Signal expertise, attention to detail, and premium positioning through every interaction.", tag: "HIGH-TOUCH" },
  { num: "04", title: "Creator-led businesses", desc: "Own the audience. Centralize brand, content, and community in one intelligent home base.", tag: "COMMUNITY" },
];

export function AudienceSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col items-center justify-center py-24 text-center">
      <FadeIn>
        <div className="eyebrow justify-center">Who It Is For</div>
        <h2 className="max-w-[600px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          Built for founders who need more from their website.
        </h2>
        <p className="mx-auto mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          AETH is for teams that see the website as infrastructure, not decoration.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-16 grid w-full grid-cols-1 gap-px sm:grid-cols-2">
        {segments.map((s) => (
          <div key={s.num} className="aeth-card text-left">
            <div className="flex items-center justify-between">
              <span className="section-number">{s.num}</span>
              <span className="border border-accent-cyan/20 px-2 py-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-accent-cyan">{s.tag}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-secondary">{s.desc}</p>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
