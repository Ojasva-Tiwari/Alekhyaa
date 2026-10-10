"use client";

import * as React from "react";
import { siteConfig } from "@/config/site";
import { Brush, Radio, ShieldCheck } from "lucide-react";

export function AboutBrandSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#07070a] text-white border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Upper Editorial Quote */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[11px] font-mono tracking-[0.35em] text-white/40 uppercase block">
            MANIFESTO
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-tight text-white">
            &ldquo;EVERY TIE TELLS A DIFFERENT STORY.&rdquo;
          </h2>
          <p className="font-display text-lg md:text-xl text-white/70 italic tracking-widest pt-2">
            Wearable art inspired by sound, emotion, and visual consciousness.
          </p>
        </div>

        {/* Narrative Columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start text-sm md:text-base text-white/70 font-sans leading-relaxed">
          <div className="space-y-6">
            <p>
              Ties have historically been symbols of rigid formality and uniform expectation. <span className="text-white font-medium">AALEKHYA</span> fundamentally reclaims the tie as an expressive vertical art piece—wearable artwork carrying the songs, emotions, and stories that define who you are.
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
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Brush className="size-5 text-white/80" />
            </div>
            <h3 className="font-serif text-sm font-bold tracking-wider uppercase text-white mb-2">
              HAND-PAINTED ARTWORK
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-sans">
              Each tie is painted individually by hand, preserving authentic brushwork and original detail.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Radio className="size-5 text-white/80" />
            </div>
            <h3 className="font-serif text-sm font-bold tracking-wider uppercase text-white mb-2">
              MUSIC YOU CAN WEAR
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-sans">
              Rooted in seminal rock, metal, ambient poetry, and sonic landscapes that resonate beyond the surface.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <ShieldCheck className="size-5 text-white/80" />
            </div>
            <h3 className="font-serif text-sm font-bold tracking-wider uppercase text-white mb-2">
              SINGULAR ORIGINALITY
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-sans">
              Because each piece is hand-crafted, subtle organic variations ensure no two ties are ever identical.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
