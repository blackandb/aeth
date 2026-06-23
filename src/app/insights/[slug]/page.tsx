import Link from "next/link";

const posts: Record<
  string,
  {
    date: string;
    tag: string;
    title: string;
    content: string[];
  }
> = {
  "technology-and-intelligence": {
    date: "Mar 2026",
    tag: "Technology",
    title: "Technology as the foundation of modern business growth",
    content: [
      "Technology is no longer a standalone sector. It has become the foundation upon which modern businesses create efficiency, scalability, and competitive advantage.",
      "At BLACK&, we view technology as an enabler across every industry. From artificial intelligence and digital infrastructure to automation and data systems, technology drives better decision-making and operational performance.",
      "Organizations that successfully integrate technology into their operations are better positioned to adapt to changing markets, unlock new opportunities, and create sustainable value.",
      "The future belongs to businesses capable of combining innovation, execution, and strategic vision. Technology is the bridge connecting all three.",
    ],
  },

  "building-companies": {
    date: "Feb 2026",
    tag: "Strategy",
    title: "From opportunity to operating company",
    content: [
      "Every successful company begins with an opportunity. The challenge is transforming that opportunity into an organization capable of delivering value at scale.",
      "Building a business requires more than an idea. It requires structure, operational discipline, leadership, and a long-term vision capable of guiding growth through changing market conditions.",
      "At BLACK&, we focus on identifying opportunities with strategic potential and developing the foundations necessary for sustainable execution.",
      "The companies that endure are not necessarily the ones with the best ideas. They are the ones capable of consistently executing against a clear vision.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <div className="eyebrow">404</div>
        <h1 className="text-[48px] font-bold">Insight not found</h1>
        <Link href="/blog" className="btn btn-secondary mt-8">
          Back to Insights
        </Link>
      </section>
    );
  }

  return (
    <article className="py-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="system-label">{post.date}</span>
        <span className="border border-[rgba(255,255,255,0.1)] px-2 py-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">
          {post.tag}
        </span>
      </div>

      <h1 className="max-w-[700px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
        {post.title}
      </h1>

      <div className="mt-12 max-w-[640px] space-y-6">
        {post.content.map((p, i) => (
          <p key={i} className="text-base leading-[1.7] text-secondary">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-16 border-t border-[rgba(255,255,255,0.08)] pt-8">
        <Link
          href="/blog"
          className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary transition-colors hover:text-accent-cyan"
        >
          ← Back to Insights
        </Link>
      </div>
    </article>
  );
}
