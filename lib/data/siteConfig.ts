export interface SiteConfig {
  firmName: string;
  shortName: string;
  tagline: string;
  positioningStatement: string;
  description: string;
  siteUrl: string;
  ogImage: string;
  market: string;
  founder: {
    name: string;
    designation: string;
    bioPlaceholder: string;
    philosophyPlaceholder: string;
    linkedIn: string;
    portraitPlaceholder: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    city: string;
    workingHours: string;
    queryResponseTime: string;
  };
  social: {
    linkedIn: string;
    twitter?: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  serviceCategories: string[];
}

export const siteConfig: SiteConfig = {
  firmName: "Pratik Vinchhi & Co",
  shortName: "PV & Co",
  tagline: "Clarity for decisions that matter.",
  positioningStatement:
    "Financial clarity for the decisions that shape your future.",
  description:
    "Pratik Vinchhi & Co provides thoughtful accounting, taxation, and professional advisory services designed around clarity, compliance, and long-term business decisions.",
  siteUrl: "https://pratikvinchhi.com",
  ogImage: "/images/og-preview.jpg",
  market: "India",
  founder: {
    name: "CA Pratik Vinchhi",
    designation: "Chartered Accountant",
    bioPlaceholder:
      "CA Pratik Vinchhi leads the practice with a focus on disciplined financial governance, direct regulatory comprehension, and strategic advisory. With deep exposure to Indian taxation, corporate compliance frameworks, and business structuring, Pratik works directly with enterprise leaders, family businesses, and emerging founders to provide unambiguous financial counsel.",
    philosophyPlaceholder:
      "Financial advisory is not merely about record keeping; it is about building a durable architecture for commercial decisions where regulatory compliance and business ambition operate in complete harmony.",
    linkedIn: "https://linkedin.com/in/[LINKEDIN-HANDLE-PLACEHOLDER]",
    portraitPlaceholder:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
  contact: {
    email: "contact@[FIRM-DOMAIN-PLACEHOLDER].com",
    phone: "+91 [PHONE-NUMBER-PLACEHOLDER]",
    address: "[SUITE / CHAMBERS / OFFICE ADDRESS PLACEHOLDER]",
    city: "Mumbai / Gujarat, India [LOCATION PLACEHOLDER]",
    workingHours: "Monday to Friday: 09:30 AM – 06:30 PM IST",
    queryResponseTime: "Enquiries are reviewed and acknowledged within 1 business day.",
  },
  social: {
    linkedIn: "https://linkedin.com/company/[LINKEDIN-PLACEHOLDER]",
  },
  navigation: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  serviceCategories: [
    "Accounting & Compliance",
    "Taxation",
    "Advisory",
    "Professional Services",
  ],
};
