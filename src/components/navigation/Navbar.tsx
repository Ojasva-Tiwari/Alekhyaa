"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig, getOrderDestination } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "COLLECTION", href: "#collection" },
    { label: "STORIES", href: "#stories" },
    { label: "CUSTOM TIES", href: "#custom" },
    { label: "ABOUT", href: "#about" },
    { label: "INSTAGRAM", href: siteConfig.order.instagramProfileUrl, external: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 lg:px-12",
        scrolled
          ? "py-3 bg-[#07070a]/85 backdrop-blur-md border-b border-white/[0.08]"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif tracking-[0.25em] text-xl md:text-2xl font-bold text-white transition-opacity group-hover:opacity-80">
            {siteConfig.brandName}
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-white/50 -mt-0.5 uppercase hidden sm:block">
            Hand-Painted Neckwear
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-7 text-[12px] font-mono tracking-[0.2em] text-white/70"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="relative py-1 transition-colors hover:text-white group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center space-x-4">
          <a
            href={getOrderDestination()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 text-[11px] font-mono tracking-[0.18em] uppercase backdrop-blur-sm"
          >
            <span>ORDER VIA DM</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#09090d]/95 backdrop-blur-xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-5 text-sm font-mono tracking-[0.25em] text-white/80">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 flex items-center justify-between hover:text-white"
              >
                <span>{link.label}</span>
                {link.external && <ArrowUpRight className="size-3.5 opacity-50" />}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href={getOrderDestination()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-white text-black font-mono text-xs tracking-widest uppercase font-semibold hover:bg-white/90"
              >
                <span>{siteConfig.order.defaultOrderLabel}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
