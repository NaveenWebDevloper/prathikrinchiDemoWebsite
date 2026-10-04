import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "burgundy" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "neutral",
  className,
}: BadgeProps) {
  const variants = {
    neutral: "bg-[#F7F6F2] text-[#171717] border border-[#E9E7E2]",
    burgundy: "bg-[#6E2635]/10 text-[#6E2635] border border-[#6E2635]/20",
    outline: "bg-transparent text-[#6B6862] border border-[#D9D6CF]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase font-sans",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
