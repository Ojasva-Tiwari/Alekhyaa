"use client";

import * as React from "react";
import { PRODUCTS, type Product } from "@/data/products";
import { ArrowUpRight, Music, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductStoryShowcase() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product>(PRODUCTS[0]);

  return (
    <section id="stories" className="relative py-24 md:py-32 bg-[var(--bg-section-1)] text-[var(--text-primary)] border-t border-[var(--border-subtle)] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-[var(--text-muted)] mb-3">
              <Sparkles className="size-3 text-[var(--text-muted)]" />
              ARTWORK & MUSICAL ROOTS
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider uppercase text-[var(--text-primary)]">
              THE STORIES BEHIND THE ARTWORK
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm font-sans text-[var(--text-secondary)] leading-relaxed tracking-wide">
            Each tie is an original hand-painted creation translating musical inspiration, emotion, and visual storytelling into wearable art.
          </p>
        </div>

        {/* Product Selector Navigation Tabs */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {PRODUCTS.map((product) => {
            const isSelected = selectedProduct.id === product.id;
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => setSelectedProduct(product)}
                className={cn(
                  "shrink-0 px-4 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 border flex items-center gap-2",
                  isSelected
                    ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-bg)] font-bold shadow-md scale-105"
                    : "bg-[var(--btn-secondary-bg)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--border-medium)] hover:text-[var(--text-primary)]"
                )}
              >
                <span>{product.name}</span>
                <span className="text-[10px] opacity-75">({product.formattedPrice})</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Monograph Display */}
        <div
          id={`story-${selectedProduct.slug}`}
          className="mt-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 sm:p-8 md:p-12 relative overflow-hidden transition-all duration-700 shadow-xl"
          style={{
            boxShadow: `0 30px 80px -20px ${selectedProduct.accent.glow}`,
          }}
        >
          {/* Subtle colored accent glow in corner */}
          <div
            className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: selectedProduct.accent.primary }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Visual Column: Authentic Photography & Artboards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Primary Tie Presentation */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-section-2)] p-4 flex items-center justify-center min-h-[460px] md:min-h-[540px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-[500px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                />

                <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-[var(--text-secondary)] uppercase bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                  HAND-PAINTED
                </div>

                <div className="absolute bottom-4 right-4 text-[11px] font-mono tracking-wider text-[var(--text-secondary)] bg-[var(--bg-card)]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--border-subtle)]">
                  {selectedProduct.formattedPrice} {selectedProduct.shippingNote}
                </div>
              </div>

              {/* Editorial Artwork Poster if available */}
              {selectedProduct.editorialImage && (
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-section-2)] group">
                  <div className="p-3 border-b border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] flex items-center justify-between text-[11px] font-mono tracking-widest text-[var(--text-muted)]">
                    <span>ARTWORK POSTER & VISUAL STORY</span>
                    <span className="text-[var(--text-muted)]">AALEKHYA</span>
                  </div>
                  <div className="overflow-hidden max-h-[620px] flex items-center justify-center bg-black/5 dark:bg-black">
                    <img
                      src={selectedProduct.editorialImage}
                      alt={`${selectedProduct.name} Artwork`}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              )}

              {/* Secondary Worn / Perspective Image if available */}
              {selectedProduct.secondaryImage && (
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-section-2)] group">
                  <div className="p-3 border-b border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] flex items-center justify-between text-[11px] font-mono tracking-widest text-[var(--text-muted)]">
                    <span>
                      {selectedProduct.id === "alice-in-chains"
                        ? "LIFESTYLE WEAR PERSPECTIVE"
                        : "STUDIO DETAIL"}
                    </span>
                    <span className="text-[var(--text-muted)]">AALEKHYA</span>
                  </div>
                  <div className="overflow-hidden max-h-[540px] flex items-center justify-center bg-black/5 dark:bg-black">
                    <img
                      src={selectedProduct.secondaryImage}
                      alt={`${selectedProduct.name} Perspective`}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              )}

              {/* Detail Close-Up if available */}
              {selectedProduct.detailImage && selectedProduct.detailImage !== selectedProduct.secondaryImage && (
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-section-2)] group">
                  <div className="p-3 border-b border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] flex items-center justify-between text-[11px] font-mono tracking-widest text-[var(--text-muted)]">
                    <span>TEXTURE DETAIL</span>
                    <span className="text-[var(--text-muted)]">CLOSE-UP</span>
                  </div>
                  <div className="overflow-hidden max-h-[480px] flex items-center justify-center bg-black/5 dark:bg-black">
                    <img
                      src={selectedProduct.detailImage}
                      alt={`${selectedProduct.name} Texture Detail`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Narrative & Specifications Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
              <div>
                {/* Mood Tag & Index */}
                <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: selectedProduct.accent.primary }}
                  />
                  <span>THEME: {selectedProduct.personality}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-[var(--text-primary)] mt-3">
                  {selectedProduct.name}
                </h3>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3 pb-6 border-b border-[var(--border-subtle)]">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-wide">
                    {selectedProduct.formattedPrice}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
                    {selectedProduct.shippingNote}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 ml-auto">
                    ORDER AVAILABLE
                  </span>
                </div>

                {/* Narrative / Conceptual Story */}
                <div className="mt-6 space-y-4">
                  <h4 className="text-xs font-mono tracking-[0.25em] uppercase text-[var(--text-faint)] flex items-center gap-2">
                    <Music className="size-3.5 text-[var(--text-muted)]" />
                    CONCEPT & ARTISTIC INSPIRATION
                  </h4>
                  <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-sans font-light">
                    {selectedProduct.story}
                  </p>
                </div>

                {/* Key Motifs / Symbolic Notes */}
                {selectedProduct.keyNotes && selectedProduct.keyNotes.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                    <h4 className="text-xs font-mono tracking-[0.25em] uppercase text-[var(--text-faint)] mb-4 flex items-center gap-2">
                      <Layers className="size-3.5 text-[var(--text-muted)]" />
                      SYMBOLIC ELEMENTS
                    </h4>
                    <div className="space-y-3">
                      {selectedProduct.keyNotes.map((note) => (
                        <div
                          key={note.title}
                          className="rounded-xl border border-[var(--border-subtle)] bg-[var(--btn-secondary-bg)] p-4"
                        >
                          <span className="font-serif text-sm font-semibold tracking-wider text-[var(--text-primary)] block">
                            {note.title}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] font-sans leading-relaxed mt-1 block">
                            {note.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Order / Conversion Box */}
              <div className="pt-8 border-t border-[var(--border-subtle)]">
                <div className="rounded-2xl border border-[var(--border-medium)] bg-[var(--btn-secondary-bg)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase block">
                      AALEKHYA ORDER
                    </span>
                    <span className="font-serif text-lg font-bold text-[var(--text-primary)] block mt-0.5">
                      Order {selectedProduct.name}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-sans">
                      Connect via Instagram DM to order this piece.
                    </span>
                  </div>

                  <a
                    href={selectedProduct.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-mono text-xs font-bold tracking-widest uppercase hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg"
                  >
                    <span>ORDER NOW VIA DM</span>
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
