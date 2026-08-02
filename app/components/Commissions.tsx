// Server Component
import { WebsiteIcon, FigmaIcon, BotIcon } from "./SvgIcons";
import BackgroundLabel from "./BackgroundLabel";

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
      "Responsive landing pages, portfolios, business websites, and basic web applications.",
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
        padding: "64px 6%",
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Section heading */}
        <div className="section-reveal reveal" style={{ marginBottom: 64 }}>
          <h2
            className="clip-wipe"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 900,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              textShadow: "var(--headline-glow)",
            }}
          >
            Open for{" "}
            <span style={{ color: "var(--accent-bright)", textShadow: "0 0 40px var(--accent-glow)" }}>
              commissions.
            </span>
          </h2>
        </div>

        {/* Staggered tier cards */}
        <div className="stagger-children flex flex-col md:flex-row gap-12">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.title}
                className="stagger-item flex-1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "1px solid var(--border)",
                  paddingTop: 32,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                  <div className="icon-box" style={{ background: "rgba(196,30,58,0.1)", border: "1px solid rgba(196,30,58,0.3)" }}>
                    <Icon />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 32,
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.1,
                    }}
                  >
                    {tier.title}
                  </h3>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: 16,
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    marginBottom: 36,
                    flex: 1,
                  }}
                >
                  {tier.description}
                </p>

                <ul style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 48 }}>
                  {tier.features.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-ui)", fontSize: 15, color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <span style={{ color: "var(--accent)" }}>—</span>
                      <span>{f}</span>
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
                  <span style={{ 
                    fontFamily: "var(--font-ui)", 
                    fontSize: 11, 
                    fontWeight: 600, 
                    letterSpacing: "0.24em", 
                    textTransform: "uppercase", 
                    color: "var(--text-faint)" 
                  }}>
                    Starting from
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 28,
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: "var(--accent)",
                      textShadow: "0 0 20px var(--accent-glow)",
                      letterSpacing: "-0.02em",
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
