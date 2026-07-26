"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientGlow — fixed radial glow that parallax-drifts as the user scrolls.
 * Uses rAF + IntersectionObserver-free approach: reads window.scrollY inside
 * a single rAF loop that only runs while in the document. No React state,
 * no scroll event listeners on the main thread — just a rAF tick.
 */
export default function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf: number;
    let lastY = -1;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 1) return; // skip if not moved
      lastY = y;
      if (glowRef.current) {
        glowRef.current.style.transform = `translateY(${y * 0.12}px)`;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: "-25%",
        left: "50%",
        width: "1000px",
        height: "1000px",
        marginLeft: "-500px",
        background:
          "radial-gradient(circle, var(--accent-warm-glow) 0%, transparent 65%)",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.55,
        willChange: "transform",
        // Second, smaller accent glow offset to the left for depth
      }}
    >
      {/* Secondary offset glow for depth */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-30%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, var(--accent-subtle) 0%, transparent 70%)",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
