"use client";

import { useEffect, useRef } from "react";

type Role = {
  title: string;
  company: string;
  period: string;
  outcome: string;
  outcomeNumber: string;
};

const roles: Role[] = [
  {
    title: "UI/UX and Frontend Development Intern",
    company: "PRIME Philippines",
    period: "May 2026 — Jul 2026",
    outcome: "Built design system for ArgoNavis fleet platform",
    outcomeNumber: "1",
  },
  {
    title: "Partnership Lead — External",
    company: "Microsoft Student Community, BulSU",
    period: "Jul 2025 — Apr 2026",
    outcome: "Led external partnerships for 200+ members",
    outcomeNumber: "200+",
  },
  {
    title: "Volunteer Coordinator",
    company: "DEVCON Manila",
    period: "Apr 2025",
    outcome: "Coordinated 30+ volunteers across 2 conferences",
    outcomeNumber: "30+",
  },
  {
    title: "Game Agent",
    company: "Yield Guild Games Philippines",
    period: "2023 — 2024",
    outcome: "Managed digital assets across 12-month engagement",
    outcomeNumber: "12",
  },
];

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    // SVG line draw on scroll
    const svgLine = timelineRef.current.querySelector<SVGLineElement>(".timeline-svg-line");
    const dots = timelineRef.current.querySelectorAll<SVGCircleElement>(".timeline-dot");

    const lineObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && svgLine) {
          svgLine.classList.add("is-visible");
          lineObs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) lineObs.observe(timelineRef.current);

    // Dot observers
    const dotObservers: IntersectionObserver[] = [];
    dots.forEach((dot) => {
      const parentEntry = dot.closest("[data-timeline-entry]");
      if (!parentEntry) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            dot.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.5 }
      );
      obs.observe(parentEntry);
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
        padding: "120px 6%",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost watermark */}
      <div className="ghost-word" aria-hidden="true">
        EXPERIENCE
      </div>

      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <div className="section-reveal" style={{ marginBottom: 64 }}>
          <h2
            className="clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              textShadow: "var(--headline-glow)",
            }}
          >
            Where I&apos;ve{" "}
            <span className="headline-accent">
              worked.
            </span>
          </h2>
        </div>

        {/* Timeline container */}
        <div
          ref={timelineRef}
          style={{ position: "relative", paddingLeft: 48 }}
        >
          {/* SVG timeline line */}
          <svg
            style={{
              position: "absolute",
              left: 15,
              top: 0,
              width: 2,
              height: "100%",
              overflow: "visible",
            }}
            aria-hidden="true"
          >
            <line
              className="timeline-svg-line"
              x1="1" y1="0"
              x2="1" y2="100%"
              stroke="var(--border-strong)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div
            className="stagger-children"
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {roles.map((role, i) => (
              <div
                key={i}
                data-timeline-entry
                className="stagger-item"
                style={{
                  position: "relative",
                  paddingBottom: i < roles.length - 1 ? 64 : 0,
                }}
              >
                {/* SVG dot */}
                <svg
                  style={{
                    position: "absolute",
                    left: -41,
                    top: 6,
                    width: 14,
                    height: 14,
                    overflow: "visible",
                  }}
                  aria-hidden="true"
                >
                  <circle
                    className="timeline-dot"
                    cx="7" cy="7" r="6"
                    fill="var(--accent)"
                    style={{
                      transitionDelay: `${0.3 + i * 0.2}s`,
                      filter: "drop-shadow(0 0 6px var(--accent-glow))",
                    }}
                  />
                </svg>

                {/* Role content */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4" style={{ marginBottom: 12 }}>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 22,
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        marginBottom: 4,
                      }}
                    >
                      {role.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 16,
                        fontStyle: "italic",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {role.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "var(--accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                {/* Outcome line with impact number */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 8 }}>
                  <span className="impact-number" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    {role.outcomeNumber}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 16,
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                      maxWidth: "50ch",
                    }}
                  >
                    {role.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
