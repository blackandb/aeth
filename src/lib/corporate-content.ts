import type { InstitutionalPage } from "@/lib/institutional-content";

type RouteSpec = { path: string; eyebrow: string; title: string; description: string; focus: string[] };

const capability = (slug: string, title: string, description: string, focus: string[]): RouteSpec => ({ path: `/capabilities/${slug}`, eyebrow: "Capabilities", title, description, focus });
const industry = (slug: string, title: string, description: string, focus: string[]): RouteSpec => ({ path: `/industries/${slug}`, eyebrow: "Industries", title, description, focus });
const trust = (slug: string, title: string, description: string, focus: string[]): RouteSpec => ({ path: `/trust/${slug}`, eyebrow: "Trust", title, description, focus });
const legal = (slug: string, title: string, description: string, focus: string[]): RouteSpec => ({ path: `/legal/${slug}`, eyebrow: "Legal", title, description, focus });

const specs: RouteSpec[] = [
  { path: "/capabilities", eyebrow: "Capabilities", title: "Integrated capability for consequential systems.", description: "BLACK& combines intelligence, software, data, security, automation and company building within one accountable delivery model.", focus: ["AI & Intelligence Systems", "Software Engineering", "Data & Decision Infrastructure", "Cybersecurity & Resilience", "Enterprise Automation", "Company & Product Building"] },
  capability("ai-intelligence", "AI & Intelligence Systems", "Governed AI and decision-support systems designed around defined users, evidence and human authority.", ["Decision intelligence", "Applied AI systems", "Evaluation and monitoring", "Human oversight"]),
  capability("software-engineering", "Software Engineering", "Secure, maintainable software infrastructure for demanding operating environments.", ["System architecture", "Product engineering", "Platform modernization", "Reliability engineering"]),
  capability("data-infrastructure", "Data & Decision Infrastructure", "Data platforms that preserve context, provenance, permissions and decision traceability.", ["Data architecture", "Knowledge systems", "Interoperability", "Decision workflows"]),
  capability("cybersecurity", "Cybersecurity & Resilience", "Security architecture and operational resilience proportionate to system risk and context.", ["Threat modelling", "Identity and access", "Secure engineering", "Continuity and recovery"]),
  capability("automation", "Enterprise Automation", "Controlled automation of high-friction workflows with explicit escalation and accountability.", ["Workflow analysis", "Human-in-the-loop automation", "Systems integration", "Operational monitoring"]),
  capability("company-building", "Company & Product Building", "A gated path from validated intelligence to product, operating company and long-term capability.", ["Opportunity intelligence", "Product architecture", "Company formation", "Operating governance"]),
  { path: "/industries", eyebrow: "Industries", title: "Intelligence infrastructure for consequential environments.", description: "BLACK& engineers secure, governed systems for institutions and enterprises operating under material technical, regulatory and operational constraints.", focus: ["Government & Public Sector", "Financial Services", "Healthcare", "Infrastructure", "Industrial", "Supply Chain & Logistics", "Maritime", "Enterprise"] },
  industry("government", "Government & Public Sector", "Secure digital public infrastructure and decision systems designed for accountability, continuity and public value.", ["Digital government infrastructure", "AI-assisted public services", "Public-sector data platforms", "Interoperability", "Cybersecurity and resilience", "Identity and access"]),
  industry("financial-services", "Financial Services", "Intelligence and engineering for regulated financial workflows, resilient operations and controlled data use.", ["Decision infrastructure", "Operational resilience", "Data governance", "Risk-aware automation"]),
  industry("healthcare", "Healthcare", "Dependable information and workflow systems designed around clinical context, privacy and human authority.", ["Protected data workflows", "Operational intelligence", "Interoperability", "Human oversight"]),
  industry("infrastructure", "Infrastructure", "Decision and operating systems for complex assets, long time horizons and continuity-critical environments.", ["Asset intelligence", "Programme controls", "Resilience", "Secure operations"]),
  industry("industrial", "Industrial", "Operational intelligence, engineering and automation for production environments where reliability matters.", ["Operational visibility", "Industrial data", "Automation", "Resilient architecture"]),
  industry("supply-chain-logistics", "Supply Chain & Logistics", "Decision infrastructure for networks shaped by uncertainty, dependencies and real-world constraints.", ["Network intelligence", "Planning systems", "Exception management", "Interoperability"]),
  industry("maritime", "Maritime", "Intelligence and resilient systems for maritime operations, infrastructure and complex information environments.", ["Maritime situational awareness", "Port and fleet workflows", "Data integration", "Operational resilience"]),
  industry("enterprise", "Enterprise", "Enterprise intelligence systems that connect evidence, decisions, workflows and accountable execution.", ["Knowledge infrastructure", "Decision systems", "Automation", "Security architecture"]),
  { path: "/intelligence", eyebrow: "Intelligence", title: "Research for consequential decisions.", description: "Institutional research, perspectives and briefings—not content marketing.", focus: ["Research", "Perspectives", "Briefings", "Case studies"] },
  { path: "/intelligence/research", eyebrow: "Intelligence / Research", title: "BLACK& Research", description: "Structured research on intelligence infrastructure, company building and strategic systems.", focus: ["Methods", "Evidence", "Definitions", "Published research"] },
  { path: "/intelligence/perspectives", eyebrow: "Intelligence / Perspectives", title: "Institutional perspectives.", description: "Analysis that frames structural questions, constraints and implications for operators and decision-makers.", focus: ["Enterprise", "Technology", "Governance", "Europe"] },
  { path: "/intelligence/briefings", eyebrow: "Intelligence / Briefings", title: "Decision briefings.", description: "Concise, bounded intelligence for a defined audience, question and operating context.", focus: ["Situation", "Evidence", "Assessment", "Implications"] },
  { path: "/case-studies", eyebrow: "Intelligence / Case Studies", title: "Verified operating evidence.", description: "No public case studies are published until scope, evidence and disclosure rights are verified.", focus: ["Challenge", "Context", "Architecture", "Security", "Outcome", "Evidence status"] },
  { path: "/company/about", eyebrow: "Company", title: "The Intelligence Company Builder.", description: "BLACK& turns disciplined understanding into engineered systems, operating companies and durable enterprise capability.", focus: ["Purpose", "Operating model", "Governance", "Evidence boundary"] },
  { path: "/company/operating-model", eyebrow: "Company / Operating Model", title: "From intelligence to governed operation.", description: "A gated operating model that connects evidence, architecture, engineering, authority and review.", focus: ["Understand", "Architect", "Engineer", "Operate"] },
  { path: "/careers", eyebrow: "Company / Careers", title: "Build systems that carry consequence.", description: "Future opportunities will be published only when role, mandate, location and employment basis are approved.", focus: ["Engineering", "Intelligence", "Security", "Operations"] },
  { path: "/trust", eyebrow: "Trust", title: "Trust is operating infrastructure.", description: "Public assurance records for security, privacy, AI governance, continuity, providers and European regulatory readiness.", focus: ["Security", "Privacy", "AI governance", "EU compliance", "Continuity", "Responsible disclosure"] },
  trust("security", "Security", "A public description of security principles and control areas, without exposing sensitive implementation detail.", ["Secure engineering", "Identity and access", "Logging and monitoring", "Vulnerability management"]),
  trust("privacy", "Privacy", "Privacy governance grounded in purpose limitation, data minimisation, access control and accountable rights handling.", ["Lawful purpose", "Data minimisation", "Rights requests", "Retention review"]),
  trust("ai-governance", "AI Governance", "Governance for intended use, data boundaries, evaluation, human authority and model risk.", ["Use-case classification", "Human oversight", "Evaluation", "Monitoring and escalation"]),
  trust("subprocessors", "Subprocessor Registry", "No provider is published until legal entity, purpose, data categories, region, transfer basis and contractual links are verified.", ["Provider", "Legal Entity", "Service and Purpose", "Data Categories", "Processing Region", "Transfer Mechanism", "Privacy / DPA", "Status and Date Added"]),
  trust("data-transfers", "Data Transfers", "Cross-border processing is assessed per service, data category, region and legally applicable transfer mechanism.", ["Processing map", "Transfer mechanism", "Risk assessment", "Contractual safeguards"]),
  trust("data-retention", "Data Retention", "Retention is defined by purpose, record category, legal duty, security need and approved schedule.", ["Purpose", "Retention schedule", "Deletion", "Legal hold"]),
  trust("incident-response", "Incident Response", "A response framework for triage, containment, evidence, notification, recovery and review.", ["Triage", "Containment", "Notification assessment", "Recovery"]),
  trust("business-continuity", "Business Continuity", "Continuity planning based on critical services, dependencies, recovery priorities and tested response.", ["Service criticality", "Dependencies", "Recovery", "Exercises"]),
  trust("vulnerability-disclosure", "Vulnerability Disclosure", "A responsible channel for reporting suspected security weaknesses without creating additional harm.", ["Safe reporting", "Prohibited testing", "Coordination", "Contact"]),
  trust("accessibility", "Accessibility", "BLACK& targets WCAG 2.2 AA where practical and treats accessibility as an ongoing engineering responsibility.", ["Keyboard access", "Semantics", "Contrast", "Testing"]),
  trust("eu-compliance", "EU Compliance", "A regulatory readiness map that distinguishes legal compliance, alignment, readiness and certification.", ["GDPR", "EU AI Act", "NIS2", "DORA", "Cyber Resilience Act"]),
  ...["gdpr", "eu-ai-act", "nis2", "dora", "cra"].map((slug) => trust(`eu-compliance/${slug}`, slug === "gdpr" ? "GDPR" : slug === "eu-ai-act" ? "EU AI Act" : slug.toUpperCase(), "Applicability and obligations are assessed by role, system, sector, jurisdiction and deployment context. This page does not provide a blanket compliance claim.", ["Applicability", "Obligations", "Readiness", "Evidence"])),
  { path: "/legal", eyebrow: "Legal", title: "Legal information.", description: "Public legal records and review-controlled templates for BLACK& digital services.", focus: ["Legal notice", "Privacy", "Cookies", "Terms", "Data processing", "AI terms"] },
  legal("legal-notice", "Legal Notice", "Verified corporate identity and contact information. Any missing statutory information remains subject to legal review.", ["Entity", "Registration", "Registered office", "Contact"]),
  legal("privacy", "Privacy Notice", "Information about personal-data purposes, legal bases, rights and contact routes, subject to formal legal review.", ["Data categories", "Purposes", "Legal bases", "Rights"]),
  legal("cookies", "Cookie Notice", "Essential storage is separated from optional analytics and other non-essential technologies.", ["Essential", "Preferences", "Analytics", "Consent controls"]),
  legal("terms", "Terms of Use", "Terms governing use of the public website, pending formal legal approval where indicated.", ["Access", "Acceptable conduct", "Disclaimers", "Governing terms"]),
  legal("dpa", "Data Processing Addendum", "An enterprise contracting framework to be issued only after scope, roles and legal terms are approved.", ["Roles", "Instructions", "Security", "Subprocessors"]),
  legal("acceptable-use", "Acceptable Use", "Rules intended to protect users, systems, data and lawful operation.", ["Lawful use", "Security", "Abuse prevention", "Enforcement"]),
  legal("ai-terms", "AI Terms", "Terms for AI-supported features, including limitations, acceptable use and human responsibility.", ["Intended use", "Limitations", "Data handling", "Human authority"]),
  legal("intellectual-property", "Intellectual Property", "Public information on ownership, permitted use and third-party rights, subject to legal review.", ["BLACK& materials", "Permitted use", "Third-party rights", "Contact"]),
];

const industrySections = (focus: string[]) => [
  { title: "Challenge", body: ["Material operating decisions are often constrained by fragmented information, legacy systems, security obligations and unclear authority."] },
  { title: "Context", body: ["Architecture and delivery must reflect the institution, jurisdiction, users, procurement environment and consequence of failure."] },
  { title: "Capabilities", body: ["BLACK& combines intelligence, engineering, data infrastructure, security and governed automation."], items: focus },
  { title: "Architecture", body: ["Systems are bounded around defined users, decisions, interfaces, evidence sources and accountable owners."] },
  { title: "Security", body: ["Threat modelling, least privilege, data minimisation, monitoring, recovery and human escalation are considered according to risk."] },
  { title: "Outcomes", body: ["Outcomes are agreed as verifiable changes in operating capability. BLACK& does not publish unsupported impact claims."] },
  { title: "Engagement", body: ["Engagement begins with the organization, problem, scale, security context, regulatory environment and timeline."] },
];

export const corporatePages: InstitutionalPage[] = specs.map((item) => ({
  path: item.path,
  eyebrow: item.eyebrow,
  title: item.title,
  description: item.description,
  kind: item.path.split("/").filter(Boolean).length === 1 ? "collection" : "page",
  updated: "8 August 2026",
  statusLabels: item.path.includes("legal") || item.path.includes("eu-compliance") ? ["Information only", "Applicability requires review"] : [],
  sections: item.path.startsWith("/industries/") ? industrySections(item.focus) : [
    { title: "Purpose", body: [item.description] },
    { title: "Core areas", body: ["The scope is defined for each engagement and adapted to the operating environment."], items: item.focus },
    { title: "Operating approach", body: ["Work begins with a defined problem, evidence boundary, accountable owner, security context and measurable decision or operating outcome."] },
    { title: "Evidence boundary", body: ["This page describes capability and approach. It does not claim an undisclosed client, contract, deployment, certification, clearance or legal guarantee."] },
  ],
  related: [{ label: "Engage BLACK&", href: "/contact" }, { label: "Trust", href: "/trust" }],
}));

export const corporatePageMap = new Map(corporatePages.map((item) => [item.path, item]));
export const corporatePaths = corporatePages.map((item) => item.path);
