// Server Component
import { ProjectPreviewSVG } from "./ProjectPreviewSVG";

const PALETTE = {
  emerald: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20",
  amber: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-500/20",
  orange: "bg-orange-50 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-500/20",
  red: "bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border-red-200 dark:border-red-500/20",
};

const projects = [
  {
    title: "HakotLahat — Smart Garbage Collection System",
    type: "Full-Stack Web App",
    colorTheme: "emerald" as keyof typeof PALETTE,
    url: "https://www.hakotlahat.com/",
    accentColor: "#10B981",
    // Mockup content rows: each row is an array of block widths
    mockupLines: [
      [{ width: "60%", color: "#10B981" }, { width: "25%" }],
      [{ width: "85%" }, { width: "45%" }],
      [{ width: "40%" }, { width: "50%" }],
      [{ width: "90%" }],
      [{ width: "55%", color: "#10B98180" }, { width: "30%" }],
      [{ width: "70%" }],
      [{ width: "35%" }, { width: "50%" }, { width: "10%" }],
      [{ width: "80%" }],
      [{ width: "45%" }, { width: "40%" }],
      [{ width: "65%" }],
    ],
    description:
      "An intelligent municipal waste management platform. Residents submit photo reports, Gemini Vision AI classifies waste, and the system generates optimized collection routes.",
    role: "Led frontend architecture, designed the full UI system (dark dashboard, map views, resident portal).",
    tags: ["Next.js", "Supabase", "Gemini AI", "MapLibre", "TypeScript", "Tailwind CSS", "Claude"],
  },
  {
    title: "Kuya Juan — Financial Advisor Portfolio",
    type: "Frontend · Commission",
    colorTheme: "amber" as keyof typeof PALETTE,
    url: "https://clients-portfolio.vercel.app/",
    accentColor: "#D97706",
    mockupLines: [
      [{ width: "70%", color: "#D97706" }],
      [{ width: "95%" }],
      [{ width: "50%" }, { width: "40%" }],
      [{ width: "80%" }],
      [{ width: "30%" }, { width: "55%", color: "#D9770650" }],
      [{ width: "75%" }],
      [{ width: "45%" }, { width: "45%" }],
      [{ width: "90%" }],
      [{ width: "60%" }],
      [{ width: "35%" }, { width: "50%" }],
    ],
    description:
      "A professional marketing site built to convert visitors into consultation bookings, showcasing services, credentials, and client testimonials.",
    role: "Designed and built the full landing page — from wireframe to deployed. Focused on trust signals, warm visual hierarchy, and mobile-first responsiveness.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: 8,
            }}
          >
            Websites &amp; systems<br />
            built from scratch.
          </h2>
          {/* SVG stroke-draw underline */}
          <svg className="heading-underline-svg" viewBox="0 0 400 8" preserveAspectRatio="none"
            style={{ maxWidth: 320, height: 8, marginBottom: 16 }} aria-hidden="true">
            <path className="heading-underline-path" d="M 2 4 Q 100 2 200 4 Q 300 6 398 4"
              vectorEffect="non-scaling-stroke" pathLength="1" />
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
            Frontend-first projects with real clients and real users. Each one is
            fully deployed and live — hover the previews to see the spaceship engage.
          </p>
        </div>

        {/* Main projects — stacked vertically */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal ${i > 0 ? "reveal-delay-1" : ""}`}
            >
              <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 items-start">
                {/* Spaceship SVG preview */}
                <div>
                  <ProjectPreviewSVG
                    url={project.url}
                    title={project.title}
                    accentColor={project.accentColor}
                    mockupLines={project.mockupLines}
                  />
                </div>

                {/* Content */}
                <div style={{ paddingTop: 8 }}>
                  <div style={{ marginBottom: 14 }}>
                    <span
                      className={`border ${PALETTE[project.colorTheme]}`}
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        borderRadius: 4,
                        fontFamily: "var(--font-geist-mono)",
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
                      lineHeight: 1.2,
                      marginBottom: 12,
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-body)",
                      lineHeight: 1.8,
                      marginBottom: 16,
                    }}
                  >
                    {project.description}
                  </p>

                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: 24,
                      fontStyle: "italic",
                    }}
                  >
                    <strong style={{ color: "var(--text-body)", fontStyle: "normal" }}>My role:</strong>{" "}
                    {project.role}
                  </p>

                  <div className="flex flex-wrap gap-2" style={{ marginBottom: 28 }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`border ${PALETTE[project.colorTheme]}`}
                        style={{
                          padding: "4px 10px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          fontFamily: "var(--font-geist-mono)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex"
                    style={{ fontSize: 13 }}
                  >
                    Visit live site
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 11L11 3M11 3H6M11 3v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting projects */}
        <div
          className="reveal grid md:grid-cols-2 gap-5"
          style={{ marginTop: 64, paddingTop: 64, borderTop: "1px solid var(--border)" }}
        >
          <div
            className="card"
            style={{ padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start" }}
          >
            {/* Inline SVG robot/automation icon */}
            <div
              className={`border ${PALETTE.orange}`}
              style={{
                width: 44, height: 44, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="5" y="9" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <circle cx="9" cy="14" r="1.5" fill="currentColor"/>
                <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
                <path d="M9 9V7a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.8"/>
                <line x1="12" y1="4" x2="12" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span
                className={`border ${PALETTE.orange}`}
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  borderRadius: 4, fontFamily: "var(--font-geist-mono)",
                  display: "inline-block", marginBottom: 8,
                }}
              >
                Automation · Python
              </span>
              <h3
                style={{
                  fontSize: 15, fontWeight: 700, color: "var(--text-primary)",
                  letterSpacing: "-0.01em", marginBottom: 6,
                }}
              >
                Web Automation &amp; Data Scraping Scripts
              </h3>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
                Python + Selenium tool that reads real estate data from CSV/Excel and
                auto-fills property listings into a WordPress staging site — eliminating
                manual input entirely.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{ padding: "28px 32px", display: "flex", gap: 20, alignItems: "flex-start" }}
          >
            {/* Inline SVG document icon */}
            <div
              className={`border ${PALETTE.red}`}
              style={{
                width: 44, height: 44, borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                  stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <span
                className={`border ${PALETTE.red}`}
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "2px 8px",
                  borderRadius: 4, fontFamily: "var(--font-geist-mono)",
                  display: "inline-block", marginBottom: 8,
                }}
              >
                Research Paper
              </span>
              <h3
                style={{
                  fontSize: 15, fontWeight: 700, color: "var(--text-primary)",
                  letterSpacing: "-0.01em", marginBottom: 6,
                }}
              >
                <a
                  href="https://doi.org/10.5281/zenodo.19178899"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}
                  className="hover:text-blue-500 transition-colors"
                >
                  &ldquo;Reyal or Fake?&rdquo;
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2.5 10.5L10.5 2.5M10.5 2.5H5.5M10.5 2.5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </h3>
              <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.7 }}>
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
