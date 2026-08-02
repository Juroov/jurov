"use client";

import { useEffect, useRef } from "react";

export default function BackgroundLabel({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    if (!container || !textEl) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const parent = container.parentElement;
      if (!parent) return;
      
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight;
      
      // Only animate if the section is in view
      if (rect.top > vh || rect.bottom < 0) return;
      
      // Calculate scroll progress (0 when just entering bottom of screen, 1 when leaving top)
      const progress = (vh - rect.top) / (vh + rect.height);
      
      // Parallax offset for the text: moves it slightly vertically based on scroll
      const offset = (progress - 0.5) * 150;
      
      textEl.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial position
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/* Animated subtle particle dust (SVG) */}
      <svg
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          opacity: 0.15,
        }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="10" cy="90" r="1" fill="var(--text-primary)">
          <animate attributeName="cy" values="90;10;90" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="10" r="1.5" fill="var(--text-primary)">
          <animate attributeName="cy" values="10;90;10" dur="25s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="25s" repeatCount="indefinite" />
        </circle>
        <circle cx="50" cy="50" r="1" fill="var(--text-primary)">
          <animate attributeName="cy" values="50;0;50" dur="15s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0" dur="15s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* The Parallax Outline Text */}
      <div
        ref={textRef}
        className="ghost-word"
        style={{
          // Inherit the global .ghost-word styling but override transform for JS control
          transform: "translate(-50%, -50%)",
        }}
      >
        {text}
      </div>
    </div>
  );
}
