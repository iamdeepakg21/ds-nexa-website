"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const industries = [
  { icon: "🏥", name: "Healthcare", desc: "HIPAA-compliant solutions for clinics, hospitals, and health-tech startups." },
  { icon: "🛒", name: "E-commerce", desc: "High-converting stores, AI recommendations, and checkout optimization." },
  { icon: "☁️", name: "SaaS", desc: "Scalable platforms with subscription billing, analytics, and user management." },
  { icon: "📚", name: "Education", desc: "AI-powered learning platforms, LMS, and student engagement tools." },
  { icon: "💰", name: "Fintech", desc: "Secure dashboards, payment integrations, and financial analytics." },
  { icon: "🚀", name: "Startups", desc: "From MVP to scale — we help founders ship fast and iterate faster." },
];

export default function Industries() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">🌍 Industries</div>
          <h2 className="section-title">
            Industries <span className="text-gradient">We Serve</span>
          </h2>
          <p className="section-subtitle">
            Deep domain expertise across high-growth sectors.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}>
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{
                y: -6,
                borderColor: "rgba(0, 240, 255, 0.3)",
                boxShadow: "0 0 30px rgba(0, 240, 255, 0.08)",
              }}
              className="glass-card industry-card"
            >
              <motion.div
                className="industry-icon"
                whileHover={{ scale: 1.15, rotate: 5 }}
              >
                {ind.icon}
              </motion.div>
              <h3 style={{ fontSize: "1.0625rem", fontWeight: 600 }}>{ind.name}</h3>
              <p style={{
                fontSize: "0.8125rem", color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}>
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
