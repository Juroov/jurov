// About section — Minimal bullet-fact layout with Bebas Neue stats

export default function About() {
  const facts = [
    { icon: "📍", text: "Based in Bulacan, Philippines" },
    { icon: "🎓", text: "BS Computer Engineering, Bulacan State University" },
    { icon: "💼", text: "Interned at PRIME Philippines (ArgoNavis fleet system)" },
    { icon: "🔧", text: "Freelance frontend dev & UI/UX designer" },
  ];

  const stats = [
    { value: "2+", label: "Commissions Done" },
    { value: "1", label: "Internship" },
    { value: "2", label: "Live Projects" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "140px 6%",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Ghost watermark */}
      <div className="ghost-word" aria-hidden="true">ABOUT</div>

      <div style={{ maxWidth: 1180, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Headline */}
        <h2
          className="clip-wipe"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: "var(--text-primary)",
            marginBottom: 64,
            textShadow: "var(--headline-glow)",
          }}
        >
          I build things that people
          <br />
          actually <span className="headline-accent">use.</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Fact bullets */}
          <div className="flex-1" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {facts.map((fact, i) => (
              <div
                key={fact.text}
                className={`row-reveal row-reveal-d${i + 1}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    lineHeight: 1.4,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {fact.icon}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 18,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {fact.text}
                </p>
              </div>
            ))}

            {/* Education */}
            <div
              className="row-reveal"
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 28,
                marginTop: 8,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                }}
              >
                Bachelor of Science in Computer Engineering
              </p>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  fontStyle: "italic",
                }}
              >
                Bulacan State University · 2022 – Present
              </p>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: 11,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  fontWeight: 600,
                  marginTop: 6,
                  display: "inline-block",
                }}
              >
                In Progress
              </span>
            </div>
          </div>

          {/* Stats — oversized Bebas Neue numerals */}
          <div
            className="flex-1"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 32,
              alignContent: "start",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`row-reveal row-reveal-d${i + 1}`}
                style={{ textAlign: "center" }}
              >
                <p className="stat-num">{s.value}</p>
                <p className="stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
