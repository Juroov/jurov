// About section — fact-bullet format with Bebas Neue stats

export default function About() {
  const stats = [
    { value: "1", label: "Industry internship", sub: "PRIME Philippines" },
    { value: "4", label: "Technical projects", sub: "Web and embedded systems" },
    { value: "2027", label: "Expected graduation", sub: "BS Computer Engineering" },
  ];

  const facts = [
    { icon: "01", text: "Based in San Jose del Monte, Bulacan, Philippines" },
    { icon: "02", text: "Computer Engineering student at Bulacan State University" },
    { icon: "03", text: "Frontend developer and UI/UX designer working with React, Next.js, and TypeScript" },
    { icon: "04", text: "Builds responsive design systems, accessible interfaces, and full-stack web applications" },
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
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 18,
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                marginBottom: 32,
              }}
            >
              I combine hands-on frontend engineering with UI/UX design and a
              Computer Engineering foundation to create high-performance,
              user-centered products.
            </p>
            <div className="stagger-children about-facts">
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
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "var(--font-impact)",
                      fontSize: 18,
                      lineHeight: 1.5,
                      color: "var(--accent)",
                      minWidth: 24,
                    }}
                  >
                    {f.icon}
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 18,
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      maxWidth: "52ch",
                    }}
                  >
                    {f.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div
              className="reveal about-education"
            >
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, fontWeight: 500, color: "var(--text-primary)", marginBottom: 4 }}>
                Bachelor of Science in Computer Engineering
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-secondary)", fontStyle: "italic" }}>
                Bulacan State University · Expected 2027
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--accent)", fontStyle: "italic", lineHeight: 1.65, marginTop: 12 }}>
                Coursework: Software Engineering, Web Development, Data Structures, and System Architecture
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginTop: 14 }}>
                Research: <em>Reyal or Fake?</em>, covering detection frameworks and technical risks of synthetic AI-generated video media.
              </p>
            </div>
          </div>

          {/* Stats with Bebas Neue numerals */}
          <div className="reveal flex-1 flex flex-col gap-12">
            <div className="stagger-children grid grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((s) => (
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
