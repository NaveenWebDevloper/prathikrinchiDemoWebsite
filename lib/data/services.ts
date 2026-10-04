export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scope: string[];
  audience: string;
  methodology: string[];
  deliverables: string[];
  relatedInsightsSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "accounting-compliance",
    slug: "accounting-compliance",
    number: "01",
    title: "Accounting & Compliance",
    shortDescription:
      "Structured accounting systems, periodic financial reporting, and disciplined statutory compliance tailored to operational complexity.",
    fullDescription:
      "Modern enterprises require accurate, timely financial data not merely for regulatory adherence, but as the foundation for executive decision-making. Pratik Vinchhi & Co provides systematic financial reporting, general ledger maintenance, internal controls review, and ongoing statutory adherence frameworks designed to reduce administrative drag and preserve financial hygiene.",
    scope: [
      "Accounting system design & general ledger administration",
      "Periodic financial statements and management reporting (MIS)",
      "Statutory compliance monitoring and record maintenance",
      "Year-end financial finalisation and audit coordination",
      "Cash flow tracking and working capital reconciliation",
    ],
    audience:
      "Operating companies, high-growth startups, and established enterprises requiring robust internal controls and audit-ready financial governance.",
    methodology: [
      "Diagnostic review of existing chart of accounts and documentation trails",
      "Establishment of standardized monthly closing and reporting calendars",
      "Continuous reconciliations across banks, vendors, and statutory ledgers",
      "Executive review sessions providing distilled operational insights",
    ],
    deliverables: [
      "Monthly / Quarterly Management Information System (MIS) Reports",
      "Audited financial pack preparation and schedules",
      "Statutory compliance calendars and reconciliation trackers",
      "Variance and margin performance summaries",
    ],
    relatedInsightsSlugs: [
      "navigating-financial-governance-modern-enterprises",
      "internal-controls-framework-for-scaling-businesses",
    ],
  },
  {
    id: "taxation",
    slug: "taxation",
    number: "02",
    title: "Taxation Advisory & Compliance",
    shortDescription:
      "Direct and indirect taxation strategies, proactive GST compliance, and measured representation before regulatory authorities.",
    fullDescription:
      "The Indian tax landscape undergoes continuous legislative and procedural evolution. Our taxation practice balances statutory compliance with strategic forward planning, ensuring your commercial actions are structured with tax efficiency, procedural prudence, and documented substantiation.",
    scope: [
      "Direct Tax: Corporate & Individual Income Tax advisory, filing, and advance tax planning",
      "Indirect Tax: Goods & Services Tax (GST) compliance, input tax credit optimization, and reconciliation",
      "Withholding Tax: TDS/TCS assessments, quarterly reporting, and certificate reconciliation",
      "Tax scrutiny, assessment management, and appellate support documentation",
      "Cross-border transaction review and international withholding compliance",
    ],
    audience:
      "Corporate entities, partnerships, proprietary firms, and high-net-worth individuals navigating evolving Indian direct and indirect tax mandates.",
    methodology: [
      "Rigorous statutory classification of revenues, deductions, and exemptions",
      "Pre-emptive quarterly computational reviews before advance tax deadlines",
      "Multi-layered reconciliation between GST returns, e-invoices, and financial books",
      "Defensible documentation dossiers prepared in anticipation of assessment inquiries",
    ],
    deliverables: [
      "Comprehensive annual and quarterly tax computation dossiers",
      "GST compliance filings (GSTR-1, GSTR-3B, GSTR-9/9C) and reconciliation reports",
      "TDS quarterly returns and compliance certifications",
      "Formal written tax advisory opinions on critical commercial events",
    ],
    relatedInsightsSlugs: [
      "gst-reconciliation-frameworks-preventing-credit-disallowance",
      "tax-planning-versus-anti-avoidance-practical-boundaries",
    ],
  },
  {
    id: "advisory",
    slug: "advisory",
    number: "03",
    title: "Strategic Business Advisory",
    shortDescription:
      "Objective financial counsel for capital allocation, entity structuring, transactional readiness, and commercial transitions.",
    fullDescription:
      "When businesses face critical inflection points—be it corporate restructuring, capital investment, partner transitions, or strategic expansion—they require financial counsel that is both mathematically sound and commercially perceptive. We serve as an objective financial sounding board, helping leadership stress-test assumptions and structure viable pathways.",
    scope: [
      "Business entity structuring and corporate re-organization guidance",
      "Financial feasibility analysis and working capital optimization",
      "Transaction readiness review and financial due diligence support",
      "Succession planning and promoter wealth transition frameworks",
      "Budgeting, scenario modeling, and risk mitigation strategies",
    ],
    audience:
      "Founders, executive boards, promoters, and business families contemplating restructuring, investment, or significant commercial evolution.",
    methodology: [
      "In-depth qualitative and quantitative assessment of the proposed transition",
      "Scenario sensitivity modeling analyzing best-case, base-case, and downside conditions",
      "Tax and regulatory implication mapping across alternative corporate structures",
      "Clear, actionable decision memo for executive and stakeholder review",
    ],
    deliverables: [
      "Comprehensive Financial Model and Sensitivity Analysis",
      "Structural Comparison Memorandum outlining regulatory and tax impact",
      "Due Diligence vendor review dossier",
      "Executive Board briefing notes",
    ],
    relatedInsightsSlugs: [
      "structuring-capital-decisions-in-turbulent-markets",
      "navigating-financial-governance-modern-enterprises",
    ],
  },
  {
    id: "professional-services",
    slug: "professional-services",
    number: "04",
    title: "Corporate & Professional Services",
    shortDescription:
      "End-to-end secretarial coordination, documentation review, regulatory filings, and corporate governance adherence.",
    fullDescription:
      "Maintaining good standing with statutory bodies requires meticulous process discipline. From entity incorporation to routine secretarial compliance, maintenance of statutory registers, and coordination with regulatory bodies under the Companies Act, we ensure your firm’s legal and administrative record remains unimpeachable.",
    scope: [
      "Entity formation, registrations, and initial statutory compliances",
      "MCA (Ministry of Corporate Affairs) filings, annual returns, and director compliances",
      "Statutory registers, board resolutions, and meeting minutes documentation",
      "Regulatory certificate issuance and net-worth / financial certification",
      "Liaison support with banks, regulatory bodies, and legal counsels",
    ],
    audience:
      "Private limited companies, LLPs, one-person companies, and foreign subsidiaries establishing or operating compliant entities in India.",
    methodology: [
      "Systematic calendaring of all statutory due dates and board event triggers",
      "Drafting precision compliant with current MCA and statutory secretarial standards",
      "Pre-scrutiny verification of all filings prior to digital signature submission",
      "Secure digital repository management of all statutory records and acknowledgments",
    ],
    deliverables: [
      "Annual MCA compliance filing records and ROC acknowledgments",
      "Statutory certification dossiers (Net worth, Turnover, Shareholding, etc.)",
      "Compliant board documentation and secretarial register binders",
      "Entity health-check and compliance status reports",
    ],
    relatedInsightsSlugs: [
      "internal-controls-framework-for-scaling-businesses",
      "gst-reconciliation-frameworks-preventing-credit-disallowance",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
