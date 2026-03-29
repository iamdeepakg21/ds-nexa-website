"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactInfo = [
  { icon: "📧", label: "Email", value: "contact@dsnexasolutions.co.in", href: "mailto:contact@dsnexasolutions.co.in" },
  { icon: "📞", label: "Phone", value: "+91 80526 40777 | +91 77048 87884", href: "tel:+918052640777" },
  { icon: "📍", label: "Location", value: "Advant Navis Business Park, Sector 142, Noida, 201305", href: "https://maps.google.com/?q=Advant+Navis+Business+Park+Sector+142+Noida" },
];

const socials = [
  { icon: "𝕏", label: "Twitter / X", href: "#" },
  { icon: "in", label: "LinkedIn", href: "#" },
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/iamdeepakg21" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formState, setFormState] = useState({ name: "", email: "", project: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
          access_key: "16a0b32e-7f66-421f-abc4-6b200e32a13d",
          name: formState.name,
          email: formState.email,
          subject: `New Project Inquiry from ${formState.name}`,
          project_type: formState.project,
          message: formState.message,
          from_name: "DS Nexa Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", project: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" ref={ref} style={{ position: "relative" }}>
      <div className="blob blob-cyan" style={{ width: 300, height: 300, top: "20%", right: "-8%" }} />
      <div className="blob blob-purple" style={{ width: 250, height: 250, bottom: "10%", left: "-5%" }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">📞 Get In Touch</div>
          <h2 className="section-title">
            Let&apos;s Build Something <span className="text-gradient">Incredible</span>
          </h2>
          <p className="section-subtitle">
            Ready to turn your idea into a market-winning product? Let&apos;s talk.
          </p>
        </motion.div>

        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
        }} className="grid-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Anti-spam honeypot */}
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />
              
              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "0.375rem" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "0.375rem" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "0.375rem" }}>
                  Project Type
                </label>
                <select
                  name="project"
                  value={formState.project}
                  onChange={handleChange}
                  className="form-input"
                  required
                  style={{ appearance: "none", cursor: "pointer" }}
                >
                  <option value="">Select a project type...</option>
                  <option value="shopify">Shopify Development</option>
                  <option value="wordpress">WordPress Development</option>
                  <option value="fullstack">Full-Stack Web App</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI Integration</option>
                  <option value="automation">Business Automation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-secondary)", display: "block", marginBottom: "0.375rem" }}>
                  Tell Us About Your Project
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Describe your project, goals, and timeline..."
                  className="form-input"
                  rows={5}
                  required
                  style={{ resize: "vertical", minHeight: 120 }}
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                style={{ width: "100%", justifyContent: "center", padding: "1rem", fontSize: "1rem", marginTop: "0.5rem", opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className="spinner" style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                    Sending...
                  </div>
                ) : submitted ? "✅ Message Sent Successfully!" : "🚀 Send Message"}
              </motion.button>

              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: "center", fontSize: "0.875rem", color: "#f87171" }}
                  >
                    ❌ {error}
                  </motion.p>
                )}
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--neon-cyan)" }}
                  >
                    Success! We&apos;ll get back to you within 24 hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Quick contact cards */}
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -3, borderColor: "rgba(0, 240, 255, 0.3)" }}
                className="glass-card"
                style={{
                  padding: "1.25rem 1.5rem",
                  display: "flex", alignItems: "center", gap: "1rem",
                  textDecoration: "none", color: "inherit",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: "var(--radius-md)",
                  background: "var(--gradient-glow)",
                  border: "1px solid var(--border-glow)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.25rem", flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginBottom: "0.125rem" }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--text-primary)" }}>
                    {c.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Socials */}
            <div>
              <p style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--text-tertiary)", marginBottom: "0.75rem" }}>
                Follow Us
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(0, 240, 255, 0.3)" }}
                    className="glass-card"
                    style={{
                      width: 48, height: 48,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none", fontSize: "1.125rem",
                      borderRadius: "var(--radius-md)",
                      color: "var(--text-primary)",
                    }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="glass-card" style={{
              padding: "1.25rem 1.5rem",
              borderColor: "rgba(0, 240, 255, 0.1)",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 10px rgba(34, 197, 94, 0.5)",
                animation: "pulseGlow 2s ease-in-out infinite",
              }} />
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Typically respond within <strong style={{ color: "var(--text-primary)" }}>2 hours</strong> during business hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
