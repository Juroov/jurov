"use client";

import { useState, useRef, FormEvent } from "react";
import { EnvelopeSimple, GithubLogo, FacebookLogo, CheckCircle } from "@phosphor-icons/react";

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

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send — replace with real API call (e.g. Resend, Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    border: "1px solid var(--border-strong)",
    background: "var(--surface)",
    fontSize: 14,
    color: "var(--text-primary)",
    fontFamily: "var(--font-geist-sans)",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 12,
    fontWeight: 600,
    color: "var(--text-body)",
    marginBottom: 6,
    fontFamily: "var(--font-geist-mono)",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  };

  const socialLinks = [
    { icon: EnvelopeSimple, label: "Email",    href: "mailto:amarillelorrenz@gmail.com" },
    { icon: GithubLogo,     label: "GitHub",   href: "https://github.com/Juroov"       },
    { icon: FacebookLogo,   label: "Facebook",  href: "https://www.facebook.com/lorrenz.amarille.5/"    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start">
          {/* Left — copy + socials */}
          <div>
            <h2
              className="reveal"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                marginBottom: 16,
              }}
            >
              Let&apos;s work together.
            </h2>
            <p
              className="reveal reveal-delay-1"
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: "42ch",
                marginBottom: 40,
              }}
            >
              Whether you need a website built from scratch, a UI system designed in Figma,
              or a browser automation script — fill out the form or reach out directly.
            </p>

            <div className="reveal reveal-delay-2 flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  style={{
                    textDecoration: "none",
                    color: "var(--text-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")}
                  onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-body)")}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-delay-1 card" style={{ padding: "32px 28px" }}>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center text-center"
                style={{ padding: "40px 0", gap: 16 }}
              >
                <CheckCircle size={48} color="#22c55e" weight="light" />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", letterSpacing: "-0.02em" }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="grid sm:grid-cols-2 gap-4">
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
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-strong)";
                        e.target.style.boxShadow = "none";
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
                        e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "var(--border-strong)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-budget" style={labelStyle}>Budget range</label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border-strong)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <option value="">Select a range...</option>
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe what you need — the more detail, the better."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "var(--accent)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--border-strong)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center"
                  style={{
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? "not-allowed" : "pointer",
                    border: "none",
                  }}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
