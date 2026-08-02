"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollWaveCurtain
 * 
 * An absolute overlay that starts completely covering its parent section.
 * When it scrolls into view, it animates a wave path morph that sweeps down
 * and out of the way, revealing the section content underneath.
 * 
 * Place this inside a `position: relative` and `overflow: hidden` container.
 */
export default function ScrollWaveCurtain({
  color = "var(--bg)",
  accentColor = "var(--accent)",
  delay = 0,
}: {
  color?: string;
  accentColor?: string;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const accentPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Use IntersectionObserver to trigger the animation once
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (reduceMotion) {
              if (el) el.style.opacity = "0";
              return;
            }
            if (pathRef.current) {
              const anims = pathRef.current.querySelectorAll("animate");
              anims.forEach(a => { try { (a as any).beginElement() } catch {} });
            }
            if (accentPathRef.current) {
              const anims = accentPathRef.current.querySelectorAll("animate");
              anims.forEach(a => { try { (a as any).beginElement() } catch {} });
            }
            
            // Fade out the container after animation finishes so it doesn't block clicks just in case
            setTimeout(() => {
              if (el) el.style.pointerEvents = "none";
              if (el) el.style.display = "none";
            }, 1500);

          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    obs.observe(el);

    return () => obs.disconnect();
  }, [delay]);

  // viewBox 0 0 1440 1000
  // Start: covers the whole area (Above)
  // Mid: wave shape in the middle
  // End: completely out of view at the bottom (Below)
  
  const pathAbove   = `M0,-200 C360,-200 1080,-200 1440,-200 L1440,1200 L0,1200 Z`;
  const pathWaveMid = `M0,300 C400,0 1000,800 1440,400 L1440,1200 L0,1200 Z`;
  const pathBelow   = `M0,1200 C360,1200 1080,1200 1440,1200 L1440,1200 L0,1200 Z`;

  const fullValues = `${pathAbove};${pathWaveMid};${pathBelow}`;
  const keyTimes = "0; 0.6; 1";
  const fullSplines = "0.5 0 0.5 1; 0.5 0 1 1"; // smooth ease-in-out to ease-out

  const TOTAL_MS = 1400;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 40, // high enough to cover content, below nav
        pointerEvents: "none",
        transition: "opacity 0.4s ease",
      }}
    >
      <svg
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          fill={color}
          d={pathAbove}
        >
          <animate
            attributeName="d"
            values={fullValues}
            dur={`${TOTAL_MS}ms`}
            keyTimes={keyTimes}
            calcMode="spline"
            keySplines={fullSplines}
            fill="freeze"
            begin="indefinite"
          />
        </path>

        <path
          ref={accentPathRef}
          fill="none"
          stroke={accentColor}
          strokeWidth="3"
          strokeOpacity="0.8"
          d={pathAbove}
          style={{ filter: `drop-shadow(0 0 12px ${accentColor})` }}
        >
          <animate
            attributeName="d"
            values={fullValues}
            dur={`${TOTAL_MS}ms`}
            keyTimes={keyTimes}
            calcMode="spline"
            keySplines={fullSplines}
            fill="freeze"
            begin="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
