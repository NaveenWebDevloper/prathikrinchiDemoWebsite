import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustTicker } from "@/components/sections/TrustTicker";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ServicesInteractiveIndex } from "@/components/sections/ServicesInteractiveIndex";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.firmName} | Chartered Accountants & Advisory`,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${siteConfig.siteUrl}/#organization`,
        name: siteConfig.firmName,
        url: siteConfig.siteUrl,
        description: siteConfig.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressCountry: "IN",
        },
        founder: {
          "@type": "Person",
          name: siteConfig.founder.name,
          jobTitle: siteConfig.founder.designation,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Chartered Accountancy & Advisory Services",
          itemListElement: siteConfig.serviceCategories.map((cat, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: cat,
            },
            position: idx + 1,
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/#founder`,
        name: siteConfig.founder.name,
        jobTitle: siteConfig.founder.designation,
        worksFor: {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full">
        <HeroSection />
        <TrustTicker />
        <PhilosophySection />
        <ServicesInteractiveIndex />
        <PrinciplesSection />
        <FounderSection />
        <ProcessTimeline />
        <InsightsPreview />
        <CTASection />
      </div>
    </>
  );
}
