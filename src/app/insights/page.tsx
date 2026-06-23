import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — BLACK&",
  description: "Strategic insights, market analysis, and thought leadership from BLACK& across technology, construction, defense, and emerging industries.",
  alternates: { canonical: "https://blackandi.com/insights" },
  openGraph: {
    title: "Insights — BLACK&",
    description: "Intelligence-driven insights for strategic decision-making.",
    url: "https://blackandi.com/insights",
    images: [{ url: "/og-insights.jpg", width: 1200, height: 630 }],
  },
};

const posts = [
  {
    slug: "the-opportunity-shift",
    title: "The Opportunity Shift",
    excerpt: "How intelligence-driven analysis is reshaping the way companies identify and capture market opportunities across strategic industries.",
    date: "2026-06-15",
    category: "Strategy",
    readTime: "5 min",
  },
  {
    slug: "building-resilient-portfolios",
    title: "Building Resilient Portfolios",
    excerpt: "Why diversification across multiple sectors creates sustainable long-term value in an increasingly volatile global economy.",
    date: "2026-06-08",
    category: "Investment",
    readTime: "7 min",
  },
  {
    slug: "ai-in-construction",
    title: "AI in Construction",
    excerpt: "Exploring how artificial intelligence and automation are transforming the construction industry from planning to execution.",
    date: "2026-05-28",
    category: "Technology",
    readTime: "6 min",
  },
  {
    slug: "defense-innovation-landscape",
    title: "Defense Innovation Landscape",
    excerpt: "An overview of emerging technologies and strategic opportunities in the defense and security sectors.",
    date: "2026-05-20",
    category: "Defense",
    readTime: "8 min",
  },
  {
    slug: "the-future-of-hospitality",
    title: "The Future of Hospitality",
    excerpt: "Consumer trends and technology integration shaping the next generation of hospitality experiences.",
    date: "2026-05-12",
    category: "Consumer",
    readTime: "5 min",
  },
  {
    slug: "sustainable-food-production",
    title: "Sustainable Food Production",
    excerpt: "How technology and strategic investment are driving innovation in food production and supply chain optimization.",
    date: "2026-05-05",
    category: "Food",
    readTime: "6 min",
  },
];

export default function InsightsPage() {
  return (
    <>
      <section className="flex min-h-[70vh] flex-col justify-center py-24">
        <div className="eyebrow">Insights</div>
        <h1 className="max-w-[600px] text-[56px] font-bold leading-[0.95] tracking-[-0.04em] max-lg:text-[40px] max-md:text-[32px]">
          Intelligence-driven perspectives.
        </h1>
        <p className="mt-6 max-w-[500px] text-lg leading-[1.5] text-secondary">
          Strategic analysis, market intelligence, and thought leadership from
          across our portfolio and industries.
        </p>
      </section>

      <section className="py-24">
        <div className="mb-12">
          <div className="eyebrow">Latest</div>
          <h2 className="mt-4 text-[32px] font-bold tracking-[-0.04em]">
            Articles & Analysis
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="aeth-card group transition-all hover:border-accent-cyan/30"
            >
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-accent-cyan">
                  {post.category}
                </span>
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold group-hover:text-accent-cyan transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary line-clamp-3">
                {post.excerpt}
              </p>
              <time className="mt-4 block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.15em] text-secondary">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center py-24 text-center">
        <div className="eyebrow justify-center">Stay Informed</div>
        <h2 className="mt-4 text-[40px] font-bold tracking-[-0.04em]">
          Want more insights?
        </h2>
        <p className="mt-4 max-w-[440px] text-secondary">
          Subscribe to receive our latest analysis and market intelligence.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">
            Subscribe
          </Link>
        </div>
      </section>
    </>
  );
}
