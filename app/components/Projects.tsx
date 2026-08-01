"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";
import { SignatureDividerSvg } from "./SvgIcons";

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
<<<<<<< Updated upstream
    accentColor: "var(--accent)",
    themeBg: "var(--bg-card)",
    fallbackImage: "/real-juan.png",
=======
    images: ["/real-juan.png", "/real-juan-why.png", "/real-juan-how.png"],
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <div style={{ position: "relative", maxWidth: "60ch" }}>
        <div style={{ paddingTop: 4 }}>
=======
      <div
        ref={trackRef}
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => (
          <div key={i} className="carousel-slide">
            <img
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Prev/Next buttons */}
      {current > 0 && (
        <button className="carousel-btn prev" onClick={prev} aria-label="Previous slide">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
      {current < images.length - 1 && (
        <button className="carousel-btn next" onClick={next} aria-label="Next slide">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* Dots */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Project card ── */
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="reveal" style={{ position: "relative" }}>
      <div
        className="flex flex-col lg:flex-row gap-12 lg:gap-16"
        style={{ alignItems: "flex-start" }}
      >
        {/* Image carousel */}
        <div className="flex-1" style={{ minWidth: 0 }}>
          <ImageCarousel images={project.images} title={project.title} />
        </div>

        {/* Text content */}
        <div className="flex-1" style={{ paddingTop: 8 }}>
>>>>>>> Stashed changes
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 14,
              fontStyle: "italic",
              color: "var(--text-faint)",
              marginBottom: 16
            }}
          >
            {project.type}
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 16,
              textShadow: "var(--headline-glow)",
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 20,
            }}
          >
            {project.description}
          </p>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 16,
              color: "var(--text-primary)",
              lineHeight: 1.6,
              marginBottom: 24,
              fontStyle: "italic",
            }}
          >
            <strong style={{ color: "var(--text-secondary)", fontStyle: "normal", fontWeight: 500 }}>
              My role:
            </strong>{" "}
            {project.role}
          </p>

          <div style={{ marginBottom: 32 }}>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-secondary)", marginRight: 6 }}>Stack:</span>
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
              className="btn-outline"
            >
              Visit live site
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 11L11 3M11 3H6M11 3v5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 14,
                color: "var(--text-label)",
                fontStyle: "italic",
                opacity: hovered ? 0 : 0.6,
                transition: "opacity 0.3s ease",
                userSelect: "none",
              }}
            >
              hover for preview
            </span>
          </div>
        </div>

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
            right: "6%",
            width: "min(600px, 45vw)",
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

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 6%",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        overflow: "visible",
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", overflow: "visible" }}>
        
        <div style={{ marginBottom: 96 }}>
          <h2
            className="reveal clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: 24,
              textShadow: "var(--headline-glow)",
            }}
          >
            Websites &amp; systems
            <br />
            built from{" "}
            <span className="headline-accent">
              scratch.
            </span>
          </h2>
          
          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 20,
              color: "var(--text-secondary)",
              maxWidth: "56ch",
              lineHeight: 1.6,
            }}
          >
            Frontend-first projects with real clients and real users. Each one
            is fully deployed and live — hover the preview area to see the real
            site pop in.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
          {projects.map((project, i) => (
            <div key={project.title}>
              <ProjectCard project={project} index={i} />
              {i < projects.length - 1 && <SignatureDividerSvg />}
            </div>
          ))}
        </div>

        {/* Supporting projects */}
        <div
          className="reveal flex flex-col md:flex-row gap-16"
          style={{ marginTop: 120, paddingTop: 80, borderTop: "1px solid var(--border)" }}
        >
          <div className="flex-1">
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 14,
                fontStyle: "italic",
                color: "var(--text-faint)",
                marginBottom: 12,
              }}
            >
              Automation · Python
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Web Automation &amp; Data Scraping Scripts
            </h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "50ch" }}>
              Python + Selenium tool that reads real estate data from CSV/Excel and
              auto-fills property listings into a WordPress staging site — eliminating
              manual input entirely.
            </p>
          </div>

          <div className="flex-1">
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 14,
                fontStyle: "italic",
                color: "var(--text-faint)",
                marginBottom: 12,
              }}
            >
              Research Paper
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              <a
                href="https://doi.org/10.5281/zenodo.19178899"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                className="hover:text-[var(--accent)] transition-colors"
              >
                &ldquo;Reyal or Fake?&rdquo; ↗
              </a>
            </h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "50ch" }}>
              Technical research on the risks of misidentifying AI-generated videos.
              Explores deepfake detection challenges and verification system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
