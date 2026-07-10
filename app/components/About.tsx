// Server Component — centered layout, no portrait
export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        {/* Centered large heading */}
        <h2
          className="reveal"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: 32,
          }}
        >
          I build things that<br />
          people actually{" "}
          <span style={{ color: "var(--accent)" }}>use.</span>
        </h2>

        {/* Body copy */}
        <div className="reveal reveal-delay-1" style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-body)",
              lineHeight: 1.85,
              marginBottom: 20,
            }}
          >
            I&apos;m a Computer Engineering student at Bulacan State University
            with hands-on experience in UI/UX Design, Frontend Development, and
            full-stack web applications. I recently interned at PRIME Philippines,
            where I contributed to enterprise web app development, built a reusable
            design system with dual-theme support, and worked within an Agile SDLC
            environment.
          </p>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-muted)",
              lineHeight: 1.85,
            }}
          >
            Beyond my internship, I take on freelance commissions — building
            websites, designing interfaces in Figma, and creating automation tools
            for real clients. Every commission is a chance to sharpen my craft
            while delivering something that genuinely works.
          </p>
        </div>

        {/* Horizontal divider */}
        <div
          className="reveal"
          style={{
            height: 1,
            background: "var(--border)",
            marginBottom: 48,
          }}
        />

        {/* Stats — horizontal row */}
        <div className="reveal reveal-delay-2 grid grid-cols-3 gap-6">
          {[
            { value: "2+", label: "Commissions done",  sub: "Local & remote" },
            { value: "1",  label: "Internship",         sub: "PRIME Philippines" },
            { value: "2",  label: "Live projects",      sub: "Fully deployed" },
          ].map((s) => (
            <div
              key={s.label}
              className="card"
              style={{ padding: "24px 20px", textAlign: "center" }}
            >
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "var(--accent)",
                  letterSpacing: "-0.05em",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 3,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--text-label)",
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.03em",
                }}
              >
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Education strip */}
        <div
          className="reveal reveal-delay-3"
          style={{
            marginTop: 24,
            padding: "20px 24px",
            borderRadius: 12,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 40, height: 40,
              borderRadius: 10,
              background: "var(--accent-subtle)",
              border: "1px solid var(--accent-border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              fontSize: 18,
            }}
          >
            🎓
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", marginBottom: 2 }}>
              Bachelor of Science in Computer Engineering
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font-geist-mono)" }}>
              Bulacan State University · 2022 – Present
            </p>
          </div>
          <div
            style={{
              marginLeft: "auto",
              padding: "4px 12px",
              borderRadius: 999,
              background: "var(--accent-subtle)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              In Progress
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
