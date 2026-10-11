"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { Brush, Radio, ShieldCheck } from "lucide-react";

export function AboutBrandSection() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 border-t overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: "var(--bg-section-3)",
        color: "var(--text-primary)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Upper Editorial Quote */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span
            className="text-[11px] font-mono tracking-[0.35em] uppercase block"
            style={{ color: "var(--text-faint)" }}
          >
            MANIFESTO
          </span>
          <h2
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            &ldquo;EVERY TIE TELLS A DIFFERENT STORY.&rdquo;
          </h2>
          <p
            className="font-display text-lg md:text-xl italic tracking-widest pt-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Wearable art inspired by sound, emotion, and visual consciousness.
          </p>
        </div>

        {/* Narrative Columns */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start text-sm md:text-base font-sans leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          <div className="space-y-6">
            <p>
              Ties have historically been symbols of rigid formality and uniform expectation. <span className="font-semibold" style={{ color: "var(--text-primary)" }}>AALEKHYA</span> fundamentally reclaims the tie as an expressive vertical art piece—wearable artwork carrying the songs, emotions, and stories that define who you are.
            </p>
            <p>
              From psychedelic spiral journeys inspired by TOOL to raw gothic grunge and celestial midnight wandering, each piece takes music and emotion and transcribes them into hand-painted art.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              There are no mass-manufactured prints here. Every stroke, skull, eyeball, and starburst is brushed by hand.
            </p>
            <p>
              When you wear an AALEKHYA tie, you aren&apos;t simply putting on an accessory; you are wearing a piece of music and art.
            </p>
          </div>
        </div>

        {/* Brand Pillars */}
        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div
            className="flex flex-col items-center text-center p-6 rounded-2xl border transition-colors duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div
              className="size-10 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--btn-secondary-bg)" }}
            >
              <Brush className="size-5" style={{ color: "var(--text-primary)" }} />
            </div>
            <h3
              className="font-serif text-sm font-bold tracking-wider uppercase mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              HAND-PAINTED ARTWORK
            </h3>
            <p className="text-xs leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
              Each tie is painted individually by hand, preserving authentic brushwork and original detail.
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center p-6 rounded-2xl border transition-colors duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div
              className="size-10 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--btn-secondary-bg)" }}
            >
              <Radio className="size-5" style={{ color: "var(--text-primary)" }} />
            </div>
            <h3
              className="font-serif text-sm font-bold tracking-wider uppercase mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              MUSIC YOU CAN WEAR
            </h3>
            <p className="text-xs leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
              Rooted in seminal rock, metal, ambient poetry, and sonic landscapes that resonate beyond the surface.
            </p>
          </div>

          <div
            className="flex flex-col items-center text-center p-6 rounded-2xl border transition-colors duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-subtle)",
            }}
          >
            <div
              className="size-10 rounded-full flex items-center justify-center mb-4"
              style={{ backgroundColor: "var(--btn-secondary-bg)" }}
            >
              <ShieldCheck className="size-5" style={{ color: "var(--text-primary)" }} />
            </div>
            <h3
              className="font-serif text-sm font-bold tracking-wider uppercase mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              SINGULAR ORIGINALITY
            </h3>
            <p className="text-xs leading-relaxed font-sans" style={{ color: "var(--text-muted)" }}>
              Because each piece is hand-crafted, subtle organic variations ensure no two ties are ever identical.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
