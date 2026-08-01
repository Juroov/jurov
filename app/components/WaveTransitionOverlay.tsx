"use client";

import { useEffect, useRef, useState } from "react";

/* ──────────────────────────────────────────────────────────────
   WaveTransitionOverlay
   Full-screen SVG curtain that sweeps across the viewport.

   Phase flow:
     "idle"     → invisible, not rendered
     "enter"    → wave morphs from bottom → top (covers screen)
     "covered"  → screen fully hidden, router.push fires
     "exit"     → wave morphs from top → bottom (reveals new page)
   ────────────────────────────────────────────────────────────── */

type Phase = "idle" | "enter" | "covered" | "exit";

interface WaveTransitionOverlayProps {
  phase: "idle" | "transition";
  direction?: "up" | "down";
}

export default function WaveTransitionOverlay({
  phase,
  direction = "up",
}: WaveTransitionOverlayProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const TOTAL_MS = 1500;
  
  if (phase === "idle") return null;

  /* ── Wave path keyframes ──────────────────────────────────────
     viewBox: 0 0 1440 1000
     A continuous 5-stage morph:
     Below -> Mid -> Above (Screen covered) -> Mid -> Below
  */
  const pathBelow   = `M0,1000 C360,1000 1080,1000 1440,1000 L1440,1200 L0,1200 Z`;
  const pathWaveMid = `M0,500 C400,200 1000,800 1440,500 L1440,1200 L0,1200 Z`;
  const pathAbove   = `M0,-200 C360,-200 1080,-200 1440,-200 L1440,1200 L0,1200 Z`; // Overshoots top slightly to prevent gaps

  // A single continuous sweep: up to the top, and immediately back down
  const fullValues = `${pathBelow};${pathWaveMid};${pathAbove};${pathWaveMid};${pathBelow}`;
  
  // 4 segments of easing for 5 keyframes
  // 1: accelerate up (ease-in)
  // 2: hit the top fast
  // 3: start dropping fast
  // 4: decelerate down (ease-out)
  const fullSplines = "0.5 0 1 1; 0.5 0 1 1; 0 0 0.5 1; 0 0 0.5 1";
  const keyTimes = "0; 0.25; 0.5; 0.75; 1";

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "all",
        // CSS animation adds a subtle motion blur during the fastest part of the transition
        animation: "waveBlur 1.5s ease-in-out",
      }}
    >
      <svg
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          display: "block",
          position: "absolute",
          inset: 0,
          transform: direction === "down" ? "scaleY(-1)" : "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle red shimmer gradient on the wave edge */}
          <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#0a0505" />
            <stop offset="40%"  stopColor="#1a0a0a" />
            <stop offset="60%"  stopColor="#C41E3A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#0a0505" />
          </linearGradient>
        </defs>

        {/* Main fill — the wave curtain */}
        <path
          ref={pathRef}
          fill="url(#waveGrad)"
          d={pathBelow}
        >
          <animate
            attributeName="d"
            values={fullValues}
            dur={`${TOTAL_MS}ms`}
            keyTimes={keyTimes}
            calcMode="spline"
            keySplines={fullSplines}
            fill="freeze"
          />
        </path>

        {/* Glowing wave-edge stroke — the accent line that traces the wave */}
        <path
          fill="none"
          stroke="#C41E3A"
          strokeWidth="2.5"
          strokeOpacity="0.7"
          d={pathBelow}
          style={{ filter: "drop-shadow(0 0 8px rgba(196,30,58,0.8))" }}
        >
          <animate
            attributeName="d"
            values={fullValues}
            dur={`${TOTAL_MS}ms`}
            keyTimes={keyTimes}
            calcMode="spline"
            keySplines={fullSplines}
            fill="freeze"
          />
        </path>
      </svg>
    </div>
  );
}

export type { Phase };
