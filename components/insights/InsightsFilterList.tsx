"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { type InsightArticle } from "@/lib/data/insights";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Search, Calendar, Clock, X } from "lucide-react";
import { formatDate, cn } from "@/lib/utils";

interface InsightsFilterListProps {
  initialArticles: InsightArticle[];
  categories: string[];
}

export function InsightsFilterList({
  initialArticles,
  categories,
}: InsightsFilterListProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [initialArticles, selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Search and Category Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#E9E7E2]">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-200 cursor-pointer font-sans",
                  isSelected
                    ? "bg-[#111111] text-[#FCFBF8]"
                    : "bg-[#F7F6F2] text-[#6B6862] hover:text-[#111111] border border-[#E9E7E2]"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#8A8883] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search analysis or topics..."
            className="w-full bg-[#FCFBF8] border border-[#D9D6CF] focus:border-[#111111] text-xs py-2.5 pl-9 pr-8 text-[#111111] placeholder:text-[#8A8883] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8883] hover:text-[#111111]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Results Count & Active Status */}
      <div className="flex items-center justify-between text-xs text-[#8A8883] font-mono">
        <span>
          Showing {filteredArticles.length} of {initialArticles.length} articles
        </span>
        {(selectedCategory !== "All" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-[#6E2635] hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="py-20 text-center space-y-4 bg-[#F7F6F2] border border-[#E9E7E2]">
          <p className="font-serif-display text-2xl text-[#111111]">
            No analysis found matching your criteria.
          </p>
          <p className="text-sm text-[#6B6862] font-light">
            Try adjusting your search terms or selecting another category.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="inline-block px-5 py-2.5 bg-[#111111] text-[#FCFBF8] text-xs uppercase tracking-wider font-sans"
          >
            Show All Articles
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-[#FCFBF8] border border-[#E9E7E2] hover:border-[#111111] transition-all duration-300"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E7E2]">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
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

              {/* Footer */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E9E7E2]/60 mt-4 text-xs font-sans">
                <span className="text-[#8A8883]">By {article.author.name}</span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-medium text-[#111111] group-hover:text-[#6E2635] flex items-center gap-1 transition-colors"
                >
                  <span>Read Analysis</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
