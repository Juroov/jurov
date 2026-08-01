"use client";

<<<<<<< Updated upstream
import { useEffect, useRef } from "react";
import { ScrollIndicatorSvg, SignatureDividerSvg } from "./SvgIcons";

=======
import { useState, useEffect, useRef } from "react";
import { useWaveNavigator } from "./WaveNavigator";

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
>>>>>>> Stashed changes
export default function Hero() {
  const { waveNavigate } = useWaveNavigator();
  const contentRef = useRef<HTMLDivElement>(null);
<<<<<<< Updated upstream
=======
  const [expanded, setExpanded] = useState(false);
>>>>>>> Stashed changes

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

  const navigateTo = (href: string) => {
    waveNavigate(href);
  };

  return (
    <>
      <section
        id="hero"
        className="relative flex flex-col justify-center"
        style={{
<<<<<<< Updated upstream
          minHeight: "100dvh",
          padding: "0 6%",
          background: "var(--bg)",
          overflow: "hidden",
          isolation: "isolate",
=======
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          gap: 0,
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 5vw, 7rem)",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            lineHeight: 0.94,
            color: "var(--text-primary)",
            marginBottom: 24,
          }}
        >
          <span style={{ color: "var(--accent-bright)", textShadow: "0 0 40px var(--accent-glow)" }}>
            Think </span>Bigger <br></br>
          Build{" "}
          <span style={{ color: "var(--accent-bright)", textShadow: "0 0 40px var(--accent-glow)" }}>
            Better.
          </span>
        </h1>

        {/* Positioning statement */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "clamp(14px, 2vw, 18px)",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
            fontWeight: 500,
            marginBottom: 48,
          }}
        >
          Frontend Developer · UI/UX Designer · Freelance <br></br>

        </p>
        <p
          className="hero-name-wave"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "clamp(14px, 2vw, 18px)",
            letterSpacing: ".18em",
            textTransform: "none",
            color: "var(--text-secondary)",
            fontWeight: 10,
            marginBottom: 48,
            fontStyle: "italic",
            display: "inline-flex",
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
                { label: "About",      href: "/about",      delay: 0 },
                { label: "Skills",     href: "/skills",     delay: 0.1 },
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

      {/* Scroll cue */}
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
        />
        Scroll
      </div>
    </section>
>>>>>>> Stashed changes
  );
}
