import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/lib/data/siteConfig";
import { firmMilestones } from "@/lib/data/milestones";
import { ArrowUpRight, ShieldCheck, Scale, Target, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About the Practice",
  description:
    "Learn about Pratik Vinchhi & Co, our professional ethos, practice philosophy, and principal leadership under CA Pratik Vinchhi.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
};

export default function AboutPage() {
  const firmValues = [
    {
      icon: Scale,
      title: "Regulatory Fidelity",
      description:
        "Every tax recommendation and accounting workflow is grounded in contemporary statutory provisions, notifications, and binding legal precedents.",
    },
    {
      icon: ShieldCheck,
      title: "Objectivity & Independence",
      description:
        "We serve as an unyielding filter for our clients, providing honest financial counsel even when it challenges convenient assumptions.",
    },
    {
      icon: Target,
      title: "Operational Precision",
      description:
        "We believe computational exactness and thorough reconciliation are the sole barriers between financial health and regulatory penalty.",
    },
    {
      icon: Lock,
      title: "Absolute Discretion",
      description:
        "Client disclosures, commercial strategies, and proprietary records are held under strict fiduciary confidentiality protocols.",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="Firm Overview"
        title="Disciplined financial counsel for consequential decisions."
        description="Pratik Vinchhi & Co is an independent chartered accountancy and financial advisory practice headquartered in India, serving enterprise leadership, business promoters, and emerging corporate entities."
      />

      {/* Firm Introduction & Practice Ethos */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-4">
              <Eyebrow variant="burgundy">Practice Governance</Eyebrow>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#111111] leading-tight">
                Built to deliver clarity where regulatory nuance meets commercial reality.
              </h2>
              <div className="pt-4 border-t border-[#E9E7E2] space-y-2 text-xs text-[#8A8883] font-mono">
                <div>REGULATORY BODY: ICAI (India)</div>
                <div>DISCIPLINE: Audit, Taxation, Corporate Advisory</div>
                <div>ENGAGEMENT MODEL: Principal-Led</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
              <p>
                In a dynamic economy where tax statutes, Goods &amp; Services Tax (GST) rules, and corporate reporting mandates evolve continuously, businesses need more than mechanical filing services. They need a trusted advisory partner who anticipates regulatory friction points and structures transactions for durability.
              </p>
              <p>
                Founded and directed by CA Pratik Vinchhi, our practice combines deep statutory mastery with a keen commercial perspective. We believe high-stakes financial decisions should never be made on intuition alone; they require clear mathematical modeling, unambiguous regulatory interpretation, and disciplined documentation.
              </p>
              <p>
                We do not operate as an impersonal volume processing mill. Every client engagement receives direct principal attention, ensuring our counsel is calibrated precisely to your operational nuances and risk posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder In-Depth Section */}
      <section className="py-20 sm:py-28 bg-[#F7F6F2] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto bg-[#E9E7E2] border border-[#D9D6CF] shadow-[0_16px_36px_rgba(0,0,0,0.05)] overflow-hidden">
                <Image
                  src={siteConfig.founder.portraitPlaceholder}
                  alt={siteConfig.founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent text-[#FCFBF8]">
                  <p className="font-serif-display text-2xl font-normal">
                    {siteConfig.founder.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#D9D6CF] font-sans">
                    {siteConfig.founder.designation}
                  </p>
                </div>
              </div>
              <div className="text-[11px] text-[#8A8883] text-center mt-3 font-mono">
                [Client photography placeholder — easily configurable]
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Eyebrow variant="burgundy">Principal Profile</Eyebrow>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#111111] leading-tight">
                CA Pratik Vinchhi
              </h2>
              <p className="text-xs uppercase tracking-widest text-[#8A8883] font-sans -mt-3">
                Principal &amp; Practice Lead
              </p>

              <div className="space-y-4 text-base sm:text-lg text-[#6B6862] font-light leading-relaxed">
                <p>{siteConfig.founder.bioPlaceholder}</p>
                <p>
                  Pratik’s advisory work emphasizes proactive risk prevention—identifying credit leakage in GST ledgers, structuring commercial agreements to withstand tax scrutiny, and engineering MIS architectures that provide boards with clear cash flow line-of-sight.
                </p>
              </div>

              {/* Personal Philosophy callout */}
              <div className="p-6 bg-[#FCFBF8] border-l-2 border-[#6E2635] border-y border-r border-[#E9E7E2]">
                <p className="font-serif-display text-lg italic text-[#111111]">
                  &ldquo;{siteConfig.founder.philosophyPlaceholder}&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="md" withArrow>
                  Request Consultation with Pratik
                </Button>
                <a
                  href={siteConfig.founder.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#111111] hover:text-[#6E2635] px-4 py-3 border border-[#D9D6CF] hover:border-[#111111] transition-all"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Values */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Core Values"
            title="The ethical bedrock of our advisory practice."
            description="Our practice adheres strictly to the highest ethical and professional standards governing Chartered Accountants in India."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firmValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-[#FCFBF8] border border-[#E9E7E2] space-y-4 hover:border-[#111111] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-none bg-[#F7F6F2] border border-[#D9D6CF] flex items-center justify-center text-[#6E2635]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-display text-2xl text-[#111111] font-normal">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice Evolution / Milestones (CMS-ready, non-fabricated) */}
      <section className="py-20 sm:py-28 bg-[#F7F6F2] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4 space-y-4">
              <Eyebrow variant="burgundy">Practice Journey</Eyebrow>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#111111] leading-tight">
                Structured evolution anchored in professional excellence.
              </h2>
              <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                Our trajectory reflects a continuous commitment to expanding advisory depth, incorporating modern financial governance, and building lasting client relationships.
              </p>
              <p className="text-xs text-[#8A8883] font-mono pt-2">
                [Configurable CMS milestones structure]
              </p>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {firmMilestones.map((m, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#FCFBF8] border border-[#E9E7E2] space-y-2 relative"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#6E2635]">
                    <span>{m.period}</span>
                    <span className="text-[#8A8883]">Milestone</span>
                  </div>
                  <h3 className="font-serif-display text-2xl text-[#111111] font-normal">
                    {m.title}
                  </h3>
                  <p className="text-sm text-[#6B6862] font-light leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
