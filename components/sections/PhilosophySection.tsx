import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function PhilosophySection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF8] border-b border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Number & Metadata */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#8A8883] block">
              01 — OUR APPROACH
            </span>
            <div className="w-12 h-0.5 bg-[#6E2635]" />
            <p className="text-xs uppercase tracking-wider text-[#6B6862] font-sans pt-2">
              Foundational Philosophy
            </p>
          </div>

          {/* Right Column: Large Editorial Statement & Body */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111111] leading-[1.15] tracking-tight">
              Good financial decisions begin with clarity.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
              <p>
                In an increasingly intricate regulatory environment, commercial success is inextricably linked with statutory discipline. When tax positions are ambiguous or internal records lack precision, leadership operates with clouded vision, reacting to sudden compliance shocks rather than executing planned commercial strategy.
              </p>
              <p>
                At Pratik Vinchhi &amp; Co, we reject the notion of retrospective accounting as mere administrative overhead. Instead, we structure your financial and compliance architecture so that every ledger entry, reconciliation, and statutory filing reinforces commercial resilience.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#111111] hover:text-[#6E2635] border-b border-[#111111] hover:border-[#6E2635] pb-1 transition-all duration-200 group"
              >
                <span>Read more about our firm philosophy &amp; leadership</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
