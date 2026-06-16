import { FadeIn } from "@/components/fade-in";

const testimonials = [
  {
    quote:
      "Intelligence is the foundation of every decision. We believe sustainable growth begins with understanding markets, industries, and opportunities before committing capital and resources.",
    author: "BLACK&",
    role: "Intelligence First",
  },
  {
    quote:
      "Execution transforms ideas into businesses. Strategy matters, but disciplined execution is what creates measurable results and long-term success.",
    author: "BLACK&",
    role: "Operational Excellence",
  },
  {
    quote:
      "Diversification creates resilience. By operating across multiple strategic industries, we position ourselves to capture opportunities across changing economic cycles.",
    author: "BLACK&",
    role: "Long-Term Vision",
  },
];

export function SocialProofSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col justify-center py-24">
      <FadeIn>
        <div className="eyebrow">Our Principles</div>
        <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          The principles that guide every decision.
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
