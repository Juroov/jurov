"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientGlow — single soft radial glow that follows the mouse.
 *
 * Perf approach (no per-frame rAF loop):
 *  - Mouse position → CSS custom properties updated on mousemove (passive)
 *  - CSS transition handles the smooth lerp — GPU composited, zero JS per frame
 *  - Scroll velocity flare → a second passive scroll listener, throttled via rAF flag
 *    so we write to the DOM at most once per paint
 */
export default function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const el = glowRef.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;

    // Apply initial position immediately (no transition yet)
    el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(1)`;

    // Activate the CSS transition after the first paint
    requestAnimationFrame(() => {
      el.style.transition =
        "transform 1.4s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease";
    });

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${currentScale})`;
    };

    // ── Scroll velocity flare ─────────────────────────────────
    let lastScrollY = window.scrollY;
    let currentScale = 1;
    let currentOpacity = 0.25;
    let rafPending = false;

    const onScroll = () => {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        rafPending = false;
        const scrollY = window.scrollY;
        const delta = Math.abs(scrollY - lastScrollY);
        lastScrollY = scrollY;

        // Velocity scale: 1 → 1.5 max, decays via CSS transition
        const targetScale = 1 + Math.min(delta * 0.012, 0.5);
        const targetOpacity = 0.25 + Math.min(delta * 0.012, 0.5);

        if (Math.abs(targetScale - currentScale) > 0.005 || Math.abs(targetOpacity - currentOpacity) > 0.005) {
          currentScale = targetScale;
          currentOpacity = targetOpacity;
          el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${currentScale})`;
          el.style.opacity = currentOpacity.toFixed(3);

          // Decay back after 600ms
          setTimeout(() => {
            currentScale = 1;
            currentOpacity = 0.25;
            el.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(1)`;
            el.style.opacity = "0.25";
          }, 600);
        }
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "1200px",
        height: "1200px",
        marginTop: "-600px",
        marginLeft: "-600px",
        background:
          "radial-gradient(circle at 50% 50%, var(--accent-glow) 0%, rgba(196,30,58,0.15) 25%, transparent 60%)",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.25,
        willChange: "transform, opacity",
        // transition is set in JS after first paint to avoid transition on mount
      }}
    />
  );
}
