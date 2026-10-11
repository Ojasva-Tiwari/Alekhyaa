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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var stored = localStorage.getItem('alekhya_theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (stored === 'light' || (!stored && prefersLight && !prefersDark)) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  } catch (e) {}
})();
`,
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${syne.variable} ${inter.variable} font-sans bg-[var(--bg-page)] text-[var(--text-primary)] relative min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
