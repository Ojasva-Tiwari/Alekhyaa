"use client";

import * as React from "react";
import { siteConfig, getOrderDestination } from "@/config/site";
import { ArrowUpRight, Sparkles, Disc, Palette, HeartHandshake } from "lucide-react";

export function CustomTieSection() {
  return (
    <section id="custom" className="relative py-28 md:py-36 bg-[#060608] text-white border-t border-white/[0.08] overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-tr from-purple-900/15 to-emerald-900/10 blur-[150px] opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Editorial Card */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0e0e14] to-[#07070a] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono tracking-[0.25em] text-white/70 uppercase">
                <Sparkles className="size-3 text-purple-400" />
                BESPOKE COMMISSIONS
              </div>

              <span className="text-xs font-mono tracking-[0.3em] uppercase text-white/40 block">
                WANT SOMETHING PERSONAL?
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-white">
                CUSTOM TIES
              </h2>

              <p className="font-display text-lg sm:text-xl text-white/90 italic tracking-wide">
                &ldquo;Have a song, memory, character, idea or visual you&apos;d want to wear?&rdquo;
              </p>

              <p className="text-sm md:text-base text-white/60 leading-relaxed font-sans max-w-xl">
                Every tie tells a different story. If you have an album that altered your worldview, an evocative lyric, or a personal symbol you want brought to life, AALEKHYA creates custom hand-painted pieces tailored to your aesthetic.
              </p>

              <div className="pt-4">
                <a
                  href={getOrderDestination()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white text-black font-mono text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                  <span>TALK TO AALEKHYA</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <span className="block text-[11px] font-mono tracking-wider text-white/40 mt-3">
                  DIRECT CONVERSATION VIA INSTAGRAM DM · CONSULTATION ON ARTWORK & MOTIFS
                </span>
              </div>
            </div>

            {/* Right Collaboration Steps */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Disc className="size-4 text-white/70" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/50 uppercase">
                    STEP 01
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-white tracking-wider">
                  The Song or Concept
                </h3>
                <p className="text-xs text-white/60 font-sans leading-relaxed mt-1">
                  Share the song, album, character, color palette, or sentiment that moves you.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Palette className="size-4 text-white/70" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/50 uppercase">
                    STEP 02
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-white tracking-wider">
                  Hand-Painted Artistry
                </h3>
                <p className="text-xs text-white/60 font-sans leading-relaxed mt-1">
                  Each motif is painted entirely by hand, ensuring organic texture and original energy.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <HeartHandshake className="size-4 text-white/70" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-white/50 uppercase">
                    STEP 03
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-white tracking-wider">
                  Music You Wear
                </h3>
                <p className="text-xs text-white/60 font-sans leading-relaxed mt-1">
                  A personalized wearable artwork delivered to your doorstep, accompanied by its unique story.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
