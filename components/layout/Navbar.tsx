"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#FCFBF8]/95 backdrop-blur-md border-b border-[#E9E7E2] py-4 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-6 border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E2635] p-1"
          >
            <span className="font-serif-display text-xl sm:text-2xl font-normal tracking-tight text-[#111111] group-hover:text-[#6E2635] transition-colors duration-200">
              {siteConfig.firmName}
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8A8883] -mt-1 font-sans">
              Chartered Accountants
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-sans tracking-wide transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E2635]",
                    isActive
                      ? "text-[#111111] font-medium"
                      : "text-[#6B6862] hover:text-[#111111]"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6E2635]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="sm" withArrow>
              Start a Conversation
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#171717] hover:text-[#6E2635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E2635]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Refined Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#FCFBF8] pt-28 px-6 pb-12 flex flex-col justify-between md:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A8883] font-sans">
                Navigation
              </p>
              <nav className="flex flex-col space-y-4">
                {siteConfig.navigation.map((item, index) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "font-serif-display text-3xl block py-2 border-b border-[#E9E7E2]/60",
                          isActive ? "text-[#6E2635]" : "text-[#111111]"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="pt-6">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  withArrow
                  className="w-full justify-between"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Conversation
                </Button>
              </div>
            </div>

            <div className="pt-10 border-t border-[#E9E7E2] space-y-3 text-xs text-[#6B6862] font-sans">
              <p className="font-medium text-[#111111]">
                {siteConfig.firmName}
              </p>
              <p>{siteConfig.contact.workingHours}</p>
              <p className="text-[#8A8883]">{siteConfig.contact.queryResponseTime}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
