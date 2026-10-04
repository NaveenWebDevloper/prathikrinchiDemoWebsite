import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy and data handling practices of ${siteConfig.firmName}.`,
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Privacy Policy" }]}
        eyebrow="Governance &amp; Privacy"
        title="Privacy &amp; Data Protection Policy"
        description="Our commitments regarding fiduciary confidentiality, data security, and client information stewardship."
      />

      <section className="py-20 sm:py-28 bg-[#FCFBF8]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-12 text-[#6B6862] font-light leading-relaxed">
          <div className="p-4 bg-[#F7F6F2] border border-[#E9E7E2] text-xs font-mono text-[#8A8883]">
            EFFECTIVE DATE: October 2026 • LAST REVISED: 2026 • PRACTICE: {siteConfig.firmName}
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              1. Fiduciary Commitment to Privacy
            </h2>
            <p>
              {siteConfig.firmName} (&ldquo;we&rdquo;, &ldquo;the practice&rdquo;, or &ldquo;our&rdquo;) operates in accordance with professional ethical codes established by the Institute of Chartered Accountants of India (ICAI). We recognize that the financial records, tax disclosures, commercial contracts, and strategic documents entrusted to us represent sensitive proprietary assets.
            </p>
            <p>
              This Privacy Policy explains how information gathered through this website or provided in preliminary enquiries is handled, secured, and retained.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              2. Information Collected
            </h2>
            <p>
              When you submit an enquiry through our digital portal or communicate with our chambers, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Full Name, Corporate Affiliation, and Designation</li>
              <li>Official Business Email Address and Telephone Number</li>
              <li>Nature of Practice Area required and contextual narrative provided</li>
              <li>Technical metadata (IP address, browser type) strictly for security and rate limiting</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              3. Purpose and Non-Disclosure
            </h2>
            <p>
              Information gathered is utilized exclusively to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Evaluate the commercial and regulatory scope of your enquiry</li>
              <li>Execute conflict checks prior to entering professional engagements</li>
              <li>Coordinate consultations with CA Pratik Vinchhi</li>
              <li>Maintain statutory compliance logs required by Indian law</li>
            </ul>
            <p>
              We do NOT sell, rent, monetize, or disclose your personal or corporate data to third-party marketing services or commercial data brokers under any circumstances.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              4. Data Retention &amp; Security Standards
            </h2>
            <p>
              Digital submissions are transmitted over encrypted Transport Layer Security (TLS/SSL). Data is stored within secure access-controlled environments. Inquiries that do not materialize into formal professional engagements are systematically purged in accordance with our data retention schedule.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal">
              5. Communications Officer &amp; Practice Address
            </h2>
            <p>
              For questions concerning this privacy framework or data held by our chambers:
            </p>
            <div className="p-6 bg-[#F7F6F2] border border-[#E9E7E2] text-xs font-mono space-y-1 text-[#111111]">
              <div>PRACTICE: {siteConfig.firmName}</div>
              <div>ATTENTION: CA Pratik Vinchhi</div>
              <div>EMAIL: {siteConfig.contact.email}</div>
              <div>CHAMBERS: {siteConfig.contact.address}, {siteConfig.contact.city}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
