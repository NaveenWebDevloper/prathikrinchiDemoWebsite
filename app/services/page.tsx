import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { servicesData } from "@/lib/data/services";
import { siteConfig } from "@/lib/data/siteConfig";
import { CTASection } from "@/components/sections/CTASection";
import { CheckCircle2, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Professional Services & Practice Areas",
  description:
    "Comprehensive accounting, direct and indirect taxation, corporate compliance, and strategic business advisory by Pratik Vinchhi & Co.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Services" }]}
        eyebrow="Practice Overview"
        title="Professional expertise, structured around your needs."
        description="We provide comprehensive chartered accountancy and financial advisory services, engineered to ensure statutory compliance and support critical commercial decisions."
      />

      {/* Services List Detailed Cards */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
          {servicesData.map((svc) => (
            <div
              key={svc.slug}
              id={svc.slug}
              className="bg-[#F7F6F2] border border-[#E9E7E2] p-8 sm:p-12 lg:p-16 transition-all duration-300 hover:border-[#111111]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left column: Header & Description */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#6E2635] font-semibold">
                      Practice Area {svc.number}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D9D6CF]" />
                    <span className="text-xs text-[#8A8883] uppercase tracking-wider font-sans">
                      India
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                    {svc.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
                    {svc.fullDescription}
                  </p>

                  {/* Target Audience */}
                  <div className="p-5 bg-[#FCFBF8] border border-[#E9E7E2] space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] font-sans">
                      <Users className="w-4 h-4 text-[#6E2635]" />
                      <span>Target Audience &amp; Applicability</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6862] font-light leading-relaxed">
                      {svc.audience}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <Button
                      href={`/services/${svc.slug}`}
                      variant="primary"
                      size="md"
                      withArrow
                    >
                      View Detailed Scope &amp; Methodology
                    </Button>
                    <Link
                      href="/contact"
                      className="text-xs font-medium uppercase tracking-wider text-[#111111] hover:text-[#6E2635] underline underline-offset-4"
                    >
                      Enquire about this service
                    </Link>
                  </div>
                </div>

                {/* Right column: Scope & Deliverables preview */}
                <div className="lg:col-span-6 space-y-8 bg-[#FCFBF8] p-6 sm:p-8 border border-[#E9E7E2]">
                  {/* Scope of Coverage */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#111111] font-sans flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#6E2635]" />
                      <span>What This Practice Covers</span>
                    </h3>
                    <ul className="space-y-2.5">
                      {svc.scope.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-[#6B6862] font-light"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6E2635] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Deliverables */}
                  <div className="pt-6 border-t border-[#E9E7E2] space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#111111] font-sans flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#6E2635]" />
                      <span>Key Tangible Deliverables</span>
                    </h3>
                    <ul className="space-y-2">
                      {svc.deliverables.map((deliv, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#6B6862] font-mono bg-[#F7F6F2] px-3 py-2 border border-[#E9E7E2]"
                        >
                          {deliv}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
