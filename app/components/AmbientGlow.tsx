"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientGlow — single soft radial glow that parallax-drifts with scroll.
 * No radar, grid, or concentric-circle decorations — depth from glow only.
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
      if (Math.abs(y - lastY) < 1) return;
      lastY = y;
      if (glowRef.current) {
        glowRef.current.style.transform = `translateY(${y * 0.15}px)`;
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
        top: "-20%",
        left: "50%",
        width: "1100px",
        height: "1100px",
        marginLeft: "-550px",
        background:
          "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.55,
        willChange: "transform",
        transition: "opacity 900ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    />
  );
}
