import Link from "next/link";
import type { InstitutionalPage as InstitutionalPageData } from "@/lib/institutional-content";

const organizationId = "https://blackandi.com/#organization";

function buildBreadcrumbs(path: string) {
  const segments = path.split("/").filter(Boolean);
  return [
    { label: "BLACK&", href: "/" },
    ...segments.map((segment, index) => ({
      label: segment.replaceAll("-", " "),
      href: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];
}

function schemaFor(page: InstitutionalPageData) {
  const canonical = `https://blackandi.com${page.path}`;
  const type = page.kind === "article"
    ? "Article"
    : page.kind === "report"
      ? "Report"
      : page.kind === "collection"
        ? "CollectionPage"
        : "WebPage";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${canonical}#page`,
        url: canonical,
        name: page.title,
        description: page.description,
        isPartOf: { "@id": "https://blackandi.com/#website" },
        about: { "@id": organizationId },
        dateModified: "2026-07-15",
        ...(page.kind === "article" || page.kind === "report"
          ? {
              author: {
                "@type": "Organization",
                "@id": organizationId,
                name: "BLACK& Research",
              },
              publisher: { "@id": organizationId },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: buildBreadcrumbs(page.path).map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `https://blackandi.com${item.href === "/" ? "" : item.href}`,
        })),
      },
    ],
  };
}

export function InstitutionalPage({ page }: { page: InstitutionalPageData }) {
  const breadcrumbs = buildBreadcrumbs(page.path);
  const schema = schemaFor(page);

  return (
    <article className="institutional-page pb-24 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="Breadcrumb" className="institutional-breadcrumb mb-12 flex flex-wrap items-center gap-2">
        {breadcrumbs.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            <Link href={item.href}>{item.label}</Link>
          </span>
        ))}
      </nav>

      <header className="institutional-hero">
        <div className="eyebrow">{page.eyebrow}</div>
        {page.statusLabels && page.statusLabels.length > 0 && (
          <div className="institutional-statuses" aria-label="Public status">
            {page.statusLabels.map((status) => <span key={status}>{status}</span>)}
          </div>
        )}
        <h1>{page.title}</h1>
        <p className="institutional-deck">{page.description}</p>

        {(page.kind === "article" || page.kind === "report") && (
          <div className="institutional-meta" aria-label="Publication details">
            <span>BLACK& Research</span>
            <span>{page.updated}</span>
            {page.readingTime && <span>{page.readingTime}</span>}
          </div>
        )}
      </header>

      <div className="institutional-layout">
        <aside className="institutional-index" aria-label="Page contents">
          <span className="institutional-index-label">On this page</span>
          {page.sections.map((section, index) => (
            <a key={section.title} href={`#section-${index + 1}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {section.title}
            </a>
          ))}
        </aside>

        <div className="institutional-sections">
          {page.sections.map((section, index) => (
            <section
              id={`section-${index + 1}`}
              key={section.title}
              className="institutional-section"
            >
              <div className="institutional-section-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      {page.related && page.related.length > 0 && (
        <nav className="institutional-related" aria-label="Explore this subject">
          <div>
            <div className="section-kicker">Continue</div>
            <h2>Explore this subject.</h2>
          </div>
          <div className="institutional-related-grid">
            {page.related.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}<span aria-hidden="true">&#8599;</span></Link>
            ))}
          </div>
        </nav>
      )}

    </article>
  );
}
