export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export const firmProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Understand",
    tagline: "Uncovering commercial context & operational reality.",
    description:
      "We begin with a focused diagnostic discovery. Rather than looking merely at isolated ledgers, we study your business model, contractual relationships, cash velocity, and stakeholder requirements.",
    deliverable: "Diagnostic Discovery Note & Scope Matrix",
  },
  {
    step: "02",
    title: "Analyse",
    tagline: "Dissecting regulatory exposure & mathematical implications.",
    description:
      "Our team conducts a rigorous quantitative and statutory review. We identify latent compliance risks, model tax scenarios, reconcile variances, and evaluate operational controls.",
    deliverable: "Compliance Gap Analysis & Computational Review",
  },
  {
    step: "03",
    title: "Advise",
    tagline: "Formulating clear, pragmatic recommendations.",
    description:
      "We present unambiguous, documented recommendations. Every proposed action is articulated with clear regulatory citations, commercial trade-offs, and executable roadmaps.",
    deliverable: "Strategic Advisory Memorandum & Action Plan",
  },
  {
    step: "04",
    title: "Execute & Support",
    tagline: "Disciplined execution with ongoing oversight.",
    description:
      "We oversee implementation—from statutory submissions and system configuration to periodic reconciliations and ongoing counsel as your business navigates growth.",
    deliverable: "Filed Submissions, Compliant Ledgers & Periodic Reviews",
  },
];
