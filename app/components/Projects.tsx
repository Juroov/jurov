// Server Component
import { BrowserFrame } from "./BrowserFrame";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const projects = [
  {
    title: "HakotLahat — Smart Garbage Collection System",
    type: "Full-Stack Web App",
    typeColor: "#059669",
    typeBg: "#ECFDF5",
    typeBorder: "#A7F3D0",
    url: "https://www.hakotlahat.com/",
    fallback: "/real-hakot.png",
    accentColor: "#10B981",
    themeBg: "#0f1117",
    description:
      "An intelligent municipal waste management platform. Residents submit photo reports, Gemini Vision AI classifies waste, and the system generates optimized collection routes.",
    role: "Led frontend architecture, designed the full UI system (dark dashboard, map views, resident portal).",
    tags: ["Next.js", "Supabase", "Gemini AI", "MapLibre", "TypeScript", "Tailwind CSS","Claude"],
    tagColor: "#059669",
    tagBg: "#ECFDF5",
    tagBorder: "#A7F3D0",
  },
  {
    title: "Kuya Juan — Financial Advisor Portfolio",
    type: "Frontend · Commission",
    typeColor: "#B45309",
    typeBg: "#FFFBEB",
    typeBorder: "#FCD34D",
    url: "https://clients-portfolio.vercel.app/",
    fallback: "/real-juan.png",
    accentColor: "#D97706",
    themeBg: "#ffffff",
    description:
      "A professional marketing site built to convert visitors into consultation bookings, showcasing services, credentials, and client testimonials.",
    role: "Designed and built the full landing page — from wireframe to deployed. Focused on trust signals, warm visual hierarchy, and mobile-first responsiveness.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
    tagColor: "#B45309",
    tagBg: "#FEF3C7",
    tagBorder: "#FCD34D",
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
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 72 }}>
          <h2
            className="reveal"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: 12,
            }}
          >
            Websites &amp; systems<br />
            built from scratch.
          </h2>
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
            fully deployed and live — hover the previews to explore.
          </p>
        </div>

        {/* Main projects — stacked vertically with consistent left-aligned layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal ${i > 0 ? "reveal-delay-1" : ""}`}
            >
              <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 items-start">
                {/* Browser preview */}
                <div>
                  <BrowserFrame
                    url={project.url}
                    fallbackImage={project.fallback}
                    title={project.title}
                    accentColor={project.accentColor}
                    themeBg={project.themeBg}
                  />
                </div>

                {/* Content */}
                <div style={{ paddingTop: 8 }}>
                  <div style={{ marginBottom: 14 }}>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: project.typeColor,
                        background: project.typeBg,
                        border: `1px solid ${project.typeBorder}`,
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
                        style={{
                          padding: "4px 10px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          color: project.tagColor,
                          background: project.tagBg,
                          border: `1px solid ${project.tagBorder}`,
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
                    <ArrowUpRight size={14} />
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
            <div
              style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#FFF7ED", border: "1px solid #FED7AA",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontSize: 20,
              }}
            >
              🤖
            </div>
            <div>
              <span
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#EA580C",
                  background: "#FFF7ED", padding: "2px 8px",
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
            <div
              style={{
                width: 44, height: 44, borderRadius: 10,
                background: "#FEF2F2", border: "1px solid #FECACA",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, fontSize: 20,
              }}
            >
              📄
            </div>
            <div>
              <span
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#DC2626",
                  background: "#FEF2F2", padding: "2px 8px",
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
                &ldquo;Reyal or Fake?&rdquo;
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
