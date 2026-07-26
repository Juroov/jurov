// About section

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>

        {/* Headline — clip-wipe reveal */}
        <h2
          className="clip-wipe"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.035em",
            lineHeight: 1.1,
            color: "var(--text-primary)",
            fontFamily: "var(--font-inter)",
            textShadow: "0 0 40px var(--accent-glow)",
            marginBottom: 32,
          }}
        >
          I build things that
          <br />
          people actually{" "}
          <span
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontWeight: 900,
              textShadow: "0 0 50px var(--accent-glow)",
            }}
          >
            use.
          </span>
        </h2>

        {/* Animated SVG underline */}
        <svg
          className="heading-underline-svg"
          viewBox="0 0 300 8"
          preserveAspectRatio="none"
          style={{ maxWidth: 220, height: 8, marginBottom: 24 }}
          aria-hidden="true"
        >
          <path
            className="heading-underline-path"
            d="M 2 4 Q 75 2 150 4 Q 225 6 298 4"
            vectorEffect="non-scaling-stroke"
            pathLength="1"
          />
        </svg>

        {/* Body copy */}
        <div className="reveal reveal-delay-1" style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: 16,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
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
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.85,
            }}
          >
            Beyond my internship, I take on freelance commissions — building
            websites, designing interfaces in Figma, and creating automation tools
            for real clients. Every commission is a chance to sharpen my craft
            while delivering something that genuinely works.
          </p>
        </div>

        {/* Signature SVG divider */}
        <div className="reveal" style={{ marginBottom: 48, display: "flex", justifyContent: "center" }}>
          <svg viewBox="0 0 500 32" fill="none" style={{ width: "100%", maxWidth: 500, height: 32, overflow: "visible" }} aria-hidden="true">
            <defs>
              <linearGradient id="sig-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="20%" stopColor="var(--accent)" stopOpacity="0.7" />
                <stop offset="50%" stopColor="var(--accent)" stopOpacity="1" />
                <stop offset="80%" stopColor="var(--accent)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
              <filter id="sig-glow-f">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <line x1="0" y1="16" x2="500" y2="16" stroke="url(#sig-grad)" strokeWidth="0.6" />
            <path
              d="M 60 16 C 100 8, 150 6, 200 14 C 240 20, 280 22, 320 16 C 360 10, 400 8, 440 16"
              stroke="var(--accent)"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              filter="url(#sig-glow-f)"
            />
            <circle cx="440" cy="16" r="3.5" fill="var(--accent)">
              <animate attributeName="opacity" values="0;1;0.6;1" dur="0.6s" begin="0.3s" fill="freeze" />
              <animate attributeName="r" values="3.5;5;3.5" dur="1.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Stats — row-reveal stagger */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { value: "2+", label: "Commissions done",  sub: "Local & remote",     delay: "d1" },
            { value: "1",  label: "Internship",         sub: "PRIME Philippines",  delay: "d2" },
            { value: "2",  label: "Live projects",      sub: "Fully deployed",     delay: "d3" },
          ].map((s) => (
            <div
              key={s.label}
              className={`card row-reveal row-reveal-${s.delay}`}
              style={{ padding: "24px 20px", textAlign: "center" }}
            >
              <p
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  fontFamily: "var(--font-playfair)",
                  fontStyle: "italic",
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
                  fontFamily: "var(--font-inter)",
                  marginBottom: 3,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--text-faint)",
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
            background: "var(--bg-card)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              width: 32, height: 32,
              borderRadius: 8,
              background: "var(--accent-glow)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
              color: "var(--accent)",
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontWeight: 900,
              fontSize: 18,
            }}
          >
            E
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", fontFamily: "var(--font-inter)", marginBottom: 2 }}>
              Bachelor of Science in Computer Engineering
            </p>
            <p style={{ fontSize: 12, color: "var(--text-secondary)", fontFamily: "var(--font-geist-mono)" }}>
              Bulacan State University · 2022 – Present
            </p>
          </div>
          <div
            style={{
              marginLeft: "auto",
              padding: "4px 12px",
              borderRadius: 999,
              background: "var(--accent-glow)",
              border: "1px solid var(--border)",
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "var(--accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-inter)",
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
