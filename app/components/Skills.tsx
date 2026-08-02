"use client";

import { useEffect, useRef } from "react";
import { CodeIcon, PenToolIcon, GearIcon, BriefcaseIcon } from "./SvgIcons";

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
      "HTML / CSS",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    num: "02",
    title: "UI/UX Design",
    icon: PenToolIcon,
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "Design Systems",
    ],
  },
  {
    num: "03",
    title: "Tools & Version Control",
    icon: GearIcon,
    skills: [
      "VS Code",
      "Git & GitHub",
      "AntiGravity",
      "Notion",
      "Microsoft 365 & Canva",
    ],
  },
  {
    num: "04",
    title: "Professional Skills",
    icon: BriefcaseIcon,
    skills: [
      "Agile Development",
      "SDLC",
      "Technical Documentation",
      "Business Proposal Dev",
      "Project Coordination",
      "Problem Solving",
    ],
  },
];

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const Icon = cat.icon;

  return (
    <div
      ref={ref}
      className={`row-reveal row-reveal-d${(index % 4) + 1}`}
    >
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
        {cat.skills.map((skill) => (
          <span key={skill} className="skill-tag" style={{
            fontFamily: "var(--font-ui)",
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: ".02em",
            padding: "8px 16px",
            borderRadius: "100px",
            background: "rgba(196,30,58,0.12)",
            border: "1px solid rgba(196,30,58,0.35)",
            color: "var(--accent-bright)",
          }}>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.num} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
