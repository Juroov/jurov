type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlight: string;
};

const roles: Role[] = [
  {
    title: "UI/UX and Frontend Development Intern",
    company: "PRIME Philippines",
    period: "May 2026 — Jul 2026",
    location: "Quezon City, Philippines",
    summary:
      "Engineered responsive Next.js and Tailwind CSS interfaces for the ArgoNavis fleet and mobility platform, alongside a documented modular design system with light and dark modes.",
    highlight: "Next.js",
  },
  {
    title: "Lead Frontend Developer & UI Designer",
    company: "HakotLahat",
    period: "Technical Project",
    location: "Bulacan, Philippines",
    summary:
      "Engineered an end-to-end web platform for municipal waste collection logistics, status reporting, and tracking.",
    highlight: "Web",
  },
  {
    title: "Frontend Architect & UI/UX Designer",
    company: "ArgoNavis Corporate Booking System",
    period: "Technical Project",
    location: "Quezon City, Philippines",
    summary:
      "Architected accessible booking workflows and standardized design tokens with modular UI components for consistent experiences across user roles.",
    highlight: "UI/UX",
  },
  {
    title: "Embedded Systems Developer",
    company: "Smart RFID Parking Management System",
    period: "Technical Project",
    location: "Bulacan, Philippines",
    summary:
      "Engineered an automated parking management system using an ESP32 and RC522 RFID modules for contactless vehicle access.",
    highlight: "ESP32",
  },
  {
    title: "Hardware & Firmware Engineer",
    company: "Arduino-Based Early Flood Detection System",
    period: "Technical Project",
    location: "Bulacan, Philippines",
    summary:
      "Built and calibrated real-time sensor logic for ultrasonic and water-level monitoring with dynamic OLED and buzzer alerts.",
    highlight: "Arduino",
  },
  {
    title: "Partnership Lead — External",
    company: "Microsoft Student Community, BulSU",
    period: "Aug 2025",
    location: "Bulacan, Philippines",
    summary:
      "Led strategic industry partnerships and brand visibility initiatives for the Membership ID Program.",
    highlight: "MSC",
  },
  {
    title: "Volunteer Coordinator",
    company: "DEVCON Manila",
    period: "Apr 2025",
    location: "Manila, Philippines",
    summary:
      "Supervised event logistics and coordinated technical volunteer operations for regional technology conference tracks.",
    highlight: "DEVCON",
  },
];

export default function Experience() {
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
            What I&apos;ve built &{" "}
            <span className="headline-accent">
              contributed to.
            </span>
          </h2>
        </div>

        {/* Timeline container */}
        <div
          style={{ position: "relative", paddingLeft: 48 }}
        >
          <div
            className="stagger-children"
            style={{ display: "flex", flexDirection: "column", gap: 0 }}
          >
            {roles.map((role, i) => (
              <div
                key={`${role.company}-${role.title}`}
                data-timeline-entry
                className="stagger-item"
                style={{
                  position: "relative",
                  paddingBottom: i < roles.length - 1 ? 64 : 0,
                }}
              >
                {i < roles.length - 1 && (
                  <span
                    className="timeline-segment"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                    aria-hidden="true"
                  />
                )}

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
                      {role.company} · {role.location}
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

                {/* Project or role summary with a concise technical highlight */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 8 }}>
                  <span className="impact-number" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    {role.highlight}
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
                    {role.summary}
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
