import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { publishedResearchPapers } from "@/lib/research-papers";

export const metadata: Metadata = {
  title: { absolute: "BLACK& Research — Intelligence Infrastructure Series" },
  description: "Published BLACK& Research papers on sovereign AI infrastructure, AI-native company creation, enterprise intelligence architecture and Europe’s energy transition.",
  alternates: { canonical: "https://blackandi.com/research" },
  openGraph: {
    title: "BLACK& Research — Intelligence Infrastructure Series",
    description: "Public institutional research prepared by BLACK& Research and SYSTEM INC AI Labs.",
    url: "https://blackandi.com/research",
    type: "website",
  },
};

const researchSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "BLACK& Research",
  url: "https://blackandi.com/research",
  description: "Published research from the BLACK& Intelligence Infrastructure Series.",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: publishedResearchPapers.map((paper, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ScholarlyArticle",
        headline: paper.title,
        alternativeHeadline: paper.subtitle,
        datePublished: "2026-07-15",
        url: `https://blackandi.com/research/reports/${paper.slug}`,
        author: { "@type": "Organization", name: "BLACK& Research" },
      },
    })),
  },
};

export default function ResearchPage() {
  return (
    <article className="research-hub">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(researchSchema) }} />

      <header className="research-hub-hero">
        <div>
          <div className="eyebrow">BLACK& Research</div>
          <h1>Research for consequential decisions.</h1>
          <p>
            Public institutional research on intelligence infrastructure, AI-native company creation,
            sovereign capability and the systems that turn information into enterprise value.
          </p>
        </div>
        <div className="research-hub-register">
          <span className="live-dot" />
          <div><strong>5 papers published</strong><small>Responsive web editions · interactive data · 15 July 2026</small></div>
        </div>
      </header>

      <section className="research-hub-intro">
        <div className="section-kicker">Intelligence Infrastructure Series</div>
        <div>
          <h2>Evidence, method and an explicit boundary between fact and interpretation.</h2>
          <p>
            Every publication defines its question, scope, methodology, terminology, limitations,
            references and revision history. BLACK& frameworks are identified as proprietary analysis,
            while third-party evidence remains attributed to its original source.
          </p>
        </div>
      </section>

      <section className="research-paper-list" aria-label="Published research papers">
        {publishedResearchPapers.map((paper) => (
          <article className="research-paper-card" key={paper.slug}>
            <Link href={`/research/reports/${paper.slug}`} className="research-paper-cover" aria-label={`Open ${paper.title}`}>
              <Image src={paper.coverUrl} alt={`${paper.title} cover`} width={1020} height={1320} />
            </Link>
            <div className="research-paper-copy">
              <div className="research-paper-meta">
                <span>Paper {paper.issue}</span><span>{paper.pages ? `${paper.pages} pages` : "Web edition"}</span><span>{paper.publicationDate}</span>
              </div>
              <h2><Link href={`/research/reports/${paper.slug}`}>{paper.title}</Link></h2>
              <h3>{paper.subtitle}</h3>
              <p>{paper.summary}</p>
              <div className="research-paper-framework">{paper.framework}</div>
              <div className="research-paper-actions">
                <Link className="btn btn-primary" href={`/research/reports/${paper.slug}`}>Research profile</Link>
                <a className="btn btn-secondary" href={paper.htmlUrl}>Read paper</a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="research-governance">
        <div>
          <div className="section-kicker">Research governance</div>
          <h2>Reviewable by design.</h2>
          <p>Publication quality depends on visible sources, accountable authorship, declared limitations and version discipline.</p>
        </div>
        <div className="research-governance-links">
          <Link href="/research/standards">Research standards <span>↗</span></Link>
          <Link href="/research/methodologies">Methodologies <span>↗</span></Link>
          <Link href="/research/editorial-policy">Editorial policy <span>↗</span></Link>
          <Link href="/research/reports">All published reports <span>↗</span></Link>
        </div>
      </section>
    </article>
  );
}
