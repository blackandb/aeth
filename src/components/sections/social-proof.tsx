import { FadeIn } from "@/components/fade-in";

const testimonials = [
  { quote: "AETH didn\u2019t just redesign our site; they re-engineered how we communicate with the market. Our LLM-readability score is now a competitive advantage.", author: "Marcus Thorne", role: "Founder, VectorSaaS" },
  { quote: "The level of precision in the system is unmatched. It\u2019s the first time our digital presence actually feels as premium as the services we provide.", author: "Elena Rossi", role: "Principal, Rossi & Associates" },
  { quote: "Finally, a framework that understands the creator economy. My site acts as an autonomous sales agent while I focus on building community.", author: "Julian V.", role: "Founder, CreatorLab Alpha" },
];

export function SocialProofSection() {
  return (
    <section className="section-glow flex min-h-[80vh] flex-col justify-center py-24">
      <FadeIn>
        <div className="eyebrow">System Validation</div>
        <h2 className="max-w-[560px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
          Trusted by the next generation of builders.
        </h2>
      </FadeIn>

      {/* Featured quote — large */}
      <FadeIn delay={0.15} className="mt-16 border-l-2 border-accent-cyan py-2 pl-8">
        <p className="max-w-[700px] text-2xl font-light leading-relaxed italic text-primary/90 max-md:text-lg">
          &ldquo;{testimonials[0].quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center gap-3">
          <div className="h-px w-8 bg-accent-cyan" />
          <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.15em]">{testimonials[0].author}</span>
          <span className="font-[var(--font-mono)] text-[10px] text-secondary">{testimonials[0].role}</span>
        </div>
      </FadeIn>

      {/* Smaller quotes grid */}
      <FadeIn delay={0.3} className="mt-12 grid grid-cols-1 gap-px md:grid-cols-2">
        {testimonials.slice(1).map((t) => (
          <div key={t.author} className="aeth-card flex flex-col justify-between">
            <p className="text-sm leading-relaxed text-secondary">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              <span className="font-[var(--font-mono)] text-xs uppercase tracking-[0.15em]">{t.author}</span>
              <span className="font-[var(--font-mono)] text-[10px] text-secondary">{t.role}</span>
            </div>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}
