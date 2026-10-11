"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { href: "/#projects", sectionId: "projects", label: "Projects" },
  { href: "/#contact", sectionId: "contact", label: "Contact" },
];

/* ── Wave text helper ── */
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

function IconHamburger() {
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" aria-hidden="true">
      <line x1="0" y1="1.5" x2="17" y2="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="7" x2="17" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="12.5" x2="17" y2="12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const scrollMarkerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = scrollMarkerRef.current;
    if (!marker) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(marker);

    return () => observer.disconnect();
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((link) => link.sectionId);
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <span
        ref={scrollMarkerRef}
        aria-hidden="true"
        style={{ position: "absolute", top: 24, left: 0, width: 1, height: 1, pointerEvents: "none" }}
      />
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          viewTransitionName: "site-header",
          background: scrolled
            ? "color-mix(in srgb, var(--bg-card) 96%, transparent)"
            : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition:
            "background 0.55s cubic-bezier(0.22,1,0.36,1), " +
            "border-color 0.55s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="flex items-center justify-between" style={{ height: "64px" }}>
            {/* Wordmark "Lorrenz." */}
            <Link
              href="/"
              className="nav-wordmark-wave"
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              <WaveText text="Lorrenz." />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  style={{
                    color: active === l.sectionId
                      ? "var(--text-primary)"
                      : undefined,
                    position: "relative",
                  }}
                >
                  <WaveText text={l.label} />
                  {active === l.sectionId && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: -6, left: "50%",
                        transform: "translateX(-50%)",
                        width: 4, height: 4,
                        borderRadius: "50%",
                        background: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent-glow)",
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Nav badge */}
              <div className="hidden sm:block">
                <span className="nav-badge">
                  Open for Work
                </span>
              </div>
              <Link href="/#contact" className="btn-primary hidden sm:inline-flex" style={{ padding: "8px 18px", fontSize: 12 }}>
                Hire me
              </Link>
              <button
                id="menuBtn"
                className="lg:hidden flex items-center justify-center transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  border: "1px solid var(--border-strong)",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  background: "var(--bg-card)",
                }}
              >
                <IconHamburger />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
        style={{
          background: "color-mix(in srgb, var(--bg) 96%, transparent)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          gap: 32,
          transition: "opacity 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
        ref={menuRef}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute flex items-center justify-center"
          aria-label="Close menu"
          style={{
            top: 20, right: 24,
            width: 40, height: 40,
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            background: "var(--accent-glow)",
          }}
        >
          <IconClose />
        </button>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "var(--text-primary)",
              fontFamily: "var(--font-ui)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.03em",
              transition: "color 0.2s ease",
              // Cascade in when menu opens
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transitionProperty: "opacity, transform, color",
              transitionDuration: menuOpen ? "0.55s" : "0.2s",
              transitionDelay: menuOpen ? `${i * 0.06 + 0.1}s` : "0s",
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              textDecoration: "none",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLButtonElement).style.color = "var(--accent)")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLButtonElement).style.color = "var(--text-primary)")
            }
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
          style={{
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${menuOpen ? links.length * 0.06 + 0.14 : 0}s, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${menuOpen ? links.length * 0.06 + 0.14 : 0}s`,
          }}
        >
          Hire me
        </Link>
      </div>
    </>
  );
}
