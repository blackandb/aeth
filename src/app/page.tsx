import Link from "next/link";
import { portfolioCompanies } from "@/lib/institutional-content";

const model = [
  { number: "01", title: "Intelligence", text: "Organize evidence around a defined consequential decision.", href: "/model/opportunity-identification" },
  { number: "02", title: "Conviction", text: "Test assumptions, timing, risks and disconfirming information.", href: "/model/intelligence-company-building" },
  { number: "03", title: "Technology", text: "Design systems around users, decisions and accountable workflows.", href: "/model/technology-development" },
  { number: "04", title: "Company", text: "Form leadership, governance, capital and operating capability.", href: "/model/company-creation" },
  { number: "05", title: "Long-Term Asset", text: "Build resilience, relevance and compounding enterprise value.", href: "/model/long-term-ownership" },
];

const industryLinks = [
  ["Technology", "/industries/technology"],
  ["Infrastructure & Construction", "/industries/infrastructure-construction"],
  ["Security & Defense", "/industries/security-defense"],
  ["Energy", "/industries/energy"],
  ["Food Production", "/industries/food-production"],
  ["Consumer", "/industries/consumer"],
  ["Hospitality", "/industries/hospitality"],
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://blackandi.com/#organization",
      name: "BLACK&",
      legalName: "BLACK HOLDINGS S.R.L.",
      url: "https://blackandi.com/",
      foundingDate: "2026-06-25",
      description: "BLACK& is an intelligence company builder that develops intelligence technologies, identifies high-conviction opportunities, deploys strategic capital and builds companies and long-term assets across selected industries.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Str. Calea Națională Nr. 66, Sc. A, Ap. 24",
        addressLocality: "Botoșani",
        addressCountry: "RO",
      },
      email: "hq@blackandi.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://blackandi.com/#website",
      url: "https://blackandi.com/",
      name: "BLACK&",
      publisher: { "@id": "https://blackandi.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <main className="institutional-home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <section className="authority-hero">
        <div className="authority-hero-copy">
          <div className="eyebrow">The Intelligence Company Builder</div>
          <h1>BLACK& Builds Intelligence Companies.</h1>
          <p>
            BLACK& develops intelligence technologies, forms and operates companies, and deploys strategic capital across sectors where proprietary understanding can create long-term advantage.
          </p>
          <div className="authority-actions">
            <Link href="/company" className="btn btn-primary">Understand BLACK&</Link>
            <Link href="/companies" className="btn btn-secondary">View Companies</Link>
          </div>
        </div>

        <div className="authority-brief" aria-label="BLACK& institutional facts">
          <div className="authority-brief-head"><span>Institutional brief</span><span className="live-dot" /></div>
          <dl>
            <div><dt>Category</dt><dd>Intelligence Company Builder</dd></div>
            <div><dt>Founded</dt><dd>25 June 2026</dd></div>
            <div><dt>Operating model</dt><dd>Intelligence-led company building</dd></div>
            <div><dt>Governance</dt><dd>Six-person Board</dd></div>
            <div><dt>Portfolio</dt><dd>5 public portfolio profiles</dd></div>
          </dl>
          <Link href="/company/facts">Explore company facts <span>↗</span></Link>
        </div>
      </section>

      <section className="authority-definition">
        <div className="section-kicker">01 / What BLACK& is</div>
        <div>
          <h2>Intelligence, technology, capital and execution within one operating model.</h2>
          <p>BLACK& brings research, product architecture, company formation, strategic capital, governance and operating execution into one connected system for building enduring enterprises.</p>
          <Link href="/model/intelligence-company-building">Read the category definition →</Link>
        </div>
      </section>

      <section className="authority-block">
        <div className="authority-section-head">
          <div><div className="section-kicker">02 / Operating model</div><h2>From intelligence to long-term assets.</h2></div>
          <Link href="/model">Explore the complete model →</Link>
        </div>
        <div className="model-flow">
          {model.map((step, index) => (
            <Link href={step.href} key={step.title} className="model-step">
              <span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p>
              {index < model.length - 1 && <i aria-hidden="true">→</i>}
            </Link>
          ))}
        </div>
      </section>

      <section className="authority-block">
        <div className="authority-section-head">
          <div><div className="section-kicker">03 / Companies</div><h2>Named entities. Defined relationships.</h2></div>
          <Link href="/companies">View the portfolio →</Link>
        </div>
        <div className="company-grid">
          {portfolioCompanies.map((company, index) => (
            <Link href={`/companies/${company.slug}`} key={company.slug} className="company-card">
              <span className="company-card-number">{String(index + 1).padStart(2, "0")}</span>
              <div><span>{company.category}</span><h3>{company.name}</h3><p>{company.summary}</p></div>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="authority-split">
        <div className="authority-panel">
          <div className="section-kicker">04 / Technologies</div>
          <h2>Systems designed around consequential decisions.</h2>
          <p>Public technology profiles disclose intended users, system boundaries, governance, limitations and operating status without exposing confidential architecture.</p>
          <Link href="/technologies">Explore technologies →</Link>
        </div>
        <div className="authority-panel">
          <div className="section-kicker">05 / Industries</div>
          <h2>Selected sectors with material intelligence requirements.</h2>
          <div className="industry-list">
            {industryLinks.map(([label, href]) => <Link href={href} key={href}>{label}<span>↗</span></Link>)}
          </div>
        </div>
      </section>

      <section className="research-feature">
        <div>
          <div className="section-kicker">06 / BLACK& Research</div>
          <h2>Intelligence Infrastructure Series</h2>
          <p>Three public research papers on sovereign AI infrastructure, AI-native company creation and the path from corporate information to enterprise capability.</p>
          <div className="research-meta"><span>3 published papers</span><span>Series v1.0</span><span>15 July 2026</span></div>
          <Link className="btn btn-primary" href="/research">Explore BLACK& Research</Link>
        </div>
        <div className="research-framework" aria-label="Research framework">
          {["Sovereign AI and European Strategic Infrastructure", "The Intelligence Company Builder", "From Information to Enterprise"].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</div>)}
        </div>
      </section>

      <section className="authority-block">
        <div className="authority-section-head">
          <div><div className="section-kicker">07 / Latest developments</div><h2>Building the BLACK& portfolio.</h2></div>
          <Link href="/newsroom">Open Newsroom →</Link>
        </div>
        <div className="development-list">
          <div><time>15 JUL 2026</time><span>Product in development</span><h3>SYSTEM INC AI advances a coordinated model for AI-operated company departments.</h3><Link href="/companies/system-inc-ai">Explore SYSTEM INC AI ↗</Link></div>
          <div><time>15 JUL 2026</time><span>Strategic intelligence</span><h3>CAESAREA and EEIL extend the portfolio into sovereign and European energy decision infrastructure.</h3><Link href="/technologies">Explore technologies ↗</Link></div>
          <div><time>JUL 2026</time><span>BLACK& Research</span><h3>The Intelligence Company Builder introduces a practical model from signal to long-term asset.</h3><Link href="/research/reports/the-intelligence-company-builder">Read the research ↗</Link></div>
        </div>
      </section>

      <section className="leadership-feature">
        <div>
          <div className="section-kicker">08 / Governance</div>
          <h2>Accountability is designed into every consequential decision.</h2>
          <p>BLACK& is governed through a six-person Board, protected decision infrastructure and a long-term approach to oversight, risk and enterprise value.</p>
          <Link href="/company/governance">Explore governance →</Link>
        </div>
        <div className="leader-grid">
          <div><span>06</span><h3>Board oversight</h3><p>Six-person governance body</p></div>
          <div><span>01</span><h3>Protected environment</h3><p>Secure information and decisions</p></div>
          <div><span>∞</span><h3>Long-term alignment</h3><p>Enterprise value over short-term noise</p></div>
          <div><span>✓</span><h3>Decision traceability</h3><p>Evidence, authority and review</p></div>
        </div>
      </section>

      <section className="opportunity-feature">
        <div className="section-kicker">09 / Opportunities</div>
        <h2>Bring a defined problem, evidence and a reason to build.</h2>
        <p>BLACK& evaluates company-building opportunities, technologies, operating partnerships, research collaboration, strategic capital situations and institutional partnerships.</p>
        <div className="authority-actions"><Link href="/opportunities" className="btn btn-primary">View opportunity routes</Link><Link href="/contact" className="btn btn-secondary">Contact BLACK&</Link></div>
      </section>
    </main>
  );
}
