import { CodeIcon, PenToolIcon, GearIcon, BotIcon } from "./SvgIcons";

const categories = [
  {
    num: "01",
    title: "Web & Frontend Development",
    icon: CodeIcon,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    num: "02",
    title: "UI/UX Design & Prototyping",
    icon: PenToolIcon,
    skills: [
      "Figma",
      "Wireframing",
      "User Interface Design",
      "User Experience Design",
      "Design Systems",
      "Responsive Design",
    ],
  },
  {
    num: "03",
    title: "Tools, Version Control & Practices",
    icon: GearIcon,
    skills: [
      "VS Code",
      "Git & GitHub",
      "AntiGravity",
      "Notion",
      "Agile / Scrum",
      "SDLC",
      "Technical Documentation",
    ],
  },
  {
    num: "04",
    title: "Embedded Systems & Hardware",
    icon: BotIcon,
    skills: [
      "Arduino Uno / Nano",
      "ESP32",
      "C / C++",
      "Microcontroller Interfacing",
      "RFID (RC522)",
      "Ultrasonic & Water Level Sensors",
      "Circuit Prototyping",
      "Serial Communication",
    ],
  },
];

function CategoryCard({ cat }: { cat: typeof categories[0] }) {
  const Icon = cat.icon;

  return (
    <div className="stagger-item">
      {/* Ghost watermark numeral */}
      <div
        style={{
          fontFamily: "var(--font-impact), 'Bebas Neue', sans-serif",
          fontSize: 80,
          color: "var(--watermark)",
          lineHeight: 1,
          marginBottom: 16,
          userSelect: "none",
          letterSpacing: "0.04em",
        }}
        aria-hidden="true"
      >
        {cat.num}
      </div>
      
      {/* Icon + Title row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <div className="icon-box">
          <Icon />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 24,
            fontWeight: 600,
            color: "var(--text-primary)",
          }}
        >
          {cat.title}
        </h3>
      </div>

      {/* Skill tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {cat.skills.map((skill, si) => (
          <span
            key={skill}
            className="skill-tag"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: ".02em",
              padding: "8px 16px",
              borderRadius: "100px",
              background: "rgba(196,30,58,0.12)",
              border: "1px solid rgba(196,30,58,0.35)",
              color: "var(--accent-bright)",
              transitionDelay: `${0.05 + si * 0.04}s`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
        SKILLS
      </div>

      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        <div className="section-reveal reveal" style={{ marginBottom: 80 }}>
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
            What I bring to the{" "}
            <span className="headline-accent">
              table.
            </span>
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {categories.map((cat) => (
            <CategoryCard key={cat.num} cat={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
