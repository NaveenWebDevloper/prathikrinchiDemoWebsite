import React from "react";
import { firmPrinciples } from "@/lib/data/principles";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrinciplesSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF8] border-b border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Operating Principles"
          title="The tenets that govern our advisory work."
          description="We measure the value of professional advisory not by volume of documents produced, but by the certainty, precision, and commercial perspective delivered to leadership."
          className="mb-16 sm:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#E9E7E2] border-y border-[#E9E7E2] py-8 lg:py-0">
          {firmPrinciples.map((item) => (
            <div
              key={item.number}
              className="lg:p-8 space-y-4 flex flex-col justify-between group hover:bg-[#F7F6F2]/40 transition-colors duration-200"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#8A8883] uppercase tracking-widest block">
                  {item.number}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#111111] font-normal tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6E2635] font-sans">
                  {item.tagline}
                </p>
              </div>

              <p className="text-sm text-[#6B6862] font-light leading-relaxed pt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
