"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PRODUCTS, type Product } from "@/data/products";
import { siteConfig, getOrderDestination, getWhatsAppUrl } from "@/config/site";
import { ArrowUpRight, ArrowRight, MessageCircle } from "lucide-react";

export default function StorePage() {
  return (
    <main
      className="min-h-screen relative transition-colors duration-300 pt-28 pb-16"
      style={{
        backgroundColor: "var(--bg-page)",
        color: "var(--text-primary)",
      }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Store Editorial Header */}
        <div className="pt-6 pb-14 border-b transition-colors duration-300" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div
                className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.3em] uppercase"
                style={{ color: "var(--text-muted)" }}
              >
                <span>CATALOGUE</span>
                <span>·</span>
                <span>COLLECTION 2026</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.15em] uppercase text-[var(--text-primary)]">
                THE STORE
              </h1>
              <p
                className="font-display text-lg md:text-xl italic tracking-wider max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                &ldquo;Every tie tells a different story. Wearable artwork inspired by sound, emotion, and visual consciousness.&rdquo;
              </p>
            </div>

            {/* Direct Channel CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm"
                style={{
                  backgroundColor: "var(--btn-secondary-bg)",
                  borderColor: "var(--btn-secondary-border)",
                  color: "var(--text-primary)",
                }}
              >
                <MessageCircle className="size-3.5 text-emerald-500" />
                <span>WHATSAPP ENQUIRY</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              <a
                href={getOrderDestination()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                <span>ORDER VIA DM</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
            <span>[ 07 INDIVIDUAL PIECES ]</span>
            <span>HAND-PAINTED · NO TWO REPLICAS IDENTICAL</span>
          </div>
        </div>

        {/* 7-Piece Product Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {PRODUCTS.map((product, idx) => {
              const displayImage = product.editorialImage || product.image;
              const productIndex = String(idx + 1).padStart(3, "0");

              return (
                <article
                  key={product.id}
                  className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  {/* Large Product Photography Container */}
                  <Link
                    href={`/#story-${product.slug}`}
                    className="relative block w-full aspect-[4/5] overflow-hidden p-6 sm:p-8 transition-colors duration-300 flex items-center justify-center"
                    style={{
                      backgroundColor: "var(--bg-card-surface)",
                    }}
                  >
                    <img
                      src={displayImage}
                      alt={`AALEKHYA Hand Painted Tie — ${product.name}`}
                      className="size-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                      loading={idx < 3 ? "eager" : "lazy"}
                    />

                    {/* Subtle Overlay Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-widest uppercase border backdrop-blur-md"
                        style={{
                          backgroundColor: "var(--bg-header)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {productIndex}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wider uppercase backdrop-blur-md border shadow-sm"
                        style={{
                          backgroundColor: "var(--btn-primary-bg)",
                          color: "var(--btn-primary-text)",
                          borderColor: "var(--border-subtle)",
                        }}
                      >
                        <span>VIEW STORY</span>
                        <ArrowRight className="size-3" />
                      </span>
                    </div>
                  </Link>

                  {/* Editorial Product Information */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-6 border-t" style={{ borderColor: "var(--border-subtle)" }}>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                        <span>{productIndex}</span>
                        <span className="truncate max-w-[200px]">{product.personality.split("/")[0]?.trim()}</span>
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[var(--text-primary)] transition-colors group-hover:opacity-90">
                        <Link href={`/#story-${product.slug}`}>
                          {product.name}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm font-sans line-clamp-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Price and Ordering CTAs */}
                    <div className="pt-4 border-t space-y-4" style={{ borderColor: "var(--border-subtle)" }}>
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-2xl font-bold tracking-wide text-[var(--text-primary)]">
                            {product.formattedPrice}
                          </span>
                          <span className="font-mono text-[11px] tracking-wider" style={{ color: "var(--text-muted)" }}>
                            {product.shippingNote}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-medium">
                          AVAILABLE
                        </span>
                      </div>

                      {/* Action buttons */}
                      <div className="grid grid-cols-2 gap-2.5">
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border text-[11px] font-mono font-semibold tracking-wider uppercase transition-all duration-200 hover:scale-[1.02]"
                          style={{
                            backgroundColor: "var(--btn-secondary-bg)",
                            borderColor: "var(--btn-secondary-border)",
                            color: "var(--text-primary)",
                          }}
                          title={`Enquire about ${product.name} on WhatsApp`}
                        >
                          <MessageCircle className="size-3.5 text-emerald-500 shrink-0" />
                          <span>WHATSAPP</span>
                        </a>

                        <a
                          href={product.orderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-[11px] font-mono font-bold tracking-wider uppercase transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-sm"
                          style={{
                            backgroundColor: "var(--btn-primary-bg)",
                            color: "var(--btn-primary-text)",
                          }}
                        >
                          <span>ORDER DM</span>
                          <ArrowUpRight className="size-3.5 shrink-0" />
                        </a>
                      </div>

                      <div className="text-center pt-1">
                        <Link
                          href={`/#story-${product.slug}`}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest uppercase transition-opacity hover:opacity-70"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span>VIEW ARTWORK PIECE & SYMBOLISM</span>
                          <ArrowRight className="size-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Custom Piece Commission Banner */}
        <section
          className="my-16 p-8 sm:p-12 md:p-16 rounded-3xl border transition-colors duration-300 relative overflow-hidden"
          style={{
            backgroundColor: "var(--bg-section-2)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <div className="max-w-3xl space-y-4">
            <span
              className="text-[11px] font-mono tracking-[0.3em] uppercase block"
              style={{ color: "var(--text-muted)" }}
            >
              BESPOKE COMMISSIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
              HAVE A SPECIFIC SONG OR SYMBOL IN MIND?
            </h2>
            <p
              className="font-sans text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Every tie tells a different story. If you have an album that altered your worldview, an evocative lyric, or a personal symbol you want brought to life, AALEKHYA accepts custom hand-painted commissions.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--btn-secondary-bg)",
                  borderColor: "var(--btn-secondary-border)",
                  color: "var(--text-primary)",
                }}
              >
                <MessageCircle className="size-4 text-emerald-500" />
                <span>CHAT ON WHATSAPP</span>
                <ArrowUpRight className="size-4" />
              </a>

              <a
                href={getOrderDestination()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  backgroundColor: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                }}
              >
                <span>COMMISSION VIA INSTAGRAM</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
