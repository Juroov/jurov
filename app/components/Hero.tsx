"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, FolderOpen, MapPin } from "@phosphor-icons/react";

export default function Hero() {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      child.style.transition =
        "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)";
      child.style.transitionDelay = `${0.1 + i * 0.15}s`;
      requestAnimationFrame(() => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center"
      style={{
        minHeight: "100dvh",
        padding: "0 24px",
        background: "var(--surface)",
      }}
    >
      {/* Structural gutter line */}
      <div
        className="absolute hidden lg:block"
        style={{
          left: "calc(50% - 280px)",
          top: 0,
          bottom: 0,
          width: 1,
          background:
            "linear-gradient(to bottom, transparent 5%, var(--border) 20%, var(--border) 80%, transparent 95%)",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          paddingTop: 112,
          paddingBottom: 96,
        }}
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-20 items-center">
          {/* ── LEFT ── */}
          <div ref={leftRef} style={{ display: "flex", flexDirection: "column" }}>
            {/* Role pill */}
            <div
              className="inline-flex items-center gap-2 self-start"
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid var(--accent-border)",
                background: "var(--accent-subtle)",
                marginBottom: 32,
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

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(3.2rem, 8.5vw, 7rem)",
                fontWeight: 800,
                letterSpacing: "-0.045em",
                lineHeight: 0.9,
                color: "var(--text-primary)",
                fontFamily: "var(--font-geist-sans)",
                marginBottom: 32,
              }}
            >
              I design &amp;<br />
              build web<br />
              <span style={{ color: "var(--accent)" }}>experiences.</span>
            </h1>

            {/* Sub-copy */}
            <p
              style={{
                fontSize: 16,
                color: "var(--text-body)",
                maxWidth: "50ch",
                lineHeight: 1.8,
                marginBottom: 48,
              }}
            >
              Computer Engineering student with real internship experience at
              PRIME Philippines. I build responsive frontends, design UI
              systems, and take on freelance commissions — from landing pages
              to full-stack apps.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a href="#commissions" className="btn-primary">
                Commission rates
                <ArrowRight size={15} weight="bold" />
              </a>
              <a href="#projects" className="btn-outline">
                <FolderOpen size={15} />
                View my work
              </a>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div
            style={{
              opacity: 0,
              animation: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.65s forwards",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Availability card */}
            <div
              className="card"
              style={{
                padding: "24px 28px",
                border: "1px solid var(--accent-border)",
                background: "var(--accent-subtle)",
              }}
            >
              <div className="flex items-center gap-3" style={{ marginBottom: 12 }}>
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
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#15803d",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "var(--font-geist-mono)",
                  }}
                >
                  Currently available
                </span>
              </div>
              <p style={{ fontSize: 14, color: "var(--text-body)", lineHeight: 1.65, marginBottom: 16 }}>
                Taking local &amp; remote commissions — websites, UI/UX design,
                and automation tools.
              </p>
              <div
                style={{
                  paddingTop: 14,
                  borderTop: "1px solid var(--accent-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <MapPin size={13} color="var(--text-label)" weight="fill" />
                <p
                  style={{
                    fontSize: 11,
                    fontFamily: "var(--font-geist-mono)",
                    color: "var(--text-label)",
                    letterSpacing: "0.04em",
                  }}
                >
                  San Jose Del Monte, Bulacan PH
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "2+", label: "Commissions" },
                { value: "1",  label: "Internship"  },
                { value: "2",  label: "Projects"    },
              ].map((s) => (
                <div
                  key={s.label}
                  className="card text-center"
                  style={{ padding: "22px 10px" }}
                >
                  <p
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: "var(--accent)",
                      letterSpacing: "-0.04em",
                      fontFamily: "var(--font-geist-sans)",
                      lineHeight: 1,
                      marginBottom: 8,
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

            {/* Quick-contact strip */}
            <a
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                borderRadius: 10,
                border: "1px solid var(--border-strong)",
                background: "var(--surface)",
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-subtle)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
                (e.currentTarget as HTMLAnchorElement).style.background = "var(--surface)";
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text-body)" }}>
                amarillelorrenz@gmail.com
              </span>
              <ArrowRight size={14} color="var(--text-muted)" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: 0,
          animation: "fadeIn 1s ease 1.8s forwards",
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
        <div
          style={{
            width: 20, height: 32,
            borderRadius: 999,
            border: "1.5px solid var(--border-strong)",
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 3, height: 7,
              borderRadius: 999,
              background: "var(--text-label)",
              animation: "blink 1.4s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
