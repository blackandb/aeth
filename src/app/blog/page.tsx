import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — AETH",
  description: "Ideas on AI, digital infrastructure, growth, and building for the next era of the internet.",
};

const posts = [
  { slug: "ai-website", date: "Mar 2026", tag: "Manifesto", title: "Why your website needs to work for AI, not just humans", excerpt: "The internet has changed. AI agents, LLMs, and recommendation systems are now primary consumers of your content." },
  { slug: "introducing-aeth", date: "Feb 2026", tag: "Product", title: "Introducing AETH: the intelligent website platform", excerpt: "We built AETH because the gap between what websites are and what they should be has never been wider." },
  { slug: "#", date: "Feb 2026", tag: "Strategy", title: "Owned infrastructure vs. rented distribution", excerpt: "Founders spend years building audiences on platforms they do not control. There is a better way." },
  { slug: "#", date: "Jan 2026", tag: "Technical", title: "How we score AI readiness for websites", excerpt: "A behind-the-scenes look at the AETH AI Readiness Score — what it measures, why it matters." },
  { slug: "#", date: "Jan 2026", tag: "Growth", title: "The conversion gap: why traffic alone is not enough", excerpt: "Most websites optimize for visitors. AETH optimizes for outcomes." },
  { slug: "#", date: "Dec 2025", tag: "Vision", title: "The post-search era: what comes after Google?", excerpt: "Search is being unbundled by AI. We explore what this means for founders." },
];

export default function BlogPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="eyebrow">Transmissions</div>
        <h1 className="max-w-[400px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Thinking out loud.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          Ideas on AI, digital infrastructure, growth, and building for the next era of the internet.
        </p>
      </section>

      <section className="pb-24">
        <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.slug === "#" ? "#" : `/blog/${post.slug}`} className="aeth-card group transition-colors hover:border-[rgba(255,255,255,0.2)]">
              <div className="mb-3 flex items-center gap-3">
                <span className="system-label">{post.date}</span>
                <span className="border border-[rgba(255,255,255,0.1)] px-2 py-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">{post.tag}</span>
              </div>
              <h2 className="text-base font-bold leading-snug transition-colors group-hover:text-accent-cyan">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{post.excerpt}</p>
              <span className="mt-4 inline-block font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary transition-colors group-hover:text-accent-cyan">Read →</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
