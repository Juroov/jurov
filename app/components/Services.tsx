"use client";

import BackgroundLabel from "./BackgroundLabel";
import ScrollWaveCurtain from "./ScrollWaveCurtain";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "Building responsive, high-performance, and dynamic user interfaces using React, Next.js, and modern web technologies. I bring designs to life with clean, maintainable code and smooth animations.",
    price: "Starting at $1,500",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and aesthetically pleasing digital experiences. From initial wireframing and prototyping in Figma to complete, scalable design systems tailored to your brand identity.",
    price: "Starting at $1,200",
  },
  {
    id: "03",
    title: "Web Optimization",
    description:
      "Enhancing website speed, accessibility, and SEO to ensure your platform not only looks incredible but also ranks well and provides a flawless experience across all devices and browsers.",
    price: "Starting at $800",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "80px 6%",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden", // Important for curtain
      }}
    >
      <ScrollWaveCurtain color="var(--bg-card)" />
      <BackgroundLabel text="SERVICES" />

      <div
        style={{
          maxWidth: 1180,
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-reveal reveal">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            What I Do
          </div>
          <h2
            className="clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              marginBottom: 80,
              textShadow: "var(--headline-glow)",
            }}
          >
            My specialized <span className="headline-accent">services.</span>
          </h2>
        </div>

        <div
          className="stagger-children"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 24,
          }}
        >
          {services.map((svc, index) => {
            // Apply different brandbook background gradients based on index
            let bgStyle = "var(--bg-card)";
            if (index === 0) {
              bgStyle = "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(196,30,58,0.35), transparent 70%), var(--bg-card)";
            } else if (index === 1) {
              bgStyle = "var(--bg-card)";
            } else if (index === 2) {
              bgStyle = "linear-gradient(160deg, #1D1313, var(--bg-card))";
            }

            return (
              <div
                key={svc.id}
                className="stagger-item brand-card"
                style={{
                  aspectRatio: "4/5",
                  background: bgStyle,
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                  transition: "transform 0.5s cubic-bezier(0.2, 0.7, 0.3, 1), border-color 0.5s ease, box-shadow 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px)";
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(196,30,58,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Large Numeral (Impact / Data) */}
                <div
                  style={{
                    fontFamily: "var(--font-impact), 'Bebas Neue', sans-serif",
                    fontSize: "4rem",
                    color: "var(--accent-bright)", // Ember Bright per brandbook stats
                    textShadow: "var(--accent-text-glow)",
                    lineHeight: 1,
                    letterSpacing: "0.04em",
                    marginBottom: "auto", // Pushes the rest to the bottom
                  }}
                >
                  {svc.id}
                </div>

                {/* Service Tag / Label */}
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 11,
                    letterSpacing: ".25em",
                    textTransform: "uppercase",
                    color: "var(--text-faint)", // Ash Dim
                    marginBottom: 12,
                  }}
                >
                  Service Offering
                </div>

                {/* Service Title (Display Hero/Wordmark style) */}
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "var(--text-primary)", // Bone
                    textShadow: "var(--headline-glow-ivory, 0 0 40px rgba(244,238,231,0.08), 0 0 80px rgba(244,238,231,0.04))",
                    lineHeight: 1.1,
                    marginBottom: 16,
                  }}
                >
                  {svc.title}
                </h3>

                {/* Description (Body Copy) */}
                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 14,
                    color: "var(--text-secondary)", // Ash
                    lineHeight: 1.6,
                  }}
                >
                  {svc.description}
                </p>

                {/* Price Tag */}
                <div
                  style={{
                    marginTop: 24,
                    paddingTop: 16,
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 11,
                      letterSpacing: ".25em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                    }}
                  >
                    Investment
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--accent)", // Ember
                    }}
                  >
                    {svc.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
