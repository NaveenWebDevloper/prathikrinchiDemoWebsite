import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Engagement",
  description: `Standard terms of engagement and website usage for ${siteConfig.firmName}.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Terms" }]}
        eyebrow="Legal &amp; Professional Terms"
        title="Terms of Professional Engagement"
        description="Conditions governing digital portal access, professional consultation requests, and formal engagement protocols."
      />

      <section className="py-20 sm:py-28 bg-[#FCFBF8]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 text-[#6B6862] font-light leading-relaxed">
          <div className="p-4 bg-[#F7F6F2] border border-[#E9E7E2] text-xs font-mono text-[#8A8883]">
            STATUS: ACTIVE • REGULATORY FRAMEWORK: ICAI &amp; INDIAN CONTRACT ACT • PRACTICE: {siteConfig.firmName}
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              1. Non-Creation of Professional Client Relationship
            </h2>
            <p>
              Transmission of information via this website, including completion of the enquiry form or submission of general queries, does NOT create a Chartered Accountant-client relationship between you and {siteConfig.firmName}.
            </p>
            <p>
              A formal client relationship arises solely upon the execution of a written Engagement Letter countersigned by CA Pratik Vinchhi or an authorized partner, and the satisfactory completion of required regulatory conflict and KYC checks.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              2. Nature of Website Information
            </h2>
            <p>
              All published commentary, articles, tax updates, and service descriptions are provided strictly for general informational guidance. They do not constitute formal legal, taxation, or accounting opinions. Tax legislation in India is subject to frequent statutory amendment and differing judicial interpretations.
            </p>
            <p>
              You should not act, or refrain from acting, on the basis of any material contained on this website without seeking bespoke professional advice tailored to your particular circumstances.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              3. Conflict of Interest Evaluation
            </h2>
            <p>
              Before accepting any formal advisory, compliance, or audit assignment, our practice conducts standard conflict-of-interest assessments. We reserve the unreserved right to decline any prospective engagement where conflicts arise or where professional independence under ICAI guidelines would be compromised.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              4. Intellectual Property &amp; Editorial Content
            </h2>
            <p>
              All original publications, frameworks, models, text, graphics, and trademarks appearing on this domain are the intellectual property of {siteConfig.firmName}. Republication or redistribution without prior written consent is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              5. Governing Law and Jurisdiction
            </h2>
            <p>
              Any disputes or claims arising in connection with the usage of this digital domain shall be governed exclusively by the laws of India and subject to the exclusive jurisdiction of the competent courts in Mumbai / Gujarat, India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
