"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

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

const initialForm: FormState = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry from ${form.name} (Budget: ${form.budget || "N/A"})`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget || "N/A"}\n\nMessage:\n${form.message}`
    );
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&to=amarillelorrenz@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form-row">
        <div>
          <label htmlFor="contact-name" className="contact-label">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="contact-field"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="contact-label">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            className="contact-field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-budget" className="contact-label">
          Budget range
        </label>
        <select
          id="contact-budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className="contact-field contact-select"
        >
          <option value="">Select a range (optional)</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="contact-label">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={3}
          placeholder="Describe what you need..."
          value={form.message}
          onChange={handleChange}
          className="contact-field contact-textarea"
        />
      </div>

      <button type="submit" className="btn-brand contact-submit">
        Open email draft
      </button>
    </form>
  );
}
