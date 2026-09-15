"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import BackgroundLabel from "./BackgroundLabel";
import ScrollWaveCurtain from "./ScrollWaveCurtain";

/* ─────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────── */
const projects = [
  {
    path: "01",
    title: "HakotLahat",
    subtitle: "Smart Garbage Collection System",
    type: "Full-Stack Web App",
    url: "https://www.hakotlahat.com/",
    tagline: "AI-powered waste management. Photo reports, Gemini Vision, optimised routes.",
    description:
      "An intelligent platform for municipal waste management. Residents submit photo reports, Gemini Vision AI classifies waste type, and the system generates optimised collection routes — reducing fuel costs and idle time across the city.",
    role: "Led frontend architecture and designed the full UI system: dark dashboard, map views, and resident portal.",
    tags: ["Next.js", "Supabase", "Gemini AI", "MapLibre", "TypeScript", "Tailwind CSS"],
    badge: "Live · PH",
    images: ["/real-hakot.png", "/project-hakotlahat.png", "/project-hakotlahat-tall.png"],
    accent: "#C41E3A",
  },
  {
    path: "02",
    title: "Kuya Juan",
    subtitle: "Financial Advisor Portfolio",
    type: "Frontend · Commission",
    url: "https://clients-portfolio.vercel.app/",
    tagline: "Marketing site that converts visitors into consultation bookings.",
    description:
      "A professional marketing site built to convert visitors into consultation bookings — showcasing services, credentials, and client testimonials with a clean, trust-first layout.",
    role: "Designed and built the full landing page — from wireframe to deployed production.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
    badge: "Live · PH",
    images: ["/real-juan.png", "/real-juan-how.png", "/real-juan-why.png"],
    accent: "#C41E3A",
  },
  {
    path: "03",
    title: "FRO Solar",
    subtitle: "Solar Energy Solutions Company",
    type: "Frontend · Commission",
    url: "https://frosolar.vercel.app/",
    tagline: "Engineered monocrystalline solar & storage. 28 yrs · 175 MW · 7 countries.",
    description:
      "A high-converting marketing site for FRO Solar — a Philippine solar engineering firm with 28 years of experience and 175 MW of commissioned capacity. Features an immersive path gallery of four solar systems, live power-flow simulations, and a full certification portal.",
    role: "Designed and developed the full site — brand direction, interactive system explorer, and deployed production.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Vercel", "Responsive Design"],
    badge: "Live · PH",
    images: [
      "/frosolar-hero.png",
      "/frosolar-services.png",
      "/frosolar-install.png",
      "/frosolar-paths.png",
    ],
    accent: "#22C55E",
  },
];

/* ─────────────────────────────────────────────
   IMAGE CAROUSEL
───────────────────────────────────────────── */
function ImageCarousel({
  images,
  accent,
}: {
  images: string[];
  accent: string;
}) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number) => setCurrent((idx + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    autoplayRef.current = setInterval(next, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [next]);

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(next, 5000);
  };

  return (
    <div>
      <div
        className="carousel-container"
        tabIndex={0}
        onTouchStart={(e) => {
          touchStart.current = e.targetTouches[0].clientX;
        }}
        onTouchMove={(e) => {
          touchEnd.current = e.targetTouches[0].clientX;
        }}
        onTouchEnd={() => {
          const diff = touchStart.current - touchEnd.current;
          if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
            resetAutoplay();
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") { prev(); resetAutoplay(); }
          if (e.key === "ArrowRight") { next(); resetAutoplay(); }
        }}
        style={{ borderRadius: 14, outline: "none" }}
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

      <div className="carousel-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? " active" : ""}`}
            onClick={() => { goTo(i); resetAutoplay(); }}
            aria-label={`Go to slide ${i + 1}`}
            style={
              i === current
                ? { background: accent, boxShadow: `0 0 8px ${accent}88` }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PATH TAB BUTTON
───────────────────────────────────────────── */
function PathTab({
  project,
  isActive,
  onClick,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`pg-tab${isActive ? " pg-tab--active" : ""}`}
      onClick={onClick}
      aria-pressed={isActive}
      style={isActive ? { borderColor: project.accent, color: project.accent } : {}}
    >
      <span className="pg-tab-path" style={isActive ? { color: project.accent } : {}}>
        {project.path}
      </span>
      <span className="pg-tab-info">
        <span className="pg-tab-title">{project.title}</span>
        <span className="pg-tab-sub">{project.type}</span>
      </span>
      {isActive && (
        <span
          className="pg-tab-dot"
          style={{ background: project.accent, boxShadow: `0 0 6px ${project.accent}` }}
        />
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────
   EXPANDED PANEL
───────────────────────────────────────────── */
function PathPanel({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="pg-panel">
      <div className="pg-panel-media">
        <div
          className="pg-panel-badge"
          style={{ borderColor: `${project.accent}55`, color: project.accent }}
        >
          <span className="pg-badge-dot" style={{ background: project.accent }} />
          {project.badge}
        </div>
        <ImageCarousel images={project.images} accent={project.accent} />
      </div>

      <div className="pg-panel-details">
        <p className="pg-detail-type">{project.type}</p>

        <h3 className="pg-detail-title">
          {project.title}
          <br />
          <span className="pg-detail-subtitle">{project.subtitle}</span>
        </h3>

        <p className="pg-detail-tagline" style={{ color: project.accent }}>
          {project.tagline}
        </p>

        <p className="pg-detail-desc">{project.description}</p>

        <div className="pg-detail-role">
          <span className="pg-role-label">My role</span>
          {project.role}
        </div>

        <div className="pg-detail-stack">
          <span className="pg-stack-label">Stack</span>
          <div className="pg-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ "--btn-accent": project.accent } as React.CSSProperties}
        >
          Visit live site
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 11L11 3M11 3H6M11 3v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PATH GALLERY — main section
───────────────────────────────────────────── */
export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (i: number) => {
    setActiveIdx(i);
    if (panelRef.current && window.innerWidth < 900) {
      panelRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <section
      id="projects"
      style={{
        padding: "80px 6%",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ScrollWaveCurtain color="var(--bg)" />
      <BackgroundLabel text="PROOF" />

      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <div style={{ marginBottom: 64 }}>
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
            <span className="headline-accent">scratch.</span>
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

        {/* PATH GALLERY */}
        <div className="reveal reveal-delay-1 pg-root">
          <div className="pg-tabs" role="tablist" aria-label="Projects">
            {projects.map((p, i) => (
              <PathTab
                key={p.path}
                project={p}
                isActive={activeIdx === i}
                onClick={() => handleTabClick(i)}
              />
            ))}
          </div>

          <div className="pg-panel-wrap" ref={panelRef}>
            {projects.map((p, i) => (
              <div
                key={p.path}
                className={`pg-panel-animated${activeIdx === i ? " pg-panel-animated--visible" : ""}`}
                aria-hidden={activeIdx !== i}
              >
                {activeIdx === i && <PathPanel project={p} />}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting projects */}
        <div
          className="reveal flex flex-col md:flex-row gap-16"
          style={{ marginTop: 120, paddingTop: 80, borderTop: "1px solid var(--border)" }}
        >
          <div className="flex-1">
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontStyle: "italic", color: "var(--text-faint)", marginBottom: 12 }}>
              Automation · Python
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, fontStyle: "italic", color: "var(--text-primary)", marginBottom: 12 }}>
              Web Automation &amp; Data Scraping Scripts
            </h3>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "50ch" }}>
              Python + Selenium tool that reads real estate data from CSV/Excel and
              auto-fills property listings into a WordPress staging site — eliminating
              manual input entirely.
            </p>
          </div>

          <div className="flex-1">
            <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, fontStyle: "italic", color: "var(--text-faint)", marginBottom: 12 }}>
              Research Paper
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, fontStyle: "italic", color: "var(--text-primary)", marginBottom: 12 }}>
              <a
                href="https://doi.org/10.5281/zenodo.19178899"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
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
