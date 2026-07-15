export type InstitutionalSection = {
  title: string;
  body: string[];
  items?: string[];
};

export type InstitutionalPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  kind?: "page" | "collection" | "article" | "report";
  updated?: string;
  author?: string;
  readingTime?: string;
  sections: InstitutionalSection[];
  related?: { label: string; href: string }[];
};

const UPDATED = "15 July 2026";

const page = (
  path: string,
  eyebrow: string,
  title: string,
  description: string,
  sections: InstitutionalSection[],
  related: { label: string; href: string }[] = [],
  kind: InstitutionalPage["kind"] = "page"
): InstitutionalPage => ({
  path,
  eyebrow,
  title,
  description,
  kind,
  updated: UPDATED,
  sections,
  related,
});

const corePages: InstitutionalPage[] = [
  page(
    "/company",
    "Company",
    "BLACK& at institutional scale.",
    "BLACK& is an intelligence company builder. It develops intelligence technologies, identifies high-conviction opportunities, deploys strategic capital and builds companies and long-term assets across selected industries.",
    [
      { title: "Institutional purpose", body: ["BLACK& exists to convert disciplined understanding into operating capability. Intelligence informs conviction. Conviction directs technology, company formation, capital and governance."] },
      { title: "Public company record", body: ["This section provides the canonical public route to BLACK& identity, leadership, governance, history, facts and trust policies."], items: ["Company overview", "Company facts", "Leadership", "Governance", "History and milestones", "Institutional Trust Center"] },
    ],
    [
      { label: "Company overview", href: "/company/overview" },
      { label: "Company facts", href: "/company/facts" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Governance", href: "/company/governance" },
    ],
    "collection"
  ),
  page(
    "/company/overview",
    "Company / Overview",
    "An intelligence company builder.",
    "BLACK& develops intelligence technologies, forms and supports operating companies, and deploys strategic capital where proprietary understanding can create durable advantage.",
    [
      { title: "What BLACK& does", body: ["BLACK& combines research, technology development, company creation, operating support and long-term ownership. Its work begins with a defined problem or structural change, not with a predetermined product."], items: ["Identify opportunities through evidence and strategic relevance", "Build intelligence and decision-support technologies", "Form companies around validated operating theses", "Provide governance and shared operating capability", "Pursue long-term enterprise value"] },
      { title: "What BLACK& builds", body: ["The public portfolio spans enterprise AI, sovereign intelligence, energy intelligence, company operating systems and strategic venture development. Each company or technology is presented with its relationship to BLACK&, current public status and source-backed milestones."] },
      { title: "A distinct operating model", body: ["BLACK& is not presented as a conventional fund, consultancy or software vendor. Its model integrates proprietary understanding, product architecture, company formation, strategic capital, governance and operating execution. Legal classifications and regulated activities are stated only where confirmed."] },
      { title: "Sector focus", body: ["Confirmed areas of institutional focus include technology, infrastructure and construction, security and defense, energy, food production, consumer systems and hospitality. Participation depends on the existence of a material intelligence or operating advantage."] },
      { title: "Long-term ownership", body: ["BLACK& is designed around patient enterprise creation. Capital allocation, governance and product architecture are assessed against resilience, strategic relevance and the ability to compound operating value over time."] },
      { title: "Governance and accountability", body: ["BLACK& is overseen by a six-person Board. Bruno Mihailescu, Kaschif Ali and Adam Constantin are founders. Additional Board profiles will be published only after identity, biography and publication consent are verified."] },
    ],
    [
      { label: "The BLACK& Model", href: "/model" },
      { label: "Companies", href: "/companies" },
      { label: "Technologies", href: "/technologies" },
      { label: "Company facts", href: "/company/facts" },
    ]
  ),
  page(
    "/company/facts",
    "Company / Facts",
    "BLACK& company facts.",
    "This page is the canonical public reference for verified information about BLACK& and is maintained for journalists, researchers, institutional partners and machine retrieval systems.",
    [
      { title: "Identity", body: ["Commercial name: BLACK&. Legal entity: BLACK HOLDINGS S.R.L. Jurisdiction: Romania. Company registration number: J2026000163078. Incorporation date: 25 June 2026."] },
      { title: "Registered office and contact", body: ["Registered office: Str. Calea Națională Nr. 66, Sc. A, Ap. 24, Botoșani County, Romania. Official website: blackandi.com. Institutional contact: hq@blackandi.com."] },
      { title: "Definition", body: ["BLACK& is an intelligence company builder that develops intelligence technologies, identifies high-conviction opportunities, deploys strategic capital and builds companies and long-term assets across selected industries."] },
      { title: "Leadership", body: ["Founders: Bruno Mihailescu, Kaschif Ali and Adam Constantin. Governance body: six-person BLACK& Board. The remaining Board profiles are pending publication approval."] },
      { title: "Companies and technologies", body: ["The confirmed public portfolio includes BLACK& Technologies, SYSTEM INC AI, CAESAREA Technologies, the European Energy Intelligence Layer — EEIL — and BLACK& Ventures."] },
      { title: "Media resources", body: ["Approved logos, biographies, photography and usage guidance will be maintained in the Media Kit. Materials not explicitly marked for public use require written permission."] },
    ],
    [
      { label: "Media kit", href: "/newsroom/media-kit" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Contact", href: "/contact" },
    ]
  ),
  page(
    "/company/leadership",
    "Company / Leadership",
    "Accountable leadership.",
    "BLACK& is founded by Bruno Mihailescu, Kaschif Ali and Adam Constantin and governed through a six-person Board designed to provide strategic oversight, review and long-term accountability.",
    [
      { title: "Bruno Mihailescu", body: ["Founder. Bruno Mihailescu also serves as Data Protection Officer for the BLACK& Board Intelligence environment. A complete professional biography, areas of responsibility and external profiles require final publication approval."] },
      { title: "Kaschif Ali", body: ["Founder. A complete verified biography, operating responsibilities, professional experience and external profiles require final publication approval."] },
      { title: "Adam Constantin", body: ["Founder. A complete verified biography, operating responsibilities, professional experience and external profiles require final publication approval."] },
      { title: "The BLACK& Board", body: ["BLACK& has a six-person Board. Three additional member profiles, committee responsibilities and publication permissions are being verified before public release."] },
      { title: "Publication standard", body: ["BLACK& does not publish anonymous expertise claims. Every future leadership profile must identify responsibility, relevant experience, associated companies or technologies and approved external references."] },
    ],
    [
      { label: "Governance", href: "/company/governance" },
      { label: "Company facts", href: "/company/facts" },
      { label: "Trust Center", href: "/company/trust" },
    ]
  ),
  page(
    "/company/governance",
    "Company / Governance",
    "Governance built for consequential decisions.",
    "BLACK& governance is designed to separate evidence, recommendation, approval and execution while maintaining clear responsibility for strategic and operating decisions.",
    [
      { title: "Board oversight", body: ["A six-person Board provides strategic oversight. Board materials, voting and confidential intelligence are managed through the protected BLACK& Board environment."] },
      { title: "Decision discipline", body: ["Material proposals should identify the decision owner, evidence base, alternatives, principal risks, capital implications, implementation owner and review date before approval."] },
      { title: "Portfolio governance", body: ["Each operating company should maintain defined authority, reporting expectations, milestone review and escalation paths appropriate to its legal status and stage."] },
      { title: "Risk and conflicts", body: ["Conflicts must be declared before participation in a decision. Sensitive information is distributed according to role, confidentiality and legitimate need. Public committee details remain subject to Board confirmation."] },
      { title: "Long-term accountability", body: ["Decisions are evaluated not only at approval but after implementation. Material assumptions, outcomes and corrective actions should remain traceable through Board records and audit history."] },
    ],
    [
      { label: "Leadership", href: "/company/leadership" },
      { label: "Responsible AI", href: "/company/responsible-ai" },
      { label: "Trust Center", href: "/company/trust" },
    ]
  ),
  page(
    "/company/history",
    "Company / History",
    "History and verified milestones.",
    "BLACK& maintains a source-led timeline. Events are included only when a date, responsible entity and publication reference can be verified.",
    [
      { title: "25 June 2026 — Incorporation", body: ["BLACK HOLDINGS S.R.L., trading as BLACK&, was incorporated in Romania. Company registration number: J2026000163078."] },
      { title: "Portfolio formation", body: ["The public institutional portfolio includes BLACK& Technologies, SYSTEM INC AI, CAESAREA Technologies, EEIL and BLACK& Ventures. Formation dates and legal relationships require entity-level confirmation before a dated timeline is published."] },
      { title: "Source standard", body: ["Future milestones will link to permanent announcements, product documentation, research releases or official company records. Plans and expected launch dates will be distinguished from completed events."] },
    ],
    [
      { label: "Newsroom", href: "/newsroom" },
      { label: "Companies", href: "/companies" },
      { label: "Technologies", href: "/technologies" },
    ]
  ),
  page(
    "/company/principles",
    "Company / Principles",
    "Principles for intelligence-led enterprise building.",
    "BLACK& applies a small number of operating principles to research, company creation, capital allocation and governance.",
    [
      { title: "Intelligence before capital", body: ["Capital follows a defined thesis and evidence-led conviction. It does not substitute for understanding."] },
      { title: "Enterprise over speculation", body: ["The objective is operating capability: products, systems, companies and assets that solve defined problems."] },
      { title: "Long-term by design", body: ["Product architecture, governance and ownership decisions are tested against resilience and durable relevance."] },
      { title: "Execution creates evidence", body: ["Plans are converted into milestones, owners and reviewable outputs. Learning from execution updates the original thesis."] },
    ],
    [{ label: "The BLACK& Model", href: "/model" }]
  ),
  page(
    "/company/global-presence",
    "Company / Presence",
    "Registered in Romania. Built for institutional markets.",
    "BLACK& is legally registered in Romania and develops capabilities intended for corporate and government markets. Additional offices or operating locations are not presented without legal and operational confirmation.",
    [
      { title: "Registered presence", body: ["BLACK HOLDINGS S.R.L. is registered at Str. Calea Națională Nr. 66, Sc. A, Ap. 24, Botoșani County, Romania."] },
      { title: "Market orientation", body: ["BLACK& evaluates opportunities across European and international institutional markets where intelligence infrastructure, technology and operating execution can address material needs."] },
      { title: "Disclosure rule", body: ["A market served by a technology is not automatically an office, subsidiary or permanent establishment. Geographic claims are published only when their legal and operating meaning is clear."] },
    ],
    [{ label: "Company facts", href: "/company/facts" }]
  ),
];

const modelPages: InstitutionalPage[] = [
  page(
    "/model",
    "Model",
    "The BLACK& operating model.",
    "BLACK& converts information into intelligence, intelligence into conviction, conviction into technology and companies, and operating companies into long-term assets.",
    [
      { title: "1. Identify opportunity", body: ["Signals are assessed against structural relevance, unmet need, timing, strategic importance, market structure and the possibility of a defensible intelligence advantage."] },
      { title: "2. Develop conviction", body: ["Evidence is organized into a falsifiable thesis. Assumptions, risks and disconfirming information are documented before resources are committed."] },
      { title: "3. Design technology", body: ["When software or information infrastructure is central to the thesis, BLACK& defines the user, decision environment, data inputs, system boundaries and validation path."] },
      { title: "4. Form the company", body: ["A company is formed only when the market, operating model, leadership requirement, governance structure and initial capital plan are sufficiently defined."] },
      { title: "5. Build the asset", body: ["Execution, operating support and governance convert the initial thesis into measurable capability. Long-term ownership is evaluated against strategic relevance and compounding value."] },
    ],
    [
      { label: "Category definition", href: "/model/intelligence-company-building" },
      { label: "Opportunity identification", href: "/model/opportunity-identification" },
      { label: "Company creation", href: "/model/company-creation" },
      { label: "Capital allocation", href: "/model/capital-allocation" },
    ]
  ),
  page(
    "/model/intelligence-company-building",
    "Model / Definition",
    "What is an Intelligence Company Builder?",
    "An Intelligence Company Builder is an organization that uses proprietary understanding to identify opportunities, design enabling technologies, form operating companies, allocate capital and establish governance around long-term enterprise creation.",
    [
      { title: "Core functions", body: ["The category integrates strategic intelligence, product and technology development, company formation, capital allocation, operating support and governance. No single function is sufficient by itself."] },
      { title: "Operating stages", body: ["The model moves through signal collection, thesis formation, validation, technology design, company formation, market entry, operating support, governance and long-term ownership."] },
      { title: "Difference from a venture studio", body: ["A venture studio often begins with company ideation and repeatable formation capability. An Intelligence Company Builder places proprietary intelligence and decision infrastructure before company formation."] },
      { title: "Difference from a holding company", body: ["A holding company is primarily an ownership structure. An Intelligence Company Builder actively develops theses, technologies and operating companies before and during ownership."] },
      { title: "Difference from private equity", body: ["Private equity typically acquires or invests in existing businesses under a defined investment mandate. BLACK& may create companies and technologies from an intelligence thesis. BLACK& does not imply regulated investment services unless legally confirmed."] },
      { title: "Difference from consultancy and software", body: ["A consultancy primarily delivers advice to clients. A software company primarily develops and sells technology. The intelligence company-building model can use both capabilities while retaining responsibility for enterprise formation and long-term governance."] },
      { title: "Frequently asked questions", body: ["Is the category an investment product? No. It describes an operating model, not a regulated financial instrument. Does every thesis become a company? No. Validation and decision gates are intended to stop weak opportunities before formation."] },
    ],
    [
      { label: "Company creation", href: "/model/company-creation" },
      { label: "Research report", href: "/research/reports/the-intelligence-company-builder" },
      { label: "Company overview", href: "/company/overview" },
    ]
  ),
  page(
    "/model/opportunity-identification",
    "Model / Opportunity",
    "Opportunity identification before company formation.",
    "BLACK& evaluates opportunities through structural change, unmet need, strategic relevance, market structure, technology feasibility, timing and risk rather than through narrative appeal alone.",
    [
      { title: "Signal map", body: ["Relevant inputs may include market behavior, infrastructure constraints, regulation, technology inflection, supply chains, institutional priorities and persistent operating friction."] },
      { title: "Evaluation frame", body: ["Each opportunity is assessed for problem materiality, addressable user, strategic relevance, market structure, evidence quality, timing, technical feasibility, capital intensity and principal failure modes."] },
      { title: "Conviction threshold", body: ["A thesis advances only when its central assumptions can be stated, tested and assigned to evidence owners. Uncertainty is recorded rather than disguised."] },
      { title: "Decision output", body: ["The output is not automatically an investment. It may be a research agenda, technology prototype, company-formation proposal, partnership route or a documented decision not to proceed."] },
    ],
    [{ label: "Company creation", href: "/model/company-creation" }, { label: "Capital allocation", href: "/model/capital-allocation" }]
  ),
  page(
    "/model/company-creation",
    "Model / Company Creation",
    "From thesis to operating company.",
    "BLACK& treats company creation as a gated operating process in which each stage produces evidence required for the next decision.",
    [
      { title: "1–3. Thesis, validation and market", body: ["The initial intelligence thesis defines the structural opportunity. Validation tests need, timing and disconfirming evidence. Market definition identifies users, alternatives, buying conditions and constraints."] },
      { title: "4–6. Business model, architecture and formation", body: ["The business model defines value exchange and economics. Product architecture establishes capability and system boundaries. Legal formation follows only after ownership, jurisdiction and governance are reviewed."] },
      { title: "7–9. Leadership, capital and market entry", body: ["Leadership requirements are defined before appointments. Initial capital is tied to milestones and risk. Market entry is planned around a narrow validated use case rather than an unsupported broad launch."] },
      { title: "10–13. Support, governance, scaling and outcome", body: ["Operating support provides shared capability. Governance establishes accountability. Scaling follows evidence of repeatability. Long-term ownership or another strategic outcome is reviewed against enterprise resilience and stakeholder value."] },
      { title: "Decision gates", body: ["Every stage should identify objective, inputs, output, decision owner, evidence standard and stop condition. The process is designed to preserve capital and attention when evidence weakens."] },
    ],
    [{ label: "Technology development", href: "/model/technology-development" }, { label: "Operating support", href: "/model/operating-support" }]
  ),
  page(
    "/model/capital-allocation",
    "Model / Capital",
    "Capital follows conviction and defined evidence.",
    "BLACK& approaches capital as a constrained operating resource assigned to validated milestones, strategic relevance and long-term enterprise value.",
    [
      { title: "Allocation logic", body: ["The quality of the problem, evidence, team, technology path, market structure and downside conditions matter before the size of an opportunity narrative."] },
      { title: "Risk", body: ["Risk assessment considers thesis failure, market timing, technology feasibility, regulatory exposure, security, concentration, execution dependency and capital requirements."] },
      { title: "Follow-on discipline", body: ["Further capital should follow evidence from agreed milestones. Prior expenditure alone is not a justification for continued allocation."] },
      { title: "Legal boundary", body: ["This page explains BLACK& internal operating philosophy. It does not offer investment products or imply regulated investment services."] },
    ],
    [{ label: "Opportunity identification", href: "/model/opportunity-identification" }, { label: "Governance", href: "/company/governance" }]
  ),
  page(
    "/model/technology-development",
    "Model / Technology",
    "Technology as operating infrastructure.",
    "BLACK& develops AI systems, intelligence platforms, decision-support environments and sector-specific information infrastructure around defined users and consequential decisions.",
    [
      { title: "Research and discovery", body: ["Product discovery defines the problem, user, decision, current workflow, evidence source and reason technology is required."] },
      { title: "Architecture and prototype", body: ["System boundaries, data provenance, access control, human oversight and failure modes are considered before scale. Prototypes test the highest-risk assumptions."] },
      { title: "Validation and deployment", body: ["Validation connects system output to a defined operational standard. Deployment includes security, monitoring, incident response, permissions and rollback planning."] },
      { title: "Continuous governance", body: ["Models, data sources and operating assumptions change. Versioning, review, human escalation and documented limitations remain part of the product lifecycle."] },
    ],
    [{ label: "Technologies", href: "/technologies" }, { label: "Responsible AI", href: "/company/responsible-ai" }]
  ),
  page(
    "/model/operating-support",
    "Model / Operations",
    "Shared capability for operating companies.",
    "BLACK& can support companies through strategy, technology, research, capital planning, finance, governance, recruitment, brand, commercial development, partnerships, operations and risk where capability and mandate are confirmed.",
    [
      { title: "Strategic and research support", body: ["Shared context, market intelligence and decision framing help company leadership evaluate priorities without replacing accountable management judgment."] },
      { title: "Technology and product", body: ["Architecture, AI systems, product validation and data governance can be shared where the operating company and BLACK& have an agreed mandate."] },
      { title: "Institutional capability", body: ["Governance, financial control, risk, brand and commercial systems are developed according to company stage and legal responsibility."] },
      { title: "Boundary of support", body: ["Capabilities are not presented as universally available services. Each company relationship must define ownership, scope, decision rights and measurable outputs."] },
    ],
    [{ label: "Companies", href: "/companies" }, { label: "Governance", href: "/company/governance" }]
  ),
  page(
    "/model/governance",
    "Model / Governance",
    "Governance is part of company architecture.",
    "BLACK& integrates authority, evidence, risk, escalation and review into company design rather than treating governance as an administrative layer added after growth.",
    [
      { title: "Authority", body: ["Material decisions require named owners, defined approval levels and documented conflicts."] },
      { title: "Evidence", body: ["Board recommendations distinguish verified facts, estimates, assumptions and unresolved risks."] },
      { title: "Review", body: ["Milestones and decisions include follow-up dates so outcomes can be compared with original assumptions."] },
    ],
    [{ label: "Company governance", href: "/company/governance" }]
  ),
  page(
    "/model/long-term-ownership",
    "Model / Ownership",
    "Designing companies for durable relevance.",
    "Long-term ownership changes how products, governance, capital and operating systems are designed: resilience and compounding capability matter alongside near-term growth.",
    [
      { title: "Time horizon", body: ["A longer horizon makes infrastructure, institutional knowledge, talent systems and governance economically relevant from an earlier stage."] },
      { title: "Resilience", body: ["Concentration, vendor dependency, security, regulation, succession and capital intensity are treated as design variables."] },
      { title: "Strategic outcomes", body: ["Ownership decisions remain subject to company-specific evidence, legal duties and stakeholder interests. Long-term intent is not a promise of permanent ownership."] },
    ],
    [{ label: "Capital allocation", href: "/model/capital-allocation" }]
  ),
];

export const portfolioCompanies = [
  {
    slug: "blackand-technologies",
    name: "BLACK& Technologies",
    category: "Technology capability",
    summary: "The BLACK& technology capability for AI platforms, enterprise software, applied AI and automation.",
    market: "Corporate and government",
    status: "Public operating details under verification",
    website: "https://blackandi.com/technologies",
  },
  {
    slug: "system-inc-ai",
    name: "SYSTEM INC AI",
    category: "AI company operating system",
    summary: "A platform designed to turn an idea into a structured company supported by coordinated specialist AI agents.",
    market: "Entrepreneurs and operating teams",
    status: "Product development",
    website: "https://system-inc-ai.vercel.app/",
  },
  {
    slug: "caesarea-technologies",
    name: "CAESAREA Technologies",
    category: "Sovereign intelligence",
    summary: "Decision infrastructure for governments, security institutions and critical infrastructure environments.",
    market: "Government and critical infrastructure",
    status: "Active development",
    website: "https://blackandi.com/companies/caesarea-technologies",
  },
  {
    slug: "eeil",
    name: "European Energy Intelligence Layer — EEIL",
    category: "Energy intelligence",
    summary: "An intelligence layer focused on European energy markets, infrastructure and strategic decision requirements.",
    market: "Energy institutions and enterprises",
    status: "Active development",
    website: "https://blackandi.com/companies/eeil",
  },
  {
    slug: "blackand-ventures",
    name: "BLACK& Ventures",
    category: "Company creation and strategic capital",
    summary: "The BLACK& capability for venture formation and strategic capital deployment, subject to legal mandate confirmation.",
    market: "Selected company-building opportunities",
    status: "Mandate under public documentation review",
    website: "https://blackandi.com/companies/blackand-ventures",
  },
];

const companyPages: InstitutionalPage[] = [
  page(
    "/companies",
    "Companies",
    "Companies and operating platforms built around intelligence.",
    "The BLACK& public portfolio contains confirmed companies and platforms whose relationship, operating stage and evidence are disclosed without overstating ownership, traction or legal status.",
    [
      { title: "Public portfolio", body: ["BLACK& Technologies provides group technology capability. SYSTEM INC AI develops an AI company operating system. CAESAREA Technologies focuses on sovereign decision infrastructure. EEIL focuses on European energy intelligence. BLACK& Ventures supports selected company-creation and strategic-capital activity."], items: portfolioCompanies.map((company) => `${company.name} — ${company.summary}`) },
      { title: "Disclosure standard", body: ["A listing is not a claim of a specific legal ownership percentage, revenue, customer relationship or launch status. Those facts are published only with entity-level evidence."] },
    ],
    portfolioCompanies.map((company) => ({ label: company.name, href: `/companies/${company.slug}` })),
    "collection"
  ),
  ...portfolioCompanies.map((company) =>
    page(
      `/companies/${company.slug}`,
      `Companies / ${company.category}`,
      company.name,
      company.summary,
      [
        { title: "Relationship to BLACK&", body: [company.slug === "blackand-technologies" ? "BLACK& Technologies represents the group technology capability. Its legal identity, mandate and operating structure require final public confirmation." : `The relationship between ${company.name} and BLACK& is part of the public portfolio architecture. Exact legal ownership and operating arrangements require entity-level confirmation.`] },
        { title: "Problem addressed", body: [company.slug === "system-inc-ai" ? "Company creation is slowed by fragmented legal, financial, operational and commercial systems. SYSTEM INC AI is designed to coordinate specialist AI departments around one shared company context." : company.slug === "caesarea-technologies" ? "Institutions operating critical systems require sovereign, traceable and secure environments for understanding complex information and supporting consequential decisions." : company.slug === "eeil" ? "European energy decisions depend on fragmented market, infrastructure, regulatory and geopolitical information that must be converted into consistent strategic context." : company.slug === "blackand-ventures" ? "High-conviction opportunities require a disciplined path from thesis and capital to company formation and accountable execution." : "Organizations require practical AI and information infrastructure connected to real operating decisions rather than isolated demonstrations."] },
        { title: "Market and intended users", body: [`Primary public market: ${company.market}. Named customers and contracts are not published without authorization and evidence.`] },
        { title: "Operating status", body: [`Current public status: ${company.status}. Launch dates, revenue, customer adoption and performance claims require source-backed updates.`] },
        { title: "Leadership and key facts", body: ["Entity leadership, legal identity, launch year, operating geography and approved milestones are pending final fact-base confirmation."] },
        { title: "Official links", body: [`Official public destination: ${company.website}`] },
      ],
      [{ label: "Companies portfolio", href: "/companies" }, { label: "Related technologies", href: "/technologies" }, { label: "Newsroom", href: "/newsroom" }]
    )
  ),
];

const technologies = [
  { slug: "blackand-intelligence-core", name: "BLACK& Intelligence Core", purpose: "Shared intelligence architecture for organizing sources, context and decision support across selected BLACK& environments.", users: "Authorized operating and governance teams", entity: "BLACK& Technologies", status: "Public architecture under documentation" },
  { slug: "system-inc-ai", name: "SYSTEM INC AI", purpose: "Coordinates specialist AI departments to help structure and operate a company from one shared context.", users: "Entrepreneurs and company operators", entity: "SYSTEM INC AI", status: "Product development" },
  { slug: "caesarea", name: "CAESAREA Decision Infrastructure", purpose: "Supports sovereign and critical-infrastructure decision environments with controlled intelligence workflows.", users: "Governments and critical infrastructure institutions", entity: "CAESAREA Technologies", status: "Active development" },
  { slug: "eeil", name: "European Energy Intelligence Layer", purpose: "Structures European energy market, infrastructure, regulatory and strategic information for decision support.", users: "Energy institutions and enterprises", entity: "EEIL", status: "Active development" },
];

const technologyPages: InstitutionalPage[] = [
  page(
    "/technologies",
    "Technologies",
    "Intelligence and operating infrastructure.",
    "BLACK& technologies are designed around defined decisions, users, data boundaries and human accountability rather than generic AI functionality.",
    [
      { title: "Technology portfolio", body: ["The public technology portfolio includes shared intelligence architecture, AI company operations, sovereign decision infrastructure and European energy intelligence."], items: technologies.map((technology) => `${technology.name} — ${technology.purpose}`) },
      { title: "Publication standard", body: ["Architecture is described only at a public level. Security-sensitive details, confidential data sources and unverified capabilities are excluded."] },
    ],
    technologies.map((technology) => ({ label: technology.name, href: `/technologies/${technology.slug}` })),
    "collection"
  ),
  ...technologies.map((technology) =>
    page(
      `/technologies/${technology.slug}`,
      "Technologies / System Profile",
      technology.name,
      technology.purpose,
      [
        { title: "Intended users", body: [technology.users] },
        { title: "Public system architecture", body: ["The public architecture separates source collection, context organization, model-assisted analysis, permissions, human review and accountable action. Detailed technical diagrams require product-owner and security approval."] },
        { title: "Inputs and outputs", body: ["Inputs must have defined provenance and permission. Outputs are decision support or operating artifacts, not automatic proof. Every deployment must document limitations and escalation paths."] },
        { title: "Security and governance", body: ["Access control, source traceability, human oversight, monitoring, incident response and change control are treated as product requirements."] },
        { title: "Operating entity and status", body: [`Operating entity: ${technology.entity}. Public status: ${technology.status}.`] },
        { title: "Limitations", body: ["No public claim is made regarding certification, model accuracy, customers, deployment scale or proprietary datasets without approved evidence."] },
      ],
      [{ label: "Technology portfolio", href: "/technologies" }, { label: "Responsible AI", href: "/company/responsible-ai" }, { label: "Research", href: "/research" }]
    )
  ),
];

const industries = [
  { slug: "technology", name: "Technology", perspective: "Software and AI create durable advantage when they are embedded in a decision or operating system with defined users, evidence and accountability.", themes: ["enterprise AI", "decision infrastructure", "automation", "data governance", "operating systems"] },
  { slug: "infrastructure-construction", name: "Infrastructure and Construction", perspective: "Infrastructure performance depends on early visibility into procurement, cost, schedule, supply, risk and long-term operating conditions.", themes: ["project intelligence", "procurement", "cost and schedule", "critical infrastructure", "asset operations"] },
  { slug: "security-defense", name: "Security and Defense", perspective: "Sovereign capability requires lawful, resilient and controlled decision infrastructure across data, compute, systems and supply chains.", themes: ["sovereign AI", "critical systems", "resilience", "dual-use governance", "secure decisions"] },
  { slug: "energy", name: "Energy", perspective: "European energy decisions require a shared view of markets, infrastructure, regulation, security and capital-intensive transition pathways.", themes: ["market intelligence", "grid infrastructure", "energy security", "forecasting", "capital requirements"] },
  { slug: "food-production", name: "Food Production", perspective: "Resilient food systems connect production, quality, cost, energy, demand, distribution and supply-chain intelligence.", themes: ["production systems", "quality", "demand", "automation", "supply-chain resilience"] },
  { slug: "consumer", name: "Consumer", perspective: "Long-term consumer assets are built through demand understanding, product discipline, distribution and consistent operating evidence.", themes: ["consumer intelligence", "brand systems", "distribution", "product development", "customer behavior"] },
  { slug: "hospitality", name: "Hospitality", perspective: "Hospitality integrates asset strategy, experience design, pricing, operations and technology into one performance system.", themes: ["asset strategy", "guest intelligence", "revenue management", "operations", "experience systems"] },
];

const industryPages: InstitutionalPage[] = [
  page(
    "/industries",
    "Industries",
    "Selected industries where intelligence can become operating advantage.",
    "BLACK& evaluates industries according to strategic relevance, information complexity, technology leverage, operating need and the possibility of building durable enterprise capability.",
    [
      { title: "Confirmed areas of focus", body: ["The public institutional architecture covers technology, infrastructure and construction, security and defense, energy, food production, consumer systems and hospitality."], items: industries.map((industry) => `${industry.name} — ${industry.perspective}`) },
      { title: "Selection discipline", body: ["A listed industry is an area of research and company-building interest. It is not a claim that BLACK& owns an operating company, customer relationship or regulated license in every listed market."] },
    ],
    industries.map((industry) => ({ label: industry.name, href: `/industries/${industry.slug}` })),
    "collection"
  ),
  ...industries.map((industry) =>
    page(
      `/industries/${industry.slug}`,
      "Industries / Intelligence Thesis",
      industry.name,
      industry.perspective,
      [
        { title: "Structural context", body: [`BLACK& examines ${industry.name.toLowerCase()} through changes in technology, regulation, infrastructure, capital, supply and institutional requirements. The purpose is to identify where fragmented information prevents responsible execution.`] },
        { title: "Intelligence requirements", body: [`Priority intelligence domains include ${industry.themes.join(", ")}. Each domain requires named sources, update cycles, definitions and accountable interpretation.`] },
        { title: "Technology and operating opportunities", body: ["Relevant opportunities may involve information infrastructure, workflow systems, AI-supported analysis, operating software or company creation. Specific initiatives are linked only when their relationship is confirmed."] },
        { title: "Risk and governance", body: ["Sector-specific legal, safety, security, data and operating constraints must be defined before product or capital decisions. High-consequence applications retain human authority and review."] },
        { title: "BLACK& activity", body: [industry.slug === "energy" ? "EEIL is the confirmed BLACK& initiative related to European energy intelligence." : industry.slug === "security-defense" ? "CAESAREA Technologies is the confirmed BLACK& initiative related to sovereign intelligence and critical decision environments." : industry.slug === "technology" ? "BLACK& Technologies and SYSTEM INC AI are confirmed initiatives within the technology portfolio." : "No entity-specific public activity is attributed to this industry until approved evidence is available."] },
      ],
      [{ label: "Industries", href: "/industries" }, { label: "Companies", href: "/companies" }, { label: "Research", href: "/research" }]
    )
  ),
];

export const institutionalBasePages = [
  ...corePages,
  ...modelPages,
  ...companyPages,
  ...technologyPages,
  ...industryPages,
];

const reportDefinitions = [
  { slug: "the-intelligence-company-builder", title: "The Intelligence Company Builder", thesis: "Defines the category as an integrated operating model connecting proprietary understanding, technology, company formation, capital and governance.", framework: "Signal → Thesis → Conviction → System → Company → Asset" },
  { slug: "from-information-to-enterprise", title: "From Information to Enterprise", thesis: "Examines why information alone does not create enterprise value and how context, judgment and execution convert evidence into operating capability.", framework: "Information → Context → Intelligence → Decision → Execution" },
  { slug: "architecture-of-intelligence-led-company-creation", title: "The Architecture of Intelligence-Led Company Creation", thesis: "Presents a gated company-creation architecture that makes assumptions, evidence, ownership and stop conditions explicit.", framework: "Thesis → Validation → Architecture → Formation → Operation" },
  { slug: "strategic-intelligence-in-capital-allocation", title: "Strategic Intelligence in Capital Allocation", thesis: "Explains how evidence quality, timing, structure and downside conditions can improve capital decisions without making performance promises.", framework: "Evidence → Conviction → Exposure → Milestone → Review" },
  { slug: "sovereign-ai-and-european-strategic-infrastructure", title: "Sovereign AI and European Strategic Infrastructure", thesis: "Analyzes sovereignty across data, compute, models, infrastructure, control, procurement and institutional accountability.", framework: "Data → Compute → Model → Control → Institution" },
  { slug: "european-energy-intelligence-landscape", title: "The European Energy Intelligence Landscape", thesis: "Maps the information requirements connecting European energy markets, physical infrastructure, regulation, security and capital.", framework: "Market → Grid → Regulation → Security → Capital" },
  { slug: "ai-in-infrastructure-and-construction", title: "AI in Infrastructure and Construction", thesis: "Identifies where AI can create measurable value across planning, procurement, cost, schedule, safety and asset operations—and where it cannot.", framework: "Plan → Procure → Build → Assure → Operate" },
  { slug: "decision-infrastructure-for-modern-enterprises", title: "Decision Infrastructure for Modern Enterprises", thesis: "Defines decision infrastructure as the combination of trusted information, shared context, authority, workflow and institutional memory.", framework: "Source → Context → Authority → Action → Memory" },
];

const researchPages: InstitutionalPage[] = [
  page(
    "/research",
    "Research",
    "Research for decisions, not content volume.",
    "BLACK& Research develops definitions, frameworks, methodologies and evidence structures relevant to intelligence-led company creation and strategic technologies.",
    [
      { title: "Research themes", body: ["Initial themes include intelligence company building, decision infrastructure, capital allocation, sovereign AI, European energy intelligence and AI in infrastructure." ] },
      { title: "Publication architecture", body: ["Research is organized into reports, methodologies, data, indices, briefings and definitions. Every final publication identifies scope, method, sources, limitations, author, review status and revision history."] },
      { title: "Standards", body: ["BLACK& distinguishes analysis from fact, discloses material limitations and corrects substantive errors. AI may support research operations but does not replace source verification or accountable authorship."] },
      { title: "Flagship report briefs", body: ["Eight initial report structures establish the public research agenda. They are briefs until original analysis, source sets and review are complete."], items: reportDefinitions.map((report) => report.title) },
    ],
    [
      { label: "Research standards", href: "/research/standards" },
      { label: "Methodologies", href: "/research/methodologies" },
      { label: "Data and indices", href: "/research/data" },
      { label: "Reports", href: "/research/reports" },
    ],
    "collection"
  ),
  page(
    "/research/standards",
    "Research / Standards",
    "Research standards and public accountability.",
    "BLACK& Research is designed to make sources, method, authorship, limitations, conflicts and revisions visible to the reader.",
    [
      { title: "Source standard", body: ["Primary sources are preferred for factual claims. Secondary analysis is attributed. Anonymous or unverifiable material is not treated as confirmed evidence."] },
      { title: "Method and fact-checking", body: ["Every analytical publication should define its question, scope, terms, method, exclusions and material limitations. Factual claims are checked against retained sources before release."] },
      { title: "Authorship and review", body: ["A named author remains responsible for the final text. A reviewer checks logic, evidence and disclosure. Professional biographies explain relevant competence without anonymous expertise claims."] },
      { title: "Use of AI", body: ["AI may assist discovery, organization, translation, comparison or drafting. It cannot be cited as evidence and does not remove the need for source verification, human judgment or accountable approval."] },
      { title: "Corrections and updates", body: ["Material corrections are dated and described. Method changes create a new version. Retractions remain visible with an explanation unless legal or security duties require restriction."] },
      { title: "Conflicts and independence", body: ["Relevant financial, operating or ownership relationships are disclosed. Research concerning a BLACK& company identifies that relationship directly."] },
    ],
    [{ label: "Editorial policy", href: "/research/editorial-policy" }, { label: "Methodologies", href: "/research/methodologies" }]
  ),
  page(
    "/research/methodologies",
    "Research / Methodologies",
    "Public methodologies and version history.",
    "A BLACK& methodology must make the path from source to conclusion reviewable by defining inputs, calculations, exclusions, limitations and update responsibility.",
    [
      { title: "Required methodology record", body: ["Every published methodology identifies purpose, definitions, source classes, inputs, transformations, scoring or calculations, exclusions, limitations, version, author and review date."] },
      { title: "Initial methodologies", body: ["Methodologies for opportunity evaluation, intelligence-thesis development, company-creation gates and decision infrastructure are in editorial development. They will not be represented as validated benchmarks before review."] },
      { title: "Version discipline", body: ["A material change to an input, definition, weighting or calculation requires a version update and a note describing comparability with prior results."] },
    ],
    [{ label: "Research standards", href: "/research/standards" }, { label: "Data", href: "/research/data" }]
  ),
  page(
    "/research/data",
    "Research / Data",
    "Data and indices with explicit rights and limitations.",
    "BLACK& publishes data only when disclosure rights, methodology, update frequency, licensing and citation requirements are clear.",
    [
      { title: "Current availability", body: ["No proprietary public dataset or index is represented as available until its source rights, method and owner are confirmed."] },
      { title: "Dataset standard", body: ["Every dataset requires field definitions, source provenance, geographic and temporal coverage, update frequency, exclusions, known quality issues, licensing terms and citation instructions."] },
      { title: "Index standard", body: ["Every index requires a public calculation method, component rules, rebalance schedule, revision policy and explanation of what the index cannot measure."] },
    ],
    [{ label: "Methodologies", href: "/research/methodologies" }, { label: "Research", href: "/research" }]
  ),
  page(
    "/research/reports",
    "Research / Reports",
    "Flagship research programme.",
    "The initial BLACK& research programme contains eight report briefs. Publication follows original analysis, source verification, methodology review and named authorship.",
    [{ title: "Initial report briefs", body: ["Each report page identifies the question, original framework, planned method, limitations and evidence still required before final publication."], items: reportDefinitions.map((report) => `${report.title} — ${report.thesis}`) }],
    reportDefinitions.map((report) => ({ label: report.title, href: `/research/reports/${report.slug}` })),
    "collection"
  ),
  page(
    "/research/briefings",
    "Research / Briefings",
    "Concise intelligence for defined decisions.",
    "BLACK& briefings are short, source-led documents that explain a material development, its strategic relevance, principal uncertainties and the decisions it may affect.",
    [
      { title: "Briefing structure", body: ["Question, direct answer, context, evidence, implications, uncertainty, watchpoints, sources and update date."] },
      { title: "Publication status", body: ["No public briefing is listed until a named author, review status and retained source record are available."] },
    ],
    [{ label: "Research standards", href: "/research/standards" }]
  ),
  page(
    "/research/definitions",
    "Research / Definitions",
    "A controlled vocabulary for strategic intelligence.",
    "BLACK& Definitions provides stable, citation-ready meanings for terms used across research, technologies, companies and governance.",
    [
      { title: "Intelligence Company Builder", body: ["An organization that uses proprietary understanding to identify opportunities, design enabling technologies, form operating companies, allocate capital and establish governance around long-term enterprise creation."] },
      { title: "Decision infrastructure", body: ["The combination of trusted sources, shared context, defined authority, repeatable workflow and institutional memory required to move from information to accountable action."] },
      { title: "Strategic intelligence", body: ["Evidence organized and interpreted for a defined consequential decision, with source provenance, uncertainty and implications made explicit."] },
    ],
    [{ label: "Category page", href: "/model/intelligence-company-building" }]
  ),
  page(
    "/research/editorial-policy",
    "Research / Editorial Policy",
    "Editorial, corrections and AI-use policy.",
    "BLACK& editorial policy establishes accountability for authorship, sourcing, review, corrections, conflicts and AI-assisted production.",
    [
      { title: "Authorship", body: ["A named human author is responsible for every analytical publication. Contributors and reviewers are identified according to their actual role."] },
      { title: "Sourcing and review", body: ["Material factual claims require retained sources. Review checks evidence, logical consistency, legal sensitivity, conflicts and the distinction between fact and interpretation."] },
      { title: "AI-assisted production", body: ["AI assistance is disclosed when material to the research process. Model output is not a source. Sensitive or confidential information may be used only in approved environments."] },
      { title: "Corrections and retractions", body: ["Correction requests may be sent to hq@blackandi.com. Material changes include a dated revision note. A retracted publication remains identified with the reason for retraction where lawful."] },
    ],
    [{ label: "Research standards", href: "/research/standards" }, { label: "Contact", href: "/contact" }]
  ),
  ...reportDefinitions.map((report) =>
    page(
      `/research/reports/${report.slug}`,
      "Research / Flagship Brief",
      report.title,
      report.thesis,
      [
        { title: "Executive summary", body: [report.thesis, `The proposed analytical framework is ${report.framework}. It is a working BLACK& framework and must be tested against original sources and applied evidence before final publication.`] },
        { title: "Key research questions", body: ["Which definitions remain stable across sectors? Which evidence separates narrative from operating capability? Which governance choices affect execution? Which conditions invalidate the central thesis?"] },
        { title: "Planned methodology", body: ["The final report will combine primary-source review, defined terminology, comparative operating analysis, documented exclusions and expert review. The complete source set and author are required before publication."] },
        { title: "Scope and limitations", body: ["This page is a research brief, not a completed empirical report. It does not make investment, performance or market-leadership claims."] },
        { title: "Citation status", body: ["Citation-ready status: framework brief. Final citation format, author, publication date and revision history will be assigned after editorial approval."] },
      ],
      [{ label: "All reports", href: "/research/reports" }, { label: "Research standards", href: "/research/standards" }],
      "report"
    )
  ),
];

const insights = [
  ["what-is-an-intelligence-company-builder", "What Is an Intelligence Company Builder?", "A category definition connecting intelligence, technology, company formation, capital and governance."],
  ["why-information-is-not-intelligence", "Why Information Is Not Intelligence", "Information becomes intelligence only when it is verified, contextualized and connected to a defined decision."],
  ["how-strategic-conviction-is-developed", "How Strategic Conviction Is Developed", "Conviction is a documented judgment under uncertainty, not confidence detached from disconfirming evidence."],
  ["venture-studio-vs-intelligence-company-builder", "Venture Studio vs Intelligence Company Builder", "The two models overlap in company creation but begin with different sources of advantage and operating architecture."],
  ["holding-company-vs-intelligence-company-builder", "Holding Company vs Intelligence Company Builder", "Ownership structure and active intelligence-led company formation are related but not equivalent functions."],
  ["how-intelligence-changes-capital-allocation", "How Intelligence Changes Capital Allocation", "Better allocation begins with evidence quality, timing, downside structure and explicit assumptions."],
  ["role-of-technology-in-company-creation", "The Role of Technology in Company Creation", "Technology can be product, infrastructure or operating leverage—but only when connected to a defined user and workflow."],
  ["why-shared-context-matters-in-enterprise-ai", "Why Shared Context Matters in Enterprise AI", "Specialist AI agents cannot coordinate responsibly when definitions, permissions and institutional memory remain fragmented."],
  ["building-companies-around-structural-change", "Building Companies Around Structural Change", "Structural change can create durable opportunity when its mechanism, timing and operating consequences are understood."],
  ["evaluate-a-high-conviction-opportunity", "How to Evaluate a High-Conviction Opportunity", "A practical framework for testing materiality, evidence, timing, feasibility, structure and failure modes."],
  ["market-research-vs-strategic-intelligence", "Market Research vs Strategic Intelligence", "Market description is not the same as evidence organized for a consequential decision."],
  ["long-term-ownership-and-company-design", "How Long-Term Ownership Changes Company Design", "Time horizon affects infrastructure, governance, talent, resilience and capital decisions from formation onward."],
  ["what-makes-an-enterprise-resilient", "What Makes an Enterprise Resilient?", "Resilience is the capacity to preserve critical function, learn and adapt under material disruption."],
  ["decision-infrastructure-as-competitive-advantage", "Decision Infrastructure as a Competitive Advantage", "Trusted context, authority and institutional memory can improve the quality and speed of coordinated action."],
  ["human-judgment-in-ai-supported-organizations", "Human Judgment in AI-Supported Organizations", "Human authority remains necessary where objectives, values, exceptions and consequences cannot be reduced to model output."],
  ["sovereign-ai-definition-architecture-relevance", "Sovereign AI: Definition, Architecture and Strategic Relevance", "Sovereignty must be evaluated across data, compute, models, deployment, control and institutional accountability."],
  ["energy-intelligence-from-data-to-decisions", "Energy Intelligence: From Market Data to Strategic Decisions", "Energy intelligence connects prices and flows to infrastructure, regulation, security, timing and capital."],
  ["ai-in-infrastructure-where-value-is-created", "AI in Infrastructure: Where Value Is Actually Created", "The strongest use cases begin with expensive uncertainty, repeatable evidence and an accountable operating owner."],
  ["company-building-requires-more-than-capital", "Why Company Building Requires More Than Capital", "Capital cannot replace a coherent thesis, product architecture, leadership, governance or operating discipline."],
  ["from-thesis-to-operating-company", "From Thesis to Operating Company: A Practical Framework", "A thirteen-stage model for converting an intelligence thesis into a governed operating company."],
] as const;

const insightPages: InstitutionalPage[] = [
  page(
    "/insights",
    "Insights",
    "Analysis with an explicit point of view and evidence boundary.",
    "BLACK& Insights publishes definitions, explainers, perspectives, field notes and strategic briefings connected to the company-building and technology research agenda.",
    [
      { title: "Editorial system", body: ["Every final article includes a named author, professional biography, publication and update dates, review status, sources, related entities, reading time and correction channel."] },
      { title: "Initial editorial programme", body: ["Twenty initial article structures address the distinctions and operating questions central to intelligence-led company creation."], items: insights.map((insight) => insight[1]) },
    ],
    insights.map((insight) => ({ label: insight[1], href: `/insights/${insight[0]}` })),
    "collection"
  ),
  ...insights.map(([slug, title, thesis]) =>
    page(
      `/insights/${slug}`,
      "Insights / Analysis",
      title,
      thesis,
      [
        { title: "Direct answer", body: [thesis] },
        { title: "BLACK& analytical frame", body: ["The relevant distinction is whether information changes a defined decision, creates an operating capability or improves accountability. Labels without a decision owner, evidence standard and implementation path do not create strategic advantage."] },
        { title: "Practical application", body: ["Apply the argument by defining the decision, responsible person, accepted evidence, central assumption, disconfirming signal, operating output and review date."] },
        { title: "Limitations", body: ["This analysis presents a general framework. Sector law, fiduciary duties, security requirements and company-specific evidence remain controlling in actual decisions."] },
      ],
      [{ label: "Insights hub", href: "/insights" }, { label: "Related research", href: "/research" }, { label: "The BLACK& Model", href: "/model" }],
      "article"
    )
  ),
];

const newsroomPages: InstitutionalPage[] = [
  page(
    "/newsroom",
    "Newsroom",
    "Verified developments and official records.",
    "The BLACK& Newsroom is the permanent source for dated announcements, research launches, company developments, media resources and attributed executive commentary.",
    [
      { title: "Announcements", body: ["Only completed or formally approved developments are published. Expected milestones are labeled as plans and are not presented as completed events."] },
      { title: "Portfolio news", body: ["Entity-level updates identify the responsible company, date, operating context and supporting source."] },
      { title: "Media contact", body: ["Institutional and media enquiries: hq@blackandi.com."] },
    ],
    [{ label: "Announcements", href: "/newsroom/announcements" }, { label: "Press releases", href: "/newsroom/press-releases" }, { label: "Media kit", href: "/newsroom/media-kit" }],
    "collection"
  ),
  page(
    "/newsroom/announcements",
    "Newsroom / Announcements",
    "Official announcements.",
    "This index will contain source-backed BLACK& and portfolio announcements with permanent URLs, responsible entities and publication dates.",
    [{ title: "Publication threshold", body: ["An announcement requires a completed or formally approved event, an accountable entity, source documents and public-release authorization. Minor interface changes and unverified launch plans do not qualify."] }],
    [{ label: "Newsroom", href: "/newsroom" }],
    "collection"
  ),
  page(
    "/newsroom/press-releases",
    "Newsroom / Press Releases",
    "Press releases and supporting records.",
    "BLACK& press releases use factual headlines, attributed statements, named entities, supporting documents and a stable company boilerplate.",
    [{ title: "Required record", body: ["Every release includes date, location, direct summary, complete announcement, named organizations, attributed executive quotation, strategic context, company boilerplate, media contact and related sources."] }],
    [{ label: "Media kit", href: "/newsroom/media-kit" }],
    "collection"
  ),
  page(
    "/newsroom/media-coverage",
    "Newsroom / Coverage",
    "Independent media coverage.",
    "Coverage is listed only when the publisher, author, date and permanent source can be verified. Paid or sponsored material is labeled.",
    [{ title: "Current record", body: ["No independent media coverage is listed until source verification and publication permission are complete."] }],
    [{ label: "Newsroom", href: "/newsroom" }],
    "collection"
  ),
  page(
    "/newsroom/media-kit",
    "Newsroom / Media Kit",
    "Official BLACK& media resources.",
    "The Media Kit provides approved company descriptions, facts, founder biographies, logos, photography, research references and usage conditions.",
    [
      { title: "Approved company description", body: ["BLACK& is an intelligence company builder that develops intelligence technologies, identifies high-conviction opportunities, deploys strategic capital and builds companies and long-term assets across selected industries."] },
      { title: "Leadership", body: ["Founders: Bruno Mihailescu, Kaschif Ali and Adam Constantin. BLACK& is governed through a six-person Board."] },
      { title: "Usage rights", body: ["Logos, photographs and biographies may be used only when explicitly supplied as approved media assets. Modification, implied endorsement and use outside accurate editorial context are prohibited."] },
    ],
    [{ label: "Company facts", href: "/company/facts" }, { label: "Leadership", href: "/company/leadership" }, { label: "Media contact", href: "/newsroom/contact" }]
  ),
  page(
    "/newsroom/contact",
    "Newsroom / Contact",
    "Media and institutional contact.",
    "Journalists, researchers and institutional partners may contact BLACK& at hq@blackandi.com. Enquiries should identify the organization, deadline, subject and intended use.",
    [{ title: "Verification requests", body: ["Requests concerning legal identity, leadership, portfolio relationships, technology claims or quotations are checked against the institutional fact base before response."] }],
    [{ label: "Company facts", href: "/company/facts" }]
  ),
];

const opportunityPages: InstitutionalPage[] = [
  page(
    "/opportunities",
    "Opportunities",
    "Defined routes to work with BLACK&.",
    "BLACK& evaluates company-building opportunities, technologies, operating partnerships, research collaboration, strategic capital situations, acquisitions, executive talent and institutional partnerships.",
    [
      { title: "What to submit", body: ["A useful submission defines the problem, evidence, intended user, current status, responsible team, required capability, strategic relevance and why BLACK& is the appropriate counterparty."] },
      { title: "Evaluation", body: ["Submissions are screened for fit, evidence, legality, strategic relevance, execution requirements, conflicts and capacity. Submission does not create confidentiality or a commitment unless a written agreement states otherwise."] },
      { title: "Opportunity routes", body: ["Build with BLACK&, partner with BLACK&, discuss capital or join the talent network." ] },
    ],
    [{ label: "Build with BLACK&", href: "/opportunities/build-with-us" }, { label: "Partner with BLACK&", href: "/opportunities/partner-with-us" }, { label: "Capital", href: "/opportunities/capital" }, { label: "Careers", href: "/opportunities/careers" }]
  ),
  page(
    "/opportunities/build-with-us",
    "Opportunities / Build",
    "Build with BLACK&.",
    "BLACK& is interested in evidence-led opportunities where intelligence, technology, company formation and operating execution can create a defensible enterprise.",
    [
      { title: "Relevant opportunities", body: ["Defined problems with material users, structural relevance, credible evidence and a reason BLACK& capability can change the outcome."] },
      { title: "What BLACK& may contribute", body: ["Depending on mandate and capacity: research, strategic framing, product architecture, company formation, technology, governance, operating support and capital planning."] },
      { title: "Submission requirements", body: ["Problem, evidence, market, current solution, team, status, intellectual-property position, capital requirement, principal risks and requested relationship."] },
      { title: "Confidentiality", body: ["Do not submit trade secrets or regulated personal data before a written confidentiality and data-handling route is agreed."] },
    ],
    [{ label: "Contact", href: "/contact" }, { label: "Opportunity identification", href: "/model/opportunity-identification" }]
  ),
  page(
    "/opportunities/partner-with-us",
    "Opportunities / Partnerships",
    "Partner with BLACK&.",
    "BLACK& considers defined collaboration models with corporations, governments, institutions, researchers, universities, technology providers, operating companies and capital partners.",
    [
      { title: "Collaboration models", body: ["Research collaboration, technology development, data or infrastructure access, institutional pilots, operating partnerships, company creation and source-backed strategic projects."] },
      { title: "Required clarity", body: ["Every proposal should define objectives, authority, resources, data rights, security, intellectual property, decision process, milestones and public-communication rules."] },
      { title: "Institutional safeguards", body: ["Government, security, data and regulated-sector relationships require legal, security and conflict review before any public claim or operational commitment."] },
    ],
    [{ label: "Contact", href: "/contact" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/opportunities/capital",
    "Opportunities / Capital",
    "Strategic capital conversations.",
    "BLACK& considers capital in connection with defined company-building and operating theses. This page is not an offer, solicitation or regulated investment service.",
    [
      { title: "Relevant context", body: ["Submissions should identify the entity, legal structure, use of funds, milestone plan, current ownership, evidence, risks and requested relationship."] },
      { title: "Boundary", body: ["No investment product, return expectation or allocation commitment is created through this website."] },
    ],
    [{ label: "Capital allocation model", href: "/model/capital-allocation" }, { label: "Contact", href: "/contact" }]
  ),
  page(
    "/opportunities/careers",
    "Opportunities / Careers",
    "Work on difficult problems with accountable teams.",
    "BLACK& looks for people capable of precise thinking, evidence-led judgment, responsible execution and collaboration across research, technology, company building and operations.",
    [
      { title: "Operating environment", body: ["Work is organized around defined outcomes, direct communication, source discipline, security, ownership and review."] },
      { title: "Current openings", body: ["No role is represented as open until responsibilities, hiring entity, location, employment basis and application owner are confirmed."] },
      { title: "Talent network", body: ["Prospective operators, researchers and technology leaders may submit a concise profile to hq@blackandi.com. Submission does not create an employment relationship."] },
    ],
    [{ label: "Contact", href: "/contact" }]
  ),
];

const trustPages: InstitutionalPage[] = [
  page(
    "/company/trust",
    "Trust Center",
    "Institutional trust requires visible responsibility.",
    "The BLACK& Trust Center connects legal identity, governance, privacy, responsible AI, research standards, security principles, incident reporting and official contact channels.",
    [
      { title: "Identity and ownership", body: ["BLACK HOLDINGS S.R.L. is the Romanian legal entity trading as BLACK&. Detailed ownership disclosures are published only when legally reviewed and approved."] },
      { title: "Governance", body: ["BLACK& is overseen by a six-person Board. Founders are Bruno Mihailescu, Kaschif Ali and Adam Constantin."] },
      { title: "Privacy and data", body: ["BLACK& applies role-based access, purpose limitation and controlled handling to protected environments. Privacy requests and incident reports may be directed to hq@blackandi.com."] },
      { title: "Responsible AI", body: ["AI-supported work retains human oversight, source verification, access control, limitations and escalation appropriate to consequence and context."] },
      { title: "Research integrity", body: ["Public analysis follows source, method, authorship, conflict, correction and revision standards."] },
      { title: "Vulnerability reporting", body: ["Security concerns should be sent to hq@blackandi.com with the subject ‘Security — Confidential’. Do not include unnecessary personal or confidential third-party data."] },
    ],
    [{ label: "Responsible AI", href: "/company/responsible-ai" }, { label: "Governance", href: "/company/governance" }, { label: "Research standards", href: "/research/standards" }, { label: "Privacy", href: "/privacy" }]
  ),
  page(
    "/company/responsible-ai",
    "Trust / Responsible AI",
    "Responsible AI is an operating discipline.",
    "BLACK& applies human oversight, source control, permission boundaries, validation, monitoring and accountable review to AI-supported systems according to their consequences and context.",
    [
      { title: "Human oversight", body: ["AI may support analysis and workflow. Material legal, financial, employment, security or governance decisions remain subject to authorized human judgment."] },
      { title: "Data governance", body: ["Data must have a lawful purpose, defined access, appropriate provenance and retention. Confidential information is not moved into unapproved model environments."] },
      { title: "Model risk", body: ["Deployments document intended use, limitations, failure modes, evaluation method, monitoring and escalation. Accuracy is not assumed across contexts."] },
      { title: "Prohibited uses", body: ["BLACK& does not authorize AI to fabricate evidence, conceal material uncertainty, bypass permissions or make high-consequence decisions without required human authority."] },
      { title: "Third parties and monitoring", body: ["Provider relationships, data terms, security and service dependency are reviewed according to use. Material changes require reassessment."] },
    ],
    [{ label: "Trust Center", href: "/company/trust" }, { label: "Technology development", href: "/model/technology-development" }]
  ),
];

export const institutionalPages: InstitutionalPage[] = [
  ...institutionalBasePages,
  ...researchPages,
  ...insightPages,
  ...newsroomPages,
  ...opportunityPages,
  ...trustPages,
];

export const institutionalPageMap = new Map(
  institutionalPages.map((item) => [item.path, item])
);

export const institutionalPaths = institutionalPages.map((item) => item.path);

export function getInstitutionalPage(pathname: string) {
  const normalized = pathname !== "/" && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
  return institutionalPageMap.get(normalized);
}
