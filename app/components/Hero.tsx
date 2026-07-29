"use client";

import { useEffect, useRef } from "react";
import { ScrollIndicatorSvg, SignatureDividerSvg } from "./SvgIcons";

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.filter = "blur(8px)";
      child.style.transition =
        "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.9s cubic-bezier(0.22,1,0.36,1)";
      child.style.transitionDelay = `${0.1 + i * 0.14}s`;
      requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
        child.style.filter = "blur(0)";
      });
    });
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col justify-center"
        style={{
          minHeight: "100dvh",
          padding: "0 6%",
          background: "var(--bg)",
          overflow: "hidden",
          isolation: "isolate",
        }}
      >
        <div
          ref={contentRef}
          style={{
            width: "100%",
            paddingTop: 120,
            paddingBottom: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--text-secondary)",
              fontStyle: "italic",
              marginBottom: 24,
            }}
          >
            Frontend Dev · Available for Commissions
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              marginBottom: 32,
            }}
          >
            <span style={{ textShadow: "var(--headline-glow)" }}>
              I design & build
            </span>
            <br />
            <span className="headline-accent">
              web experiences.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-12" style={{ maxWidth: 1400 }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 20,
                color: "var(--text-secondary)",
                maxWidth: "48ch",
                lineHeight: 1.6,
              }}
            >
              Computer Engineering student with real internship experience at
              PRIME Philippines. I build responsive frontends, design UI
              systems, and take on freelance commissions — from landing pages
              to full-stack apps.
            </p>

            <div
              className="flex gap-12 text-left border-l border-[var(--border-strong)] pl-8"
            >
              {[
                { value: "2+", label: "Commissions" },
                { value: "1",  label: "Internship" },
                { value: "2",  label: "Projects" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 48,
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: 4,
                      textShadow: "0 0 20px var(--accent-glow)",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-16">
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

          {/* Scroll indicator */}
          <div className="scroll-indicator row-reveal-d2" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <ScrollIndicatorSvg />
          </div>
        </div>
      </section>

      {/* Signature divider after hero */}
      <SignatureDividerSvg />
    </>
  );
}
