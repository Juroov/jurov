"use client";

import { useEffect, useState } from "react";

/**
 * IntroSequence — Shield SVG draws its outline, "KJ" fades in,
 * then the whole shield scales down + fades. ~3s total.
 * Click/tap to skip. Only plays once per session.
 */
export default function IntroSequence() {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    
    // Always show intro on load
    setVisible(true);
    const t = setTimeout(() => dismiss(), 3000);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setFadingOut(true);
    sessionStorage.setItem("intro-done", "1");
    setTimeout(() => setVisible(false), 800);
  };

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay${fadingOut ? " fade-out" : ""}`}
      onClick={dismiss}
      aria-hidden="true"
    >
      <svg
        width="140"
        height="165"
        viewBox="0 0 200 230"
        fill="none"
        style={{
          animation: fadingOut
            ? "shieldShrink 0.8s cubic-bezier(0.22,1,0.36,1) forwards"
            : undefined,
        }}
      >
        {/* Shield outline — draws in over 1.5s */}
        <path
          d="M100 14 L178 46 L178 112 C178 168 146 202 100 220 C54 202 22 168 22 112 L22 46 Z"
          stroke="#C41E3A"
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{
            animation: "shieldDraw 1.5s cubic-bezier(0.22,1,0.36,1) forwards",
          }}
        />
        {/* "KJ" letters — fade in after shield draws (delay 1.2s) */}
        <text
          x="100"
          y="132"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontStyle="italic"
          fontWeight="700"
          fontSize="56"
          fill="#F4EEE7"
          opacity="0"
          style={{
            animation: "kjFadeIn 0.6s ease 1.2s forwards",
          }}
        >
          KJ
        </text>
      </svg>
    </div>
  );
}
