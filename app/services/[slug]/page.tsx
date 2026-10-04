import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  servicesData,
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/lib/data/services";
import { getInsightBySlug } from "@/lib/data/insights";
import { siteConfig } from "@/lib/data/siteConfig";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import {
  CheckCircle2,
  Users,
  Layers,
  FileCheck,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Practice Areas`,
    description: service.shortDescription,
    alternates: {
      canonical: `${siteConfig.siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${siteConfig.firmName}`,
      description: service.shortDescription,
      url: `${siteConfig.siteUrl}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedInsights = service.relatedInsightsSlugs
    .map((s) => getInsightBySlug(s))
    .filter(Boolean);

  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        eyebrow={`Practice Area ${service.number}`}
        title={service.title}
        description={service.shortDescription}
      />

      {/* Main Service Content */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-16">
              {/* Comprehensive Overview */}
              <div className="space-y-6">
                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#111111]">
                  Executive Overview
                </h2>
                <div className="text-base sm:text-lg text-[#6B6862] font-light leading-relaxed space-y-4">
                  <p>{service.fullDescription}</p>
                </div>
              </div>

              {/* What This Covers (Scope) */}
              <div className="space-y-6 pt-6 border-t border-[#E9E7E2]">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-[#6E2635]" />
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#111111]">
                    Scope of Advisory &amp; Operations
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.scope.map((item, i) => (
                    <div
                      key={i}
                      className="p-5 bg-[#F7F6F2] border border-[#E9E7E2] flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#6E2635] mt-1 shrink-0" />
                      <span className="text-sm text-[#111111] font-light leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Methodology */}
              <div className="space-y-6 pt-6 border-t border-[#E9E7E2]">
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#111111]">
                  Our Advisory Methodology
                </h3>
                <div className="space-y-4">
                  {service.methodology.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-[#FCFBF8] border border-[#E9E7E2] flex items-start gap-4"
                    >
                      <span className="font-mono text-sm font-semibold text-[#6E2635] shrink-0 mt-0.5">
                        0{idx + 1}
                      </span>
                      <p className="text-sm sm:text-base text-[#6B6862] font-light leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-6 pt-6 border-t border-[#E9E7E2]">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-[#6E2635]" />
                  <h3 className="font-serif-display text-2xl sm:text-3xl text-[#111111]">
                    Tangible Work Product &amp; Deliverables
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((deliv, i) => (
                    <div
                      key={i}
                      className="p-4 bg-[#F7F6F2] border border-[#E9E7E2] text-xs font-mono text-[#111111]"
                    >
                      {deliv}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Audience & Action */}
            <div className="lg:col-span-4 space-y-8">
              {/* Audience card */}
              <div className="p-8 bg-[#F7F6F2] border border-[#E9E7E2] space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] font-sans">
                  <Users className="w-4 h-4 text-[#6E2635]" />
                  <span>Applicability &amp; Profile</span>
                </div>
                <h4 className="font-serif-display text-xl text-[#111111]">
                  Who This Service Is Designed For
                </h4>
                <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                  {service.audience}
                </p>
              </div>

              {/* Consultation trigger card */}
              <div className="p-8 bg-[#111111] text-[#FCFBF8] space-y-6">
                <span className="text-xs uppercase tracking-widest text-[#D9D6CF] font-mono">
                  Principal Engagement
                </span>
                <h4 className="font-serif-display text-2xl text-[#FCFBF8] leading-snug">
                  Require guidance in {service.title}?
                </h4>
                <p className="text-xs text-[#D9D6CF] font-light leading-relaxed">
                  Engagements are personally evaluated and directed by CA Pratik Vinchhi.
                </p>
                <Button
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  variant="accent"
                  size="md"
                  withArrow
                  className="w-full bg-[#6E2635] hover:bg-[#4B1823]"
                >
                  Initiate Enquiry
                </Button>
              </div>

              {/* Related Insights */}
              {relatedInsights.length > 0 && (
                <div className="p-8 bg-[#FCFBF8] border border-[#E9E7E2] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] font-sans">
                    <BookOpen className="w-4 h-4 text-[#6E2635]" />
                    <span>Related Commentary</span>
                  </div>
                  <div className="space-y-4 pt-2">
                    {relatedInsights.map((insight) => (
                      <div
                        key={insight!.slug}
                        className="border-b border-[#E9E7E2] pb-3 last:border-b-0 space-y-1"
                      >
                        <span className="text-[10px] font-mono text-[#8A8883] uppercase">
                          {insight!.category}
                        </span>
                        <Link
                          href={`/insights/${insight!.slug}`}
                          className="font-serif-display text-lg text-[#111111] hover:text-[#6E2635] block leading-snug transition-colors"
                        >
                          {insight!.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other Services Navigation */}
              <div className="p-6 bg-[#FCFBF8] border border-[#E9E7E2] space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8A8883] font-sans">
                  Other Practice Areas
                </p>
                <div className="space-y-2 text-xs">
                  {servicesData
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between text-[#6B6862] hover:text-[#111111] py-1 border-b border-[#E9E7E2]/50 last:border-0"
                      >
                        <span>{s.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
