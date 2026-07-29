// Server Component
import { WebsiteIcon, FigmaIcon, BotIcon } from "./SvgIcons";

type Tier = {
  title: string;
  description: string;
  startingAt: string;
  features: string[];
  icon: React.ComponentType;
};

const tiers: Tier[] = [
  {
    title: "Website Design & Build",
    icon: WebsiteIcon,
    description:
      "Responsive landing pages, portfolios, business websites, and basic web applications using React, Next.js, or plain HTML/CSS/JS.",
    startingAt: "₱1,500",
    features: [
      "Responsive mobile-first layout",
      "Custom design — no templates",
      "Up to 5 sections",
      "Deployed & ready to share",
    ],
  },
  {
    title: "UI/UX Design",
    icon: FigmaIcon,
    description:
      "Wireframes, high-fidelity mockups, and interactive Figma prototypes. Design systems, component libraries, and style guides.",
    startingAt: "₱800",
    features: [
      "Figma wireframes & mockups",
      "Interactive prototype",
      "Light & dark mode variants",
      "Handoff-ready components",
    ],
  },
  {
    title: "Web Automation",
    icon: BotIcon,
    description:
      "Python/Selenium scripts for data scraping, auto-filling forms, monitoring, or scheduled browser tasks.",
    startingAt: "₱1,200",
    features: [
      "Python + Selenium scripts",
      "CSV / Excel data input",
      "Scheduled automation",
      "Documentation included",
    ],
  },
];

export default function Commissions() {
  return (
    <section
      id="commissions"
      style={{
        padding: "120px 6%",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto" }}>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12" style={{ marginBottom: 96 }}>
          <h2
            className="reveal clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              textShadow: "var(--headline-glow)",
            }}
          >
            What I can build{" "}
            <span className="headline-accent">
              for you.
            </span>
          </h2>
          <p
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: 20,
              color: "var(--text-secondary)",
              maxWidth: "38ch",
              lineHeight: 1.6,
            }}
          >
            I take on freelance commissions to build real skills while delivering real results.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.title}
                className={`row-reveal ${i > 0 ? `row-reveal-d${i}` : ""} flex-1`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "1px solid var(--border)",
                  paddingTop: 32,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div className="icon-box">
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-ui)",
                      fontSize: 28,
                      fontWeight: 500,
                      color: "var(--text-primary)",
                    }}
                  >
                    {tier.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 18,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: 32,
                    flex: 1,
                  }}
                >
                  {tier.description}
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-ui)", fontSize: 16, color: "var(--text-primary)" }}>
                      — {f}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    paddingTop: 24,
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "var(--text-faint)", fontStyle: "italic" }}>
                    Starting from
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: "var(--accent)",
                      textShadow: "0 0 20px var(--accent-glow)",
                    }}
                  >
                    {tier.startingAt}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ strip */}
        <div
          className="reveal flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{
            marginTop: 96,
            paddingTop: 48,
            borderTop: "1px solid var(--border)",
          }}
        >
          <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6, maxWidth: "60ch" }}>
            <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Scope not listed?</strong> Custom quotes available for larger projects — full-stack apps, Figma-to-code conversions, ongoing maintenance retainers.
          </p>
          <a
            href="#contact"
            className="btn-primary"
            style={{ flexShrink: 0 }}
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
