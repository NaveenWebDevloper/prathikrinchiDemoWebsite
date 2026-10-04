import React, { Suspense } from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/data/siteConfig";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Confidential Enquiries",
  description:
    "Initiate a confidential consultation with CA Pratik Vinchhi. Practice chambers, contact channels, and engagement guidelines.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How are initial consultations conducted?",
      a: "Initial discussions are held via secure video conference or in-person at our practice chambers. We conduct a preliminary diagnostic review to understand transaction context before scoping formal deliverables.",
    },
    {
      q: "What is your standard enquiry response timeline?",
      a: "Every submission is directly acknowledged within one business day by our practice coordinator with preliminary scheduling details.",
    },
    {
      q: "Do you advise entities outside your immediate location?",
      a: "Yes. In the digital taxation and MCA filing era, our firm provides direct advisory and statutory representation to businesses across India.",
    },
    {
      q: "How are professional fees structured?",
      a: "Fees are structured based on scope, operational complexity, and regulatory risk, adhering to professional guidelines set forth by the ICAI.",
    },
  ];

  return (
    <div className="w-full">
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Initiate Dialogue"
        title="Let's start a conversation."
        description="Whether navigating complex direct tax assessments, establishing robust internal controls, or restructuring corporate entities, our practice provides direct, dependable counsel."
      />

      {/* Main Form & Practice Details Section */}
      <section className="py-20 sm:py-28 bg-[#FCFBF8] border-b border-[#E9E7E2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="p-12 text-center text-xs text-[#8A8883] font-mono">
                    Loading enquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            {/* Practice Details Sidebar */}
            <div className="lg:col-span-5 space-y-10">
              {/* Direct Communications Box */}
              <div className="bg-[#F7F6F2] border border-[#E9E7E2] p-8 space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#6E2635] font-semibold block">
                  PRACTICE CHAMBERS
                </span>

                <div className="space-y-6 text-sm font-light text-[#111111]">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#6E2635] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#8A8883] font-sans">
                        Electronic Mail
                      </span>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="font-medium hover:text-[#6E2635] underline underline-offset-4 decoration-[#D9D6CF] transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#6E2635] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#8A8883] font-sans">
                        Direct Chambers Telephone
                      </span>
                      <span className="font-medium">{siteConfig.contact.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#6E2635] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#8A8883] font-sans">
                        Chambers Location
                      </span>
                      <p className="text-xs text-[#6B6862] leading-relaxed mt-0.5">
                        {siteConfig.contact.address}
                        <br />
                        {siteConfig.contact.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#6E2635] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#8A8883] font-sans">
                        Chambers Working Hours
                      </span>
                      <p className="text-xs text-[#6B6862] mt-0.5">
                        {siteConfig.contact.workingHours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E9E7E2]">
                  <p className="text-xs text-[#8A8883] font-sans">
                    <strong className="text-[#111111] font-medium">Service Commitment: </strong>
                    {siteConfig.contact.queryResponseTime}
                  </p>
                </div>
              </div>

              {/* Engagement FAQ */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111] font-sans">
                  <HelpCircle className="w-4 h-4 text-[#6E2635]" />
                  <span>Consultation FAQ</span>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-[#FCFBF8] border border-[#E9E7E2] space-y-1.5"
                    >
                      <h4 className="font-serif-display text-lg text-[#111111]">
                        {faq.q}
                      </h4>
                      <p className="text-xs text-[#6B6862] font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ICAI Compliance Notice */}
              <div className="p-5 bg-[#F7F6F2] border-l-2 border-[#111111] border-y border-r border-[#E9E7E2] text-xs text-[#8A8883] leading-relaxed flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                <p>
                  In accordance with the regulatory code established by the Institute of Chartered Accountants of India (ICAI), this enquiry channel does not constitute solicitation or public advertising. Information submitted is treated under privileged client-counsel discretion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
