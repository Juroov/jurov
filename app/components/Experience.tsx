// Server Component
import { BriefcaseIcon, TeamIcon, EventIcon, GameIcon } from "./SvgIcons";

type Role = {
  title: string;
  company: string;
  period: string;
  bullets?: string[];
  blurb?: string;
  tags?: string[];
  icon: React.ComponentType;
};

const roles: Role[] = [
  {
    title: "UI/UX and Frontend Development Intern",
    company: "PRIME Philippines",
    period: "May 2026 — Jul 2026",
    icon: BriefcaseIcon,
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
    icon: TeamIcon,
    blurb:
      "Coordinated strategic partnerships and brand visibility initiatives for the Membership ID Program, fostering tech community growth and collaboration with external organizations.",
  },
  {
    title: "Volunteer Coordinator",
    company: "DEVCON Manila",
    period: "Apr 2025",
    icon: EventIcon,
    blurb:
      "Orchestrated logistics and managed volunteer teams during technical conferences, ensuring smooth event operations and attendee support.",
  },
  {
    title: "Game Agent",
    company: "Yield Guild Games Philippines Workforce",
    period: "2023 — 2024",
    icon: GameIcon,
    blurb:
      "Executed daily operations and optimized digital asset management strategies within a fast-paced Web3 gaming environment.",
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
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto" }}>
        
        <h2
          className="reveal clip-wipe"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 7vw, 5rem)",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            marginBottom: 64,
            textShadow: "var(--headline-glow)",
          }}
        >
          Where I&apos;ve{" "}
          <span className="headline-accent">
            worked.
          </span>
        </h2>

        <div className="flex flex-col gap-12">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <div
                key={i}
                className={`reveal ${i > 0 ? `reveal-delay-${Math.min(i, 3)}` : ""}`}
                style={{
                  position: "relative",
                  paddingBottom: i < roles.length - 1 ? 48 : 0,
                  borderBottom: i < roles.length - 1 ? "1px solid var(--border)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div className="icon-box" style={{ marginTop: 2 }}>
                      <Icon />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-ui)",
                          fontSize: 24,
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
                          fontSize: 18,
                          fontStyle: "italic",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {role.company}
                      </p>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: "var(--accent)",
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                {role.bullets && (
                  <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
                    {role.bullets.map((b, j) => (
                      <li key={j} style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.6, maxWidth: "65ch" }}>
                        — {b}
                      </li>
                    ))}
                  </ul>
                )}

                {role.blurb && (
                  <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-primary)", lineHeight: 1.6, maxWidth: "65ch", marginTop: 8 }}>
                    {role.blurb}
                  </p>
                )}

                {role.tags && (
                  <div style={{ marginTop: 8 }}>
                    {role.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
