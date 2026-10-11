"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor — magnetic spring cursor with crimson hover state.
 *
 * The animation frame loop only exists while the ring is moving.
 *
 * Zero useState → zero React re-renders on pointer move.
 */
export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Spring state for ring
    let mx = -100, my = -100; // mouse position
    let rx = -100, ry = -100; // ring position (lerped)
    let raf = 0;

    const LERP = 0.14; // spring stiffness
    const DEAD_ZONE = 0.3; // px — below this, stop updating

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      dot.style.translate = `${mx - 3.5}px ${my - 3.5}px`;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const tick = () => {
      const dx = mx - 16 - rx;
      const dy = my - 16 - ry;
      rx += dx * LERP;
      ry += dy * LERP;

      ring.style.translate = `${rx}px ${ry}px`;

      if (Math.abs(dx) < DEAD_ZONE && Math.abs(dy) < DEAD_ZONE) {
        ring.style.translate = `${mx - 16}px ${my - 16}px`;
        raf = 0;
        return;
      }

      raf = requestAnimationFrame(tick);
    };

    const addHover = () => {
      dot.classList.add("hovering");
      ring.classList.add("hovering");
    };
    const rmHover = () => {
      dot.classList.remove("hovering");
      ring.classList.remove("hovering");
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // Attach hover to all interactive elements — use event delegation
    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [role=button], input, textarea")) addHover();
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [role=button], input, textarea")) rmHover();
    };

    document.addEventListener("mouseover",  onEnter, { passive: true });
    document.addEventListener("mouseout",   onLeave, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onEnter);
      document.removeEventListener("mouseout",   onLeave);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  id="cursor-dot"  className="cursor-dot"  aria-hidden />
      <div ref={ringRef} id="cursor-ring" className="cursor-ring" aria-hidden />
    </>
  );
}
