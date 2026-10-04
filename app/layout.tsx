import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { siteConfig } from "@/lib/data/siteConfig";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const serifFont = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Variable.woff2",
      style: "normal",
      weight: "300 700",
    },
    {
      path: "../public/fonts/CormorantGaramond-Italic-Variable.woff2",
      style: "italic",
      weight: "300 700",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.firmName} | Chartered Accountants & Advisory`,
    template: `%s | ${siteConfig.firmName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Chartered Accountant",
    "Pratik Vinchhi",
    "Tax Advisory India",
    "Corporate Compliance",
    "GST Advisory",
    "Financial Advisory",
    "Accounting Services India",
    "Business Structuring",
  ],
  authors: [{ name: siteConfig.founder.name, url: siteConfig.siteUrl }],
  creator: siteConfig.firmName,
  publisher: siteConfig.firmName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    title: `${siteConfig.firmName} | Professional Financial & Advisory Services`,
    description: siteConfig.description,
    siteName: siteConfig.firmName,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.firmName} - Financial clarity for decisions that matter`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.firmName} | Professional Financial & Advisory Services`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}
    >
      <head>
        <link rel="canonical" href={siteConfig.siteUrl} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FCFBF8] text-[#171717] selection:bg-[#6E2635] selection:text-[#FCFBF8] antialiased">
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
