import type { Metadata } from "next";
import { Cinzel, Syne, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aalekhya.com"),
  title: "AALEKHYA — Hand Painted Ties",
  description:
    "Hand-painted ties inspired by music, art and stories. Discover the AALEKHYA collection.",
  keywords: [
    "AALEKHYA",
    "hand painted ties",
    "custom ties",
    "music inspired fashion",
    "wearable art",
    "Tool Lateralus tie",
    "Alice in Chains tie",
    "experimental fashion",
    "luxury neckwear",
  ],
  authors: [{ name: "AALEKHYA" }],
  creator: "AALEKHYA",
  openGraph: {
    title: "AALEKHYA — Hand Painted Ties | Music you can wear.",
    description:
      "Hand-painted ties inspired by music, art and stories. Discover the AALEKHYA collection.",
    url: "https://aalekhya.com",
    siteName: "AALEKHYA",
    images: [
      {
        url: "/images/products/lateralus-primary.jpg",
        width: 800,
        height: 1200,
        alt: "AALEKHYA Hand Painted Tie — Lateralus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AALEKHYA — Hand Painted Ties",
    description:
      "Hand-painted ties inspired by music, art and stories. Discover the AALEKHYA collection.",
    images: ["/images/products/lateralus-primary.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${cinzel.variable} ${syne.variable} ${inter.variable} font-sans bg-[#070709] text-[#f5f5f7] relative min-h-screen selection:bg-white/20`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
