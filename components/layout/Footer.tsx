import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/data/siteConfig";
import { servicesData } from "@/lib/data/services";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#111111] text-[#FCFBF8] pt-20 pb-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#222222]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <Link href="/" className="inline-block">
                <span className="font-serif-display text-2xl sm:text-3xl font-normal text-[#FCFBF8]">
                  {siteConfig.firmName}
                </span>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A8883] mt-1 font-sans">
                  Chartered Accountants & Strategic Advisory
                </p>
              </Link>
            </div>
            <p className="text-sm font-light text-[#D9D6CF] leading-relaxed max-w-sm">
              Providing structured accounting, direct & indirect taxation, and strategic financial advisory designed around clarity, statutory compliance, and long-term business decisions.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-widest text-[#8A8883] border border-[#333333] px-3 py-1 font-mono">
                Market: {siteConfig.market}
              </span>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8883] font-sans">
              Practice Areas
            </p>
            <ul className="space-y-2.5 text-sm font-light">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-[#D9D6CF] hover:text-[#FCFBF8] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#8A8883]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm & Insights Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8883] font-sans">
              Firm
            </p>
            <ul className="space-y-2.5 text-sm font-light">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#D9D6CF] hover:text-[#FCFBF8] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#D9D6CF] hover:text-[#FCFBF8] transition-colors duration-200"
                >
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Office Placeholders */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A8883] font-sans">
              Communications
            </p>
            <div className="space-y-3 text-sm font-light text-[#D9D6CF]">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#8A8883]">
                  Enquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-[#FCFBF8] underline underline-offset-4 decoration-[#444] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#8A8883]">
                  Telephone
                </span>
                <span className="text-[#D9D6CF]">{siteConfig.contact.phone}</span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#8A8883]">
                  Office Location
                </span>
                <p className="text-[#8A8883] text-xs leading-relaxed">
                  {siteConfig.contact.address}
                  <br />
                  {siteConfig.contact.city}
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.social.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#FCFBF8] hover:text-[#D9D6CF] border-b border-[#444444] pb-0.5 transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Transparency & ICAI Guidelines Note */}
        <div className="py-8 border-b border-[#222222] text-[11px] text-[#8A8883] leading-relaxed max-w-4xl">
          <p className="font-sans">
            <strong className="text-[#D9D6CF] font-medium">Regulatory Notice:</strong> As per the rules and guidelines laid down by the Institute of Chartered Accountants of India (ICAI), chartered accountancy practices are prohibited from soliciting client work or advertising services. The content on this website is made available solely for informational purposes to provide existing and prospective clients with an objective overview of the firm&apos;s areas of professional practice and financial commentary.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#8A8883] font-sans">
          <div>
            © {currentYear} {siteConfig.firmName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#FCFBF8] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#FCFBF8] transition-colors duration-200"
            >
              Terms of Engagement
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[#FCFBF8] transition-colors duration-200"
            >
              Regulatory Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
