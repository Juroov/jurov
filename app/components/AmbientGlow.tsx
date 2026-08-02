"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientGlow — single soft radial glow that parallax-drifts with scroll.
 * Uses lerped animation for buttery-smooth parallax independent of Lenis.
 * No radar, grid, or concentric-circle decorations — depth from glow only.
 */
export default function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf: number;
    let targetX = typeof window !== "undefined" ? window.innerWidth / 2 : 500;
    let targetY = typeof window !== "undefined" ? window.innerHeight / 3 : 500;
    let currentX = targetX;
    let currentY = targetY;
    
    let lastScrollY = window.scrollY;
    let currentVelocity = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const tick = () => {
      raf = requestAnimationFrame(tick);

      // Track scroll velocity for the flare effect
      const scrollY = window.scrollY;
      const deltaY = scrollY - lastScrollY;
      lastScrollY = scrollY;

      // Smooth out the velocity so the flare is organic and not jerky
      currentVelocity += (Math.abs(deltaY) - currentVelocity) * 0.08;

      // Smooth mouse follow (lerp)
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      if (glowRef.current) {
        // Base scale 1.0, expands up to 1.5 based on scroll speed
        const flareScale = 1 + Math.min(currentVelocity * 0.015, 0.5);
        
        // Mouse tracking + Velocity-based Halo scale
        glowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${flareScale})`;
        
        // Base opacity is faint, but flares up to bright when scrolling fast
        const flareOpacity = 0.25 + Math.min(currentVelocity * 0.015, 0.5);
        glowRef.current.style.opacity = flareOpacity.toFixed(3);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
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
        opacity: 0.25, // default opacity
        willChange: "transform, opacity",
      }}
    />
  );
}
