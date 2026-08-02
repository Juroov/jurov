// About section — fact-bullet format with Bebas Neue stats

export default function About() {
  const stats = [
    { value: "2+", label: "Commissions done", sub: "Local & remote" },
    { value: "1", label: "Internship", sub: "PRIME Philippines" },
    { value: "2", label: "Live projects", sub: "Fully deployed" },
  ];

  const facts = [
    { icon: "📍", text: "Based in Bulacan, Philippines" },
    { icon: "🎓", text: "BS Computer Engineering, Bulacan State University" },
    { icon: "💼", text: "Interned at PRIME Philippines (ArgoNavis fleet system)" },
    { icon: "🔧", text: "Freelance frontend dev & UI/UX designer" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "120px 6%",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Ghost watermark */}
      <div className="ghost-word" aria-hidden="true">
        ABOUT
      </div>

      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Headline */}
        <div className="section-reveal" style={{ marginBottom: 64 }}>
          <h2
            className="clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "var(--text-primary)",
              textShadow: "var(--headline-glow)",
            }}
          >
            I build things that
            <br />
            people actually{" "}
            <span className="headline-accent">
              use.
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Fact bullets */}
          <div className="reveal flex-1" style={{ maxWidth: "60ch" }}>
            <div className="stagger-children" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {facts.map((f, i) => (
                <div
                  key={i}
                  className="stagger-item"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                  }}
                >
                  <span style={{ fontSize: 20, lineHeight: 1.4 }}>{f.icon}</span>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 18,
                      color: "var(--text-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {f.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div
              className="reveal border-t border-[var(--border-strong)] pt-8 mt-10"
            >
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, fontWeight: 500, color: "var(--text-primary)", marginBottom: 4 }}>
                Bachelor of Science in Computer Engineering
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-secondary)", fontStyle: "italic" }}>
                Bulacan State University · 2023 – Present
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--accent)", fontStyle: "italic", marginTop: 8 }}>
                In Progress
              </p>
            </div>
          </div>

          {/* Stats with Bebas Neue numerals */}
          <div className="reveal flex-1 flex flex-col gap-12">
            <div className="stagger-children grid grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((s, i) => (
                <div key={s.label} className="stagger-item">
                  <p className="impact-number" style={{ marginBottom: 8 }}>
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      fontStyle: "italic",
                    }}
                  >
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
