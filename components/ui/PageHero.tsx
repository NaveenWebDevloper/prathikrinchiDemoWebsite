import React from "react";
import { Eyebrow } from "./Eyebrow";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  theme?: "light" | "dark";
  className?: string;
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  theme = "light",
  className,
}: PageHeroProps) {
  const isDark = theme === "dark";

  return (
    <section
      className={cn(
        "pt-36 sm:pt-44 pb-16 sm:pb-24 border-b transition-colors",
        isDark
          ? "bg-[#111111] text-[#FCFBF8] border-[#222222]"
          : "bg-[#FCFBF8] text-[#111111] border-[#E9E7E2]",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        <div className="space-y-6 max-w-4xl">
          {eyebrow && (
            <Eyebrow variant={isDark ? "light" : "burgundy"}>{eyebrow}</Eyebrow>
          )}

          <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "text-lg sm:text-xl font-light leading-relaxed max-w-3xl",
                isDark ? "text-[#D9D6CF]" : "text-[#6B6862]"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
