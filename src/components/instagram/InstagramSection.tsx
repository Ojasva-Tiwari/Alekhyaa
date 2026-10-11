"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function InstagramSection() {
  const previewShots = [
    {
      src: "/images/products/moonchild-poster.jpg",
      tag: "MOONCHILD · KING CRIMSON",
    },
    {
      src: "/images/products/alice-in-chains-editorial.jpg",
      tag: "ALICE IN CHAINS · WEAR PERSPECTIVE",
    },
    {
      src: "/images/products/devil-in-i-poster.jpg",
      tag: "DEVIL IN I · GOTHIC CHAOS",
    },
    {
      src: "/images/products/parabola-poster.jpg",
      tag: "PARABOLA · TOOL 2001",
    },
  ];

  return (
    <section
      id="instagram"
      className="relative py-24 md:py-32 border-t transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-section-2)",
        color: "var(--text-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header with Handle & CTA */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div>
            <div
              className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase mb-3"
              style={{ color: "var(--text-faint)" }}
            >
              <InstagramIcon className="size-3.5 text-pink-500" />
              COMMUNITY & PROCESS JOURNAL
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              {siteConfig.order.instagramHandle}
            </h2>
            <p
              className="font-mono text-xs tracking-wider mt-2"
              style={{ color: "var(--text-muted)" }}
            >
              AALEKHYA | Hand Painted Ties · Music you can wear.
            </p>
          </div>

          <div>
            <a
              href={siteConfig.order.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: "var(--btn-secondary-bg)",
                borderColor: "var(--btn-secondary-border)",
                color: "var(--text-primary)",
              }}
            >
              <span>FOLLOW THE JOURNEY</span>
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Studio Gallery Preview Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {previewShots.map((shot, idx) => (
            <a
              key={idx}
              href={siteConfig.order.instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden border aspect-[3/4] flex items-center justify-center p-3 transition-all duration-300 shadow-sm"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <img
                src={shot.src}
                alt={shot.tag}
                className="size-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-mono text-[10px] tracking-widest text-white uppercase">
                  {shot.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
