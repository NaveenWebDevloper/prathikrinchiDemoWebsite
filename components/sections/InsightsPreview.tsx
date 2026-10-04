import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getRecentInsights } from "@/lib/data/insights";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function InsightsPreview() {
  const articles = getRecentInsights(3);

  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF8] border-b border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Editorial &amp; Analysis"
            title="Perspectives on tax, governance, and corporate finance."
            description="Objective analysis on emerging regulatory developments, statutory compliances, and disciplined financial architecture."
          />
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#6E2635] border-b border-[#111111] pb-1 shrink-0 transition-colors"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#FCFBF8] border border-[#E9E7E2] hover:border-[#111111] transition-all duration-300"
            >
              <div>
                {/* Visual */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E7E2]">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover grayscale contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="neutral" className="bg-[#FCFBF8]/95 shadow-sm">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#8A8883] font-sans">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(article.publishDate)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readingTime}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-[#111111] group-hover:text-[#6E2635] transition-colors duration-200 leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#6B6862] font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Author & Read More */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E9E7E2]/60 mt-4 text-xs font-sans">
                <span className="text-[#8A8883]">By {article.author.name}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-medium text-[#111111] group-hover:text-[#6E2635] flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
