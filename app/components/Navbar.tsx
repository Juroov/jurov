"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#about",       label: "About"       },
  { href: "#skills",      label: "Skills"       },
  { href: "#experience",  label: "Experience"   },
  { href: "#projects",    label: "Projects"     },
  { href: "#commissions", label: "Commissions"  },
];

// Inline SVG hamburger icon
function IconHamburger() {
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" aria-hidden="true">
      <line x1="0" y1="1.5" x2="17" y2="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="7"   x2="17" y2="7"   stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="0" y1="12.5" x2="17" y2="12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Morphing X close icon
function IconClose() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// Sun icon (for dark mode — click to switch to light)
function IconSun() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="7.5" cy="7.5" r="3" fill="currentColor"/>
      <line x1="7.5" y1="0.5"  x2="7.5" y2="2.5"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7.5" y1="12.5" x2="7.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="0.5"  y1="7.5" x2="2.5"  y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="12.5" y1="7.5" x2="14.5" y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2.7" y1="2.7"  x2="4.1"  y2="4.1"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10.9" y1="10.9" x2="12.3" y2="12.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10.9" y1="4.1"  x2="12.3" y2="2.7"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="2.7" y1="12.3"  x2="4.1"  y2="10.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// Moon icon (for light mode — click to switch to dark)
function IconMoon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M13 9.5a6 6 0 0 1-7.5-7.5A6 6 0 1 0 13 9.5z"
        fill="currentColor"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggle } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection via IntersectionObserver
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
            ? (theme === 'dark' ? "rgba(17,17,19,0.92)" : "rgba(255,255,255,0.92)")
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <div className="flex items-center justify-between" style={{ height: "64px" }}>
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group"
              style={{ textDecoration: "none" }}
            >
              <div
                className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
                style={{
                  width: 32, height: 32,
                  background: "var(--text-primary)",
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    color: "var(--bg)",
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  LA
                </span>
              </div>
              <span
                className="hidden sm:block"
                style={{
                  fontFamily: "var(--font-geist-sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Lorrenz Amarille
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-link"
                  style={{
                    color: active === l.href.slice(1)
                      ? "var(--text-primary)"
                      : undefined,
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div
                className="hidden sm:flex items-center gap-2 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20"
                style={{
                  padding: "6px 12px",
                  borderRadius: 999,
                }}
              >
                <div
                  className="status-dot bg-green-500 dark:bg-green-400"
                  style={{
                    width: 7, height: 7,
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="text-green-700 dark:text-green-400"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Open
                </span>
              </div>
              {/* Theme toggle — inline SVG icons */}
              <button
                onClick={toggle}
                className="theme-toggle"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{ color: "var(--text-muted)" }}
              >
                {theme === 'dark' ? <IconSun /> : <IconMoon />}
              </button>
              <a href="#contact" className="btn-primary hidden sm:inline-flex" style={{ padding: "8px 18px", fontSize: 12 }}>
                Hire me
              </a>
              <button
                id="menuBtn"
                className="lg:hidden flex items-center justify-center transition-colors bg-white dark:bg-zinc-900"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  border: "1px solid var(--border-strong)",
                  cursor: "pointer",
                  color: "var(--text-primary)",
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
          background: theme === 'dark' ? "rgba(9,9,11,0.97)" : "rgba(255,255,255,0.97)",
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
          className="absolute flex items-center justify-center bg-black/5 dark:bg-white/10"
          aria-label="Close menu"
          style={{
            top: 20, right: 24,
            width: 40, height: 40,
            borderRadius: 10,
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
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
              fontFamily: "var(--font-geist-sans)",
              background: "none",
              border: "none",
              cursor: "pointer",
              letterSpacing: "-0.03em",
              transition: "color 0.2s ease",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLButtonElement).style.color = "var(--accent)")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLButtonElement).style.color = "var(--text-primary)")
            }
          >
            {l.label}
          </button>
        ))}
        <a href="#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
          Hire me
        </a>
      </div>
    </>
  );
}
