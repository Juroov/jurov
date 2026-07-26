"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";

const projects = [
  {
    title: "HakotLahat — Smart Garbage Collection System",
    type: "Full-Stack Web App",
    url: "https://www.hakotlahat.com/",
    accentColor: "var(--accent)",
    themeBg: "var(--bg-card)",
    fallbackImage: "/real-hakot.png",
    description:
      "An intelligent municipal waste management platform. Residents submit photo reports, Gemini Vision AI classifies waste, and the system generates optimized collection routes.",
    role: "Led frontend architecture, designed the full UI system (dark dashboard, map views, resident portal).",
    tags: ["Next.js", "Supabase", "Gemini AI", "MapLibre", "TypeScript", "Tailwind CSS", "Claude"],
  },
  {
    title: "Kuya Juan — Financial Advisor Portfolio",
    type: "Frontend · Commission",
    url: "https://clients-portfolio.vercel.app/",
    accentColor: "var(--accent)",
    themeBg: "var(--bg-card)",
    fallbackImage: "/real-juan.png",
    description:
      "A professional marketing site built to convert visitors into consultation bookings, showcasing services, credentials, and client testimonials.",
    role: "Designed and built the full landing page — from wireframe to deployed. Focused on trust signals, warm visual hierarchy, and mobile-first responsiveness.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
  },
];

/* ── Individual project card ── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`reveal ${index > 0 ? "reveal-delay-1" : ""}`}
      style={{ position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Text-only layout — preview floats in from right on hover ── */}
      <div style={{ position: "relative" }}>

        {/* Project info — always visible, no nudge */}
        <div style={{ paddingTop: 4 }}>
          <div style={{ marginBottom: 14 }}>
            <span
              className="tag"
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {project.type}
            </span>
          </div>

          <h3
            style={{
              fontSize: "clamp(1.15rem, 2.5vw, 1.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.8,
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          <p
            style={{
              fontSize: 13,
              color: "var(--text-faint)",
              lineHeight: 1.7,
              marginBottom: 24,
              fontStyle: "italic",
              fontFamily: "var(--font-inter)",
            }}
          >
            <strong style={{ color: "var(--text-secondary)", fontStyle: "normal" }}>
              My role:
            </strong>{" "}
            {project.role}
          </p>

          <div className="flex flex-wrap gap-2" style={{ marginBottom: 28 }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
              style={{ fontSize: 13 }}
            >
              Visit live site
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H6M11 3v5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Subtle hover hint — fades out when hovered */}
            <span
              style={{
                fontSize: 11,
                color: "var(--text-label)",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: hovered ? 0 : 0.55,
                transition: "opacity 0.3s ease",
                userSelect: "none",
              }}
            >
              hover for preview →
            </span>
          </div>
        </div>

        {/*
          Browser preview — fixed to the right side of the viewport.
          BrowserFrame has padding:28px / margin:-28px for its ambient glow,
          so we compensate with a negative margin to align the visible frame edge.
        */}
        <motion.div
          initial={{ rotateY: 90, opacity: 0, y: "-50%", x: 0 }}
          animate={{
            rotateY: hovered ? 0 : 90,
            opacity: hovered ? 1 : 0,
            y: "-50%",
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "fixed",
            top: "50%",
            right: 32,
            width: "min(480px, 40vw)",
            marginRight: -28,
            pointerEvents: hovered ? "auto" : "none",
            zIndex: 100,
            transformOrigin: "right center",
            boxShadow: hovered ? "0 40px 100px -20px var(--accent-glow)" : "none",
          }}
        >
          <BrowserFrame
            url={project.url}
            title={project.title}
            accentColor={project.accentColor}
            fallbackImage={project.fallbackImage}
            themeBg={project.themeBg}
            active={hovered}
          />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Projects section ── */
export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        overflow: "visible",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", overflow: "visible" }}>
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <h2
            className="reveal clip-wipe"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              fontFamily: "var(--font-inter)",
              marginBottom: 8,
            }}
          >
            Websites &amp; systems
            <br />
            built from{" "}
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 900,
                color: "var(--accent)",
              }}
            >
              scratch.
            </span>
          </h2>
          {/* SVG stroke-draw underline */}
          <svg
            className="heading-underline-svg"
            viewBox="0 0 400 8"
            preserveAspectRatio="none"
            style={{ maxWidth: 320, height: 8, marginBottom: 16 }}
            aria-hidden="true"
          >
            <path
              className="heading-underline-path"
              d="M 2 4 Q 100 2 200 4 Q 300 6 398 4"
              vectorEffect="non-scaling-stroke"
              pathLength="1"
            />
          </svg>
          <p
            className="reveal reveal-delay-1"
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              maxWidth: "56ch",
              lineHeight: 1.75,
            }}
          >
            Frontend-first projects with real clients and real users. Each one
            is fully deployed and live — hover the preview area to see the real
            site pop in.
          </p>
        </div>

        {/* Main projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Supporting projects */}
        <div
          className="reveal grid md:grid-cols-2 gap-5"
          style={{ marginTop: 64, paddingTop: 64, borderTop: "1px solid var(--border)" }}
        >
          <div
            className="card"
            style={{ padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start", background: "var(--bg-card)" }}
          >
            {/* Robot/automation icon */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--accent)",
                background: "var(--accent-glow)",
                border: "1px solid var(--border)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="9" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="9" cy="14" r="1.5" fill="currentColor" />
                <circle cx="15" cy="14" r="1.5" fill="currentColor" />
                <path d="M9 9V7a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.8" />
                <line x1="12" y1="4" x2="12" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span
                className="tag"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: 8,
                }}
              >
                Automation · Python
              </span>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "-0.01em",
                  marginBottom: 6,
                }}
              >
                Web Automation &amp; Data Scraping Scripts
              </h3>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}>
                Python + Selenium tool that reads real estate data from CSV/Excel and
                auto-fills property listings into a WordPress staging site — eliminating
                manual input entirely.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{ padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start", background: "var(--bg-card-2)" }}
          >
            {/* Document icon */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--accent)",
                background: "var(--accent-glow)",
                border: "1px solid var(--border)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <span
                className="tag"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: 8,
                }}
              >
                Research Paper
              </span>
              <h3
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                  marginBottom: 6,
                }}
              >
                <a
                  href="https://doi.org/10.5281/zenodo.19178899"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                  className="hover:text-blue-500 transition-colors"
                >
                  &ldquo;Reyal or Fake?&rdquo;
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5v5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </h3>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: "var(--font-inter)", lineHeight: 1.7 }}>
                Technical research on the risks of misidentifying AI-generated videos.
                Explores deepfake detection challenges and verification system design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
