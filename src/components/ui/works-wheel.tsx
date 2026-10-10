"use client";

// AALEKHYA Collection WorksWheel
// Preserves the core 21st.dev / CrafterUI circular product ring & 3D drum transitions
// Enhanced with vertical proportion tuning for hand-painted ties,
// product sync callbacks, responsive controls, and high-fashion editorial styling.

import * as React from "react";
import { cn } from "@/lib/utils";

export interface WorksWheelItem {
  /** Project/Product name. Shown beside the front card and in the index. */
  title: string;
  /** Cover art / tie photograph. */
  image: string;
  /** Where the card links to or section anchor. */
  href?: string;
  /** Optional price tag formatted in INR */
  price?: string;
  /** Optional subtitle or personality */
  subtitle?: string;
  /** Optional accent color */
  accentColor?: string;
}

export interface WorksWheelProps extends Omit<
  React.ComponentPropsWithoutRef<"section">,
  "children"
> {
  items: WorksWheelItem[];
  /** Sits in the middle of the ring. @default "AALEKHYA" */
  label?: string;
  /** Label on the card's hover affordance. Omit to drop it. @default "EXPLORE" */
  action?: string;
  /** Optional callback fired when the active selected item changes */
  onActiveChange?: (index: number) => void;
  /** Controlled active index */
  activeIndex?: number;
  /** Custom aspect ratio for vertical ties (width / height). Defaults to 0.62 for vertical ties */
  cardRatio?: number;
}

/* Geometry tuned for vertical tie proportions while preserving drum physics */
const CARD_H_DESKTOP = 0.70; // front card height, of stage
const CARD_MAX_W_DESKTOP = 0.30; // max width of stage
const CARD_MAX_W_MOBILE = 0.72; // mobile width of stage
const STEP = 38; // degrees between cards on the drum
const DRUM = 2.05; // drum radius in card heights
const LENS = 2.65; // perspective distance
const RING_R = 1.15; // ring radius
const BOW = 1.55; // arc bow offset
const TITLE = 0.095; // ring label and front-card title size factor
const INDEX = 0.038; // index font size factor
const CULL = 1.6;

const WHEEL_UNITS = 850;
const DRAG_UNITS = 380;
const SETTLE = 150;
const EASE = 0.12;

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Stage = { w: number; h: number };

const rad = (deg: number) => (deg * Math.PI) / 180;

const bowAt = (drumDeg: number, bow: number) =>
  -bow * (1 - Math.cos(rad(drumDeg)));

function place(
  ringDeg: number,
  drumDeg: number,
  ringR: number,
  drumR: number,
  bow: number,
  m: number,
) {
  return (
    `translateX(${m * bowAt(drumDeg, bow)}px)` +
    ` rotateZ(${(1 - m) * ringDeg}deg) translateY(${-(1 - m) * ringR}px)` +
    ` rotateX(${m * drumDeg}deg) translateZ(${m * drumR}px)`
  );
}

export function WorksWheel({
  items,
  label = "AALEKHYA",
  action = "VIEW PIECE",
  onActiveChange,
  activeIndex: controlledIndex,
  cardRatio = 0.58, // Vertical tie portrait aspect ratio
  className,
  ...props
}: WorksWheelProps) {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const wheelRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLElement | null)[]>([]);
  const labelRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);

  const turn = React.useRef(0);
  const target = React.useRef(0);
  const [active, setActive] = React.useState(0);
  const activeRef = React.useRef(0);
  const [stage, setStage] = React.useState<Stage>({ w: 0, h: 0 });

  const count = items.length;
  const last = Math.max(count - 1, 0);

  const [reduced, setReduced] = React.useState(false);
  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const read = () => setReduced(query.matches);
    read();
    query.addEventListener("change", read);
    return () => query.removeEventListener("change", read);
  }, []);

  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const read = () => setStage({ w: el.clientWidth, h: el.clientHeight });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const metrics = React.useMemo(() => {
    const { w, h } = stage;
    const isMobile = w < 640;
    const cardMaxWFactor = isMobile ? CARD_MAX_W_MOBILE : CARD_MAX_W_DESKTOP;
    const cardHFactor = isMobile ? 0.54 : CARD_H_DESKTOP;

    const cardW = Math.min(h * cardHFactor * cardRatio, w * cardMaxWFactor);
    const cardH = cardW / cardRatio;
    const drumR = cardH * DRUM;
    const ringR = cardH * RING_R;
    const ringScale = count
      ? clamp((((2 * Math.PI * ringR) / count) * 0.82) / (cardW || 1), 0.18, 1)
      : 1;

    return {
      cardW,
      cardH,
      ringR,
      ringScale,
      drumR,
      bow: cardH * BOW,
      depth: cardH * LENS,
      title: Math.max(h * TITLE, 32),
      index: Math.max(h * INDEX, 13),
    };
  }, [stage, count, cardRatio]);

  const to = React.useCallback(
    (next: number) => {
      target.current = clamp(next, 0, last + 1);
    },
    [last],
  );

  // Sync external controlled index when user selects a different product
  const prevControlled = React.useRef<number | undefined>(undefined);
  React.useEffect(() => {
    if (
      typeof controlledIndex === "number" &&
      controlledIndex !== prevControlled.current &&
      prevControlled.current !== undefined &&
      controlledIndex >= 0 &&
      controlledIndex <= last
    ) {
      to(controlledIndex + 1);
    }
    prevControlled.current = controlledIndex;
  }, [controlledIndex, to, last]);

  // Main animation frame loop
  React.useEffect(() => {
    if (!stage.h) return;
    let frame = 0;
    const { ringR, ringScale, drumR, bow } = metrics;

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const gap = target.current - turn.current;
      if (Math.abs(gap) < 0.0005) turn.current = target.current;
      else turn.current += gap * (reduced ? 1 : EASE);

      const t = turn.current;
      const m = clamp(t, 0, 1);
      const pos = Math.max(0, t - 1);

      if (wheelRef.current) {
        wheelRef.current.style.transform = `translateZ(${-m * drumR}px)`;
      }

      for (let i = 0; i < count; i++) {
        const d = i - pos;
        const drumDeg = d * STEP;
        const card = cardRefs.current[i];
        if (card) {
          card.style.transform = place(
            d * (360 / count),
            drumDeg,
            ringR,
            drumR,
            bow,
            m,
          );
          card.style.opacity = m > 0.5 && Math.abs(d) > CULL ? "0" : "1";
          card.style.zIndex = String(Math.round(100 - Math.abs(d) * 2));
        }
        const face = card?.firstElementChild as HTMLElement | null;
        if (face) face.style.transform = `scale(${lerp(ringScale, 1, m)})`;
      }

      if (labelRef.current) labelRef.current.style.opacity = String(1 - m);
      if (titleRef.current) titleRef.current.style.opacity = String(m);
      
      const near = clamp(Math.round(pos), 0, last);
      if (activeRef.current !== near) {
        activeRef.current = near;
        setActive(near);
        onActiveChange?.(near);
      }
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [metrics, stage.h, count, last, reduced, onActiveChange]);

  // Native wheel listener with boundary hand-off
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      const next = target.current + event.deltaY / WHEEL_UNITS;
      if (next > 0 && next < last + 1) event.preventDefault();
      to(next);

      window.clearTimeout(settling.current);
      settling.current = window.setTimeout(
        () => to(Math.round(target.current)),
        SETTLE,
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      window.clearTimeout(settling.current);
    };
  }, [to, last]);

  const drag = React.useRef<number | null>(null);
  const settling = React.useRef(0);

  const activeItem = items[active];

  return (
    <section
      aria-label={label}
      className={cn(
        "relative h-full min-h-[32rem] w-full overflow-hidden select-none bg-background text-foreground transition-colors duration-700",
        className,
      )}
      {...props}
    >
      {/* 3D Interactive Stage */}
      <div
        ref={stageRef}
        tabIndex={0}
        role="listbox"
        aria-label={label}
        aria-activedescendant={`works-wheel-${active}`}
        className="focus-visible:ring-primary/50 absolute inset-0 cursor-grab touch-pan-x outline-none focus-visible:ring-1 active:cursor-grabbing"
        style={{ perspective: `${metrics.depth}px` }}
        onPointerDown={(event) => {
          drag.current = event.clientY;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerMove={(event) => {
          if (drag.current === null) return;
          to(target.current + (drag.current - event.clientY) / DRAG_UNITS);
          drag.current = event.clientY;
        }}
        onPointerUp={() => {
          drag.current = null;
          if (target.current > 0) to(Math.round(target.current));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowRight") {
            to(Math.round(target.current) + 1);
          } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
            to(Math.round(target.current) - 1);
          } else return;
          event.preventDefault();
        }}
      >
        <div
          ref={wheelRef}
          className="absolute top-1/2 left-1/2 [transform-style:preserve-3d]"
        >
          {items.map((item, i) => {
            const Tag = (item.href ? "a" : "div") as "a";
            const isSelected = i === active;
            return (
              <React.Fragment key={item.title}>
                <Tag
                  id={`works-wheel-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  href={item.href}
                  ref={(node: HTMLElement | null) => {
                    cardRefs.current[i] = node;
                  }}
                  className="group absolute [backface-visibility:hidden] focus:outline-none"
                  style={{
                    width: metrics.cardW,
                    height: metrics.cardH,
                    marginLeft: -metrics.cardW / 2,
                    marginTop: -metrics.cardH / 2,
                  }}
                >
                  <span
                    className={cn(
                      "relative block size-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#131318] to-[#09090c] p-2.5 transition-all duration-300 md:p-3.5",
                      isSelected
                        ? "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] ring-1 ring-white/20"
                        : "opacity-85 hover:opacity-100"
                    )}
                  >
                    {/* Subtle art card header badge */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between text-[10px] tracking-widest text-white/60 uppercase">
                      <span className="font-mono">0{i + 1} / 0{count}</span>
                      {item.price && (
                        <span className="font-medium text-white/90">{item.price}</span>
                      )}
                    </div>

                    {/* Tie Product Visual Container */}
                    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-black/40">
                      <img
                        src={item.image}
                        alt={`Hand-painted tie — ${item.title}`}
                        draggable={false}
                        className="size-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Card Hover Action Affordance */}
                    {action && (
                      <span className="pointer-events-none absolute right-3.5 bottom-3.5 z-20 flex translate-y-1 items-center gap-1.5 rounded-full border border-white/20 bg-black/85 px-3 py-1.5 text-[11px] font-medium tracking-wider text-white opacity-0 backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                        <span>{action}</span>
                        <svg
                          viewBox="0 0 12 12"
                          className="size-3"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9 9 3M4 3h5v5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    )}
                  </span>
                </Tag>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Ring Title (Center before scroll) */}
      <div
        ref={labelRef}
        className="pointer-events-none absolute inset-0 grid place-items-center tracking-[0.2em] uppercase font-serif text-white/90"
        style={{ fontSize: metrics.title }}
      >
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-sans tracking-[0.35em] text-white/40 mb-2">COLLECTION 2026</span>
          <span>{label}</span>
          <span className="text-xs font-sans tracking-[0.25em] text-white/50 mt-3 flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            TURN OR SCROLL TO ENTER
          </span>
        </div>
      </div>

      {/* Active Piece Name Overlay (Subtle watermarked background typography) */}
      <div
        ref={titleRef}
        className="pointer-events-none absolute top-1/2 left-[5%] md:left-[7%] -translate-y-1/2 tracking-[0.12em] font-serif text-white/10 text-5xl md:text-7xl lg:text-8xl select-none uppercase opacity-0 transition-opacity"
      >
        {activeItem?.title}
      </div>

      {/* Right-Side Curated Product Index */}
      <nav
        aria-label="Collection Index"
        className="absolute top-[8%] right-[3%] md:right-[4%] z-30 text-right"
      >
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-2 font-mono">
          CATALOGUE [0{count}]
        </p>
        <ol className="space-y-1 font-mono text-[12px] md:text-[13px] leading-relaxed">
          {items.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => to(i + 1)}
                className={cn(
                  "cursor-pointer transition-all duration-300 outline-none text-white/40 hover:text-white/80 flex items-center justify-end gap-2 group",
                  i === active && "text-white font-semibold scale-105"
                )}
              >
                <span className="text-[10px] text-white/30 group-hover:text-white/60">
                  0{i + 1}
                </span>
                <span className={cn(i === active ? "border-b border-white" : "")}>
                  {item.title}
                </span>
                {i === active && (
                  <span className="size-1.5 rounded-full bg-white ml-0.5 inline-block" />
                )}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      {/* Mobile/Touch Swipe Hint & Quick Nav */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-between px-6 text-[11px] font-mono tracking-widest text-white/40 md:hidden">
        <span>0{active + 1} / 0{count}</span>
        <span className="animate-pulse">DRAG OR SWIPE TO ROTATE</span>
        <button
          type="button"
          onClick={() => to(active === last ? 1 : active + 2)}
          className="underline text-white/70"
        >
          NEXT →
        </button>
      </div>
    </section>
  );
}

export default WorksWheel;
