"use client";

import React, { useState } from "react";
import { Share2, Check, Link as LinkIcon } from "lucide-react";

interface ArticleShareButtonsProps {
  title: string;
  url: string;
}

export function ArticleShareButtons({ title, url }: ArticleShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-wider text-[#8A8883] font-sans flex items-center gap-1.5 mr-2">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share</span>
      </span>

      <button
        type="button"
        onClick={handleLinkedInShare}
        className="p-2 bg-[#F7F6F2] hover:bg-[#E9E7E2] text-[#111111] border border-[#D9D6CF] transition-colors cursor-pointer"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      </button>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#F7F6F2] hover:bg-[#E9E7E2] text-xs font-sans text-[#111111] border border-[#D9D6CF] transition-colors cursor-pointer"
        aria-label="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-[#6E2635]" />
            <span className="text-[#6E2635] font-medium">Link Copied</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-[#8A8883]" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
