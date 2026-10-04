import React from "react";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center" | "asymmetric";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  if (align === "asymmetric") {
    return (
      <div className={cn("grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline", className)}>
        <div className="lg:col-span-4">
          {eyebrow && (
            <Eyebrow variant={isDark ? "light" : "burgundy"}>{eyebrow}</Eyebrow>
          )}
        </div>
        <div className="lg:col-span-8 space-y-4">
          <h2
            className={cn(
              "font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15]",
              isDark ? "text-[#FCFBF8]" : "text-[#111111]"
            )}
          >
            {title}
          </h2>
          {description && (
            <p
              className={cn(
                "text-base sm:text-lg font-light leading-relaxed max-w-2xl",
                isDark ? "text-[#D9D6CF]" : "text-[#6B6862]"
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow variant={isDark ? "light" : "burgundy"}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15]",
          isDark ? "text-[#FCFBF8]" : "text-[#111111]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg font-light leading-relaxed",
            isDark ? "text-[#D9D6CF]" : "text-[#6B6862]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
