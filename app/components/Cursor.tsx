"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor — magnetic spring cursor with crimson hover state.
 *
 * Technique: Pure DOM manipulation in a single rAF loop.
 * - dot:  snaps directly to mouse position (no lag)
 * - ring: follows with spring lerp (stiffness ~0.14) for the magnetic feel
 * - On hover: ring scales up and fills with crimson glow via CSS class
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

    // Spring state for ring
    let mx = -100, my = -100; // mouse position
    let rx = -100, ry = -100; // ring position (lerped)
    let isDirty = false;
    let raf: number;

    const LERP = 0.14; // spring stiffness — lower = more lag/spring feel

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      isDirty = true;

      // Dot snaps immediately (no lerp)
      dot.style.left = `${mx - 3.5}px`;
      dot.style.top  = `${my - 3.5}px`;
    };

    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!isDirty) return;

      // Lerp ring toward mouse
      rx += (mx - 16 - rx) * LERP;
      ry += (my - 16 - ry) * LERP;

      // Only write DOM if ring has moved meaningfully
      ring.style.left = `${rx}px`;
      ring.style.top  = `${ry}px`;

      if (Math.abs(mx - 16 - rx) < 0.05 && Math.abs(my - 16 - ry) < 0.05) {
        isDirty = false;
      }
    };

    const addHover = () => {
      dot.classList.add("hovering");
      ring.classList.add("hovering");
    };
    const rmHover = () => {
      dot.classList.remove("hovering");
      ring.classList.remove("hovering");
    };

    raf = requestAnimationFrame(tick);
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
      cancelAnimationFrame(raf);
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
