"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "The TeleMed Pro app completely transformed how we connect doctors and patients. DS Nexa delivered in 5 weeks what others quoted 4 months for.",
    role: "Founder, Telemedicine Startup",
    project: "TeleMed Pro",
    rating: 5,
  },
  {
    quote: "Their AI chatbot single-handedly saved us ₹18 lakhs in support costs in the first month.",
    role: "E-commerce Brand Owner",
    project: "Shopify AI Assistant",
    rating: 5,
  },
  {
    quote: "Deepak & Satyam didn't just build software — they built our competitive edge.",
    role: "SaaS Founder",
    project: "NexaFlow",
    rating: 5,
  },
  {
    quote: "The automation system gave us back 25 hours every week. Game changer.",
    role: "Operations Head, Growing Startup",
    project: "NexaFlow",
    rating: 5,
  },
  {
    quote: "Best development team we've ever worked with. Period.",
    role: "Healthcare Clinic Owner",
    project: "HealthSync",
    rating: 5,
  },
  {
    quote: "From idea to revenue-generating product in under 7 weeks. Unreal.",
    role: "Education Tech Founder",
    project: "EduPulse",
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" ref={ref} style={{ position: "relative" }}>
      <div className="blob blob-purple" style={{ width: 400, height: 400, top: "20%", left: "-10%" }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">💬 Testimonials</div>
          <h2 className="section-title">
            Real Results from <span className="text-gradient">Real Builders</span>
          </h2>
          <p className="section-subtitle">
            Don&apos;t take our word for it — hear from the founders & teams we&apos;ve worked with.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "1.25rem",
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(0, 240, 255, 0.2)" }}
              className="glass-card testimonial-card"
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.125rem", marginBottom: "1rem", marginTop: "1rem" }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} style={{ fontSize: "0.875rem", color: "#fbbf24" }}>★</span>
                ))}
              </div>

              <p style={{
                fontSize: "0.9375rem",
                color: "var(--text-primary)",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: "1.25rem",
              }}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-primary)",
              }}>
                <div>
                  <div style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                  }}>
                    — {t.role}
                  </div>
                </div>
                <span style={{
                  fontSize: "0.6875rem",
                  padding: "0.25rem 0.625rem",
                  borderRadius: "var(--radius-full)",
                  background: "var(--gradient-glow)",
                  border: "1px solid var(--border-glow)",
                  color: "var(--neon-cyan)",
                  fontWeight: 500,
                }}>
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
