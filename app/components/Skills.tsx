// Server Component
// No eyebrow — section 3, budget is Experience + Commissions
// Bento grid with visual variation: 2 cells get tinted BG
// Icons replaced with inline SVGs (no library dependency)

const frontendSkills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "HTML / CSS", "Tailwind CSS", "Supabase",
];

const designItems = [
  { label: "Figma"             },
  { label: "Wireframing"       },
  { label: "Prototyping"       },
  { label: "Responsive Design" },
  { label: "Design Systems"    },
];

const toolItems = [
  { label: "VS Code"               },
  { label: "Git & GitHub"          },
  { label: "AntiGravity"           },
  { label: "Notion"                },
  { label: "Microsoft 365 & Canva" },
];

const professionalSkills = [
  "Agile Development",
  "Software Development Lifecycle",
  "Technical Documentation",
  "Business Proposal Development",
  "Project Coordination",
  "Problem Solving",
];

// Inline SVG icon components
function IconCode() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M9 8L3 14l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 8l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 5l-4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function IconPalette() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
      <circle cx="9" cy="11" r="2" fill="currentColor"/>
      <circle cx="14" cy="8" r="2" fill="currentColor"/>
      <circle cx="19" cy="11" r="2" fill="currentColor"/>
      <path d="M14 24c3 0 5-2 5-5h-5v5z" fill="currentColor" opacity="0.5"/>
    </svg>
  );
}

function IconWrench() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M20 4a5 5 0 0 1-6.9 7.1L6 18a2 2 0 1 0 2.8 2.8l7.1-7.1A5 5 0 0 1 20 4z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="10" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2"/>
      <line x1="3" y1="17" x2="25" y2="17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: 8,
              display: "inline-block",
            }}
          >
            What I bring to the table.
          </h2>
          {/* SVG stroke-draw underline */}
          <svg className="heading-underline-svg" viewBox="0 0 400 8" preserveAspectRatio="none"
            style={{ maxWidth: 340, height: 8, margin: "0 auto" }} aria-hidden="true">
            <path className="heading-underline-path" d="M 2 4 Q 100 2 200 4 Q 300 6 398 4"
              vectorEffect="non-scaling-stroke" pathLength="1" />
          </svg>
        </div>

        {/* Bento grid — varied backgrounds */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Frontend Dev — spans 2 cols, tinted electric-blue background */}
          <div
            className="reveal card col-span-3 md:col-span-2"
            style={{
              padding: "48px 52px",
              borderRadius: 32,
              background: "var(--accent-subtle)",
              borderColor: "var(--accent-border)",
            }}
          >
            <div
              style={{
                width: 52, height: 52,
                borderRadius: 16,
                background: "var(--accent-border)",
                color: "var(--accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <IconCode />
            </div>
            <h3
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 8,
              }}
            >
              Web &amp; Frontend Development
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-body)",
                lineHeight: 1.7,
                marginBottom: 24,
                maxWidth: "48ch",
              }}
            >
              Building responsive, performant frontends with modern frameworks.
              From component architecture to API integration and deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((s) => (
                <span
                  key={s}
                  style={{
                    padding: "5px 12px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    background: "rgba(37,99,235,0.08)",
                    color: "var(--accent)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Design — white */}
          <div
            className="reveal reveal-delay-1 card col-span-3 md:col-span-1"
            style={{ padding: "48px 40px", borderRadius: 32, background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <div
              style={{
                width: 52, height: 52,
                borderRadius: 16,
                background: "var(--bg)",
                color: "var(--text-primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <IconPalette />
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              UI/UX Design
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {designItems.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3"
                >
                  <div
                    style={{
                      width: 6, height: 6,
                      borderRadius: "50%",
                      background: "var(--text-body)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, color: "var(--text-body)", fontWeight: 500 }}>
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools — tinted zinc */}
          <div
            className="reveal card col-span-3 md:col-span-1"
            style={{
              padding: "48px 40px",
              borderRadius: 32,
              background: "var(--bg)",
            }}
          >
            <div
              style={{
                width: 52, height: 52,
                borderRadius: 16,
                background: "var(--surface)",
                color: "var(--text-primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <IconWrench />
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              Tools &amp; Version Control
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {toolItems.map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <div
                    style={{
                      width: 6, height: 6,
                      borderRadius: "50%",
                      background: "var(--text-body)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: 13, color: "var(--text-body)", fontWeight: 500 }}>
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional skills — spans 2 cols */}
          <div
            className="reveal reveal-delay-1 card col-span-3 md:col-span-2"
            style={{ padding: "48px 52px", borderRadius: 32, background: "var(--surface)" }}
          >
            <div
              style={{
                width: 52, height: 52,
                borderRadius: 16,
                background: "var(--bg)",
                color: "var(--text-primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 28,
              }}
            >
              <IconBriefcase />
            </div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 20,
              }}
            >
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {professionalSkills.map((s) => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
