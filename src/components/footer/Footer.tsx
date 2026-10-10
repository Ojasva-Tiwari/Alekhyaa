"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig, getOrderDestination } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#040406] text-white border-t border-white/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-[0.2em] uppercase text-white">
              {siteConfig.brandName}
            </h2>
            <p className="font-display text-base text-white/70 italic tracking-wider">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm">
              Hand-painted neckwear inspired by music, emotion, and storytelling. Each tie is an individual wearable artwork created without automated mass production.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs tracking-widest uppercase">
            <span className="text-white/30 text-[10px] block mb-2">INDEX</span>
            <ul className="space-y-2.5 text-white/60">
              <li>
                <Link href="#collection" className="hover:text-white transition-colors">
                  01. THE COLLECTION
                </Link>
              </li>
              <li>
                <Link href="#stories" className="hover:text-white transition-colors">
                  02. ARTWORK STORIES
                </Link>
              </li>
              <li>
                <Link href="#custom" className="hover:text-white transition-colors">
                  03. CUSTOM TIES
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  04. ABOUT AALEKHYA
                </Link>
              </li>
            </ul>
          </div>

          {/* Ordering & Contact */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-white/30 text-[10px] font-mono tracking-widest uppercase block">
              ACQUISITION & ENQUIRIES
            </span>
            <p className="text-xs text-white/60 font-sans leading-relaxed">
              Orders and custom commission requests are accepted directly through Instagram DM with the artist.
            </p>
            <div className="pt-2">
              <a
                href={getOrderDestination()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-all"
              >
                <span>ORDER VIA INSTAGRAM</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <a
              href={siteConfig.order.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-white/50 hover:text-white transition-colors"
            >
              <span>{siteConfig.order.instagramHandle}</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-wider text-white/40 gap-4">
          <p>© {new Date().getFullYear()} AALEKHYA. All rights reserved. Music you can wear.</p>
          <p className="text-right">HAND-PAINTED ARTWORK · EVERY TIE TELLS A STORY</p>
        </div>
      </div>
    </footer>
  );
}
