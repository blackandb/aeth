import Link from "next/link";

const capabilities = [
  ["01", "AI & Intelligence Systems", "Decision-support, applied AI and governed intelligence systems.", "/capabilities/ai-intelligence"],
  ["02", "Software Engineering", "Secure, resilient software for consequential operations.", "/capabilities/software-engineering"],
  ["03", "Data & Decision Infrastructure", "Data platforms that preserve context, provenance and control.", "/capabilities/data-infrastructure"],
  ["04", "Cybersecurity & Resilience", "Security architecture, access control and operational resilience.", "/capabilities/cybersecurity"],
  ["05", "Enterprise Automation", "Accountable automation across complex workflows.", "/capabilities/automation"],
  ["06", "Company & Product Building", "From validated intelligence to durable operating capability.", "/capabilities/company-building"],
];

const industries = [
  ["Government & Public Sector", "/industries/government"], ["Financial Services", "/industries/financial-services"],
  ["Healthcare", "/industries/healthcare"], ["Infrastructure", "/industries/infrastructure"],
  ["Industrial", "/industries/industrial"], ["Supply Chain & Logistics", "/industries/supply-chain-logistics"],
  ["Maritime", "/industries/maritime"], ["Enterprise", "/industries/enterprise"],
];

const model = [
  ["Understand", "Map the decision, evidence, constraints and operating environment."],
  ["Architect", "Define system boundaries, controls, human authority and measurable outcomes."],
  ["Engineer", "Build and validate the smallest dependable operating capability."],
  ["Operate", "Deploy with accountable ownership, monitoring and governance."],
];

export default function Home() {
  return (
    <div className="corporate-home">
      <section className="corporate-hero">
        <div className="hero-coordinates" aria-hidden="true">44.4268° N / 26.1025° E<br />EUROPE / ACTIVE</div>
        <div className="hero-copy">
          <p className="system-label">[ The Intelligence Company Builder ]</p>
          <h1>The Intelligence<br />Company Builder.</h1>
          <p className="hero-subline">Transforming Intelligence Into Enterprise.</p>
          <p className="hero-description">We engineer intelligence systems and build operating companies for environments where reliability, security and operational clarity matter.</p>
          <div className="hero-actions"><Link className="button-light" href="/capabilities">Explore Capabilities <span>↗</span></Link><Link className="button-line" href="/contact">Engage BLACK& <span>→</span></Link></div>
        </div>
        <div className="intelligence-orbit" aria-hidden="true"><i className="orbit orbit-one" /><i className="orbit orbit-two" /><i className="orbit orbit-three" /><i className="orbit-core" /><span>INTELLIGENCE / ENGINEERING<br />SECURITY / GOVERNANCE</span></div>
        <div className="hero-index" aria-hidden="true">[ 01 ]</div>
      </section>

      <section className="builder-section corporate-section">
        <header><p className="system-label">[ Company Builder ]</p><span>01 / 08</span></header>
        <div className="section-intro"><h2>Intelligence becomes valuable when it becomes operational.</h2><p>BLACK& brings intelligence, engineering, security, governance and company building into one accountable operating model. We begin with a consequential decision—not a predetermined product.</p></div>
        <div className="principle-grid">{["INTELLIGENCE", "ENGINEERING", "SECURITY", "GOVERNANCE", "ENTERPRISE", "TRUST"].map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div>
      </section>

      <section className="corporate-section">
        <header><p className="system-label">[ Capabilities ]</p><span>02 / 08</span></header>
        <div className="section-intro"><h2>Engineered for what matters.</h2><p>Integrated capability across the complete system lifecycle—from evidence and architecture to secure operation.</p></div>
        <div className="capability-grid">{capabilities.map(([number, title, text, href]) => <Link href={href} key={href}><span>{number}</span><i aria-hidden="true" /><h3>{title}</h3><p>{text}</p><b>Explore capability ↗</b></Link>)}</div>
      </section>

      <section className="corporate-section">
        <header><p className="system-label">[ Industries ]</p><span>03 / 08</span></header>
        <div className="section-intro"><h2>High-consequence environments.</h2><p>Sector context changes architecture, controls and delivery. Our approach begins with those constraints.</p></div>
        <div className="industry-matrix">{industries.map(([title, href], index) => <Link href={href} key={href}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><b>↗</b></Link>)}</div>
      </section>

      <section className="government-feature corporate-section">
        <header><p className="system-label">[ Government & Public Sector ]</p><span>04 / 08</span></header>
        <div><h2>Public infrastructure requires public accountability.</h2><p>We design for institutional continuity, interoperability, lawful data use, human authority and resilience. No implied public-sector relationship, clearance or certification.</p><ul><li>Secure public systems</li><li>Decision intelligence</li><li>Interoperable data platforms</li><li>Identity and access</li></ul><Link className="button-light" href="/industries/government">Government & Public Sector <span>↗</span></Link></div>
        <div className="government-diagram" aria-label="Public systems architecture"><span>PUBLIC AUTHORITY</span><span>CONTROL PLANE</span><span>DATA LAYER</span><span>OPERATIONS</span></div>
      </section>

      <section className="corporate-section">
        <header><p className="system-label">[ Operating Model ]</p><span>05 / 08</span></header>
        <div className="section-intro"><h2>From consequential question to governed operation.</h2><p>A gated delivery model with explicit evidence, authority and stop conditions.</p></div>
        <div className="operating-sequence">{model.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div>
      </section>

      <section className="intelligence-feature corporate-section">
        <header><p className="system-label">[ Intelligence ]</p><span>06 / 08</span></header>
        <div><h2>Research for decisions, not attention.</h2><p>Institutional research, perspectives and briefings on intelligence infrastructure, company building, security and European strategic systems.</p></div>
        <nav><Link href="/intelligence/research"><span>01</span>Research ↗</Link><Link href="/intelligence/perspectives"><span>02</span>Perspectives ↗</Link><Link href="/intelligence/briefings"><span>03</span>Briefings ↗</Link><Link href="/case-studies"><span>04</span>Case studies ↗</Link></nav>
      </section>

      <section className="trust-feature corporate-section">
        <header><p className="system-label">[ Trust & Security ]</p><span>07 / 08</span></header>
        <div className="section-intro"><h2>Assurance without unsupported claims.</h2><p>We distinguish legal compliance, technical alignment, operational readiness and independent certification. Each is evidenced separately.</p></div>
        <div className="trust-grid"><Link href="/trust/security"><span>SEC / 01</span><h3>Security</h3><p>Controls, access, disclosure and incident response.</p></Link><Link href="/trust/ai-governance"><span>GOV / 02</span><h3>AI Governance</h3><p>Human authority, model risk and traceable use.</p></Link><Link href="/trust/eu-compliance"><span>EU / 03</span><h3>EU Compliance</h3><p>GDPR, EU AI Act, NIS2, DORA and CRA readiness.</p></Link></div>
      </section>

      <section className="final-engage corporate-section"><p className="system-label">[ Engage BLACK& / 08 ]</p><h2>Bring the problem that matters.</h2><p>Define the organization, operating context, decision, security constraints, regulatory environment and timeline.</p><Link className="button-light" href="/contact">Engage BLACK& <span>↗</span></Link></section>
    </div>
  );
}
