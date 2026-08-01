"use client";

import { useEffect, useRef, useState } from "react";

type Role = {
  title: string;
  company: string;
  period: string;
  outcome: string;
  outcomeNum?: string;
};

const roles: Role[] = [
  {
    title: "UI/UX & Frontend Development Intern",
    company: "PRIME Philippines",
    period: "May 2026 — Jul 2026",
    outcome: "Built design system for ArgoNavis fleet platform",
    outcomeNum: "1",
  },
  {
    title: "Partnership Lead — External",
    company: "Microsoft Student Community, BulSU",
    period: "Jul 2025 — Apr 2026",
    outcome: "Led external partnerships for 200+ members",
    outcomeNum: "200+",
  },
  {
    title: "Volunteer Coordinator",
    company: "DEVCON Manila",
    period: "Apr 2025",
    outcome: "Coordinated 30+ volunteers across 2 conferences",
    outcomeNum: "30+",
  },
  {
    title: "Game Agent",
    company: "YGG Philippines Workforce",
    period: "2023 — 2024",
    outcome: "Managed digital assets across 12-month engagement",
    outcomeNum: "12",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const [activeDots, setActiveDots] = useState<boolean[]>(new Array(roles.length).fill(false));
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    // Animate timeline line on scroll
    const lineObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add("is-drawn");
          lineObs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    lineObs.observe(section);

    // Animate dots
    const dotObservers: IntersectionObserver[] = [];
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveDots((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(dot);
      dotObservers.push(obs);
    });

    return () => {
      lineObs.disconnect();
      dotObservers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section
      id="experience"
      style={{
        padding: "140px 6%",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Ghost watermark */}
      <div className="ghost-word" aria-hidden="true">EXPERIENCE</div>

      <div
        ref={sectionRef}
        style={{ maxWidth: 1180, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}
      >
        <h2
          className="clip-wipe"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: 80,
            textShadow: "var(--headline-glow)",
          }}
        >
          Where I&apos;ve{" "}
          <span className="headline-accent">worked.</span>
        </h2>

        {/* Timeline container */}
        <div style={{ position: "relative", paddingLeft: 48 }}>
          {/* SVG vertical timeline line */}
          <svg
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 15,
              top: 0,
              width: 2,
              height: "100%",
              overflow: "visible",
            }}
          >
            <line
              ref={lineRef}
              className="timeline-line"
              x1="1"
              y1="0"
              x2="1"
              y2="100%"
              style={{ ["--timeline-len" as string]: "1000" }}
            />
          </svg>

          <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
            {roles.map((role, i) => (
              <div
                key={i}
                ref={(el) => { dotRefs.current[i] = el; }}
                className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ""}`}
                style={{ position: "relative" }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: -42,
                    top: 6,
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: `2px solid ${activeDots[i] ? "var(--accent-bright)" : "var(--accent)"}`,
                    background: activeDots[i] ? "var(--accent-bright)" : "transparent",
                    boxShadow: activeDots[i] ? "0 0 12px var(--accent-glow)" : "none",
                    transition: "all 0.5s var(--ease-spring)",
                  }}
                />

                {/* Content */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      gap: "8px 24px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {role.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 14,
                        fontStyle: "italic",
                        fontWeight: 700,
                        color: "var(--accent)",
                      }}
                    >
                      {role.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 16,
                      fontStyle: "italic",
                      color: "var(--text-faint)",
                    }}
                  >
                    {role.company}
                  </p>

                  {/* ONE outcome line with oversized number */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 12,
                      marginTop: 8,
                    }}
                  >
                    {role.outcomeNum && (
                      <span
                        style={{
                          fontFamily: "var(--font-impact), 'Bebas Neue', sans-serif",
                          fontSize: 42,
                          color: "var(--accent-bright)",
                          lineHeight: 1,
                          textShadow: "0 0 16px var(--accent-glow)",
                        }}
                      >
                        {role.outcomeNum}
                      </span>
                    )}
                    <p
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 17,
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {role.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
