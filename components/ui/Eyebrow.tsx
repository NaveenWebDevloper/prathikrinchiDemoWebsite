import React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "burgundy";
}

export function Eyebrow({
  children,
  className,
  variant = "burgundy",
}: EyebrowProps) {
  const variantStyles = {
    burgundy: "text-[#6E2635] before:bg-[#6E2635]",
    light: "text-[#D9D6CF] before:bg-[#D9D6CF]",
    dark: "text-[#171717] before:bg-[#171717]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase font-sans",
        variantStyles[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      <span>{children}</span>
    </div>
  );
}
