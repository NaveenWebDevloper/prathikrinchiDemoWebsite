"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/data/siteConfig";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F6F2] border-b border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto overflow-hidden bg-[#E9E7E2] border border-[#D9D6CF] shadow-[0_16px_36px_rgba(0,0,0,0.04)]">
              <Image
                src={siteConfig.founder.portraitPlaceholder}
                alt={siteConfig.founder.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#FCFBF8]">
                <p className="font-serif-display text-xl font-normal">
                  {siteConfig.founder.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-[#D9D6CF] font-sans">
                  {siteConfig.founder.designation}
                </p>
              </div>
            </div>

            {/* Note regarding placeholder photography */}
            <div className="text-[11px] text-[#8A8883] text-center mt-3 font-mono">
              [Professional portrait area — configurable placeholder]
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <Eyebrow variant="burgundy">Leadership &amp; Practice Principal</Eyebrow>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-[1.15] tracking-tight">
                The person behind the practice.
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
              <p>{siteConfig.founder.bioPlaceholder}</p>
            </div>

            {/* Quote block */}
            <div className="p-6 bg-[#FCFBF8] border-l-2 border-[#6E2635] border-y border-r border-[#E9E7E2]">
              <p className="font-serif-display text-lg sm:text-xl italic text-[#111111] leading-relaxed">
                &ldquo;{siteConfig.founder.philosophyPlaceholder}&rdquo;
              </p>
              <span className="block mt-3 text-xs uppercase tracking-widest font-sans font-semibold text-[#6E2635]">
                — {siteConfig.founder.name}, Principal
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="md" withArrow>
                Connect with Pratik
              </Button>
              <a
                href={siteConfig.founder.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#6E2635] px-4 py-3 border border-[#D9D6CF] hover:border-[#111111] transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
