"use client";

import { useState, useRef, FormEvent, useEffect } from "react";
import BackgroundLabel from "./BackgroundLabel";
import ScrollWaveCurtain from "./ScrollWaveCurtain";

/* ── Wave text helper ── */
function WaveText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`wave-text ${className}`}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{ animationDelay: `${i * 0.04}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

type FormState = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

const budgetOptions = [
  "₱800 – ₱1,500 (UI/UX Design)",
  "₱1,500 – ₱3,000 (Simple Website)",
  "₱3,000 – ₱6,000 (Full Website / App)",
  "₱1,200+ (Automation Script)",
  "Let's talk (Custom scope)",
];

const socialLinks = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=amarillelorrenz@gmail.com",
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
  const [form, setForm] = useState<FormState>({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = encodeURIComponent(`Project Inquiry from ${form.name} (Budget: ${form.budget || "N/A"})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Budget: ${form.budget || "N/A"}\n\n` +
      `Message:\n${form.message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=amarillelorrenz@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");

    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", budget: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "16px 0",
    border: "none",
    borderBottom: "1px solid var(--border-strong)",
    background: "transparent",
    fontFamily: "var(--font-ui)",
    fontSize: 18,
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-ui)",
    fontSize: 14,
    color: "var(--text-secondary)",
    fontStyle: "italic",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "80px 6% 120px",
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden", // Important for curtain
      }}
    >
      <ScrollWaveCurtain color="var(--bg)" delay={100} />
      <BackgroundLabel text="HELLO" />

      <div style={{ maxWidth: 1400, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-start">
          {/* Left — copy + socials */}
          <div>
            <h2
              className="reveal clip-wipe"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 8vw, 6rem)",
                fontWeight: 900,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: 32,
                textShadow: "var(--headline-glow)",
              }}
            >
              Message{" "}
              <span className="headline-accent">
                me.
              </span>
            </h2>
            <p
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 20,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "42ch",
                marginBottom: 64,
              }}
            >
              Whether you need a website built from scratch, a UI system designed in Figma,
              or a browser automation script — fill out the form or reach out directly.
            </p>

            {/* Social links with wave hover */}
            <div
              className="reveal reveal-delay-2"
              style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}
            >
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                  style={{
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    fontStyle: "italic",
                    letterSpacing: ".02em",
                    textTransform: "none",
                  }}
                >
                  <WaveText text={`${label} ↗`} />
                </a>
              ))}
            </div>

            {/* Shield signature close */}
            <div className="reveal reveal-delay-3" style={{ opacity: 0.4, marginBottom: 40 }}>
              <svg
                width="60"
                height="70"
                viewBox="0 0 200 230"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M100 14 L178 46 L178 112 C178 168 146 202 100 220 C54 202 22 168 22 112 L22 46 Z"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  fill="none"
                />
                <text
                  x="100"
                  y="132"
                  textAnchor="middle"
                  fontFamily="Playfair Display, serif"
                  fontStyle="italic"
                  fontWeight="700"
                  fontSize="56"
                  fill="#F4EEE7"
                >
                  LA
                </text>
              </svg>
            </div>

            {/* Glow-pulse CTA */}
            <div className="reveal reveal-delay-2">
              <a href="#contact" className="btn-brand btn-glow-pulse" style={{ fontSize: 14, padding: "18px 40px" }}>
                Hire Me
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-1">
            {sent ? (
              <div
                className="flex flex-col items-start justify-center"
                style={{ padding: "40px 0", gap: 16 }}
              >
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, fontStyle: "italic", color: "var(--text-primary)" }}>
                  Message sent.
                </h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: 18, color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-strong)";
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={labelStyle}>Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "var(--accent)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-strong)";
                      }}
                    />
                  </div>
                </div>

                <div style={{ position: "relative" }} ref={dropdownRef}>
                  <label htmlFor="contact-budget" style={labelStyle}>Budget range</label>
                  
                  <div
                    id="contact-budget"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    style={{
                      ...inputStyle,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderColor: isDropdownOpen ? "var(--accent)" : "var(--border-strong)",
                    }}
                  >
                    <span style={{ opacity: form.budget ? 1 : 0.5, color: form.budget ? "var(--text-primary)" : "var(--text-secondary)" }}>
                      {form.budget || "Select a range..."}
                    </span>
                    <span style={{ 
                      transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)", 
                      transition: "transform 0.2s ease",
                      fontSize: 12,
                      color: "var(--text-secondary)" 
                    }}>
                      ▼
                    </span>
                  </div>

                  {isDropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-strong)",
                        borderRadius: "8px",
                        marginTop: "8px",
                        zIndex: 50,
                        overflow: "hidden",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
                      }}
                    >
                      <div
                        onClick={() => {
                          setForm(prev => ({ ...prev, budget: "" }));
                          setIsDropdownOpen(false);
                        }}
                        style={{
                          padding: "14px 16px",
                          cursor: "pointer",
                          fontFamily: "var(--font-ui)",
                          fontSize: 16,
                          color: "var(--text-secondary)",
                          transition: "background 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        Select a range...
                      </div>
                      {budgetOptions.map((o) => (
                        <div
                          key={o}
                          onClick={() => {
                            setForm(prev => ({ ...prev, budget: o }));
                            setIsDropdownOpen(false);
                          }}
                          style={{
                            padding: "14px 16px",
                            cursor: "pointer",
                            fontFamily: "var(--font-ui)",
                            fontSize: 16,
                            color: "var(--text-primary)",
                            transition: "background 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                          {o}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={1}
                    placeholder="Describe what you need..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 60 }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border-strong)";
                    }}
                  />
                </div>

                <div style={{ marginTop: 16 }}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-brand"
                    style={{
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
