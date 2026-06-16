import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — BLACK&",
  description: "Insights on technology, industry, strategy, business building, and long-term value creation.",
};

const posts = [
  { slug: "technology-and-intelligence", date: "Mar 2026", tag: "Technology", title: "Technology as the foundation of modern business growth", excerpt: "How technology, automation, and intelligence create competitive advantages across industries." },
  { slug: "building-companies", date: "Feb 2026", tag: "Strategy", title: "From opportunity to operating company", excerpt: "Why identifying an opportunity is only the beginning — execution, structure, and discipline create lasting businesses." },
  { slug: "#", date: "Feb 2026", tag: "Industries", title: "Why diversified growth matters", excerpt: "A multi-industry approach creates resilience, flexibility, and access to opportunities across changing market cycles." },
  { slug: "#", date: "Jan 2026", tag: "Construction", title: "Infrastructure, construction, and long-term value", excerpt: "Civil and industrial construction remain essential pillars for economic development and strategic asset creation." },
  { slug: "#", date: "Jan 2026", tag: "Defense", title: "Security, technology, and strategic capability", excerpt: "Defense-related industries require innovation, reliability, and long-term strategic thinking." },
  { slug: "#", date: "Dec 2025", tag: "Vision", title: "The BLACK& approach to opportunity", excerpt: "Built on intelligence and driven by opportunity, BLACK& focuses on building companies and creating long-term value." },
];

export default function BlogPage() {
  return (
    <>
      <section className="flex min-h-[60vh] flex-col justify-center py-24">
        <div className="eyebrow">Insights</div>
        <h1 className="max-w-[400px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Strategic thinking.
        </h1>
        <p className="mt-6 max-w-[480px] text-lg leading-[1.5] text-secondary">
          Perspectives on technology, industry, business building, and long-term value creation.
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
