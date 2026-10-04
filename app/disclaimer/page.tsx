import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Regulatory Disclaimer",
  description: `Regulatory notice and ICAI compliance disclaimer for ${siteConfig.firmName}.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Disclaimer" }]}
        eyebrow="Statutory Notice"
        title="Regulatory &amp; Advisory Disclaimer"
        description="Formal disclosure regarding guidelines issued by the Institute of Chartered Accountants of India (ICAI)."
      />

      <section className="py-20 sm:py-28 bg-[#FCFBF8]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 text-[#6B6862] font-light leading-relaxed">
          <div className="p-6 bg-[#F7F6F2] border-l-4 border-[#6E2635] border-y border-r border-[#E9E7E2] space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E2635] font-semibold">
              MANDATORY REGULATORY COMPLIANCE NOTICE
            </span>
            <p className="text-sm text-[#111111] leading-relaxed">
              Under the Chartered Accountants Act, 1949 and regulations framed thereunder by the Institute of Chartered Accountants of India (ICAI), chartered accountants in practice are restricted from soliciting clients, advertising their professional services, or issuing promotional claims.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              1. Solely Informational Purpose
            </h2>
            <p>
              By accessing this website, the user acknowledges and agrees that the materials, commentary, and descriptions provided are made available at their voluntary request and solely for informational and educational purposes.
            </p>
            <p>
              Nothing contained within this website constitutes an advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever by {siteConfig.firmName} or CA Pratik Vinchhi to solicit professional work.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              2. Absence of Formal Advisory Opinion
            </h2>
            <p>
              The information provided on this platform does not constitute legal, tax, financial, or auditing advice. Tax statutes, case law precedents, and circulars issued by the Central Board of Direct Taxes (CBDT), Central Board of Indirect Taxes and Customs (CBIC), and Ministry of Corporate Affairs (MCA) are constantly evolving.
            </p>
            <p>
              {siteConfig.firmName} expressly disclaims all liability to any person or corporate entity in respect of any consequence of anything done or omitted to be done wholly or partly in reliance upon the whole or any part of the contents of this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              3. Independent Consultation Mandate
            </h2>
            <p>
              Users are advised to obtain formal, independent, and personalized professional counsel from a licensed Chartered Accountant before undertaking any commercial restructuring, tax filing, or contractual commitment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              4. Firm Verification &amp; Practice Address
            </h2>
            <p>
              Verification inquiries regarding the practice status of CA Pratik Vinchhi may be directed to the official register maintained by the Institute of Chartered Accountants of India (ICAI).
            </p>
            <div className="p-6 bg-[#F7F6F2] border border-[#E9E7E2] text-xs font-mono text-[#111111]">
              <div>PRACTICE: {siteConfig.firmName}</div>
              <div>PRINCIPAL: {siteConfig.founder.name}, {siteConfig.founder.designation}</div>
              <div>JURISDICTION: India</div>
              <div>INQUIRIES: {siteConfig.contact.email}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
