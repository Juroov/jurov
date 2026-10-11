import BackgroundLabel from "./BackgroundLabel";
import ContactForm from "./ContactForm";

function WaveText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`wave-text ${className}`}>
      {text.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="wave-letter"
          style={{ animationDelay: `${index * 0.04}s` }}
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}
    </span>
  );
}

const socialLinks = [
  {
    label: "Email",
    href: "mailto:amarillelorrenz@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/Juroov",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/lorrenz.amarille.5/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <BackgroundLabel text="CONTACT" />

      <div className="contact-shell">
        <div className="contact-grid">
          <div className="contact-copy">
            <h2
              className="reveal clip-wipe"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                textShadow: "var(--headline-glow)",
              }}
            >
              Contact{" "}
              <span className="headline-accent">
                me.
              </span>
            </h2>

            <p className="reveal reveal-delay-1 contact-intro">
              Whether you need a website built from scratch, a UI system designed
              in Figma, or a browser automation script, tell me what you have in
              mind.
            </p>

            <div className="reveal reveal-delay-2 contact-socials">
              {socialLinks.map(({ label, href }) => {
                const external = href.startsWith("http");

                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="nav-link contact-social-link"
                  >
                    <WaveText text={`${label} ↗`} />
                  </a>
                );
              })}
            </div>

            <div className="reveal reveal-delay-3 contact-signature" aria-hidden="true">
              <svg width="48" height="56" viewBox="0 0 200 230" fill="none">
                <path
                  d="M100 14 L178 46 L178 112 C178 168 146 202 100 220 C54 202 22 168 22 112 L22 46 Z"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <text
                  x="100"
                  y="132"
                  textAnchor="middle"
                  fontFamily="Playfair Display, serif"
                  fontStyle="italic"
                  fontWeight="700"
                  fontSize="56"
                  fill="var(--text-primary)"
                >
                  LA
                </text>
              </svg>
            </div>

            <div className="reveal reveal-delay-2">
              <a
                href="mailto:amarillelorrenz@gmail.com?subject=Project%20Inquiry"
                className="btn-brand"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="reveal reveal-delay-1 contact-form-column">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
