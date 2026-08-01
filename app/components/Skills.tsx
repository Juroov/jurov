// Skills section — Badge/level bar system with SVG category icons
import { CodeIcon, PenToolIcon, GearIcon, BriefcaseIcon } from "./SvgIcons";

type Skill = {
  name: string;
  level: number; // 0–100
};

const categories: {
  num: string;
  title: string;
  icon: React.ComponentType;
  skills: Skill[];
}[] = [
  {
    num: "01",
    title: "Frontend",
    icon: CodeIcon,
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "HTML / CSS", level: 92 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Supabase", level: 72 },
    ],
  },
  {
    num: "02",
    title: "Design",
    icon: PenToolIcon,
    skills: [
      { name: "Figma", level: 85 },
      { name: "Wireframing", level: 82 },
      { name: "Prototyping", level: 78 },
      { name: "Responsive Design", level: 90 },
      { name: "Design Systems", level: 80 },
    ],
  },
  {
    num: "03",
    title: "Tools",
    icon: GearIcon,
    skills: [
      { name: "VS Code", level: 92 },
      { name: "Git & GitHub", level: 85 },
      { name: "AntiGravity", level: 88 },
      { name: "Notion", level: 78 },
      { name: "Microsoft 365", level: 80 },
    ],
  },
  {
    num: "04",
    title: "Professional",
    icon: BriefcaseIcon,
    skills: [
      { name: "Agile / SDLC", level: 78 },
      { name: "Technical Docs", level: 82 },
      { name: "Project Coordination", level: 80 },
      { name: "Problem Solving", level: 88 },
      { name: "Business Proposals", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
      <div className="ghost-word" aria-hidden="true">SKILLS</div>

      <div style={{ maxWidth: 1180, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
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
          What I bring to the{" "}
          <span className="headline-accent">table.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: 64,
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.num}
                className={`row-reveal row-reveal-d${parseInt(cat.num)}`}
              >
                {/* Oversized Bebas Neue category numeral */}
                <div
                  style={{
                    fontFamily: "var(--font-impact), 'Bebas Neue', sans-serif",
                    fontSize: 64,
                    color: "var(--accent-bright)",
                    lineHeight: 1,
                    marginBottom: 8,
                    textShadow: "0 0 20px var(--accent-glow)",
                  }}
                  aria-hidden="true"
                >
                  {cat.num}
                </div>

                {/* Icon + Title */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 28,
                  }}
                >
                  <div className="icon-box">
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 22,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: ".02em",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                {/* Skill bars */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          marginBottom: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-ui)",
                            fontSize: 13,
                            fontWeight: 500,
                            color: "var(--text-secondary)",
                            letterSpacing: ".04em",
                          }}
                        >
                          {skill.name}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--font-impact), 'Bebas Neue', sans-serif",
                            fontSize: 18,
                            color: "var(--accent-bright)",
                            textShadow: "0 0 8px var(--accent-glow)",
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
