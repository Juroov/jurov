"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const projects = [
  {
    title: "HakotLahat",
    subtitle: "Smart Garbage Collection System",
    type: "Full-Stack Web App",
    url: "https://www.hakotlahat.com/",
    images: ["/real-hakot.png", "/project-hakotlahat.png", "/project-hakotlahat-tall.png"],
    description:
      "An intelligent municipal waste management platform. Residents submit photo reports, Gemini Vision AI classifies waste, and the system generates optimized collection routes.",
    role: "Led frontend architecture, designed the full UI system (dark dashboard, map views, resident portal).",
    tags: ["Next.js", "Supabase", "Gemini AI", "MapLibre", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Kuya Juan",
    subtitle: "Financial Advisor Portfolio",
    type: "Frontend · Commission",
    url: "https://clients-portfolio.vercel.app/",
    images: ["/real-juan.png", "/project-kuyajuan.png", "/project-kuyajuan-tall.png"],
    description:
      "A professional marketing site built to convert visitors into consultation bookings, showcasing services, credentials, and client testimonials.",
    role: "Designed and built the full landing page — from wireframe to deployed. Focused on trust signals, warm visual hierarchy, and mobile-first responsiveness.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
  },
];

/* ── Image Carousel ── */
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef(0);
  const touchDelta = useRef(0);

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(images.length - 1, idx));
      setCurrent(clamped);
    },
    [images.length]
  );

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  // Touch support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchDelta.current = e.touches[0].clientX - touchStart.current;
  };
  const onTouchEnd = () => {
    if (touchDelta.current > 50) prev();
    else if (touchDelta.current < -50) next();
  };

  // Keyboard
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const el = trackRef.current?.parentElement;
    el?.addEventListener("keydown", handler);
    return () => el?.removeEventListener("keydown", handler);
  });

  return (
    <div
      className="carousel-container"
      tabIndex={0}
      role="region"
      aria-label={`${title} screenshots`}
    >
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
              style={{ width: "100%", height: "auto", display: "block" }}
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
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 12,
              fontStyle: "italic",
              color: "var(--text-faint)",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            {project.type}
          </p>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 6,
              textShadow: "var(--headline-glow)",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 16,
              color: "var(--accent-bright)",
              fontStyle: "italic",
              marginBottom: 20,
            }}
          >
            {project.subtitle}
          </p>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 16,
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              marginBottom: 16,
              maxWidth: "50ch",
            }}
          >
            {project.description}
          </p>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 14,
              color: "var(--text-primary)",
              lineHeight: 1.6,
              marginBottom: 24,
              fontStyle: "italic",
              maxWidth: "50ch",
            }}
          >
            <strong
              style={{
                color: "var(--text-secondary)",
                fontStyle: "normal",
                fontWeight: 500,
              }}
            >
              My role:
            </strong>{" "}
            {project.role}
          </p>

          <div style={{ marginBottom: 28 }}>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 12,
                color: "var(--text-faint)",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                marginRight: 8,
              }}
            >
              Stack:
            </span>
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
            className="btn-ghost"
            style={{ fontSize: 12, padding: "12px 24px" }}
          >
            Visit live site
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
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
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
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
      <div className="ghost-word" aria-hidden="true">PROOF</div>

      <div
        style={{
          maxWidth: 1180,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: 80 }}>
          <h2
            className="clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: 20,
              textShadow: "var(--headline-glow)",
            }}
          >
            Websites &amp; systems
            <br />
            built from <span className="headline-accent">scratch.</span>
          </h2>

          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: "50ch",
              lineHeight: 1.6,
            }}
          >
            Frontend-first projects with real clients and real users.
            Each one is fully deployed and live.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Supporting projects */}
        <div
          className="reveal flex flex-col md:flex-row gap-16"
          style={{
            marginTop: 100,
            paddingTop: 64,
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="flex-1">
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 12,
                fontStyle: "italic",
                color: "var(--text-faint)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Automation · Python
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
                fontWeight: 700,
                fontStyle: "italic",
                color: "var(--text-primary)",
                marginBottom: 12,
              }}
            >
              Web Automation &amp; Data Scraping Scripts
            </h3>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 16,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "50ch",
              }}
            >
              Python + Selenium tool that reads real estate data from CSV/Excel
              and auto-fills property listings into a WordPress staging site —
              eliminating manual input entirely.
            </p>
          </div>

          <div className="flex-1">
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 12,
                fontStyle: "italic",
                color: "var(--text-faint)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Research Paper
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 22,
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
                  transition: "color 0.2s ease",
                }}
                onMouseOver={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent)")
                }
                onMouseOut={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "inherit")
                }
              >
                &ldquo;Reyal or Fake?&rdquo; ↗
              </a>
            </h3>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 16,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "50ch",
              }}
            >
              Technical research on the risks of misidentifying AI-generated
              videos. Explores deepfake detection challenges and verification
              system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
