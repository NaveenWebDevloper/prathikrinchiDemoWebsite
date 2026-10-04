import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-xs text-[#8A8883] font-sans">
        <li>
          <Link
            href="/"
            className="hover:text-[#111111] transition-colors"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#D9D6CF]" />
              </li>
              <li>
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-[#111111] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#111111] font-medium" aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
