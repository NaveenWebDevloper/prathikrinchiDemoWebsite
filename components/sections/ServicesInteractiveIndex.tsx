"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/data/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ServicesInteractiveIndex() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-[#F7F6F2] border-b border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Areas of Practice"
          title="Structured professional services, aligned to operational complexity."
          description="Every business requires a balance between statutory rigor and commercial agility. Our core service areas are structured to protect value and clarify strategic decisions."
          className="mb-16"
        />

        {/* Desktop Interactive Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive List */}
          <div className="lg:col-span-6 divide-y divide-[#E9E7E2] border-y border-[#E9E7E2]">
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "py-7 px-4 cursor-pointer transition-all duration-300 flex items-center justify-between group",
                    isActive
                      ? "bg-[#FCFBF8] border-l-4 border-l-[#6E2635] pl-6 shadow-sm"
                      : "hover:bg-[#FCFBF8]/60"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={cn(
                        "font-mono text-sm tracking-widest",
                        isActive ? "text-[#6E2635] font-semibold" : "text-[#8A8883]"
                      )}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={cn(
                        "font-serif-display text-2xl tracking-tight transition-colors duration-200",
                        isActive ? "text-[#111111] font-normal" : "text-[#6B6862] group-hover:text-[#111111]"
                      )}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className={cn(
                      "w-5 h-5 transition-all duration-200",
                      isActive
                        ? "text-[#6E2635] translate-x-1 -translate-y-1 opacity-100"
                        : "text-[#8A8883] opacity-40 group-hover:opacity-100"
                    )}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: Active Service Details Panel */}
          <div className="lg:col-span-6 bg-[#FCFBF8] border border-[#E9E7E2] p-8 sm:p-10 shadow-sm relative min-h-[460px] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#E9E7E2] pb-4">
                <span className="text-xs font-mono tracking-widest uppercase text-[#6E2635] font-semibold">
                  PRACTICE AREA {servicesData[activeIndex].number}
                </span>
                <span className="text-xs text-[#8A8883] uppercase tracking-wider font-sans">
                  India Jurisdiction
                </span>
              </div>

              <h4 className="font-serif-display text-3xl text-[#111111] font-normal">
                {servicesData[activeIndex].title}
              </h4>

              <p className="text-base text-[#6B6862] font-light leading-relaxed">
                {servicesData[activeIndex].fullDescription}
              </p>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#111111] mb-3 font-sans">
                  Key Focus &amp; Scope:
                </p>
                <ul className="space-y-2">
                  {servicesData[activeIndex].scope.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#6B6862]">
                      <CheckCircle2 className="w-4 h-4 text-[#6E2635] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[#E9E7E2] flex items-center justify-between">
              <Link
                href={`/services/${servicesData[activeIndex].slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6E2635] hover:text-[#4B1823] transition-colors"
              >
                <span>View Full Service Scope &amp; Methodology</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="text-xs text-[#8A8883] hover:text-[#111111] underline underline-offset-4"
              >
                Enquire specifically
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Style */}
        <div className="lg:hidden space-y-4">
          {servicesData.map((service, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={service.id}
                className="bg-[#FCFBF8] border border-[#E9E7E2] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isOpen ? -1 : index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#6E2635] font-semibold">
                      {service.number}
                    </span>
                    <span className="font-serif-display text-xl text-[#111111]">
                      {service.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={cn(
                      "w-4 h-4 text-[#6E2635] transition-transform duration-200",
                      isOpen ? "rotate-90" : ""
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#E9E7E2] space-y-4">
                    <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E2635]"
                      >
                        <span>Read full scope &amp; deliverables</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
