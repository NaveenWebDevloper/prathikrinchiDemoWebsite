import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  getAllInsights,
  getFeaturedInsight,
  getCategories,
} from "@/lib/data/insights";
import { siteConfig } from "@/lib/data/siteConfig";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsFilterList } from "@/components/insights/InsightsFilterList";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights & Commentary | Tax, Governance & Advisory",
  description:
    "Authoritative analysis on corporate governance, Indian taxation statutes, GST reconciliation, and strategic financial decision-making.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/insights`,
  },
};

export default function InsightsPage() {
  const allArticles = getAllInsights();
  const featured = getFeaturedInsight();
  const categories = getCategories();

  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="Editorial &amp; Analysis"
        title="Perspectives on tax, governance, and corporate finance."
        description="Structured commentary and practical frameworks for enterprise leaders navigating evolving regulatory mandates and commercial decisions."
      />

      {/* Featured Editorial Article Banner */}
      {featured && (
        <section className="py-12 sm:py-16 bg-[#F7F6F2] border-b border-[#E9E7E2]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="p-8 sm:p-12 lg:p-16 bg-[#FCFBF8] border border-[#E9E7E2] hover:border-[#111111] transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual */}
                <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-[#E9E7E2]">
                  <Image
                    src={featured.featuredImage}
                    alt={featured.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="burgundy">Featured Analysis</Badge>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4 text-xs text-[#8A8883] font-sans">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(featured.publishDate)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readingTime}
                    </span>
                    <span>•</span>
                    <span className="font-medium text-[#111111] uppercase tracking-wider">
                      {featured.category}
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-tight">
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="hover:text-[#6E2635] transition-colors"
                    >
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
                    {featured.excerpt}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#E9E7E2] text-xs font-sans">
                    <span className="text-[#8A8883]">
                      Authored by {featured.author.name}
                    </span>
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="font-medium text-[#6E2635] hover:text-[#4B1823] flex items-center gap-1"
                    >
                      <span>Read Complete Article</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Filterable Archive */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <InsightsFilterList
            initialArticles={allArticles}
            categories={categories}
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
