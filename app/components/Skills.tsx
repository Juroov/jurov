// Server Component
import { CodeIcon, PenToolIcon, GearIcon, BriefcaseIcon } from "./SvgIcons";

const frontendSkills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "HTML / CSS", "Tailwind CSS", "Supabase",
];

const designItems = [
  "Figma",
  "Wireframing",
  "Prototyping",
  "Responsive Design",
  "Design Systems",
];

const toolItems = [
  "VS Code",
  "Git & GitHub",
  "AntiGravity",
  "Notion",
  "Microsoft 365 & Canva",
];

const professionalSkills = [
  "Agile Development",
  "Software Development Lifecycle",
  "Technical Documentation",
  "Business Proposal Development",
  "Project Coordination",
  "Problem Solving",
];

const categories = [
  {
    num: "01",
    title: "Web & Frontend Development",
    icon: CodeIcon,
    description: "Building responsive, performant frontends with modern frameworks. From component architecture to API integration and deployment.",
    items: frontendSkills,
    isList: false,
  },
  {
    num: "02",
    title: "UI/UX Design",
    icon: PenToolIcon,
    description: null,
    items: designItems,
    isList: true,
  },
  {
    num: "03",
    title: "Tools & Version Control",
    icon: GearIcon,
    description: null,
    items: toolItems,
    isList: true,
  },
  {
    num: "04",
    title: "Professional Skills",
    icon: BriefcaseIcon,
    description: null,
    items: professionalSkills,
    isList: false,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            marginBottom: 80,
            textShadow: "var(--headline-glow)",
          }}
        >
          What I bring to the{" "}
          <span className="headline-accent">
            table.
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-16">
            {categories.filter((_, i) => i % 2 === 0).map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.num}
                  className={`row-reveal row-reveal-d${parseInt(cat.num)}`}
                >
                  {/* Ghost watermark numeral */}
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 900,
                      fontSize: 80,
                      color: "var(--watermark)",
                      lineHeight: 1,
                      marginBottom: 16,
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    {cat.num}
                  </div>
                  
                  {/* Icon + Title row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div className="icon-box">
                      <Icon />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 32,
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {cat.description && (
                    <p
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 20,
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: 32,
                        maxWidth: "50ch",
                      }}
                    >
                      {cat.description}
                    </p>
                  )}
                  
                  {cat.isList ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {cat.items.map((d) => (
                        <div key={d} style={{ fontFamily: "var(--font-ui)", fontSize: 20, color: "var(--text-secondary)" }}>
                          ΓÇö {d}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-primary)" }}>
                      {cat.items.map((s, i) => (
                        <span key={s}>
                          {s}{i < cat.items.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-16">
            {categories.filter((_, i) => i % 2 === 1).map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.num}
                  className={`row-reveal row-reveal-d${parseInt(cat.num)}`}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 900,
                      fontSize: 80,
                      color: "var(--watermark)",
                      lineHeight: 1,
                      marginBottom: 16,
                      userSelect: "none",
                    }}
                    aria-hidden="true"
                  >
                    {cat.num}
                  </div>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <div className="icon-box">
                      <Icon />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-ui)",
                        fontSize: 32,
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {cat.isList ? (
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {cat.items.map((d) => (
                        <div key={d} style={{ fontFamily: "var(--font-ui)", fontSize: 20, color: "var(--text-secondary)" }}>
                          ΓÇö {d}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-primary)", maxWidth: "50ch", lineHeight: 1.6 }}>
                      {cat.items.map((s, i) => (
                        <span key={s}>
                          {s}{i < cat.items.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
