import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAllInsights,
  getInsightBySlug,
  getRecentInsights,
} from "@/lib/data/insights";
import { siteConfig } from "@/lib/data/siteConfig";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { ArticleShareButtons } from "@/components/insights/ArticleShareButtons";
import { CTASection } from "@/components/sections/CTASection";
import { Calendar, Clock, ArrowUpRight, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllInsights();
  return articles.map((art) => ({ slug: art.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const articleUrl = `${siteConfig.siteUrl}/insights/${article.slug}`;

  return {
    title: `${article.title} | ${siteConfig.firmName}`,
    description: article.excerpt,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: articleUrl,
      publishedTime: article.publishDate,
      authors: [article.author.name],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${siteConfig.siteUrl}/insights/${article.slug}`;
  const relatedArticles = getRecentInsights(3).filter((a) => a.slug !== article.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.designation,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.firmName,
      url: siteConfig.siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full">
        {/* Article Header */}
        <section className="pt-36 sm:pt-44 pb-12 sm:pb-16 bg-[#FCFBF8] border-b border-[#E9E7E2]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <Breadcrumbs
              items={[
                { label: "Insights", href: "/insights" },
                { label: article.category, href: "/insights" },
                { label: article.title },
              ]}
            />

            <div className="space-y-6 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="burgundy">{article.category}</Badge>
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
              </div>

              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-[1.15] tracking-tight">
                {article.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#6B6862] font-light leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author & Share Bar */}
              <div className="pt-6 border-t border-[#E9E7E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FCFBF8] flex items-center justify-center font-serif-display text-base">
                    PV
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-[#111111]">
                      {article.author.name}
                    </span>
                    <span className="block text-xs text-[#8A8883] font-sans">
                      {article.author.designation}
                    </span>
                  </div>
                </div>

                <ArticleShareButtons title={article.title} url={articleUrl} />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="bg-[#F7F6F2] py-8 sm:py-12 border-b border-[#E9E7E2]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#E9E7E2] border border-[#D9D6CF]">
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover grayscale contrast-105"
              />
            </div>
            <p className="text-[11px] text-[#8A8883] font-mono mt-2 text-right">
              Pratik Vinchhi &amp; Co — Editorial Advisory Series
            </p>
          </div>
        </section>

        {/* Article Body Content */}
        <article className="py-16 sm:py-24 bg-[#FCFBF8] border-b border-[#E9E7E2]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-12">
            {/* Introduction paragraph */}
            <div className="text-lg sm:text-xl text-[#111111] font-light leading-relaxed border-l-2 border-[#6E2635] pl-6 py-1">
              {article.content.introduction}
            </div>

            {/* Sections */}
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-6 pt-4">
                <h2 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal leading-snug">
                  {section.heading}
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {/* Key takeaway callout box */}
                {section.keyTakeaway && (
                  <div className="p-6 bg-[#F7F6F2] border border-[#E9E7E2] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E2635] font-semibold block">
                      KEY GOVERNANCE PRINCIPLE
                    </span>
                    <p className="font-serif-display text-lg sm:text-xl italic text-[#111111]">
                      &ldquo;{section.keyTakeaway}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Concluding Summary */}
            <div className="p-8 bg-[#F7F6F2] border-t-2 border-[#111111] space-y-3">
              <h3 className="font-serif-display text-xl text-[#111111] font-normal">
                Concluding Synthesis
              </h3>
              <p className="text-base text-[#6B6862] font-light leading-relaxed">
                {article.content.summary}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-[#E9E7E2] flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#8A8883] font-sans mr-2">
                Filed Under:
              </span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#F7F6F2] border border-[#E9E7E2] text-xs text-[#6B6862] font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Author Profile Box */}
            <div className="mt-12 p-8 bg-[#F7F6F2] border border-[#E9E7E2] space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#111111] text-[#FCFBF8] flex items-center justify-center font-serif-display text-xl shrink-0">
                  PV
                </div>
                <div>
                  <h4 className="font-serif-display text-2xl text-[#111111]">
                    {article.author.name}
                  </h4>
                  <p className="text-xs uppercase tracking-wider text-[#8A8883] font-sans">
                    {article.author.designation} • Practice Lead
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                CA Pratik Vinchhi advises corporate boards, business promoters, and high-growth ventures on direct tax structuring, Goods &amp; Services Tax (GST) compliance, and internal financial controls.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-semibold uppercase tracking-wider text-[#6E2635] hover:underline"
                >
                  Request Consultation with the Author →
                </Link>
              </div>
            </div>

            {/* Back link */}
            <div className="pt-8">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#111111] hover:text-[#6E2635] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to all articles &amp; commentary</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-20 bg-[#FCFBF8] border-b border-[#E9E7E2]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between mb-12">
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#111111]">
                  Related Analysis &amp; Commentary
                </h3>
                <Link
                  href="/insights"
                  className="text-xs uppercase tracking-wider text-[#6E2635] hover:underline font-sans"
                >
                  View archive
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.slice(0, 2).map((rel) => (
                  <div
                    key={rel.slug}
                    className="p-6 sm:p-8 bg-[#F7F6F2] border border-[#E9E7E2] hover:border-[#111111] transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <Badge variant="neutral">{rel.category}</Badge>
                      <h4 className="font-serif-display text-xl sm:text-2xl text-[#111111]">
                        <Link
                          href={`/insights/${rel.slug}`}
                          className="hover:text-[#6E2635] transition-colors"
                        >
                          {rel.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-[#6B6862] font-light leading-relaxed line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#E9E7E2] flex items-center justify-between text-xs text-[#8A8883]">
                      <span>{formatDate(rel.publishDate)}</span>
                      <Link
                        href={`/insights/${rel.slug}`}
                        className="text-[#111111] hover:text-[#6E2635] font-medium flex items-center gap-1"
                      >
                        <span>Read</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </div>
    </>
  );
}
