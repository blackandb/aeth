export type ResearchPaper = {
  slug: string;
  issue: string;
  title: string;
  subtitle: string;
  thesis: string;
  summary: string;
  methodology: string;
  framework: string;
  findings: string[];
  application: string;
  limitations: string;
  publicationDate: string;
  version: string;
  classification: string;
  pages: number;
  series: string;
  author: string;
  preparedBy: string;
  citation: string;
  pdfUrl: string;
  coverUrl: string;
};

export const publishedResearchPapers: ResearchPaper[] = [
  {
    slug: "sovereign-ai-and-european-strategic-infrastructure",
    issue: "01",
    title: "Sovereign AI and European Strategic Infrastructure",
    subtitle: "Compute, Energy, and the Political Economy of Europe's AI Continent Plan",
    thesis: "Europe's sovereign-AI ambition depends on a complete infrastructure stack in which energy, compute, orchestration, capital and institutional control must be evaluated together.",
    summary: "The paper examines the architecture, financing and political economy of Europe's AI Factories and planned AI Gigafactories. It analyzes the InvestAI framework, commercial infrastructure already emerging across Europe and Romania's Black Sea AI Gigafactory proposal as a case study in energy, financing, permitting and offtake risk.",
    methodology: "Desk-research synthesis of European Commission and EuroHPC documents, Romanian government communications, infrastructure-market analysis, policy research and contemporaneous reporting published between January 2024 and July 2026.",
    framework: "Compute → Energy → Orchestration → Regulation → Institutional Control",
    findings: [
      "Commercial actors are developing gigafactory-scale facilities before the European Union's formal selection process is complete.",
      "Energy and grid capacity are emerging as binding constraints on the location and economics of European AI infrastructure.",
      "Sovereignty cannot be assessed at the model layer alone; hardware, energy, deployment, financing and continued institutional control remain material dependencies.",
      "National projects compete for limited co-financing while retaining substantial permitting, infrastructure, capital and demand risk.",
    ],
    application: "Institutional decision-makers can use the paper to evaluate sovereign-AI proposals across the complete dependency stack instead of treating compute capacity as a sufficient measure of sovereignty.",
    limitations: "The study is a desk-research synthesis, not an econometric or engineering assessment. Its geographic scope is the European Union and Romania, and programme details remain subject to policy and procurement change.",
    publicationDate: "15 July 2026",
    version: "1.0 — Initial publication",
    classification: "Public — for distribution to institutional and government stakeholders",
    pages: 11,
    series: "Intelligence Infrastructure Series",
    author: "BLACK& Research, a division of BLACK HOLDINGS SRL",
    preparedBy: "SYSTEM INC AI Labs",
    citation: "BLACK& Research. 2026. \"Sovereign AI and European Strategic Infrastructure.\" BLACK& Research Series, v1.0. Botoșani: BLACK HOLDINGS SRL.",
    pdfUrl: "/research/papers/sovereign-ai-and-european-strategic-infrastructure.pdf",
    coverUrl: "/research/covers/sovereign-ai-and-european-strategic-infrastructure.png",
  },
  {
    slug: "the-intelligence-company-builder",
    issue: "02",
    title: "The Intelligence Company Builder",
    subtitle: "Why AI-Native Company Creation Outperforms AI Adoption Inside Legacy Organisations",
    thesis: "The dominant barrier to enterprise AI value is organizational: data readiness, workflow integration and the absence of a coherent operating structure around the technology.",
    summary: "The paper connects evidence on enterprise AI adoption with venture-studio company-building research. It introduces BLACK&'s proprietary Intelligence Company Builder methodology as a structured alternative to isolated AI pilots retrofitted onto legacy workflows.",
    methodology: "Synthesis of enterprise AI adoption and value-capture research, venture-studio performance benchmarking and European Union AI adoption statistics published between 2024 and 2026. The proprietary BLACK& framework is clearly separated from third-party evidence.",
    framework: "Idea → Onboarding → AI Departments → Automation → Operational Business",
    findings: [
      "Widespread AI adoption has not consistently produced enterprise-level financial impact because organizational integration remains incomplete.",
      "Repeatable company-building systems reduce dependence on one-off improvisation by sharing infrastructure, process and risk controls.",
      "AI-native departments are designed as coordinated functional units from inception instead of separate tools added to human-only structures.",
      "Mid-sized European companies and institutions face a structural adoption gap when they lack internal AI engineering and operating architecture.",
    ],
    application: "Leaders can use the five-stage methodology to define company context, create coordinated AI departments, automate governed workflows and move toward an operational AI-native business.",
    limitations: "The paper does not include primary BLACK& or SYSTEM INC AI client outcome data. The venture-studio comparison is a structural analogy rather than a causal proof of AI-deployment performance.",
    publicationDate: "15 July 2026",
    version: "1.0 — Initial publication",
    classification: "Public — for distribution to institutional and government stakeholders",
    pages: 10,
    series: "Intelligence Infrastructure Series",
    author: "BLACK& Research, a division of BLACK HOLDINGS SRL",
    preparedBy: "SYSTEM INC AI Labs",
    citation: "BLACK& Research. 2026. \"The Intelligence Company Builder.\" BLACK& Research Series, v1.0. Botoșani: BLACK HOLDINGS SRL.",
    pdfUrl: "/research/papers/the-intelligence-company-builder.pdf",
    coverUrl: "/research/covers/the-intelligence-company-builder.png",
  },
  {
    slug: "from-information-to-enterprise",
    issue: "03",
    title: "From Information to Enterprise",
    subtitle: "Why Most Corporate Data Never Becomes a Decision — and What Closes the Gap",
    thesis: "The gap between information and enterprise value is not primarily a technology gap; it is the missing governance, structuring and contextual layer that turns raw information into decision-ready intelligence.",
    summary: "The paper examines why expanding data volume has not translated into proportionate decision quality or operational value. It presents BLACK&'s Information–Intelligence–Enterprise–Assets framework and connects it to European data-governance and data-economy policy developments.",
    methodology: "Synthesis of data-management and European data-economy research published between 2020 and 2026, including industry surveys, governance-maturity research and European Commission data-policy documentation.",
    framework: "Information → Intelligence → Enterprise → Assets",
    findings: [
      "Data abundance does not create enterprise value when quality, governance and contextual interpretation remain weak.",
      "Information becomes intelligence only when it is attributable, current, structured and interpretable for a defined decision.",
      "Intelligence becomes enterprise capability when it is embedded in live operational workflows rather than retained in static reports.",
      "Reusable decision workflows, structured data and trained systems can compound into long-term organizational assets.",
    ],
    application: "Organizations can evaluate every data or AI initiative by asking which governance layer makes the information decision-ready, which workflow uses it and what reusable capability remains after the first use case.",
    limitations: "Several data-volume and quality statistics originate in industry or vendor research and vary by definition and survey population. The four-stage framework is BLACK&'s proprietary interpretive model, not an independently validated academic framework.",
    publicationDate: "15 July 2026",
    version: "1.0 — Initial publication",
    classification: "Public — for distribution to institutional and government stakeholders",
    pages: 10,
    series: "Intelligence Infrastructure Series",
    author: "BLACK& Research, a division of BLACK HOLDINGS SRL",
    preparedBy: "SYSTEM INC AI Labs",
    citation: "BLACK& Research. 2026. \"From Information to Enterprise.\" BLACK& Research Series, v1.0. Botoșani: BLACK HOLDINGS SRL.",
    pdfUrl: "/research/papers/from-information-to-enterprise.pdf",
    coverUrl: "/research/covers/from-information-to-enterprise.png",
  },
];

export const researchPaperMap = new Map(
  publishedResearchPapers.map((paper) => [paper.slug, paper])
);
