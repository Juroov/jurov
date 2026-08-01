"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * IntroSequence — full-screen shield-draw intro overlay.
 *
 * 1. Shield SVG outline draws via stroke-dashoffset (~1.5s)
 * 2. "KJ" letters fade in (~0.5s hold)
 * 3. Shield scales down + fades, hero content appears (~1s)
 * Total ≈ 3s. Click/tap to skip instantly.
 * prefers-reduced-motion: skips straight to hero.
 */
export default function IntroSequence() {
  const [phase, setPhase] = useState<"draw" | "hold" | "exit" | "done">("draw");
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const skip = useCallback(() => {
    setPhase("done");
  }, []);

  useEffect(() => {
    // Skip for reduced motion
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPhase("done");
      return;
    }

    // Phase timing
    const drawTimer = setTimeout(() => setPhase("hold"), 1500);
    const holdTimer = setTimeout(() => setPhase("exit"), 2000);
    const exitTimer = setTimeout(() => setPhase("done"), 3000);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  // Initialize stroke-dasharray after mount
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    // Trigger the draw
    requestAnimationFrame(() => {
      path.style.transition = "stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1)";
      path.style.strokeDashoffset = "0";
    });
  }, []);

  if (phase === "done") return null;

  return (
    <div
      ref={overlayRef}
      className="intro-overlay"
      onClick={skip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") skip(); }}
      aria-label="Skip intro"
      style={{
        opacity: phase === "exit" ? 0 : 1,
        transition: phase === "exit" ? "opacity 1s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
      }}
    >
      <div
        style={{
          transform: phase === "exit" ? "scale(0.6)" : "scale(1)",
          transition: phase === "exit" ? "transform 1s cubic-bezier(0.22, 1, 0.36, 1)" : "none",
        }}
      >
        <svg
          width="200"
          height="230"
          viewBox="0 0 200 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M100 14 L178 46 L178 112 C178 168 146 202 100 220 C54 202 22 168 22 112 L22 46 Z"
            stroke="#FF4D5E"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="128"
            textAnchor="middle"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="52"
            fill="#F4EEE7"
            style={{
              opacity: phase === "hold" || phase === "exit" ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            LA
          </text>
        </svg>
      </div>
    </div>
  );
}
