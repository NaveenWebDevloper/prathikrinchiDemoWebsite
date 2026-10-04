"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 overflow-hidden bg-[#FCFBF8] border-b border-[#E9E7E2]">
      {/* Subtle architectural background grid line */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Heading & Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <Eyebrow variant="burgundy">
                Professional Financial & Advisory Services
              </Eyebrow>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-[#111111] leading-[1.08] tracking-tight">
                Financial clarity for the decisions that shape your future.
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg lg:text-xl text-[#6B6862] font-light leading-relaxed max-w-2xl">
                Pratik Vinchhi &amp; Co provides thoughtful accounting, taxation, and professional advisory services designed around clarity, compliance, and long-term business decisions.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button href="/contact" variant="primary" size="lg" withArrow>
                Start a Conversation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </motion.div>

            {/* Quick Practice Attributes */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-[#E9E7E2] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-[#8A8883] font-sans"
            >
              <div>
                <span className="block font-medium text-[#111111] uppercase tracking-wider mb-1">
                  Jurisdiction
                </span>
                <span>Direct &amp; Indirect Tax (India)</span>
              </div>
              <div>
                <span className="block font-medium text-[#111111] uppercase tracking-wider mb-1">
                  Regulatory Scope
                </span>
                <span>ICAI &amp; MCA Frameworks</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-medium text-[#111111] uppercase tracking-wider mb-1">
                  Principal Advisory
                </span>
                <span>Direct Partner Engagement</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden bg-[#F7F6F2] border border-[#D9D6CF] shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
              {/* Editorial Architectural / Workspace Placeholder */}
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Pratik Vinchhi & Co - Architectural financial advisory practice environment"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover grayscale contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Editorial Caption Tag */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#111111]/90 via-[#111111]/60 to-transparent text-[#FCFBF8]">
                <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase">
                  <span>PRACTICE ARCHITECTURE</span>
                  <span className="text-[#D9D6CF]">MUMBAI / GUJARAT</span>
                </div>
                <p className="font-serif-display text-lg mt-1 italic text-[#F7F6F2]">
                  Disciplined governance. Defensible tax positions.
                </p>
              </div>
            </div>

            {/* Subtle floating accent indicator */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#FCFBF8] border border-[#E9E7E2] p-4 shadow-lg max-w-xs text-xs">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#6E2635]" />
                <span className="font-semibold text-[#111111] uppercase tracking-wider">
                  Direct Principal Focus
                </span>
              </div>
              <p className="text-[#6B6862] font-light leading-relaxed">
                Every commercial engagement is directly overseen by CA Pratik Vinchhi.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
