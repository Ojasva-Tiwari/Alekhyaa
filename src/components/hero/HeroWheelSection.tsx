"use client";

import * as React from "react";
import { PRODUCTS, type Product } from "@/data/products";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, ArrowDown, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

export function HeroWheelSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const { theme } = useTheme();
  const activeProduct: Product = PRODUCTS[activeIndex] || PRODUCTS[0];

  // Map products to WorksWheelItems
  const wheelItems: WorksWheelItem[] = React.useMemo(() => {
    return PRODUCTS.map((p) => ({
      title: p.name,
      image: p.image,
      href: `#story-${p.slug}`,
      price: p.formattedPrice,
      subtitle: p.personality,
      accentColor: p.accent.primary,
    }));
  }, []);

  const handleActiveChange = React.useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const scrollToStory = (slug: string) => {
    const el = document.getElementById(`story-${slug}`) || document.getElementById("stories");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="collection"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden transition-colors duration-700"
      style={{
        background:
          theme === "light"
            ? "var(--bg-page)"
            : activeProduct.visualAtmosphere.bgGradient,
      }}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${activeProduct.accent.glow} 0%, transparent 65%)`,
          opacity: "var(--hero-glow-opacity)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Brand Top Banner */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] backdrop-blur-md mb-3 text-[10px] font-mono tracking-[0.25em] text-[var(--text-secondary)] uppercase">
            <span
              className="size-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: activeProduct.accent.primary }}
            />
            HAND-PAINTED WEARABLE ART
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.18em] uppercase text-[var(--text-primary)] drop-shadow-sm">
            AALEKHYA
          </h1>
          <p className="font-display text-lg md:text-xl text-[var(--text-secondary)] tracking-widest mt-1 italic">
            &ldquo;{siteConfig.tagline}&rdquo;
          </p>
        </div>

        <div className="max-w-md text-xs md:text-sm font-sans text-[var(--text-muted)] leading-relaxed tracking-wide md:text-right">
          <p>
            Every tie tells a different story. Original hand-painted neckwear inspired by music, emotion, and visual consciousness.
          </p>
          <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-faint)] uppercase mt-1 block">
            LIMITED ARTWORK PIECES · NO TWO REPLICAS IDENTICAL
          </span>
        </div>
      </div>

      {/* Center 3D WorksWheel Component */}
      <div className="relative z-10 w-full h-[58vh] min-h-[380px] max-h-[640px] my-auto">
        <WorksWheel
          items={wheelItems}
          label="AALEKHYA"
          action="EXPLORE PIECE"
          onActiveChange={handleActiveChange}
          activeIndex={activeIndex}
          className="bg-transparent"
        />
      </div>

      {/* Active Product HUD / Cinematic Purchase Bar */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-hud)] backdrop-blur-xl p-5 md:p-7 shadow-[var(--wheel-card-shadow)] transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Product Meta & Identification */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <div className="size-16 sm:size-20 shrink-0 rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--wheel-card-inner)] p-1 flex items-center justify-center">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="size-full object-contain"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] tracking-widest text-[var(--text-muted)]">
                    0{activeIndex + 1} / 0{PRODUCTS.length}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded text-[9px] font-mono tracking-widest border"
                    style={{
                      backgroundColor: activeProduct.accent.badgeBg,
                      color: activeProduct.accent.primary,
                      borderColor: activeProduct.accent.border,
                    }}
                  >
                    HAND-PAINTED
                  </span>
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-[var(--text-primary)] uppercase mt-0.5">
                  {activeProduct.name}
                </h2>

                <p className="font-mono text-[11px] tracking-wider text-[var(--text-muted)] uppercase mt-0.5">
                  {activeProduct.personality}
                </p>
              </div>
            </div>

            {/* Middle: Short Description & Price */}
            <div className="lg:col-span-5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l lg:border-r border-[var(--border-subtle)] pt-4 lg:pt-0 lg:px-6">
              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed font-sans line-clamp-2">
                {activeProduct.shortDescription}
              </p>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="font-serif text-xl md:text-2xl font-bold text-[var(--text-primary)] tracking-wide">
                  {activeProduct.formattedPrice}
                </span>
                <span className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider">
                  {activeProduct.shippingNote}
                </span>
              </div>
            </div>

            {/* Right: Order Action & Story CTA */}
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-2.5 justify-end">
              <a
                href={activeProduct.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-mono text-xs font-bold tracking-[0.16em] uppercase hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md text-center"
              >
                <span>ORDER NOW</span>
                <ArrowUpRight className="size-4" />
              </a>

              <button
                type="button"
                onClick={() => scrollToStory(activeProduct.slug)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] hover:bg-[var(--btn-primary-bg)] text-[var(--text-secondary)] hover:text-[var(--btn-primary-text)] font-mono text-[11px] tracking-wider uppercase transition-colors"
              >
                <span>VIEW STORY & ARTWORK</span>
                <ArrowDown className="size-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Micro-bar: Catalog Indicators */}
        <div className="flex items-center justify-between mt-4 px-2 text-[11px] font-mono tracking-widest text-[var(--text-muted)]">
          <div className="flex items-center gap-1.5">
            {PRODUCTS.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to product ${p.name}`}
                className={cn(
                  "size-2 rounded-full transition-all duration-300",
                  idx === activeIndex
                    ? "w-6 bg-[var(--text-primary)]"
                    : "bg-[var(--border-medium)] hover:bg-[var(--text-muted)]"
                )}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">SWIPE / ARROW KEYS TO NAVIGATE</span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span>MUSIC YOU CAN WEAR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
