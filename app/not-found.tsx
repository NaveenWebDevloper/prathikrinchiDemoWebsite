import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/lib/data/services";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 bg-[#FCFBF8]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <Eyebrow variant="burgundy">Error 404 • Resource Not Located</Eyebrow>

        <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-tight">
          The requested memorandum or page does not exist.
        </h1>

        <p className="text-base sm:text-lg text-[#6B6862] font-light max-w-xl mx-auto leading-relaxed">
          The publication or service page you are seeking may have been repositioned, archived, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button href="/contact" variant="secondary" size="md" withArrow>
            Contact Practice Chambers
          </Button>
        </div>

        {/* Quick links to practice areas */}
        <div className="pt-12 border-t border-[#E9E7E2] max-w-lg mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#8A8883] font-sans mb-4">
            Direct Navigation to Practice Areas
          </p>
          <div className="grid grid-cols-2 gap-3 text-left">
            {servicesData.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="p-3 bg-[#F7F6F2] hover:bg-[#E9E7E2] border border-[#E9E7E2] text-xs text-[#111111] flex items-center justify-between group transition-colors"
              >
                <span>{svc.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8883] group-hover:text-[#6E2635]" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
