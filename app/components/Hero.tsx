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

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center"
      style={{
        minHeight: "100dvh",
        padding: "0 24px",
        background: "var(--surface)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.4,
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)",
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
        {/* Role pill */}
        <div
          className="inline-flex items-center gap-2"
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            border: "1px solid var(--accent-border)",
            background: "var(--accent-subtle)",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 6, height: 6,
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.06em",
            }}
          >
            Frontend Dev · UI/UX Designer · Open for commissions
          </span>
        </div>

        {/* SVG Illustration */}
        <div
          style={{
            width: "100%",
            maxWidth: 280,
            marginBottom: 32,
            opacity: 0,
            animation: "heroFadeSlide 1.2s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
          }}
        >
          <HeroSVG />
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
            color: "var(--text-primary)",
            fontFamily: "var(--font-geist-sans)",
            marginBottom: 28,
          }}
        >
          I design &amp; build<br />
          <span style={{ color: "var(--accent)" }}>web experiences.</span>
        </h1>

        {/* Sub-copy */}
        <p
          style={{
            fontSize: 16,
            color: "var(--text-body)",
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

        {/* Stats row */}
        <div
          className="grid grid-cols-3 gap-3"
          style={{ width: "100%", maxWidth: 480 }}
        >
          {[
            { value: "2+", label: "Commissions" },
            { value: "1",  label: "Internship"  },
            { value: "2",  label: "Projects"    },
          ].map((s) => (
            <div
              key={s.label}
              className="card text-center"
              style={{ padding: "20px 8px" }}
            >
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.04em",
                  fontFamily: "var(--font-geist-sans)",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: "var(--text-label)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Availability badge */}
        <div
          className="flex items-center gap-2"
          style={{
            marginTop: 20,
            padding: "10px 20px",
            borderRadius: 10,
            border: "1px solid var(--accent-border)",
            background: "var(--accent-subtle)",
            width: "100%",
            maxWidth: 480,
            justifyContent: "center",
          }}
        >
          <div
            className="status-dot"
            style={{
              width: 8, height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-body)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Currently available · San Jose Del Monte, Bulacan PH
          </span>
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
