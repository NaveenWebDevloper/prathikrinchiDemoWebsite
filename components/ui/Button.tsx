"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withArrow = false,
      isLoading = false,
      href,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-xs tracking-wider uppercase font-medium",
      md: "px-6 py-3.5 text-sm tracking-wide font-medium",
      lg: "px-8 py-4 text-base tracking-wide font-medium",
    };

    const variantClasses = {
      primary:
        "bg-[#111111] text-[#FCFBF8] hover:bg-[#222222] border border-[#111111] transition-all duration-300 shadow-sm hover:shadow-md",
      secondary:
        "bg-transparent text-[#171717] hover:bg-[#F7F6F2] border border-[#D9D6CF] hover:border-[#171717] transition-all duration-300",
      accent:
        "bg-[#6E2635] text-[#FCFBF8] hover:bg-[#4B1823] border border-[#6E2635] transition-all duration-300 shadow-sm",
      ghost:
        "bg-transparent text-[#171717] hover:bg-[#F7F6F2] hover:text-[#111111] transition-colors duration-200",
      link:
        "bg-transparent text-[#171717] p-0 hover:text-[#6E2635] transition-colors duration-200 underline-offset-4 hover:underline",
    };

    const baseClasses = cn(
      "inline-flex items-center justify-center gap-2.5 rounded-none font-sans select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6E2635] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none group cursor-pointer transition-all duration-300",
      sizeClasses[size],
      variantClasses[variant],
      className
    );

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin mr-1" />}
        <span>{children}</span>
        {withArrow && !isLoading && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current opacity-80 group-hover:opacity-100" />
        )}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal) {
        return (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={baseClasses}
          >
            {content}
          </a>
        );
      }
      return (
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
