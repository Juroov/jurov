"use client";

import { useState, useEffect, useRef } from "react";

const links = [
  { href: "#projects",   label: "Projects" },
  { href: "#contact",    label: "Contact" },
];

function IconHamburger() {
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" aria-hidden="true">
      <line x1="0" y1="1.5" x2="17" y2="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="7"   x2="17" y2="7"   stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="12.5" x2="17" y2="12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

/** Wraps each letter in a span for staggered wave animation */
function WaveText({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{ animationDelay: `${i * 0.04}s` }}
        >
          {ch}
        </span>
      ))}
    </>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
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

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMobileLink = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "color-mix(in srgb, var(--bg-card) 92%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 24px" }}>
          <div className="flex items-center justify-between" style={{ height: "64px" }}>
            {/* Wordmark */}
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: 20,
                color: "var(--text-primary)",
              }}
            >
              <span className="nav-wordmark-wave">
                {"Lorrenz".split("").map((ch, i) => (
                  <span key={i} className="wave-letter" style={{ animationDelay: `${i * 0.04}s` }}>{ch}</span>
                ))}
              </span>
              <span style={{ color: "var(--accent)" }}>.</span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  style={{
                    color: active === l.href.slice(1)
                      ? "var(--accent-bright)"
                      : undefined,
                  }}
                >
                  <WaveText text={l.label} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Nav badge */}
              <div className="hidden sm:block">
                <a href="#contact" className="nav-badge" style={{ textDecoration: "none" }}>
                  Open for Work
                </a>
              </div>
              {/* Mobile hamburger */}
              <button
                id="menuBtn"
                className="lg:hidden flex items-center justify-center"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  border: "1px solid var(--hairline)",
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
        className="fixed inset-0 z-[60] flex flex-col items-center justify-center transition-all duration-400"
        style={{
          background: "color-mix(in srgb, var(--bg) 97%, transparent)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          gap: 32,
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
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => handleMobileLink(l.href)}
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "var(--text-primary)",
              fontFamily: "var(--font-ui)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLButtonElement).style.color = "var(--accent-bright)")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLButtonElement).style.color = "var(--text-primary)")
            }
          >
            {l.label}
          </button>
        ))}
        <a href="#contact" className="btn-brand" onClick={() => setMenuOpen(false)}>
          Hire me
        </a>
      </div>
    </>
  );
}
