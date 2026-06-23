import { FadeIn } from "@/components/fade-in";

const testimonials = [
  {
    quote:
      "Intelligence Before Capital. Insight creates conviction. Capital follows. We understand what others miss before deploying resources.",
    author: "BLACK&",
    role: "Intelligence Before Capital",
  },
  {
    quote:
      "Long-Term By Design. We build with decades in mind. Every initiative is designed to create sustainable value and resilient growth over time.",
    author: "BLACK&",
    role: "Long-Term By Design",
  },
  {
    quote:
      "Enterprise Over Speculation. We prioritize real businesses, real products and real value creation. Not ideas. Not trends. Enterprise.",
    author: "BLACK&",
    role: "Enterprise Over Speculation",
  },
];

export function SocialProofSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col justify-center py-24">
      <FadeIn>
        <div className="eyebrow">The BLACK& Principles</div>
        <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          The BLACK& Principles
        </h2>
      </FadeIn>

      {/* Featured quote */}
      <FadeIn delay={0.15} className="mt-16 border-l-2 border-accent-cyan py-2 pl-8">
        <p className="max-w-[700px] text-2xl font-light leading-relaxed italic text-primary/90 max-md:text-lg">
          &ldquo;{testimonials[0].quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-8 bg-accent-cyan" />
          <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.15em]">
            {testimonials[0].author}
          </span>
          <span className="font-[var(--font-mono)] text-[10px] text-secondary">
            {testimonials[0].role}
          </span>
        </div>
      </FadeIn>

      {/* Smaller quotes grid */}
      <FadeIn delay={0.3} className="mt-12 grid grid-cols-1 gap-px md:grid-cols-2">
        {testimonials.slice(1).map((t) => (
          <div key={t.role} className="aeth-card flex flex-col justify-between">
            <p className="text-sm leading-relaxed text-secondary">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.15em]">
                {t.author}
              </span>
              <span className="font-[var(--font-mono)] text-[10px] text-secondary">
                {t.role}
              </span>
            </div>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
