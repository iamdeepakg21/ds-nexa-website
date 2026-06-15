"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Contact Section — Simplified, clean layout.
 * Two columns: form (name, email, message) + contact info.
 * Preserves Web3Forms API integration.
 */

const contactInfo = [
  {
    label: "Email",
    value: "contact@dsnexasolutions.co.in",
    href: "mailto:contact@dsnexasolutions.co.in",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 80526 40777",
    href: "tel:+918052640777",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.86 19.86 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Noida, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=Advant+Navis+Business+Park+Sector+142+Noida",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8514f7b9-80b0-489f-9680-ff59ff8d6215",
          name: form.name,
          email: form.email,
          subject: `New inquiry from ${form.name}`,
          message: form.message,
          from_name: "DSN EXA Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="reveal delay-1" style={{ marginBottom: "var(--gap-xl)" }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="heading-lg">
            Let&apos;s build something
            <br />
            <span className="text-accent">remarkable.</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--gap-xl)",
            maxWidth: "960px",
          }}
        >
          {/* Form */}
          <form onSubmit={handleSubmit} className="reveal delay-2" style={{ display: "flex", flexDirection: "column", gap: "var(--gap-sm)" }}>
            {/* Honeypot */}
            <input type="checkbox" name="botcheck" style={{ display: "none" }} />

            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.375rem",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="input"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.375rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="input"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.375rem",
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="input"
                rows={5}
                required
                style={{ resize: "vertical", minHeight: "120px" }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "1rem",
                fontSize: "0.9375rem",
                marginTop: "0.5rem",
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? (
                <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span className="spinner" />
                  Sending...
                </span>
              ) : submitted ? (
                "✓ Message sent!"
              ) : (
                <>
                  Send message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>

            {error && (
              <p style={{ fontSize: "0.875rem", color: "#f87171", textAlign: "center" }}>
                {error}
              </p>
            )}
            {submitted && (
              <p style={{ fontSize: "0.875rem", color: "var(--color-accent)", textAlign: "center" }}>
                We&apos;ll get back to you within 24 hours.
              </p>
            )}
          </form>

          {/* Contact info */}
          <div className="reveal delay-3" style={{ display: "flex", flexDirection: "column", gap: "var(--gap-md)", paddingTop: "1.5rem" }}>
            {contactInfo.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--gap-sm)",
                  padding: "var(--gap-md)",
                  background: "var(--color-card)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "var(--radius-md)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border-subtle)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--color-accent-dim)",
                    borderRadius: "var(--radius-md)",
                    color: "var(--color-accent)",
                    flexShrink: 0,
                  }}
                >
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginBottom: "0.125rem" }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--color-text)" }}>
                    {c.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Response time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "var(--gap-sm) var(--gap-md)",
                marginTop: "auto",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)",
                }}
              />
              <span style={{ fontSize: "0.8125rem", color: "var(--color-text-muted)" }}>
                Typically respond within <strong style={{ color: "var(--color-text-secondary)" }}>2 hours</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
