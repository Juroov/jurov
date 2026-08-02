"use client";

import { useState, useEffect, useRef } from "react";
import { useWaveNavigator } from "./WaveNavigator";
import BackgroundLabel from "./BackgroundLabel";

/* ── Wave text helper — staggered letter animation on hover ── */
function WaveText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`wave-text ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{ animationDelay: `${i * 0.04}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function Hero() {
  const { waveNavigate } = useWaveNavigator();
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(32px) scale(0.97)";
      child.style.filter = "blur(10px)";
      child.style.transition = [
        `opacity 1.05s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.18}s`,
        `transform 1.05s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.18}s`,
        `filter 0.9s cubic-bezier(0.22,1,0.36,1) ${0.08 + i * 0.18}s`,
      ].join(", ");
      // Double rAF ensures the initial styles are painted before transitioning
      requestAnimationFrame(() => requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0) scale(1)";
        child.style.filter = "blur(0)";
      }));
    });
  }, []);

  const navigateTo = (href: string) => {
    waveNavigate(href);
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        gap: 0,
        minHeight: "100svh",
      }}
    >
      <BackgroundLabel text="Lorrenz" />
      <div
        ref={contentRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          paddingTop: 160,
          paddingBottom: 140,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 9rem)",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.03em",
            lineHeight: 0.92,
            color: "var(--text-primary)",
            marginBottom: 36,
            textAlign: "center",
            // Subtler warm ivory base glow
            textShadow:
              "0 0 40px rgba(244,238,231,0.08), 0 0 80px rgba(244,238,231,0.04)",
          }}
        >
          <span
            style={{
              color: "var(--accent-bright)",
              // Softer multi-layer ember glow
              textShadow:
                "0 0 20px rgba(255,77,94,0.60), " +
                "0 0 50px rgba(196,30,58,0.40), " +
                "0 0 100px rgba(196,30,58,0.20)",
            }}
          >
            Think{" "}
          </span>
          Bigger
          <br />
          Build{" "}
          <span
            style={{
              color: "var(--accent-bright)",
              textShadow:
                "0 0 20px rgba(255,77,94,0.60), " +
                "0 0 50px rgba(196,30,58,0.40), " +
                "0 0 100px rgba(196,30,58,0.20)",
            }}
          >
            Better.
          </span>
        </h1>

        {/* Positioning statement */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "clamp(11px, 1.5vw, 15px)",
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            fontWeight: 500,
            marginBottom: 20,
            textAlign: "center",
            // Subtle warm lift on the label
            textShadow: "0 0 20px rgba(244,238,231,0.08)",
          }}
        >
          Frontend Developer · UI/UX Designer · Freelance
        </p>
        <p
          className="hero-name-wave"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "clamp(16px, 2.2vw, 22px)",
            letterSpacing: ".14em",
            textTransform: "none",
            color: "var(--text-primary)",
            fontWeight: 400,
            marginBottom: 56,
            fontStyle: "italic",
            display: "inline-flex",
            // Softer ivory glow for the name
            textShadow:
              "0 0 16px rgba(244,238,231,0.20), " +
              "0 0 40px rgba(244,238,231,0.08)",
          }}
        >
          <WaveText text="Lorrenz A. Amarille" />
        </p>

        {/* CTA Button → splits into 3 section nav buttons */}
        <div style={{ position: "relative", minHeight: 56 }}>
          {!expanded ? (
            <button
              className="btn-brand"
              onClick={() => setExpanded(true)}
              style={{ fontSize: 14, padding: "18px 40px" }}
            >
              Know More About Me
            </button>
          ) : (
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              {([
                { label: "About", href: "/about", delay: 0 },
                { label: "Skills", href: "/skills", delay: 0.1 },
                { label: "Experience", href: "/experience", delay: 0.2 },
              ]).map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigateTo(item.href)}
                  className="btn-ghost hero-section-btn"
                  style={{
                    opacity: 0,
                    transform: "translateY(12px) scale(0.95)",
                    animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${item.delay}s forwards`,
                  }}
                >
                  <WaveText text={item.label} />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Scroll cue — animated breathing arrow */}
      <div
        style={{
          position: "absolute",
          bottom: 42,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          fontSize: 10,
          letterSpacing: ".3em",
          color: "var(--text-faint)",
          textTransform: "uppercase",
          fontFamily: "var(--font-ui)",
          opacity: 0,
          animation: "fadeIn 1s cubic-bezier(0.22,1,0.36,1) 1.4s forwards",
        }}
      >
        <svg
          width="18"
          height="28"
          viewBox="0 0 18 28"
          fill="none"
          aria-hidden="true"
          style={{
            animation: "scrollCueBounce 2.2s cubic-bezier(0.45, 0, 0.55, 1) 1.4s infinite",
          }}
        >
          <line
            x1="9" y1="0" x2="9" y2="20"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          />
          <path
            d="M3 14l6 8 6-8"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
        Scroll
      </div>
    </section>
  );
}
