"use client";

import * as React from "react";
import { PRODUCTS, type Product } from "@/data/products";
import { ArrowUpRight, Music, Sparkles, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductStoryShowcase() {
  const [selectedProduct, setSelectedProduct] = React.useState<Product>(PRODUCTS[0]);

  return (
    <section id="stories" className="relative py-24 md:py-32 bg-[#09090d] text-white border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase text-white/50 mb-3">
              <Sparkles className="size-3 text-white/60" />
              ARTWORK & MUSICAL ROOTS
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-wider uppercase text-white">
              THE STORIES BEHIND THE ARTWORK
            </h2>
          </div>
          <p className="max-w-md text-xs md:text-sm font-sans text-white/60 leading-relaxed tracking-wide">
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
                    ? "bg-white text-black border-white font-bold shadow-lg shadow-white/10 scale-105"
                    : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                )}
              >
                <span>{product.name}</span>
                <span className="text-[10px] opacity-70">({product.formattedPrice})</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Detailed Monograph Display */}
        <div
          id={`story-${selectedProduct.slug}`}
          className="mt-12 rounded-3xl border border-white/10 bg-[#0d0d13] p-6 sm:p-8 md:p-12 relative overflow-hidden transition-all duration-700"
          style={{
            boxShadow: `0 30px 80px -20px ${selectedProduct.accent.glow}`,
          }}
        >
          {/* Subtle colored accent glow in corner */}
          <div
            className="pointer-events-none absolute -top-32 -right-32 size-96 rounded-full blur-[120px] opacity-25"
            style={{ backgroundColor: selectedProduct.accent.primary }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Visual Column: Authentic Photography & Artboards */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              {/* Primary Tie Presentation */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050508] p-4 flex items-center justify-center min-h-[460px] md:min-h-[540px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-[500px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                />

                <div className="absolute top-4 left-4 text-[10px] font-mono tracking-widest text-white/40 uppercase bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  HAND-PAINTED
                </div>

                <div className="absolute bottom-4 right-4 text-[11px] font-mono tracking-wider text-white/60 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  {selectedProduct.formattedPrice} {selectedProduct.shippingNote}
                </div>
              </div>

              {/* Editorial Artwork Poster if available */}
              {selectedProduct.editorialImage && (
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050508] group">
                  <div className="p-3 border-b border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono tracking-widest text-white/60">
                    <span>ARTWORK POSTER & VISUAL STORY</span>
                    <span className="text-white/40">AALEKHYA</span>
                  </div>
                  <div className="overflow-hidden max-h-[620px] flex items-center justify-center bg-black">
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
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050508] group">
                  <div className="p-3 border-b border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono tracking-widest text-white/60">
                    <span>
                      {selectedProduct.id === "alice-in-chains"
                        ? "LIFESTYLE WEAR PERSPECTIVE"
                        : "STUDIO DETAIL"}
                    </span>
                    <span className="text-white/40">AALEKHYA</span>
                  </div>
                  <div className="overflow-hidden max-h-[540px] flex items-center justify-center bg-black">
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
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#050508] group">
                  <div className="p-3 border-b border-white/10 bg-black/40 flex items-center justify-between text-[11px] font-mono tracking-widest text-white/60">
                    <span>TEXTURE DETAIL</span>
                    <span className="text-white/40">CLOSE-UP</span>
                  </div>
                  <div className="overflow-hidden max-h-[480px] flex items-center justify-center bg-black">
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
                <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-white/50 uppercase">
                  <span
                    className="size-2 rounded-full"
                    style={{ backgroundColor: selectedProduct.accent.primary }}
                  />
                  <span>THEME: {selectedProduct.personality}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-white mt-3">
                  {selectedProduct.name}
                </h3>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3 pb-6 border-b border-white/10">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    {selectedProduct.formattedPrice}
                  </span>
                  <span className="font-mono text-xs text-white/50 tracking-wider">
                    {selectedProduct.shippingNote}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 ml-auto">
                    ORDER AVAILABLE
                  </span>
                </div>

                {/* Narrative / Conceptual Story */}
                <div className="mt-6 space-y-4">
                  <h4 className="text-xs font-mono tracking-[0.25em] uppercase text-white/40 flex items-center gap-2">
                    <Music className="size-3.5 text-white/60" />
                    CONCEPT & ARTISTIC INSPIRATION
                  </h4>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans font-light">
                    {selectedProduct.story}
                  </p>
                </div>

                {/* Key Motifs / Symbolic Notes */}
                {selectedProduct.keyNotes && selectedProduct.keyNotes.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-xs font-mono tracking-[0.25em] uppercase text-white/40 mb-4 flex items-center gap-2">
                      <Layers className="size-3.5 text-white/60" />
                      SYMBOLIC ELEMENTS
                    </h4>
                    <div className="space-y-3">
                      {selectedProduct.keyNotes.map((note) => (
                        <div
                          key={note.title}
                          className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
                        >
                          <span className="font-serif text-sm font-semibold tracking-wider text-white block">
                            {note.title}
                          </span>
                          <span className="text-xs text-white/60 font-sans leading-relaxed mt-1 block">
                            {note.description}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Order / Conversion Box */}
              <div className="pt-8 border-t border-white/10">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase block">
                      AALEKHYA ORDER
                    </span>
                    <span className="font-serif text-lg font-bold text-white block mt-0.5">
                      Order {selectedProduct.name}
                    </span>
                    <span className="text-xs text-white/60 font-sans">
                      Connect via Instagram DM to order this piece.
                    </span>
                  </div>

                  <a
                    href={selectedProduct.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
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
