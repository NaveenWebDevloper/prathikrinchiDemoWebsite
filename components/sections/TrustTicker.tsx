"use client";

import React from "react";

export function TrustTicker() {
  const items = [
    "ACCOUNTING & MIS",
    "DIRECT TAXATION",
    "GOODS & SERVICES TAX",
    "STRATEGIC ADVISORY",
    "STATUTORY COMPLIANCE",
    "CORPORATE STRUCTURING",
    "FINANCIAL GOVERNANCE",
    "TRANSACTION READINESS",
  ];

  return (
    <div className="py-6 bg-[#171717] text-[#FCFBF8] border-y border-[#262626] overflow-hidden select-none">
      <div className="flex w-max animate-ticker">
        {/* Repeating twice for seamless infinite ticker */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-6 px-6 text-xs sm:text-sm tracking-[0.25em] font-sans font-medium uppercase text-[#D9D6CF]"
          >
            <span>{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6E2635]" />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          animation: ticker 35s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
