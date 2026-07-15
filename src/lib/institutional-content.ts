import { publishedResearchPapers } from "@/lib/research-papers";

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
  statusLabels?: string[];
  document?: {
    issue: string;
    subtitle: string;
    pdfUrl: string;
    coverUrl: string;
    pages: number;
    version: string;
    classification: string;
    series: string;
    preparedBy: string;
    citation: string;
  };
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
  kind: InstitutionalPage["kind"] = "page",
  statusLabels: string[] = [],
  document?: InstitutionalPage["document"]
): InstitutionalPage => ({
  path,
  eyebrow,
  title,
  description,
  kind,
  updated: UPDATED,
  statusLabels,
  document,
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
      { title: "One organization, multiple capabilities", body: ["BLACK& brings strategic intelligence, technology development, company creation, operating support and long-term capital into one coordinated organization. The objective is not to accumulate ideas, but to turn a small number of well-understood opportunities into durable operating capability."], items: ["Develop intelligence around consequential problems", "Build technology that improves real decisions and workflows", "Create and support companies around validated theses", "Govern capital, risk and execution over the long term"] },
      { title: "How the organization works", body: ["Research begins with a defined decision or structural problem. Product and technology work converts validated requirements into systems. Company formation establishes accountable leadership, legal structure and operating ownership. Governance connects evidence, authority, capital and post-decision review."] },
      { title: "Portfolio architecture", body: ["BLACK& Technologies provides shared technology capability. SYSTEM INC AI focuses on AI-native company operations. CAESAREA Technologies develops sovereign decision-infrastructure research. EEIL focuses on European energy intelligence. BLACK& Ventures provides a venture-formation capability. Each profile states its own public status and evidence boundary."] },
      { title: "Governance", body: ["A six-person Board provides strategic oversight through a protected information and decision environment. The public governance record separates currently maintained structure from standards or frameworks that remain proposed or pending formal approval."] },
      { title: "Evidence and disclosure", body: ["BLACK& distinguishes a verified fact, an intended capability, a research initiative and a future plan. The website does not infer legal ownership, customers, revenue, certification, deployment or launch status from a portfolio name."] },
      { title: "Who BLACK& works with", body: ["Relevant relationships can include operators, institutions, technology partners, researchers, strategic capital counterparties and company-building teams. Every relationship requires a defined mandate, decision authority, information boundary and accountable owner."] },
      { title: "Built for long-term enterprise", body: ["BLACK& is structured for work that compounds: shared technology, reusable operating knowledge, disciplined governance and companies designed to remain relevant beyond a single product cycle."] },
      { title: "Institutional access", body: ["Public company, model, technology, research, trust and newsroom resources are available through this website. Institutional enquiries may be sent to hq@blackandi.com. Protected Board information is not part of the public website."] },
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
      { title: "What BLACK& builds", body: ["The portfolio spans enterprise AI, sovereign intelligence, energy intelligence, company operating systems and strategic company development. These capabilities are designed to reinforce one another through shared context, technology and governance."] },
      { title: "A distinct operating model", body: ["BLACK& combines the analytical depth of a research organization, the product discipline of a technology company, the formation capability of a company builder and the accountability of a long-term owner. That integration is the core of the BLACK& model."] },
      { title: "Sector focus", body: ["Confirmed areas of institutional focus include technology, infrastructure and construction, security and defense, energy, food production, consumer systems and hospitality. Participation depends on the existence of a material intelligence or operating advantage."] },
      { title: "Long-term ownership", body: ["BLACK& is designed around patient enterprise creation. Capital allocation, governance and product architecture are assessed against resilience, strategic relevance and the ability to compound operating value over time."] },
      { title: "Governance and accountability", body: ["BLACK& is overseen by a six-person Board. Bruno Mihailescu, Kaschif Ali and Adam Constantin are founders. Strategic decisions are reviewed through a governance model designed to preserve accountability, confidentiality and long-term alignment."] },
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
    "A concise reference to the identity, purpose, leadership and portfolio of BLACK&.",
    [
      { title: "Identity", body: ["Commercial name: BLACK&. Legal entity: BLACK HOLDINGS S.R.L. Jurisdiction: Romania. Company registration number: J2026000163078. Incorporation date: 25 June 2026."] },
      { title: "Registered office and contact", body: ["Registered office: Str. Calea Națională Nr. 66, Sc. A, Ap. 24, Botoșani County, Romania. Official website: blackandi.com. Institutional contact: hq@blackandi.com."] },
      { title: "Definition", body: ["BLACK& is an intelligence company builder that develops intelligence technologies, identifies high-conviction opportunities, deploys strategic capital and builds companies and long-term assets across selected industries."] },
      { title: "Leadership", body: ["Founders: Bruno Mihailescu, Kaschif Ali and Adam Constantin. Governance body: a six-person BLACK& Board."] },
      { title: "Companies and technologies", body: ["The confirmed public portfolio includes BLACK& Technologies, SYSTEM INC AI, CAESAREA Technologies, the European Energy Intelligence Layer — EEIL — and BLACK& Ventures."] },
      { title: "Institutional resources", body: ["Company facts, approved descriptions, leadership information and brand resources are available through the BLACK& Media Kit. Institutional enquiries can be directed to hq@blackandi.com."] },
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
      { title: "Bruno Mihailescu", body: ["Founder of BLACK& and Data Protection Officer for the BLACK& Board Intelligence environment. He contributes to the company’s formation, governance and the responsible operation of its protected information systems."] },
      { title: "Kaschif Ali", body: ["Founder of BLACK&. Together with the founding team, he contributes to the strategic direction, company-building agenda and long-term development of the group."] },
      { title: "Adam Constantin", body: ["Founder of BLACK&. Together with the founding team, he contributes to the strategic direction, operating priorities and governance of the group."] },
      { title: "The BLACK& Board", body: ["A six-person Board provides strategic oversight, reviews material decisions and protects the long-term interests of BLACK& and its shareholders. Board deliberations and member information are managed through the secure BLACK& Board environment."] },
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
      { title: "Current governance structure", body: ["BLACK& currently maintains a six-person Board as its central governance body. The Board reviews material strategic matters and uses the protected BLACK& Board environment for controlled distribution of Board materials, decision records and confidential intelligence.", "The public website does not identify Board members whose publication approval has not been recorded. Committee assignments and delegated authorities are published only after formal confirmation."], items: ["Six-person Board", "Protected Board information environment", "Recorded decisions and voting", "Role- and confidentiality-based distribution"] },
      { title: "Current decision process", body: ["Material proposals presented through the Board environment identify the decision, responsible proposer, supporting evidence, deadline and available voting choices. Decisions that require a vote are retained with the submitted result and associated audit history.", "Conflicts are declared before participation. Sensitive information is distributed according to role, confidentiality and legitimate need."] },
      { title: "Governance standard", body: ["The BLACK& governance standard requires a material proposal to identify its decision owner, evidence base, alternatives, principal risks, capital implications, implementation owner and review date before approval.", "The standard requires each operating company to define authority, reporting expectations, milestone review and escalation paths appropriate to its verified legal status and operating stage."] },
      { title: "Proposed framework and approval status", body: ["Policies that have not completed formal Board approval are described as proposed frameworks, not as current controls. A proposed framework becomes an operative BLACK& requirement only after approval, assignment of an accountable owner, versioning and publication of its effective date."] },
      { title: "Post-decision accountability", body: ["The governance standard requires material decisions to be reviewed after implementation. Assumptions, outcomes, deviations and corrective actions remain connected to the original decision so the Board can distinguish approval from operating performance."] },
      { title: "Evidence boundary", body: ["This page distinguishes confirmed operating structure from governance standards. It does not claim the existence of undisclosed committees, external certifications or controls that have not been formally verified."] },
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
    "BLACK& began in Romania in 2026 with a model designed to unite intelligence, technology, company creation and long-term enterprise building.",
    [
      { title: "25 June 2026 — Incorporation", body: ["BLACK HOLDINGS S.R.L., trading as BLACK&, was incorporated in Romania. Company registration number: J2026000163078."] },
      { title: "Portfolio formation", body: ["BLACK& established a focused portfolio spanning group technology, AI-operated company infrastructure, sovereign decision systems, European energy intelligence and strategic company development."] },
      { title: "The next chapter", body: ["The group is developing shared intelligence and operating infrastructure intended to help its companies move from insight to execution with greater speed, clarity and accountability."] },
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
    "BLACK& is registered in Romania and develops intelligence and technology capabilities for European and international institutional markets.",
    [
      { title: "Registered presence", body: ["BLACK HOLDINGS S.R.L. is registered at Str. Calea Națională Nr. 66, Sc. A, Ap. 24, Botoșani County, Romania."] },
      { title: "Market orientation", body: ["BLACK& evaluates opportunities across European and international institutional markets where intelligence infrastructure, technology and operating execution can address material needs."] },
      { title: "International orientation", body: ["The company’s technologies and operating model are designed for cross-border relevance while governance, security and delivery remain adapted to each market and institutional context."] },
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
      { title: "Operating sequence", body: ["The model is a gated sequence rather than an automatic pipeline. Every stage has defined inputs, a reviewable output, an accountable decision owner and an explicit reason to continue, redesign or stop."], items: ["Signal → evidence map", "Evidence → falsifiable thesis", "Thesis → system or formation proposal", "Proposal → governed operating company", "Operating evidence → long-term asset decision"] },
      { title: "1. Identify opportunity", body: ["Signals are assessed against structural relevance, unmet need, timing, strategic importance, market structure and the possibility of a defensible intelligence advantage.", "Inputs include retained sources, user or institutional needs, regulation, infrastructure constraints, technology change and existing alternatives. The output is an opportunity brief with a named question, evidence gaps and an initial stop condition."] },
      { title: "2. Develop conviction", body: ["Evidence is organized into a falsifiable thesis. Assumptions, risks and disconfirming information are documented before resources are committed.", "The decision owner must be able to state what new evidence would weaken or invalidate the thesis. Narrative appeal, addressable-market estimates or prior expenditure do not replace this test."] },
      { title: "3. Design technology", body: ["When software or information infrastructure is central to the thesis, BLACK& defines the user, decision environment, data inputs, system boundaries and validation path.", "The output is a controlled product or system proposal covering intended use, permissions, human authority, evaluation, security dependencies, operating cost and limitations."] },
      { title: "4. Form the company", body: ["A company is formed only when the market, operating model, leadership requirement, governance structure and initial capital plan are sufficiently defined.", "Formation requires a verified legal route, ownership decision, accountable leadership, milestone plan and clear boundary between BLACK& shared capability and company-level responsibility."] },
      { title: "5. Build the asset", body: ["Execution, operating support and governance convert the initial thesis into measurable capability. Long-term ownership is evaluated against strategic relevance and compounding value.", "Operating evidence—not launch language—determines whether the company scales, changes direction, remains a research initiative or stops."] },
      { title: "Decision criteria", body: ["Each gate tests evidence quality, problem materiality, user clarity, technical feasibility, legal and security constraints, capital intensity, strategic fit, leadership readiness and the relationship between controllable downside and potential long-term value."] },
      { title: "Responsibilities", body: ["Research owners maintain sources and assumptions. Product or technology owners define system boundaries and validation. Company leadership owns execution. The Board or delegated authority reviews material capital, governance and risk decisions. Responsibility is not transferred to an AI model or an external source."] },
      { title: "Stop conditions", body: ["Work pauses or stops when the problem is not material, evidence cannot support the thesis, the intended user is undefined, legal or security constraints cannot be responsibly resolved, technical validation fails, leadership is unavailable or the next capital commitment is not justified by milestone evidence."] },
      { title: "Illustrative application", body: ["A fragmented institutional decision process may first produce a research brief, then a narrow decision-support prototype. Only if the prototype improves a defined workflow and the legal, security and operating responsibilities are clear does the work advance to company formation or broader deployment."] },
      { title: "Limitations", body: ["The model is an operating discipline, not a prediction of commercial success. Evidence can be incomplete, timing can change and technical validation can fail. Some opportunities remain research, are pursued through partnerships or are rejected without forming a company."] },
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
    slug: "black-and-technologies",
    name: "BLACK& Technologies",
    category: "Technology capability",
    summary: "The BLACK& technology capability for AI platforms, enterprise software, applied AI and automation.",
    market: "Corporate and government",
    status: "Internal technology platform",
    statusLabels: ["Internal technology platform"],
    operatingEntity: "BLACK HOLDINGS S.R.L.; separate entity status has not been publicly confirmed.",
    capabilities: ["Applied AI systems", "Enterprise software architecture", "Automation and workflow design", "Shared intelligence infrastructure"],
    website: "https://blackandi.com/technologies",
  },
  {
    slug: "system-inc-ai",
    name: "SYSTEM INC AI",
    category: "AI company operating system",
    summary: "A platform designed to turn an idea into a structured company supported by coordinated specialist AI agents.",
    market: "Entrepreneurs and operating teams",
    status: "Product in development",
    statusLabels: ["Product in development", "Planned launch"],
    operatingEntity: "Operating entity pending public legal confirmation.",
    capabilities: ["Coordinated specialist AI agents", "Company structure generation", "Cross-department operating context", "Human-controlled executive workflows"],
    website: "https://system-inc-ai.vercel.app/",
  },
  {
    slug: "caesarea-technologies",
    name: "CAESAREA Technologies",
    category: "Sovereign intelligence",
    summary: "Decision infrastructure for governments, security institutions and critical infrastructure environments.",
    market: "Government and critical infrastructure",
    status: "Research initiative",
    statusLabels: ["Research initiative"],
    operatingEntity: "Operating entity pending public legal confirmation.",
    capabilities: ["Sovereign information workflows", "Decision traceability", "Controlled institutional context", "Human authority and escalation"],
    website: "https://blackandi.com/companies/caesarea-technologies",
  },
  {
    slug: "european-energy-intelligence-layer",
    name: "European Energy Intelligence Layer — EEIL",
    category: "Energy intelligence",
    summary: "An intelligence layer focused on European energy markets, infrastructure and strategic decision requirements.",
    market: "Energy institutions and enterprises",
    status: "Research initiative",
    statusLabels: ["Research initiative"],
    operatingEntity: "Operating entity pending public legal confirmation.",
    capabilities: ["European market context", "Infrastructure and grid intelligence", "Regulatory monitoring", "Strategic energy decision support"],
    website: "https://blackandi.com/companies/european-energy-intelligence-layer",
  },
  {
    slug: "black-and-ventures",
    name: "BLACK& Ventures",
    category: "Company creation and strategic capital",
    summary: "The BLACK& capability for venture formation, strategic capital and long-term company development.",
    market: "Selected company-building opportunities",
    status: "Venture formation capability",
    statusLabels: ["Venture formation capability"],
    operatingEntity: "Legal identity and investment mandate pending public legal confirmation.",
    capabilities: ["Opportunity structuring", "Company formation support", "Milestone-based capital planning", "Long-term company development"],
    website: "https://blackandi.com/companies/black-and-ventures",
  },
];

const companyPages: InstitutionalPage[] = [
  page(
    "/companies",
    "Companies",
    "Companies and operating platforms built around intelligence.",
    "BLACK& creates and develops companies around intelligence, technology and strategic operating opportunities.",
    [
      { title: "A connected portfolio", body: ["BLACK& Technologies provides the group’s technology foundation. SYSTEM INC AI develops an AI-native company operating system. CAESAREA Technologies focuses on sovereign decision infrastructure. EEIL turns fragmented European energy information into strategic context. BLACK& Ventures supports company formation and long-term development."], items: portfolioCompanies.map((company) => `${company.name} — ${company.summary}`) },
      { title: "Shared advantage", body: ["The portfolio is designed as a system rather than a collection of isolated businesses. Companies can draw on common intelligence, technology architecture, governance and operating experience while retaining a clear purpose and market focus."] },
      { title: "How a portfolio relationship is defined", body: ["A portfolio relationship describes the approved role of a company, platform or initiative within the BLACK& operating model. It does not automatically establish separate incorporation, ownership percentage, consolidation, commercial availability or an investment offer."] },
      { title: "Public status vocabulary", body: ["Every portfolio profile publishes a controlled status label so readers and automated systems do not infer commercial maturity, legal identity or launch status from a name alone."], items: ["Product in development — an identified product under active development", "Internal technology platform — shared capability used within the BLACK& operating model", "Research initiative — a defined research or validation programme, not a launched product", "Venture formation capability — company-building capability rather than a confirmed investment product", "Planned launch — an intended future release, subject to validation and change", "Private operating company — used only after the relevant legal and operating status is publicly confirmed"] },
      { title: "Operating review", body: ["Portfolio work is reviewed against a defined thesis, named user, operating milestone, responsible owner, evidence quality, risk and next decision. A status changes only when the underlying evidence and publication approval change."] },
      { title: "Evidence boundary", body: ["A portfolio listing confirms a public relationship to the BLACK& company-building agenda. It does not by itself confirm a separate legal entity, ownership percentage, revenue, customers, regulated authorization or commercial launch. Each profile states what is confirmed and what remains pending legal or operational verification."] },
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
        { title: "Public classification", body: [`Published status: ${company.status}. This label describes the current public classification and is not a claim of revenue, customer adoption, regulated authorization or completed commercial launch.`] },
        { title: "Role within BLACK&", body: [company.slug === "black-and-technologies" ? "BLACK& Technologies is the group technology capability, translating company-building theses into secure software, AI systems and operating infrastructure." : `${company.name} is part of the BLACK& company-building portfolio and contributes a specialized capability to the wider group.`] },
        { title: "Problem addressed", body: [company.slug === "system-inc-ai" ? "Company creation is slowed by fragmented legal, financial, operational and commercial systems. SYSTEM INC AI is designed to coordinate specialist AI departments around one shared company context." : company.slug === "caesarea-technologies" ? "Institutions operating critical systems require sovereign, traceable and secure environments for understanding complex information and supporting consequential decisions." : company.slug === "european-energy-intelligence-layer" ? "European energy decisions depend on fragmented market, infrastructure, regulatory and geopolitical information that must be converted into consistent strategic context." : company.slug === "black-and-ventures" ? "High-conviction opportunities require a disciplined path from thesis and capital to company formation and accountable execution." : "Organizations require practical AI and information infrastructure connected to real operating decisions rather than isolated demonstrations."] },
        { title: "Market and intended users", body: [`Primary market: ${company.market}. The company is built around users who need dependable intelligence and operating capability in complex environments.`] },
        { title: "Capabilities", body: ["The current public capability definition includes:"], items: company.capabilities },
        { title: "Operating entity", body: [company.operatingEntity] },
        { title: "Development and validation", body: [`Current status: ${company.status}. Development is organized around defined users, product capability, practical validation and accountable operating milestones. A future launch statement remains distinct from a completed launch.`] },
        { title: "How it creates value", body: [company.slug === "system-inc-ai" ? "SYSTEM INC AI gives entrepreneurs access to coordinated AI departments across legal, finance, operations, sales, marketing, human resources, strategy and customer support from the first day of company formation." : company.slug === "caesarea-technologies" ? "CAESAREA is designed to help institutions transform complex, sensitive information into traceable strategic understanding while retaining sovereign control and human authority." : company.slug === "european-energy-intelligence-layer" ? "EEIL connects market, infrastructure, regulatory and geopolitical information so energy organizations can evaluate change within one coherent decision context." : company.slug === "black-and-ventures" ? "BLACK& Ventures connects validated opportunity theses with formation capability, governance and strategic capital." : "BLACK& Technologies creates reusable technical foundations that reduce fragmentation across the group and accelerate the path from concept to operating product."] },
        { title: "Security and governance", body: ["Access, data provenance, human review, confidentiality and change control are defined according to the intended deployment. Public descriptions exclude security-sensitive architecture and do not authorize use in a high-consequence environment without separate validation."] },
        { title: "Documentation", body: ["Public documentation will be expanded as product boundaries, operating responsibility, validation results and legal status are approved for publication. Technical or commercial materials not linked from this profile should not be treated as official BLACK& documentation."] },
        { title: "Limitations", body: ["The profile describes intended capability and current public status. It does not guarantee performance, availability, completeness or suitability for a particular decision. Model-assisted output requires authorized human review."] },
        { title: "Official links", body: [`Official public destination: ${company.website}`] },
      ],
      [{ label: "Companies portfolio", href: "/companies" }, { label: "Related technologies", href: "/technologies" }, { label: "Newsroom", href: "/newsroom" }],
      "page",
      company.statusLabels
    )
  ),
];

const technologies = [
  { slug: "blackand-intelligence-core", name: "BLACK& Intelligence Core", purpose: "Shared intelligence architecture for organizing sources, context and decision support across selected BLACK& environments.", problem: "Evidence, interpretation, authority and institutional memory are often separated across tools, making consequential decisions difficult to reconstruct.", users: "Authorized operating and governance teams", entity: "BLACK& Technologies", status: "Internal technology platform", capabilities: ["Source and provenance organization", "Shared institutional context", "Permission-aware retrieval", "Decision-support workflows", "Reviewable institutional memory"], limitations: "The public profile does not disclose security-sensitive architecture, connected sources or production coverage. Output remains dependent on source quality and authorized human review." },
  { slug: "system-inc-ai", name: "SYSTEM INC AI", purpose: "Coordinates specialist AI departments to help structure and operate a company from one shared context.", problem: "New companies must coordinate legal, finance, operations, sales, marketing, people and support before they can afford a complete executive organization.", users: "Entrepreneurs and company operators", entity: "SYSTEM INC AI", status: "Product in development", capabilities: ["Specialist departmental agents", "Shared company context", "Structured company formation workflows", "Cross-department coordination", "Human-controlled executive review"], limitations: "The system does not replace licensed legal, tax, financial or employment professionals. Public performance evidence and production availability remain subject to release documentation." },
  { slug: "caesarea", name: "CAESAREA Decision Infrastructure", purpose: "Supports sovereign and critical-infrastructure decision environments with controlled intelligence workflows.", problem: "Institutions handling critical information require traceable understanding without surrendering authority, sensitive context or operating continuity.", users: "Governments and critical infrastructure institutions", entity: "CAESAREA Technologies", status: "Research initiative", capabilities: ["Controlled intelligence workflows", "Source traceability", "Sovereign deployment research", "Human escalation", "Critical-decision context"], limitations: "No public profile is a claim of government deployment, security certification or suitability for classified data. Those matters require institution-specific evidence and authorization." },
  { slug: "eeil", name: "European Energy Intelligence Layer", purpose: "Structures European energy market, infrastructure, regulatory and strategic information for decision support.", problem: "Energy decisions are weakened when price, physical capacity, regulation, security and capital are evaluated on separate timelines and systems.", users: "Energy institutions and enterprises", entity: "EEIL", status: "Research initiative", capabilities: ["Market context", "Infrastructure and grid mapping", "Regulatory monitoring", "Energy-security analysis", "Decision-oriented synthesis"], limitations: "EEIL does not provide trading advice, guaranteed forecasts or a complete public dataset. Methodology, coverage and update frequency must be evaluated for each use." },
];

const technologyPages: InstitutionalPage[] = [
  page(
    "/technologies",
    "Technologies",
    "Intelligence and operating infrastructure.",
    "BLACK& builds intelligence and operating systems that turn fragmented information into coordinated, accountable action.",
    [
      { title: "Technology portfolio", body: ["The portfolio combines a shared intelligence foundation with specialized products for AI-operated companies, sovereign institutions and European energy decisions."], items: technologies.map((technology) => `${technology.name} — ${technology.purpose}`) },
      { title: "Designed as infrastructure", body: ["Each system is built around a defined user, a consequential decision and a clear chain of responsibility. Shared context connects specialist capabilities; permissions protect sensitive information; human governance remains present where judgment matters."] },
      { title: "From analysis to operation", body: ["The goal is not simply to generate answers. BLACK& technology is designed to organize evidence, coordinate work, preserve institutional memory and help authorized people move from understanding to execution."] },
      { title: "Product definition", body: ["A public technology profile identifies the problem, intended users, capabilities, operating entity or responsible capability, current status, security principles, documentation route and material limitations. Intended capability is not represented as deployed performance."] },
      { title: "Security and human authority", body: ["Source provenance, permissions, review, monitoring, change control and incident response are considered system requirements. High-consequence legal, financial, security, employment or governance decisions remain subject to authorized human authority."] },
      { title: "Validation", body: ["Validation connects a system output to a defined user workflow and evaluation standard. A demonstration is not treated as production evidence, and a model response is not treated as proof without retained sources and contextual review."] },
      { title: "Documentation boundary", body: ["Public profiles explain architecture only at an institutional level. Confidential sources, credentials, security-sensitive diagrams, internal prompts and unverified performance claims are excluded."] },
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
        { title: "Problem", body: [technology.problem] },
        { title: "Intended users", body: [technology.users] },
        { title: "Capabilities", body: ["The current public capability definition includes:"], items: technology.capabilities },
        { title: "System architecture", body: ["The architecture separates source collection, context organization, model-assisted analysis, permissions, human review and accountable action. This creates a controlled path from raw information to useful operating output."] },
        { title: "Inputs and outputs", body: ["Inputs must have defined provenance and permission. Outputs are decision support or operating artifacts, not automatic proof. Every deployment must document limitations and escalation paths."] },
        { title: "Security and governance", body: ["Access control, source traceability, human oversight, monitoring, incident response and change control are treated as product requirements."] },
        { title: "Operating entity and status", body: [`Operating entity: ${technology.entity}. Public status: ${technology.status}.`] },
        { title: "Documentation", body: ["The authoritative public documentation is the current technology profile and any methodology, security or release material linked from blackandi.com. Unlinked demonstrations, draft claims and third-party summaries are not official product documentation."] },
        { title: "Limitations", body: [technology.limitations] },
        { title: "Human authority", body: ["Model output supports judgment; it does not replace accountable authority. Material decisions remain governed by the permissions, review requirements and escalation paths of the organization using the system."] },
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
      { title: "How sectors are selected", body: ["BLACK& focuses on industries where complex information, strategic infrastructure and operational execution intersect. The strongest opportunities are those where better intelligence can improve a repeated, high-value decision and become part of the operating system of an enterprise."] },
      { title: "A cross-sector advantage", body: ["Lessons developed in one environment—such as data governance, decision traceability, AI coordination or risk monitoring—can strengthen companies in another. This transfer of capability is a central advantage of the BLACK& model."] },
      { title: "Research before formation", body: ["An industry thesis can remain research for as long as the user, evidence, legal route, technical feasibility or company-building conditions are insufficiently defined. Sector inclusion does not require immediate company formation."] },
      { title: "Decision requirements", body: ["Sector work identifies the material decision, responsible user, evidence sources, update cycle, legal and safety constraints, operating consequence and conditions under which the thesis must change."] },
      { title: "Company-building threshold", body: ["A sector opportunity advances only when proprietary understanding can be translated into durable operating capability and when accountable leadership, governance and capital can be defined around it."] },
      { title: "Disclosure boundary", body: ["A listed industry is an area of research and company-building interest. It is not a claim that BLACK& owns an operating company, customer relationship or regulated license in every listed market."] },
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
        { title: "Users and decisions", body: ["The relevant user is not an abstract market. BLACK& begins with the operator, institution or leadership team responsible for a repeated material decision, then defines the evidence, timing, authority and consequence surrounding that decision."] },
        { title: "Inputs and outputs", body: ["Inputs may include operational records, public and licensed sources, market structure, regulation, infrastructure constraints and expert judgment. Useful outputs include a decision brief, monitored signal, governed workflow, operating system or a documented decision not to proceed."] },
        { title: "Technology and operating opportunities", body: ["Relevant opportunities may involve information infrastructure, workflow systems, AI-supported analysis, operating software or company creation. A technology becomes strategically relevant only when it improves a defined workflow and an accountable user can act on the result. Specific initiatives are linked only when their relationship is confirmed."] },
        { title: "Company-building criteria", body: ["A sector thesis advances toward company formation only when the problem is material, the intended user is identifiable, evidence is sufficiently differentiated, the operating and legal route is credible, and the opportunity can support durable capability rather than a temporary feature."] },
        { title: "Risk and governance", body: ["Sector-specific legal, safety, security, data and operating constraints must be defined before product or capital decisions. High-consequence applications retain human authority and review."] },
        { title: "Limitations", body: ["Industry interest is not evidence of an operating company, customer, regulated license or investment in every part of the sector. The public profile establishes a research and company-building perspective; entity-level claims appear only on a verified company or technology profile."] },
        { title: "BLACK& perspective", body: [industry.slug === "energy" ? "EEIL applies this perspective to European energy markets, infrastructure and strategic decision requirements." : industry.slug === "security-defense" ? "CAESAREA Technologies applies this perspective to sovereign intelligence and critical decision environments." : industry.slug === "technology" ? "BLACK& Technologies and SYSTEM INC AI apply this perspective to intelligence infrastructure and AI-native company operations." : `In ${industry.name.toLowerCase()}, BLACK& is interested in opportunities where technology can become a durable operating advantage rather than a standalone feature.`] },
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

const reportDefinitions = publishedResearchPapers;

const researchPages: InstitutionalPage[] = [
  page(
    "/research",
    "Research",
    "Research for decisions, not content volume.",
    "BLACK& Research examines how intelligence becomes technology, coordinated action and long-term enterprise value.",
    [
      { title: "The central question", body: ["How can an organization move from abundant information to a small number of high-quality decisions—and from those decisions to technologies and companies that endure? BLACK& Research studies that transition across strategy, product architecture, governance and capital."] },
      { title: "Research themes", body: ["The programme connects intelligence company building, decision infrastructure, capital allocation, sovereign AI, European energy systems and AI in infrastructure. Each theme is treated as an operating problem, not as a technology trend." ] },
      { title: "Published research", body: ["The first three professional papers in the Intelligence Infrastructure Series are now available in full. Each publication includes methodology, definitions, limitations, references, revision history and a suggested citation."], items: reportDefinitions.map((report) => `Paper ${report.issue} — ${report.title}: ${report.subtitle}`) },
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
      { title: "Evidence quality", body: ["Primary sources are preferred for factual claims. Secondary analysis is attributed, and material uncertainty remains visible to the reader."] },
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
      { title: "A reviewable path", body: ["A useful methodology makes the path from question to conclusion visible. It defines the decision, terms, inputs, transformations, exclusions and the conditions under which the conclusion should change."] },
      { title: "Methods in practice", body: ["BLACK& uses structured opportunity evaluation, intelligence-thesis development, company-creation gates and decision reviews to make uncertainty explicit before resources are committed."] },
      { title: "Version discipline", body: ["A material change to an input, definition, weighting or calculation requires a version update and a note describing comparability with prior results."] },
    ],
    [{ label: "Research standards", href: "/research/standards" }, { label: "Data", href: "/research/data" }]
  ),
  page(
    "/research/data",
    "Research / Data",
    "Data and indices with explicit rights and limitations.",
    "Data becomes useful when its origin, meaning, time horizon and relationship to a decision are understood.",
    [
      { title: "From data to context", body: ["A dataset is not a decision system. Definitions, provenance, coverage and update frequency determine what can responsibly be inferred from it. Context connects those properties to the question an organization is trying to answer."] },
      { title: "Comparability", body: ["Indices and benchmarks are valuable only when their components and calculation rules remain stable enough for comparison. Material changes must be visible so apparent movement is not confused with a methodological change."] },
      { title: "Responsible use", body: ["Access rights, licensing, privacy and security remain part of the analytical design. A technically available data source is not automatically appropriate for every purpose."] },
    ],
    [{ label: "Methodologies", href: "/research/methodologies" }, { label: "Research", href: "/research" }]
  ),
  page(
    "/research/reports",
    "Research / Reports",
    "Published BLACK& Research papers.",
    "Three public papers examine sovereign AI infrastructure, AI-native company creation and the path from corporate information to enterprise capability.",
    [
      { title: "Intelligence Infrastructure Series", body: ["The series connects public evidence with clearly identified BLACK& frameworks. Third-party findings, proprietary interpretation, limitations and revision status remain separated inside every publication."], items: reportDefinitions.map((report) => `Paper ${report.issue} · ${report.title} · ${report.pages} pages · ${report.version}`) },
      { title: "Publication standard", body: ["Every published paper identifies author, preparation support, publication date, version, public classification, methodology, definitions, limitations, references, revision history and legal notice."] },
    ],
    reportDefinitions.map((report) => ({ label: report.title, href: `/research/reports/${report.slug}` })),
    "collection"
  ),
  page(
    "/research/briefings",
    "Research / Briefings",
    "Concise intelligence for defined decisions.",
    "BLACK& briefings explain a material development, its strategic relevance, principal uncertainties and the decisions it may affect.",
    [
      { title: "Designed for action", body: ["A BLACK& briefing begins with a direct answer, then explains the context, evidence, implications, uncertainty and signals that could change the conclusion."] },
      { title: "Institutional memory", body: ["Briefings preserve not only the conclusion but the reasoning behind it, giving leaders a durable record for future review and better follow-through."] },
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
        { title: "Executive summary", body: [report.summary, report.thesis] },
        { title: "Methodology and scope", body: [report.methodology] },
        { title: "Operating framework", body: [report.framework] },
        { title: "Key findings", body: ["The paper identifies four principal findings:"], items: report.findings },
        { title: "Institutional application", body: [report.application] },
        { title: "Limitations", body: [report.limitations] },
        { title: "Publication record", body: [`Author: ${report.author}. Prepared by: ${report.preparedBy}. Published: ${report.publicationDate}. Version: ${report.version}. Classification: ${report.classification}.`] },
      ],
      [{ label: "All reports", href: "/research/reports" }, { label: "Research standards", href: "/research/standards" }],
      "report",
      ["Published research", `Paper ${report.issue}`, "Public"],
      {
        issue: report.issue,
        subtitle: report.subtitle,
        pdfUrl: report.pdfUrl,
        coverUrl: report.coverUrl,
        pages: report.pages,
        version: report.version,
        classification: report.classification,
        series: report.series,
        preparedBy: report.preparedBy,
        citation: report.citation,
      }
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

const insightAngles: Record<string, { analysis: string; action: string }> = {
  "what-is-an-intelligence-company-builder": { analysis: "The model begins before company formation. It develops a view of structural change, designs the technology and operating system required to act, then creates a governed enterprise around that capability.", action: "Evaluate the full chain: source advantage, decision advantage, technical capability, leadership, capital discipline and long-term ownership." },
  "why-information-is-not-intelligence": { analysis: "A report, dashboard or data feed can increase volume without improving judgment. Intelligence appears only when provenance, context, uncertainty and consequence are connected to a specific decision.", action: "Start with the decision and work backwards to the minimum evidence, definitions and update cycle required." },
  "how-strategic-conviction-is-developed": { analysis: "Strong conviction is not the absence of doubt. It is a documented explanation of why one course of action is preferable, which assumptions matter most and which evidence would reverse the decision.", action: "Record the central thesis, disconfirming signals, decision horizon, exposure and next review before committing resources." },
  "venture-studio-vs-intelligence-company-builder": { analysis: "A venture studio is optimized for repeatable company formation. An Intelligence Company Builder is optimized for converting proprietary understanding into systems and enterprises, even when the formation path differs from one opportunity to another.", action: "Ask whether the durable advantage comes from the formation machine itself or from the intelligence and infrastructure behind a specific opportunity." },
  "holding-company-vs-intelligence-company-builder": { analysis: "A holding company describes an ownership relationship. An Intelligence Company Builder describes an active operating capability that researches opportunities, builds technology and creates companies before and during ownership.", action: "Separate the legal ownership structure from the capabilities that actually create and govern enterprise value." },
  "how-intelligence-changes-capital-allocation": { analysis: "Better intelligence should change not only whether capital is committed, but when, in what amount, against which milestone and under which stop condition.", action: "Use staged exposure so each allocation purchases evidence as well as progress." },
  "role-of-technology-in-company-creation": { analysis: "Technology can define the product, coordinate the company or create operating leverage. Its value depends on solving a repeated problem inside a real workflow, not on technical novelty alone.", action: "Name the user, decision, workflow, baseline and accountable owner before selecting the technology." },
  "why-shared-context-matters-in-enterprise-ai": { analysis: "Specialist AI agents can produce locally correct outputs that conflict at company level. Shared definitions, priorities, permissions and memory allow departments to coordinate around the same enterprise reality.", action: "Create one governed company context before expanding the number of models or agents." },
  "building-companies-around-structural-change": { analysis: "Structural change matters when it alters cost, behavior, regulation, infrastructure or institutional power for long enough to support a new operating model.", action: "Explain the mechanism of change, timing, affected user, irreversible consequence and capability required to respond." },
  "evaluate-a-high-conviction-opportunity": { analysis: "High conviction should emerge from material need, differentiated access or capability, credible timing and an attractive relationship between upside and controllable downside.", action: "Score the opportunity against evidence quality, urgency, feasibility, capital intensity, strategic fit and explicit failure modes." },
  "market-research-vs-strategic-intelligence": { analysis: "Market research describes a landscape. Strategic intelligence selects and organizes the parts of that landscape that alter a consequential choice for a named decision-maker.", action: "Translate every research finding into an implication, an owner and a decision that may change." },
  "long-term-ownership-and-company-design": { analysis: "A long horizon makes early architecture more important. Governance, talent systems, resilience and data foundations must support adaptation rather than a single transaction or product cycle.", action: "Design the company around capabilities that can compound and survive changes in product, market and leadership." },
  "what-makes-an-enterprise-resilient": { analysis: "Resilience combines visibility, redundancy, decision rights, financial room and the ability to learn. It is demonstrated by preserving critical function during disruption, not by the absence of disruption.", action: "Identify critical functions, failure thresholds, dependencies, fallback capacity and who has authority during an incident." },
  "decision-infrastructure-as-competitive-advantage": { analysis: "When teams share trusted context and clear authority, they can act faster without sacrificing traceability. The advantage compounds because each decision improves institutional memory for the next one.", action: "Connect sources, definitions, decision owners, workflows and post-decision review in one operating loop." },
  "human-judgment-in-ai-supported-organizations": { analysis: "Models optimize within the objective and context they receive. Humans remain responsible for choosing objectives, resolving exceptions, balancing values and accepting consequences.", action: "Define where AI advises, where it may execute and where explicit human approval is mandatory." },
  "sovereign-ai-definition-architecture-relevance": { analysis: "Sovereign AI is the practical ability to understand, govern and continue operating an AI capability across data, compute, models, deployment and institutional control.", action: "Map every dependency and decide which layers require direct control, contractual assurance or a credible exit path." },
  "energy-intelligence-from-data-to-decisions": { analysis: "Energy prices are inseparable from physical networks, policy, security and investment cycles. A useful intelligence layer aligns these signals across time and geography.", action: "Join market, grid, regulatory, security and capital data around the decision horizon of the user." },
  "ai-in-infrastructure-where-value-is-created": { analysis: "The best infrastructure use cases sit where uncertainty is costly, evidence is repeated and intervention is possible. Forecasting without an operational response path creates little value.", action: "Prioritize document control, schedule risk, procurement, quality and asset operations with measurable baselines." },
  "company-building-requires-more-than-capital": { analysis: "Capital amplifies the operating system it enters. Without a coherent thesis, product architecture, leadership and governance, additional funding can accelerate fragmentation instead of progress.", action: "Treat capability, ownership and decision quality as prerequisites for capital, not consequences of it." },
  "from-thesis-to-operating-company": { analysis: "A thesis becomes a company through a sequence of evidence-producing commitments: validation, market definition, architecture, formation, leadership, capital, entry, governance and scale.", action: "Give every stage a decision owner, required output, evidence threshold and stop condition." },
};

const insightPages: InstitutionalPage[] = [
  page(
    "/insights",
    "Insights",
    "Analysis with an explicit point of view and evidence boundary.",
    "BLACK& Insights explores the decisions, systems and operating principles behind intelligence-led enterprise building.",
    [
      { title: "Ideas for builders and decision-makers", body: ["The collection moves from first principles—what intelligence is and how conviction forms—to practical questions about technology, capital, governance, resilience and AI-supported organizations."] },
      { title: "Explore the collection", body: ["Each article offers a direct point of view, an operating implication and a practical way to apply the idea."], items: insights.map((insight) => `${insight[1]} — ${insight[2]}`) },
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
        { title: "The central idea", body: [thesis] },
        { title: "Why it matters", body: [insightAngles[slug].analysis] },
        { title: "Put it into practice", body: [insightAngles[slug].action] },
        { title: "A question for leaders", body: [`What would change in the organization if the principle behind “${title}” became part of its normal operating system rather than a one-time exercise?`] },
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
    "Company developments, portfolio progress and institutional information from BLACK&.",
    [
      { title: "BLACK& Board v1.1", body: ["The latest Board platform release improves performance, collaboration and secure mobile access to reports, intelligence and decisions."] },
      { title: "Secure Board Communication Network", body: ["On 27 July 2026, BLACK& will introduce encrypted communication and native video conferencing inside the protected Board ecosystem."] },
      { title: "The Intelligence Company Builder", body: ["BLACK& Research presents an operating framework connecting signal, conviction, technology, company formation and long-term enterprise value."] },
      { title: "Media contact", body: ["Institutional and media enquiries: hq@blackandi.com."] },
    ],
    [{ label: "Announcements", href: "/newsroom/announcements" }, { label: "Press releases", href: "/newsroom/press-releases" }, { label: "Media kit", href: "/newsroom/media-kit" }],
    "collection"
  ),
  page(
    "/newsroom/announcements",
    "Newsroom / Announcements",
    "Official announcements.",
    "A chronological view of the developments shaping BLACK& and its portfolio.",
    [
      { title: "15 July 2026 — Board v1.1", body: ["BLACK& releases an updated governance experience with improved performance, collaboration and secure mobile access."] },
      { title: "27 July 2026 — Scheduled launch", body: ["The BLACK& Secure Board Communication Network introduces encrypted messaging and video conferencing for Board collaboration."] },
      { title: "July 2026 — Research", body: ["BLACK& publishes The Intelligence Company Builder, a framework for moving from proprietary understanding to durable enterprise capability."] },
    ],
    [{ label: "Newsroom", href: "/newsroom" }],
    "collection"
  ),
  page(
    "/newsroom/press-releases",
    "Newsroom / Press Releases",
    "Press releases and supporting records.",
    "Core company information and recent developments for journalists, researchers and institutional partners.",
    [
      { title: "Company profile", body: ["BLACK& is an Intelligence Company Builder. It develops intelligence technologies, creates companies and supports long-term enterprise development across selected industries. The company is governed through a six-person Board."] },
      { title: "Current portfolio", body: ["The public portfolio includes BLACK& Technologies, SYSTEM INC AI, CAESAREA Technologies, the European Energy Intelligence Layer — EEIL — and BLACK& Ventures."] },
      { title: "Media enquiries", body: ["For company verification, interviews and institutional enquiries, contact hq@blackandi.com."] },
    ],
    [{ label: "Media kit", href: "/newsroom/media-kit" }],
    "collection"
  ),
  page(
    "/newsroom/media-coverage",
    "Newsroom / Coverage",
    "Independent media coverage.",
    "A direct route for media organizations seeking company facts, comment and portfolio context.",
    [
      { title: "For journalists", body: ["BLACK& can provide verified company facts, founder information, portfolio descriptions and background on the Intelligence Company Builder model."] },
      { title: "Areas of commentary", body: ["Relevant subjects include AI-native company operations, sovereign decision infrastructure, European energy intelligence, enterprise building and the governance of AI-supported organizations."] },
      { title: "Contact", body: ["Send the publication name, subject, deadline and intended use to hq@blackandi.com."] },
    ],
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
    [{ title: "How we can help", body: ["The BLACK& team can provide company facts, portfolio context, approved descriptions and responses to questions about the Intelligence Company Builder model." ] }],
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
      { title: "Trust register", body: ["This directory separates operative public policies, documented operating positions and controls still pending formal publication. Each linked record identifies scope, owner, version, review status and material limitations."], items: ["Security and access", "Data, privacy and retention", "Subprocessors and data residency", "Incident response", "Responsible disclosure", "AI transparency and provider inventory", "Document and policy register"] },
      { title: "Identity and governance", body: ["BLACK HOLDINGS S.R.L. is the legal entity trading as BLACK&. BLACK& is overseen by a six-person Board. Detailed ownership, committee and delegated-authority disclosures are published only when legally reviewed and approved."] },
      { title: "Current operational position", body: ["The BLACK& Board environment uses authenticated access and role-aware application permissions. The Trust Center does not represent those measures as an external certification or independent assurance report. Technical claims remain limited to controls that have been approved for public description."] },
      { title: "Privacy and data", body: ["The current public privacy position covers purpose limitation, controlled access, retention review and rights requests. The detailed record identifies what is documented, what requires system-specific confirmation and how to contact the responsible owner."] },
      { title: "AI transparency", body: ["AI-supported work retains authorized human review. The AI transparency record distinguishes intended use, model-provider disclosure, provider inventory, data handling, limitations and applications that require human authority."] },
      { title: "Security reporting", body: ["Security concerns may be submitted to hq@blackandi.com with the subject ‘Security — Confidential’. The responsible-disclosure record explains safe reporting, acknowledgment and disclosure boundaries. Do not send exploit data, credentials or unnecessary personal information through an unapproved channel."] },
      { title: "Assurance and certifications", body: ["No external security certification is claimed on this Trust Center unless the certificate, scope, issuing body and validity period are published. The absence of a listed certification must not be interpreted as certification."] },
    ],
    [{ label: "Security and access", href: "/company/trust/security" }, { label: "Data, privacy and retention", href: "/company/trust/data-privacy-retention" }, { label: "Subprocessors", href: "/company/trust/subprocessors" }, { label: "Incident response", href: "/company/trust/incident-response" }, { label: "Responsible disclosure", href: "/company/trust/responsible-disclosure" }, { label: "AI transparency", href: "/company/trust/ai-transparency" }, { label: "Policy register", href: "/company/trust/policy-register" }],
    "collection"
  ),
  page(
    "/company/trust/security",
    "Trust / Security",
    "Security and access control.",
    "A public description of the security principles governing protected BLACK& environments, their current evidence boundary and the controls that require system-level verification.",
    [
      { title: "Record status", body: ["Owner: BLACK& technology and governance functions. Version: 1.0. Public status: operating position. Last reviewed: 15 July 2026. Next review occurs after a material architecture, provider or access-control change."] },
      { title: "Access model", body: ["Protected environments require authenticated users and application permissions appropriate to role and confidentiality. Administrative authority, Board access and suspended or revoked states are treated as distinct authorization conditions."] },
      { title: "Security lifecycle", body: ["Security requirements include account lifecycle controls, least-privilege review, protected secrets, event logging, incident escalation, recovery planning and review of externally hosted dependencies."] },
      { title: "Evidence boundary", body: ["This public record is not a penetration-test report, SOC report, ISO certificate or guarantee that an incident cannot occur. Control effectiveness must be validated through retained technical evidence and periodic review."] },
      { title: "Contact", body: ["Report a security concern to hq@blackandi.com with the subject ‘Security — Confidential’. Use the responsible-disclosure procedure before sending sensitive technical material."] },
    ],
    [{ label: "Responsible disclosure", href: "/company/trust/responsible-disclosure" }, { label: "Incident response", href: "/company/trust/incident-response" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/company/trust/data-privacy-retention",
    "Trust / Data",
    "Data, privacy and retention.",
    "The BLACK& public data position defines purpose, access, retention review, rights handling and the boundary between public, internal, confidential and Board information.",
    [
      { title: "Record status", body: ["Owner: Data Protection Officer — Bruno Mihailescu. Version: 1.0. Public status: policy summary. Last reviewed: 15 July 2026."] },
      { title: "Purpose and access", body: ["Personal and confidential information is handled for a defined operational, legal, security or governance purpose. Access is limited by role, authorization and legitimate need within the relevant system."] },
      { title: "Retention", body: ["Retention depends on purpose, legal duty, security requirement and the relevant record category. BLACK& does not publish a universal retention period where a verified category schedule has not been approved. Records are reviewed for deletion, anonymization, archival or legal hold according to the applicable schedule."] },
      { title: "Rights and contact", body: ["Privacy and data-rights requests may be sent to hq@blackandi.com and addressed to the Data Protection Officer. Identity verification may be required before protected information is disclosed or changed."] },
      { title: "Data residency", body: ["Data residency depends on the approved provider and service configuration. System-specific residency is published only after provider, region, transfer mechanism and scope have been verified."] },
    ],
    [{ label: "Privacy policy", href: "/privacy" }, { label: "Subprocessors", href: "/company/trust/subprocessors" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/company/trust/subprocessors",
    "Trust / Providers",
    "Subprocessors and service dependencies.",
    "A controlled public register for third-party providers that may support hosting, authentication, communications, monitoring or AI functionality.",
    [
      { title: "Record status", body: ["Owner: BLACK& technology and data-protection functions. Version: 1.0. Public status: disclosure framework. Last reviewed: 15 July 2026."] },
      { title: "Publication rule", body: ["A provider is listed only after its service purpose, contracting entity, relevant data category, processing location or region, transfer basis and security review have been verified for publication."] },
      { title: "Current public register", body: ["A complete verified subprocessor register is pending formal publication. This page therefore does not infer providers from website code, email routing or public demonstrations."] },
      { title: "Material changes", body: ["Material provider changes require a documented review of purpose, access, retention, region, security, continuity and exit conditions. Where contractually required, affected users receive notice through the appropriate channel."] },
    ],
    [{ label: "Data and retention", href: "/company/trust/data-privacy-retention" }, { label: "AI transparency", href: "/company/trust/ai-transparency" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/company/trust/incident-response",
    "Trust / Incidents",
    "Incident response and recovery.",
    "The incident-response framework defines triage, containment, evidence preservation, decision authority, notification, recovery and post-incident review.",
    [
      { title: "Record status", body: ["Owner: BLACK& technology and governance functions. Version: 1.0. Public status: response framework. Last reviewed: 15 July 2026."] },
      { title: "Response sequence", body: ["A reported event is recorded, assessed for severity and assigned an accountable owner. Response can include containment, access revocation, provider escalation, evidence preservation, recovery and controlled communication."] },
      { title: "Notification", body: ["Legal, contractual and stakeholder notification decisions depend on the confirmed scope, affected data or service, risk and applicable reporting deadline. Public statements are not issued before material facts and authority are established."] },
      { title: "Recovery and review", body: ["Recovery verifies service integrity before normal operation resumes. A material incident receives a post-incident review covering root cause, control changes, owner, deadline and evidence of completion."] },
      { title: "Report an incident", body: ["Send a concise initial report to hq@blackandi.com with the subject ‘Security — Confidential’. Do not include credentials or unnecessary protected information in the first message."] },
    ],
    [{ label: "Security", href: "/company/trust/security" }, { label: "Responsible disclosure", href: "/company/trust/responsible-disclosure" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/company/trust/responsible-disclosure",
    "Trust / Disclosure",
    "Responsible vulnerability disclosure.",
    "A safe route for reporting suspected security weaknesses without creating additional harm or unauthorized access.",
    [
      { title: "Safe reporting", body: ["Report the affected public service, observed behavior, time, minimal reproduction steps and contact route. Stop testing if access to personal, confidential, Board or third-party information becomes possible."] },
      { title: "Prohibited activity", body: ["Do not use destructive testing, denial of service, social engineering, credential attacks, persistence, data extraction or publication of an unremediated weakness. This page does not authorize activity prohibited by law or contract."] },
      { title: "BLACK& response", body: ["BLACK& aims to acknowledge a credible report, assign an owner, assess severity and communicate a remediation or coordination path where contact is possible. A fixed response-time commitment is not published until the operational service level is formally approved."] },
      { title: "Contact", body: ["Email hq@blackandi.com with the subject ‘Security — Confidential’. Request a protected transfer route before sending sensitive evidence."] },
    ],
    [{ label: "Security", href: "/company/trust/security" }, { label: "Incident response", href: "/company/trust/incident-response" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/company/trust/ai-transparency",
    "Trust / AI",
    "AI use and provider transparency.",
    "The AI transparency record defines intended use, human authority, provider disclosure, data boundaries and limitations for BLACK& AI-supported systems.",
    [
      { title: "Record status", body: ["Owner: BLACK& technology and governance functions. Version: 1.0. Public status: transparency framework. Last reviewed: 15 July 2026."] },
      { title: "AI use inventory", body: ["The public portfolio includes AI-supported research, intelligence, company-formation and operating-workflow concepts. A system enters the public inventory only when its intended use, owner, model or provider class, data boundary, human authority and operating status have been approved for disclosure."] },
      { title: "Provider transparency", body: ["Model providers and material service dependencies are disclosed at the system level after contractual, security and publication review. BLACK& does not infer an enduring provider relationship from a prototype or public code reference."] },
      { title: "Human authority", body: ["AI output supports authorized judgment. It does not independently approve legal, financial, employment, security, investment or Board decisions. High-consequence use requires a defined accountable human and escalation path."] },
      { title: "Data boundary and limitations", body: ["Confidential data is used only in approved environments with a defined purpose and access. Outputs can be incomplete or incorrect and must be evaluated against retained sources, context and intended use."] },
    ],
    [{ label: "Responsible AI", href: "/company/responsible-ai" }, { label: "Subprocessors", href: "/company/trust/subprocessors" }, { label: "Trust Center", href: "/company/trust" }]
  ),
  page(
    "/company/trust/policy-register",
    "Trust / Register",
    "Policy and document register.",
    "A public index of approved policy summaries, responsible owners, versions and review status.",
    [
      { title: "Register rules", body: ["A record appears as operative only after an accountable owner, version, effective date and approval status are recorded. Draft and proposed frameworks remain explicitly labeled."] },
      { title: "Current public records", body: ["The current public register includes the Privacy Policy, Terms, Governance page, Responsible AI page, Research Standards, Security and Access record, Data and Retention record, Incident Response framework and Responsible Disclosure procedure."] },
      { title: "Version history", body: ["Version 1.0 — 15 July 2026: initial public Trust Center register. Material future changes will identify the affected record, change date and current version."] },
      { title: "Certifications and assurance", body: ["No certification is listed without verified scope, issuing body and validity. No independent assurance report is currently published in this register."] },
    ],
    [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Governance", href: "/company/governance" }, { label: "Research standards", href: "/research/standards" }, { label: "Trust Center", href: "/company/trust" }]
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
