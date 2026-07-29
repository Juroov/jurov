// About section

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 6%",
        background: "var(--bg)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto" }}>
        {/* Headline — clip-wipe reveal */}
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
            marginBottom: 64,
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

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Body copy */}
          <div className="reveal flex-1" style={{ maxWidth: "60ch" }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 20,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                marginBottom: 32,
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
                fontFamily: "var(--font-ui)",
                fontSize: 20,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Beyond my internship, I take on freelance commissions — building
              websites, designing interfaces in Figma, and creating automation tools
              for real clients. Every commission is a chance to sharpen my craft
              while delivering something that genuinely works.
            </p>
          </div>

          {/* Editorial Info Column */}
          <div className="reveal flex-1 flex flex-col gap-12">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {[
                { value: "2+", label: "Commissions done",  sub: "Local & remote",     delay: "d1" },
                { value: "1",  label: "Internship",         sub: "PRIME Philippines",  delay: "d2" },
                { value: "2",  label: "Live projects",      sub: "Fully deployed",     delay: "d3" },
              ].map((s) => (
                <div key={s.label} className={`row-reveal row-reveal-${s.delay}`}>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 48,
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: "var(--accent)",
                      lineHeight: 1,
                      marginBottom: 8,
                      textShadow: "0 0 20px var(--accent-glow)",
                    }}
                  >
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

            {/* Education */}
            <div
              className="reveal border-t border-[var(--border-strong)] pt-8 mt-4"
            >
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, fontWeight: 500, color: "var(--text-primary)", marginBottom: 4 }}>
                Bachelor of Science in Computer Engineering
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-secondary)", fontStyle: "italic" }}>
                Bulacan State University · 2022 – Present
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--accent)", fontStyle: "italic", marginTop: 8 }}>
                In Progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
