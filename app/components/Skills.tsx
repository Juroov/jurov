// Server Component
// No eyebrow — section 3, budget is Experience + Commissions
// Bento grid with visual variation: 2 cells get tinted BG

const frontendSkills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "HTML / CSS", "Tailwind CSS", "Supabase",
];

const designItems = [
  { label: "Figma"            },
  { label: "Wireframing"      },
  { label: "Prototyping"      },
  { label: "Responsive Design"},
  { label: "Design Systems"   },
];

const toolItems = [
  { label: "VS Code"              },
  { label: "Git & GitHub"         },
  { label: "AntiGravity"          },
  { label: "Notion"               },
  { label: "Microsoft 365 & Canva"},
];

const professionalSkills = [
  "Agile Development",
  "Software Development Lifecycle",
  "Technical Documentation",
  "Business Proposal Development",
  "Project Coordination",
  "Problem Solving",
];

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
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          className="reveal"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--text-primary)",
            marginBottom: 64,
          }}
        >
          What I bring to the table.
        </h2>

        {/* Bento grid — varied backgrounds */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* Frontend Dev — spans 2 cols, tinted electric-blue background */}
          <div
            className="reveal card col-span-3 md:col-span-2"
            style={{
              padding: "40px 44px",
              background: "#EFF6FF",
              borderColor: "var(--accent-border)",
            }}
          >
            <div
              style={{
                width: 44, height: 44,
                borderRadius: 10,
                background: "#DBEAFE",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <span style={{ fontSize: 20 }}>{"</>"}</span>
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
            style={{ padding: "36px 32px" }}
          >
            <div
              style={{
                width: 44, height: 44,
                borderRadius: 10,
                background: "#FDF2F8",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
                fontSize: 20,
              }}
            >
              🎨
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
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {designItems.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3"
                >
                  <div
                    style={{
                      width: 6, height: 6,
                      borderRadius: "50%",
                      background: "#EC4899",
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
              padding: "36px 32px",
              background: "#FAFAFA",
            }}
          >
            <div
              style={{
                width: 44, height: 44,
                borderRadius: 10,
                background: "#FEF3C7",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
                fontSize: 20,
              }}
            >
              🔧
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
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {toolItems.map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <div
                    style={{
                      width: 6, height: 6,
                      borderRadius: "50%",
                      background: "#F59E0B",
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
            style={{ padding: "36px 36px" }}
          >
            <div
              style={{
                width: 44, height: 44,
                borderRadius: 10,
                background: "#ECFDF5",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
                fontSize: 20,
              }}
            >
              💼
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
