import React from "react";
import { firmProcess } from "@/lib/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF8] border-b border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Engagement Methodology"
          title="A straightforward approach to complex financial matters."
          description="We follow a systematic four-stage methodology designed to eliminate ambiguity, expose latent liabilities, and provide actionable clarity."
          className="mb-16 sm:mb-20"
        />

        {/* Desktop Process Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-7 left-0 right-0 h-[1px] bg-[#E9E7E2] z-0" />

          {firmProcess.map((item) => (
            <div key={item.step} className="relative z-10 space-y-6 pt-2">
              <div className="w-12 h-12 bg-[#FCFBF8] border-2 border-[#111111] flex items-center justify-center font-mono text-sm font-semibold text-[#111111] shadow-sm">
                {item.step}
              </div>

              <div className="space-y-3">
                <h3 className="font-serif-display text-2xl text-[#111111] font-normal">
                  {item.title}
                </h3>
                <p className="text-xs uppercase tracking-wider font-semibold text-[#6E2635] font-sans">
                  {item.tagline}
                </p>
                <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E7E2]">
                <span className="block text-[10px] uppercase tracking-wider text-[#8A8883] font-mono mb-1">
                  Primary Milestone
                </span>
                <span className="text-xs font-medium text-[#111111]">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-10 pl-6 border-l-2 border-[#111111] relative">
          {firmProcess.map((item) => (
            <div key={item.step} className="space-y-3 relative">
              <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-[#111111] text-[#FCFBF8] flex items-center justify-center text-[10px] font-mono">
                {item.step}
              </div>

              <h3 className="font-serif-display text-2xl text-[#111111]">
                {item.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6E2635]">
                {item.tagline}
              </p>
              <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 text-xs text-[#111111] font-medium">
                <span className="text-[#8A8883] font-normal">Milestone: </span>
                {item.deliverable}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
