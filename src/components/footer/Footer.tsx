"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig, getOrderDestination } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative border-t pt-20 pb-12 overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-section-2)",
        color: "var(--text-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h2
              className="font-serif text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              {siteConfig.brandName}
            </h2>
            <p
              className="font-display text-base italic tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p
              className="text-xs leading-relaxed font-sans max-w-sm"
              style={{ color: "var(--text-muted)" }}
            >
              Hand-painted neckwear inspired by music, emotion, and storytelling. Each tie is an individual wearable artwork created without automated mass production.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs tracking-widest uppercase">
            <span
              className="text-[10px] block mb-2"
              style={{ color: "var(--text-faint)" }}
            >
              INDEX
            </span>
            <ul className="space-y-2.5" style={{ color: "var(--text-secondary)" }}>
              <li>
                <Link
                  href="/#collection"
                  className="transition-opacity hover:opacity-70"
                >
                  01. THE COLLECTION
                </Link>
              </li>
              <li>
                <Link
                  href="/store"
                  className="transition-opacity hover:opacity-70"
                >
                  02. THE STORE
                </Link>
              </li>
              <li>
                <Link
                  href="/#stories"
                  className="transition-opacity hover:opacity-70"
                >
                  03. ARTWORK STORIES
                </Link>
              </li>
              <li>
                <Link
                  href="/#custom"
                  className="transition-opacity hover:opacity-70"
                >
                  04. CUSTOM TIES
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="transition-opacity hover:opacity-70"
                >
                  05. ABOUT AALEKHYA
                </Link>
              </li>
            </ul>
          </div>

          {/* Ordering & Contact */}
          <div className="md:col-span-4 space-y-4">
            <span
              className="text-[10px] font-mono tracking-widest uppercase block"
              style={{ color: "var(--text-faint)" }}
            >
              ACQUISITION & ENQUIRIES
            </span>
            <p
              className="text-xs font-sans leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Orders and custom commission requests are accepted directly through Instagram DM or WhatsApp with the artist.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getOrderDestination()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all shadow-sm hover:opacity-90 hover:scale-[1.01]"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                <span>ORDER VIA INSTAGRAM</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href={siteConfig.order.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs font-bold tracking-widest uppercase transition-all border hover:scale-[1.01]"
                style={{
                  backgroundColor: "var(--btn-secondary-bg)",
                  borderColor: "var(--btn-secondary-border)",
                  color: "var(--text-primary)",
                }}
              >
                <span>WHATSAPP</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
            <a
              href={siteConfig.order.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider transition-colors hover:underline"
              style={{ color: "var(--text-muted)" }}
            >
              <span>{siteConfig.order.instagramHandle}</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-wider gap-4"
          style={{ color: "var(--text-faint)" }}
        >
          <p>© {new Date().getFullYear()} AALEKHYA. All rights reserved. Music you can wear.</p>
          <p className="text-right">HAND-PAINTED ARTWORK · EVERY TIE TELLS A STORY</p>
        </div>
      </div>
    </footer>
  );
}
