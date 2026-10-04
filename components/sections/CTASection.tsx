import React from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 bg-[#171717] text-[#FCFBF8] relative overflow-hidden">
      {/* Subtle background tone with dark burgundy aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#4B1823]/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6E2635]/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-8">
        <Eyebrow variant="light">Direct Principal Advisory</Eyebrow>

        <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#FCFBF8] leading-tight">
          Let&apos;s bring clarity to your next financial decision.
        </h2>

        <p className="text-base sm:text-lg text-[#D9D6CF] font-light max-w-2xl mx-auto leading-relaxed">
          Whether you require proactive tax planning, structured accounting oversight, or strategic counsel for corporate reorganization, our chambers provide direct, dependable guidance.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            withArrow
            className="bg-[#6E2635] hover:bg-[#4B1823] border-[#6E2635]"
          >
            Start a Conversation
          </Button>
          <Button
            href="/services"
            variant="secondary"
            size="lg"
            className="text-[#FCFBF8] border-[#8A8883] hover:border-[#FCFBF8] hover:bg-white/5"
          >
            Explore Services
          </Button>
        </div>

        <p className="text-xs text-[#8A8883] tracking-wider uppercase font-mono pt-4">
          Strict Confidentiality • Direct Principal Consultation • Prompt Acknowledgement
        </p>
      </div>
    </section>
  );
}
