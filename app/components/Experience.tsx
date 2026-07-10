// Server Component
// EYEBROW #1 — Experience section gets one (section 4 of 7)

type Role = {
  title: string;
  company: string;
  period: string;
  color: string;
  dotColor: string;
  bullets?: string[];
  blurb?: string;
  tags?: string[];
};

const roles: Role[] = [
  {
    title: "UI/UX and Frontend Development Intern",
    company: "PRIME Philippines",
    period: "May 2026 — Jul 2026",
    color: "#2563EB",
    dotColor: "#2563EB",
    bullets: [
      "Developed responsive frontend interfaces for ArgoNavis, an Intelligent Fleet and Mobility Management System, using Next.js and modern frontend tools.",
      "Built and maintained a reusable design system with modular components and full dual-theme (Light & Dark Mode) support.",
      "Collaborated with backend developers to integrate APIs and ensure seamless data flow and performance.",
      "Participated in Agile meetings, project reviews, and SDLC discussions to align implementation with business requirements.",
      "Assisted in deploying role-based access control and advanced error-handling mechanisms.",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Agile/SDLC"],
  },
  {
    title: "Partnership Lead — External",
    company: "Microsoft Student Community, Bulacan State University",
    period: "Jul 2025 — Apr 2026",
    color: "#6366F1",
    dotColor: "#6366F1",
    blurb:
      "Coordinated strategic partnerships and brand visibility initiatives for the Membership ID Program, fostering tech community growth and collaboration with external organizations.",
  },
  {
    title: "Volunteer Coordinator",
    company: "DEVCON Manila",
    period: "Apr 2025",
    color: "#F59E0B",
    dotColor: "#F59E0B",
    blurb:
      "Orchestrated logistics and managed volunteer teams during technical conferences, ensuring smooth event operations and attendee support.",
  },
  {
    title: "Game Agent",
    company: "Yield Guild Games Philippines Workforce",
    period: "2023 — 2024",
    color: "#A855F7",
    dotColor: "#A855F7",
    blurb:
      "Executed daily operations and optimized digital asset management strategies within a fast-paced Web3 gaming environment.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* EYEBROW — one of 3 total */}
        <p
          className="reveal"
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontFamily: "var(--font-geist-mono)",
            marginBottom: 16,
          }}
        >
          Experience
        </p>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: 64,
          }}
        >
          Where I&apos;ve worked.
        </h2>

        <div className="timeline-track" style={{ paddingLeft: 48 }}>
          {roles.map((role, i) => (
            <div
              key={i}
              className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ""}`}
              style={{
                position: "relative",
                paddingBottom: i < roles.length - 1 ? 40 : 0,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: "absolute",
                  left: -47,
                  top: 6,
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: `${role.dotColor}15`,
                  border: `2px solid ${role.dotColor}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 8, height: 8,
                    borderRadius: "50%",
                    background: role.dotColor,
                  }}
                />
              </div>

              <div className="card" style={{ padding: "24px 28px" }}>
                <div
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2"
                  style={{ marginBottom: 16 }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        marginBottom: 3,
                      }}
                    >
                      {role.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: role.color,
                      }}
                    >
                      {role.company}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      background: "rgba(0,0,0,0.04)",
                      padding: "4px 10px",
                      borderRadius: 6,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                {role.bullets && (
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                    {role.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5" style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.7 }}>
                        <span style={{ color: `${role.dotColor}99`, marginTop: 5, flexShrink: 0 }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {role.blurb && (
                  <p style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.7 }}>
                    {role.blurb}
                  </p>
                )}

                {role.tags && (
                  <div className="flex flex-wrap gap-2" style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
                    {role.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: "3px 10px",
                          borderRadius: 4,
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          background: `${role.dotColor}10`,
                          color: role.dotColor,
                          fontFamily: "var(--font-geist-mono)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
