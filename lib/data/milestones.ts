export interface Milestone {
  period: string;
  title: string;
  description: string;
  isConfigurablePlaceholder?: boolean;
}

export const firmMilestones: Milestone[] = [
  {
    period: "Phase 01",
    title: "Foundation of the Practice",
    description:
      "Establishment of CA Pratik Vinchhi's independent chartered accountancy practice, anchored in meticulous statutory compliance, tax advisory, and direct founder engagement.",
    isConfigurablePlaceholder: true,
  },
  {
    period: "Phase 02",
    title: "Expansion into Strategic Corporate Advisory",
    description:
      "Broadening service capabilities to encompass comprehensive corporate structuring, MIS advisory, and indirect tax representation for expanding corporate entities.",
    isConfigurablePlaceholder: true,
  },
  {
    period: "Phase 03",
    title: "Institutional Governance & Multi-Sector Coverage",
    description:
      "Deepening advisory partnerships across emerging industries, family offices, and tech enterprises, delivering integrated accounting architecture and audit readiness.",
    isConfigurablePlaceholder: true,
  },
  {
    period: "Current",
    title: "Modern Digital & Strategic Financial Advisory",
    description:
      "Continuing to elevate standards in client communication, real-time regulatory guidance, and disciplined financial stewardship for progressive Indian enterprises.",
    isConfigurablePlaceholder: true,
  },
];
