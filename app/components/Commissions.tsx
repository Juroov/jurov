// Server Component
// EYEBROW #2 — Commissions section (section 6 of 7, 2 eyebrows used total so far)

type Tier = {
  icon: string;
  title: string;
  description: string;
  startingAt: string;
  features: string[];
  accent: string;
  accentSubtle: string;
  accentBorder: string;
};

const tiers: Tier[] = [
  {
    icon: "🌐",
    title: "Website Design & Build",
    description:
      "Responsive landing pages, portfolios, business websites, and basic web applications using React, Next.js, or plain HTML/CSS/JS.",
    startingAt: "₱1,500",
    features: [
      "Responsive mobile-first layout",
      "Custom design — no templates",
      "Up to 5 sections",
      "Deployed & ready to share",
    ],
    accent: "#2563EB",
    accentSubtle: "#EFF6FF",
    accentBorder: "#BFDBFE",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Wireframes, high-fidelity mockups, and interactive Figma prototypes. Design systems, component libraries, and style guides.",
    startingAt: "₱800",
    features: [
      "Figma wireframes & mockups",
      "Interactive prototype",
      "Light & dark mode variants",
      "Handoff-ready components",
    ],
    accent: "#DB2777",
    accentSubtle: "#FDF2F8",
    accentBorder: "#FBCFE8",
  },
  {
    icon: "🤖",
    title: "Web Automation",
    description:
      "Python/Selenium scripts for data scraping, auto-filling forms, monitoring, or scheduled browser tasks.",
    startingAt: "₱1,200",
    features: [
      "Python + Selenium scripts",
      "CSV / Excel data input",
      "Scheduled automation",
      "Documentation included",
    ],
    accent: "#D97706",
    accentSubtle: "#FFFBEB",
    accentBorder: "#FDE68A",
  },
];

export default function Commissions() {
  return (
    <section
      id="commissions"
      style={{
        padding: "120px 24px",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* EYEBROW #2 */}
        <p
          className="reveal"
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            fontFamily: "var(--font-geist-mono)",
            marginBottom: 16,
          }}
        >
          Commissions
        </p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4" style={{ marginBottom: 64 }}>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            What I can build for you.
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              maxWidth: "38ch",
              lineHeight: 1.7,
            }}
          >
            I take on freelance commissions to build real skills while delivering real results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <div
              key={tier.title}
              className={`reveal ${i > 0 ? `reveal-delay-${i}` : ""} card`}
              style={{
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: 52, height: 52,
                  borderRadius: 12,
                  background: tier.accentSubtle,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 20,
                }}
              >
                {tier.icon}
              </div>

              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                  marginBottom: 10,
                }}
              >
                {tier.title}
              </h3>

              <p
                style={{
                  fontSize: 13,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                {tier.description}
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 28 }}>
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5" style={{ fontSize: 12, color: "var(--text-body)" }}>
                    <div
                      style={{
                        width: 16, height: 16,
                        borderRadius: "50%",
                        background: tier.accentSubtle,
                        border: `1px solid ${tier.accentBorder}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        fontSize: 9,
                        color: tier.accent,
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <div
                style={{
                  paddingTop: 20,
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: 11, color: "var(--text-label)", fontFamily: "var(--font-geist-mono)" }}>
                  Starting from
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: tier.accent,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {tier.startingAt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ strip */}
        <div
          className="reveal"
          style={{
            marginTop: 32,
            padding: "24px 32px",
            borderRadius: 12,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <p style={{ fontSize: 13, color: "var(--text-body)", lineHeight: 1.6 }}>
            <strong style={{ color: "var(--text-primary)" }}>Scope not listed?</strong> Custom quotes available for larger projects — full-stack apps, Figma-to-code conversions, ongoing maintenance retainers.
          </p>
          <a
            href="#contact"
            className="btn-outline"
            style={{ flexShrink: 0, padding: "8px 20px", fontSize: 12 }}
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
