import Link from "next/link";

const posts: Record<string, { date: string; tag: string; title: string; content: string[] }> = {
  "ai-website": {
    date: "Mar 2026", tag: "Manifesto",
    title: "Why your website needs to work for AI, not just humans",
    content: [
      "The internet has changed. AI agents, LLMs, and recommendation systems are now primary consumers of your content. If your website only speaks to human visitors, you are invisible to the systems that increasingly shape demand.",
      "Search engines are no longer the only gatekeepers. AI assistants like ChatGPT, Perplexity, and Claude are answering questions, making recommendations, and summarizing information for users. If your website's content isn't structured for these systems, you're missing out on a rapidly growing distribution channel.",
      "This is why we built AETH. It's not just a website builder — it's a system that ensures your digital presence is readable by both humans and machines. Every page, every section, every piece of content is structured with semantic clarity that AI systems can parse, interpret, and recommend.",
      "The founders who understand this shift early will have a massive advantage. While competitors are still optimizing for page views and bounce rates, you'll be building an asset that compounds in value as AI adoption accelerates.",
    ],
  },
  "introducing-aeth": {
    date: "Feb 2026", tag: "Product",
    title: "Introducing AETH: the intelligent website platform",
    content: [
      "We built AETH because the gap between what websites are and what they should be has never been wider.",
      "Most website tools were designed for the last era of the internet — one where the primary goal was to get a page live and drive traffic to it. But the internet has evolved. Today, your website needs to work on three levels simultaneously: for human visitors, for AI systems, and for business growth.",
      "AETH is a platform that helps founders build websites that operate as intelligent systems. It combines a visual page builder with AI content structuring, automation workflows, and conversion optimization — all in one integrated environment.",
      "We're starting with the founders and small teams who understand that their website is their most important piece of owned infrastructure. If that's you, we'd love to show you what AETH can do.",
    ],
  },
};


export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <div className="eyebrow">404</div>
        <h1 className="text-[48px] font-bold">Post not found</h1>
        <Link href="/blog" className="btn btn-secondary mt-8">Back to blog</Link>
      </section>
    );
  }

  return (
    <article className="py-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="system-label">{post.date}</span>
        <span className="border border-[rgba(255,255,255,0.1)] px-2 py-0.5 font-[var(--font-mono)] text-[10px] uppercase tracking-wider text-secondary">{post.tag}</span>
      </div>
      <h1 className="max-w-[700px] text-[48px] font-bold leading-[0.95] tracking-[-0.04em] max-md:text-[32px]">
        {post.title}
      </h1>
      <div className="mt-12 max-w-[640px] space-y-6">
        {post.content.map((p, i) => (
          <p key={i} className="text-base leading-[1.7] text-secondary">{p}</p>
        ))}
      </div>
      <div className="mt-16 border-t border-[rgba(255,255,255,0.08)] pt-8">
        <Link href="/blog" className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-secondary transition-colors hover:text-accent-cyan">
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
