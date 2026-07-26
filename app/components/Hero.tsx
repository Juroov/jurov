"use client";

import { useEffect, useRef } from "react";
import { HeroSVG } from "./HeroSVG";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition =
        "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)";
      child.style.transitionDelay = `${0.1 + i * 0.14}s`;
      requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      });
    });
  }, []);

  // Trigger pill-sweep immediately since it's above the fold
  useEffect(() => {
    const pill = document.getElementById("hero-kicker");
    if (!pill) return;
    requestAnimationFrame(() => {
      setTimeout(() => pill.classList.add("is-visible"), 400);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center"
      style={{
        minHeight: "100dvh",
        padding: "0 24px",
        background: "var(--bg-card)",
        textAlign: "center",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Full-background SVG canvas — arcs + floating nodes, no rings */}
      <HeroSVG />
      {/* Corner accent marks — luxury card aesthetic */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 80, left: 24,
          width: 22, height: 22,
          borderTop: "1px solid var(--border-strong)",
          borderLeft: "1px solid var(--border-strong)",
          borderRadius: "3px 0 0 0",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 80, right: 24,
          width: 22, height: 22,
          borderBottom: "1px solid var(--border-strong)",
          borderRight: "1px solid var(--border-strong)",
          borderRadius: "0 0 3px 0",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      <div
        ref={contentRef}
        style={{
          maxWidth: 680,
          width: "100%",
          paddingTop: 120,
          paddingBottom: 80,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Role pill — pill-sweep + kicker-dot */}
        <div
          id="hero-kicker"
          className="pill-sweep inline-flex items-center gap-2"
          style={{
            padding: "6px 16px",
            borderRadius: 999,
            border: "1px solid var(--border-strong)",
            background: "var(--bg-card)",
            marginBottom: 28,
            boxShadow: "0 0 0 1px var(--border-strong), 0 0 18px var(--accent-glow)",
          }}
        >
          <span className="kicker-dot" aria-hidden="true" />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "var(--accent)",
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            Frontend Dev · Available for Commissions
          </span>
        </div>

        {/* SVG now lives in the background — spacer removed */}

        {/* Headline — Playfair Display italic on the key phrase */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
            color: "var(--text-primary)",
            fontFamily: "var(--font-inter)",
            textShadow: "0 0 40px var(--accent-glow)",
            marginBottom: 28,
          }}
        >
          I design &amp; build
          <br />
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontWeight: 900,
              color: "var(--accent)",
              letterSpacing: "-0.02em",
              textShadow: "0 0 50px var(--accent-glow)",
              display: "inline-block",
              paddingBottom: "0.08em", // descender clearance for italic
            }}
          >
            web experiences.
          </span>
        </h1>

        {/* Sub-copy */}
        <p
          style={{
            fontSize: 16,
            color: "var(--text-secondary)",
            fontFamily: "var(--font-inter)",
            maxWidth: "48ch",
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          Computer Engineering student with real internship experience at
          PRIME Philippines. I build responsive frontends, design UI
          systems, and take on freelance commissions — from landing pages
          to full-stack apps.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3" style={{ marginBottom: 56 }}>
          <a href="#commissions" className="btn-primary">
            Commission rates
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#projects" className="btn-outline">
            View my work
          </a>
        </div>

        {/* Stats row — row-reveal with stagger */}
        <div
          className="grid grid-cols-3 gap-3"
          style={{ 
            width: "100%", 
            maxWidth: 480,
            borderTop: "1px solid var(--rule)",
            paddingTop: "24px"
          }}
        >
          {[
            { value: "2+", label: "Commissions", delay: "d1", border: true },
            { value: "1",  label: "Internship",  delay: "d2", border: true },
            { value: "2",  label: "Projects",    delay: "d3", border: false },
          ].map((s) => (
            <div
              key={s.label}
              className={`card row-reveal row-reveal-${s.delay} text-center`}
              style={{ 
                padding: "20px 8px",
                position: "relative",
                background: "transparent",
                border: "none",
                boxShadow: "none"
              }}
            >
              {s.border && (
                <div style={{
                  position: "absolute",
                  right: 0,
                  top: "15%",
                  height: "70%",
                  width: 1,
                  background: "var(--rule)"
                }} />
              )}
              <p
                style={{
                  fontSize: 32,
                  fontWeight: 900,
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
                  color: "var(--accent)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 8,
                  textShadow: "0 0 20px var(--accent-glow)",
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>


      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: 0,
          animation: "fadeIn 1s ease 2s forwards",
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-label)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Scroll
        </span>
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="18" height="30" rx="9" stroke="var(--border-strong)" strokeWidth="1.5" />
          <rect x="8.5" y="6" width="3" height="7" rx="1.5" fill="var(--text-label)">
            <animate attributeName="y" values="6;16;6" dur="1.4s" repeatCount="indefinite"
              calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
            <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite"
              calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
          </rect>
        </svg>
      </div>
    </section>
  );
}
