"use client";

import * as React from "react";
import { siteConfig, getOrderDestination } from "@/config/site";
import { ArrowUpRight, Sparkles, Disc, Palette, HeartHandshake } from "lucide-react";

export function CustomTieSection() {
  return (
    <section id="custom" className="relative py-28 md:py-36 bg-[var(--bg-section-2)] text-[var(--text-primary)] border-t border-[var(--border-subtle)] overflow-hidden transition-colors duration-500">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-gradient-to-tr from-purple-900/15 to-emerald-900/10 blur-[150px] opacity-25 dark:opacity-40"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Editorial Card */}
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl transition-all">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] text-[10px] font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
                <Sparkles className="size-3 text-purple-600 dark:text-purple-400" />
                BESPOKE COMMISSIONS
              </div>

              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[var(--text-faint)] block">
                WANT SOMETHING PERSONAL?
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-[var(--text-primary)]">
                CUSTOM TIES
              </h2>

              <p className="font-display text-lg sm:text-xl text-[var(--text-secondary)] italic tracking-wide">
                &ldquo;Have a song, memory, character, idea or visual you&apos;d want to wear?&rdquo;
              </p>

              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-sans max-w-xl">
                Every tie tells a different story. If you have an album that altered your worldview, an evocative lyric, or a personal symbol you want brought to life, AALEKHYA creates custom hand-painted pieces tailored to your aesthetic.
              </p>

              <div className="pt-4">
                <a
                  href={getOrderDestination()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-mono text-xs font-bold tracking-[0.2em] uppercase hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg"
                >
                  <span>TALK TO AALEKHYA</span>
                  <ArrowUpRight className="size-4" />
                </a>
                <span className="block text-[11px] font-mono tracking-wider text-[var(--text-muted)] mt-3">
                  DIRECT CONVERSATION VIA INSTAGRAM DM · CONSULTATION ON ARTWORK & MOTIFS
                </span>
              </div>
            </div>

            {/* Right Collaboration Steps */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] p-6 hover:bg-[var(--btn-secondary-bg)]/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-8 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)]">
                    <Disc className="size-4" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
                    STEP 01
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[var(--text-primary)] tracking-wider">
                  The Song or Concept
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed mt-1">
                  Share the song, album, character, color palette, or sentiment that moves you.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] p-6 hover:bg-[var(--btn-secondary-bg)]/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-8 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)]">
                    <Palette className="size-4" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
                    STEP 02
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[var(--text-primary)] tracking-wider">
                  Hand-Painted Artistry
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed mt-1">
                  Each motif is painted entirely by hand, ensuring organic texture and original energy.
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] p-6 hover:bg-[var(--btn-secondary-bg)]/80 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="size-8 rounded-lg bg-[var(--btn-secondary-bg)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)]">
                    <HeartHandshake className="size-4" />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase">
                    STEP 03
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-[var(--text-primary)] tracking-wider">
                  Music You Wear
                </h3>
                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed mt-1">
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
