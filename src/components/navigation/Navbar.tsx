"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig, getOrderDestination, getWhatsAppUrl } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "COLLECTION", href: "/#collection" },
    { label: "STORE", href: "/store" },
    { label: "STORIES", href: "/#stories" },
    { label: "CUSTOM TIES", href: "/#custom" },
    { label: "ABOUT", href: "/#about" },
    { label: "INSTAGRAM", href: siteConfig.order.instagramProfileUrl, external: true },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 lg:px-12",
        scrolled
          ? "py-3 bg-[var(--bg-header)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm"
          : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex flex-col focus:outline-none"
        >
          <span className="font-serif tracking-[0.25em] text-xl md:text-2xl font-bold text-[var(--text-primary)] transition-opacity group-hover:opacity-80">
            {siteConfig.brandName}
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-[var(--text-muted)] -mt-0.5 uppercase hidden sm:block">
            Hand-Painted Neckwear
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-6 lg:space-x-7 text-[12px] font-mono tracking-[0.2em] text-[var(--text-secondary)]"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="relative py-1 transition-colors hover:text-[var(--text-primary)] group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--text-primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          {/* Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="size-9 rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-primary-bg)] text-[var(--text-primary)] hover:text-[var(--btn-primary-text)] flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--border-medium)] active:scale-95 shrink-0"
          >
            {theme === "dark" ? (
              <Sun className="size-4 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="size-4 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* WhatsApp Enquiry/Order */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-primary-bg)] text-[var(--text-secondary)] hover:text-[var(--btn-primary-text)] transition-all duration-300 text-[11px] font-mono tracking-[0.16em] uppercase backdrop-blur-sm"
            title="Enquire or order on WhatsApp"
          >
            <span>WHATSAPP</span>
            <ArrowUpRight className="size-3" />
          </a>

          {/* Instagram Order */}
          <a
            href={getOrderDestination()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-primary-bg)] text-[var(--text-primary)] hover:text-[var(--btn-primary-text)] transition-all duration-300 text-[11px] font-mono tracking-[0.18em] uppercase backdrop-blur-sm"
          >
            <span>ORDER VIA DM</span>
            <ArrowUpRight className="size-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[var(--bg-header)] backdrop-blur-xl border-b border-[var(--border-subtle)] p-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4 text-sm font-mono tracking-[0.25em] text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[var(--border-subtle)] flex items-center justify-between hover:text-[var(--text-primary)]"
              >
                <span>{link.label}</span>
                {link.external && <ArrowUpRight className="size-3.5 opacity-50" />}
              </Link>
            ))}
            <div className="pt-4 space-y-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] font-mono text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
              >
                <span>WHATSAPP ENQUIRY ↗</span>
              </a>
              <a
                href={getOrderDestination()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-mono text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
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
