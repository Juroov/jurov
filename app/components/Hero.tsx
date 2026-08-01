"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";

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
   SVG CURTAIN OVERLAY
   Full-screen overlay with an SVG wave that "drags down" to reveal content.
   ══════════════════════════════════════════════════════════════ */
function SectionOverlay({
  activeSection,
  onClose,
}: {
  activeSection: "About" | "Skills" | "Experience" | null;
  onClose: () => void;
}) {
  const [phase, setPhase] = useState<"idle" | "entering" | "open" | "leaving">("idle");
  const [renderedSection, setRenderedSection] = useState<typeof activeSection>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeSection) {
      setRenderedSection(activeSection);
      setPhase("entering");
      // Lock both html AND body to prevent page scroll behind overlay
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      const t = setTimeout(() => setPhase("open"), 50);
      return () => clearTimeout(t);
    } else if (phase !== "idle") {
      setPhase("leaving");
      const t = setTimeout(() => {
        setPhase("idle");
        setRenderedSection(null);
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }, 900);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeSection]);

  // Clean up scroll lock on unmount
  useEffect(() => {
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, []);

  // Reset scroll on section change
  useEffect(() => {
    if (phase === "open" && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [phase, renderedSection]);

  // Escape key closes
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Intercept wheel events — route them to the scrollable content pane when overlay is open
  useEffect(() => {
    const pane = scrollRef.current;
    if (!pane) return;

    const onWheel = (e: WheelEvent) => {
      if (phase !== "open") return;
      e.preventDefault();
      e.stopPropagation();
      pane.scrollTop += e.deltaY;
    };

    // Passive: false so we can call preventDefault
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchmove", (e) => {
      if (phase === "open") e.preventDefault();
    }, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
    // Re-run when phase changes so we enable/disable based on open state
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // Force-trigger visibility classes on overlay content (IntersectionObservers don't fire inside fixed overlays)
  useEffect(() => {
    if (phase !== "open" || !overlayContentRef.current) return;
    const el = overlayContentRef.current;
    const delay = 500; // wait for content fade-in animation
    const t = setTimeout(() => {
      el.querySelectorAll<HTMLElement>(".reveal").forEach((e) => e.classList.add("visible"));
      el.querySelectorAll<HTMLElement>(".clip-wipe").forEach((e) => e.classList.add("is-visible"));
      el.querySelectorAll<HTMLElement>(".row-reveal").forEach((e) => e.classList.add("is-visible"));
      el.querySelectorAll<HTMLElement>(".sig-divider").forEach((e) => e.classList.add("is-visible"));
      // Trigger SVG draw-in
      el.querySelectorAll<SVGSVGElement>(".draw-svg").forEach((svg) => {
        const paths = svg.querySelectorAll("path, circle, line, polyline, rect, ellipse");
        paths.forEach((p, i) => {
          const svgEl = p as SVGGeometryElement;
          let len = 100;
          try { if (svgEl.getTotalLength) len = svgEl.getTotalLength(); } catch { /* ok */ }
          svgEl.style.strokeDasharray = String(len);
          svgEl.style.strokeDashoffset = String(len);
          setTimeout(() => { svgEl.style.strokeDashoffset = "0"; }, i * 180);
        });
      });
      // Trigger timeline line draw
      el.querySelectorAll<SVGLineElement>(".timeline-line").forEach((line) => line.classList.add("is-drawn"));
    }, delay);
    return () => clearTimeout(t);
  }, [phase, renderedSection]);

  if (phase === "idle") return null;

  const isOpen = phase === "open";
  const isLeaving = phase === "leaving";

  return (
    <div className={`section-overlay ${isOpen ? "is-open" : ""} ${isLeaving ? "is-leaving" : ""}`}>

      {/* ── Scrollable content pane — slides in from top ── */}
      <div className="overlay-content-pane" ref={scrollRef}>

        {/* Top spacer so content starts below the fixed close btn */}
        <div className="overlay-top-spacer" aria-hidden="true" />

        {/* Section content */}
        <div className="overlay-section-content" ref={overlayContentRef}>
          {renderedSection === "About" && <About />}
          {renderedSection === "Skills" && <Skills />}
          {renderedSection === "Experience" && <Experience />}
        </div>

        {/* Bottom breathing room */}
        <div style={{ height: "8vh" }} aria-hidden="true" />
      </div>

      {/* ── SVG Wave Curtain — decorative top edge ── */}
      <svg
        className="overlay-curtain-svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path className="curtain-wave" fill="var(--bg-card)">
          <animate
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="
              M0,0 L1440,0 L1440,80 Q1080,120 720,80 Q360,40 0,80 Z;
              M0,0 L1440,0 L1440,80 Q1080,40 720,80 Q360,120 0,80 Z;
              M0,0 L1440,0 L1440,80 Q1080,120 720,80 Q360,40 0,80 Z
            "
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
        </path>
      </svg>

      {/* ── Decorative SVG corner accents ── */}
      <svg className="overlay-corner-accent top-left" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M 0 40 L 0 0 L 40 0" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" className="corner-draw" />
      </svg>
      <svg className="overlay-corner-accent top-right" viewBox="0 0 80 80" aria-hidden="true">
        <path d="M 40 0 L 80 0 L 80 40" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" className="corner-draw" />
      </svg>

      {/* ── Close button — LAST in DOM so it paints above all siblings ── */}
      <button
        onClick={onClose}
        className="overlay-close-btn"
        aria-label="Close section"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
        <span>Close</span>
      </button>

    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   HERO COMPONENT
   ══════════════════════════════════════════════════════════════ */
export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState<"About" | "Skills" | "Experience" | null>(null);

  const handleClose = useCallback(() => setActiveSection(null), []);

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
      child.style.transitionDelay = `${0.2 + i * 0.14}s`;
      requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
        child.style.filter = "blur(0)";
      });
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        padding: "40px 6%",
        background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(196,30,58,0.18), transparent 70%), var(--bg)",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Ghost watermark */}
      <div className="ghost-word" aria-hidden="true">Lorrenz</div>

      <div
        ref={contentRef}
        style={{
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

        {/* CTA Button → splits into 3 */}
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
                { label: "About", id: "About" as const, delay: 0 },
                { label: "Skills", id: "Skills" as const, delay: 0.1 },
                { label: "Experience", id: "Experience" as const, delay: 0.2 },
              ]).map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveSection(item.id)}
                  className={`btn-ghost hero-section-btn ${activeSection === item.id ? "is-active" : ""}`}
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
        }}
      >
        <div
          style={{
            width: 1,
            height: 34,
            background: "linear-gradient(var(--accent-bright), transparent)",
            animation: "cuepulse 1.8s ease-in-out infinite",
          }}
        />
        Scroll
      </div>

      {/* The overlay — renders on top of everything when a section is selected */}
      <SectionOverlay activeSection={activeSection} onClose={handleClose} />
    </section>
  );
}
