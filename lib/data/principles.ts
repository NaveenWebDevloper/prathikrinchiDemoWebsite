export interface Principle {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export const firmPrinciples: Principle[] = [
  {
    number: "01",
    title: "Clarity",
    tagline: "Complex financial matters explained simply.",
    description:
      "We strip away superfluous technical jargon to provide distilled, actionable recommendations. Executive leadership gains clear line-of-sight on regulatory implications and commercial risk before committing capital.",
  },
  {
    number: "02",
    title: "Precision",
    tagline: "Careful attention to detail and compliance.",
    description:
      "Statutory frameworks forgive neither casual arithmetic nor missed filing nuances. We maintain an uncompromising standard of computational exactness and documentation discipline across all filings.",
  },
  {
    number: "03",
    title: "Perspective",
    tagline: "Advice designed around the bigger business picture.",
    description:
      "Taxation and accounting do not operate in a vacuum. We evaluate each decision within the context of your overall commercial goals, long-term balance sheet stability, and investor perception.",
  },
  {
    number: "04",
    title: "Responsiveness",
    tagline: "A professional relationship built around accessibility.",
    description:
      "Critical financial queries require direct, timely engagement. We pride ourselves on direct principal accessibility, structured update cycles, and proactive communication ahead of statutory deadlines.",
  },
];
