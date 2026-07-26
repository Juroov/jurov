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

// Removed inline SVG icons for editorial typographic marks

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
            className="reveal clip-wipe"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter)",
              marginBottom: 8,
              display: "inline-block",
            }}
          >
            What I bring to the{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 900,
                color: "var(--accent)",
              }}
            >
              table.
            </span>
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
          {/* Frontend Dev — spans 2 cols */}
          <div
            className="reveal card col-span-3 md:col-span-2"
            style={{
              padding: "48px 52px",
              borderRadius: 32,
              background: "var(--bg-card)",
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: 48,
                color: "var(--watermark)",
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              01
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
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* UI/UX Design — white */}
          <div
            className="reveal reveal-delay-1 card col-span-3 md:col-span-1"
            style={{ padding: "48px 40px", borderRadius: 32, background: "var(--bg-card-2)", border: "1px solid var(--border)" }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: 48,
                color: "var(--watermark)",
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              02
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
              background: "var(--bg-card)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: 48,
                color: "var(--watermark)",
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              03
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
            style={{ padding: "48px 52px", borderRadius: 32, background: "var(--bg-card-2)" }}
          >
            <div
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: 48,
                color: "var(--watermark)",
                lineHeight: 1,
                marginBottom: 20,
              }}
            >
              04
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
