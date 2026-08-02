"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import BackgroundLabel from "./BackgroundLabel";
import { SignatureDividerSvg } from "./SvgIcons";

const projects = [
  {
    title: "HakotLahat — Smart Garbage Collection System",
    type: "Full-Stack Web App",
    url: "https://www.hakotlahat.com/",
    description:
      "An intelligent municipal waste management platform. Residents submit photo reports, Gemini Vision AI classifies waste, and the system generates optimized collection routes.",
    role: "Led frontend architecture, designed the full UI system (dark dashboard, map views, resident portal).",
    tags: ["Next.js", "Supabase", "Gemini AI", "MapLibre", "TypeScript", "Tailwind CSS"],
    images: [
      "/real-hakot.png",
      "/project-hakotlahat.png",
      "/project-hakotlahat-tall.png",
    ],
  },
  {
    title: "Kuya Juan — Financial Advisor Portfolio",
    type: "Frontend · Commission",
    url: "https://clients-portfolio.vercel.app/",
    description:
      "A professional marketing site built to convert visitors into consultation bookings, showcasing services, credentials, and client testimonials.",
    role: "Designed and built the full landing page — from wireframe to deployed.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
    images: [
      "/real-juan.png",
      "/real-juan-how.png",
      "/real-juan-why.png",

    ],
  },
];

/* ── Image Carousel ── */
function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [next]);

  // Reset autoplay on manual interaction
  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
      resetAutoplay();
    }
  };

  return (
    <div>
      <div
        className="carousel-container"
        tabIndex={0}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { prev(); resetAutoplay(); }
          if (e.key === "ArrowRight") { next(); resetAutoplay(); }
        }}
        style={{ border: "1px solid var(--border)", borderRadius: 14 }}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="carousel-slide">
              <img
                src={src}
                alt={`Project screenshot ${i + 1}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Prev/Next arrows */}
        <button
          className="carousel-btn prev"
          onClick={() => { prev(); resetAutoplay(); }}
          aria-label="Previous image"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className="carousel-btn next"
          onClick={() => { next(); resetAutoplay(); }}
          aria-label="Next image"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? "active" : ""}`}
            onClick={() => { goTo(i); resetAutoplay(); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Individual project card ── */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <div
      className={`reveal ${index > 0 ? "reveal-delay-1" : ""}`}
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Text content */}
        <div className="flex-1" style={{ maxWidth: "50ch" }}>
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
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
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
              fontSize: 16,
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: 16,
            }}
          >
            {project.description}
          </p>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 15,
              color: "var(--text-primary)",
              lineHeight: 1.6,
              marginBottom: 20,
              fontStyle: "italic",
            }}
          >
            <strong style={{ color: "var(--text-secondary)", fontStyle: "normal", fontWeight: 500 }}>
              My role:
            </strong>{" "}
            {project.role}
          </p>

          <div style={{ marginBottom: 24 }}>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-secondary)", marginRight: 6 }}>Stack:</span>
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>

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
        </div>

        {/* Image carousel */}
        <div className="flex-1" style={{ minWidth: 0 }}>
          <ImageCarousel images={project.images} />
        </div>
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
        position: "relative",
      }}
    >
      <BackgroundLabel text="PROOF" />

      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", overflow: "visible", position: "relative", zIndex: 1 }}>

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
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: "56ch",
              lineHeight: 1.6,
            }}
          >
            Frontend-first projects with real clients and real users. Each one
            is fully deployed and live.
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
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "50ch" }}>
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
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "50ch" }}>
              Technical research on the risks of misidentifying AI-generated videos.
              Explores deepfake detection challenges and verification system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
