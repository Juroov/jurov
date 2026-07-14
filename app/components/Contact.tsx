"use client";

import { useState, useRef, FormEvent } from "react";

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

// Inline SVG checkmark — animated stroke-draw
function AnimatedCheckmark() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-label="Sent" role="img">
      <circle cx="28" cy="28" r="25"
        stroke="#22c55e"
        strokeWidth="2"
        strokeDasharray="160"
        strokeDashoffset="160"
        fill="none"
      >
        <animate attributeName="stroke-dashoffset" from="160" to="0"
          dur="0.5s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
      </circle>
      <path
        d="M16 28l8 8 16-16"
        stroke="#22c55e"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="45"
        strokeDashoffset="45"
      >
        <animate attributeName="stroke-dashoffset" from="45" to="0"
          dur="0.4s" begin="0.4s" fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
      </path>
    </svg>
  );
}

const socialLinks = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=amarillelorrenz@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M1 6l8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Juroov",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.7-1.07-2.7-1.07-.36-.93-.89-1.17-.89-1.17-.73-.5.05-.49.05-.49.8.06 1.23.83 1.23.83.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.97 0-.88.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82A7.65 7.65 0 0 1 9 5.8c.68 0 1.36.09 2 .27 1.52-1.04 2.19-.82 2.19-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.27.83 2.15 0 3.09-1.88 3.77-3.67 3.97.29.25.54.74.54 1.49v2.21c0 .21.14.46.55.38A8 8 0 0 0 9 1z"
          fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/lorrenz.amarille.5/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M17 9a8 8 0 1 0-9.25 7.9V11.5H5.75v-2.5H7.75V7.5c0-2 1.2-3.1 3-3.1.87 0 1.78.16 1.78.16v1.96h-1c-.99 0-1.3.61-1.3 1.24V9H12.5l-.42 2.5H10.23V17A8 8 0 0 0 17 9z"
          fill="currentColor"/>
      </svg>
    ),
  },
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

  return (
    <section
      id="contact"
      style={{
        padding: "120px 24px",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
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
                marginBottom: 8,
              }}
            >
              Let&apos;s work together.
            </h2>
            {/* SVG stroke-draw underline */}
            <svg className="heading-underline-svg" viewBox="0 0 300 8" preserveAspectRatio="none"
              style={{ maxWidth: 240, height: 8, marginBottom: 20 }} aria-hidden="true">
              <path className="heading-underline-path" d="M 2 4 Q 75 2 150 4 Q 225 6 298 4"
                vectorEffect="non-scaling-stroke" pathLength="1" />
            </svg>
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
              {socialLinks.map(({ icon, label, href }) => (
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
                  {icon}
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
                <AnimatedCheckmark />
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
