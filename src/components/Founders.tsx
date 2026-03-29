"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const founders = [
  {
    name: "Deepak",
    role: "Co-Founder & Lead Engineer",
    bio: "Full-stack architect obsessed with building scalable systems. Specializes in Next.js, AI integrations, and turning complex problems into elegant solutions.",
    gradient: "linear-gradient(135deg, #00f0ff 0%, #3b82f6 100%)",
    initials: "D",
  },
  {
    name: "Satyam",
    role: "Co-Founder & Product Strategist",
    bio: "Product thinker with a knack for business automation and growth strategy. Bridges the gap between technical excellence and market-winning products.",
    gradient: "linear-gradient(135deg, #c026d3 0%, #8b5cf6 100%)",
    initials: "S",
  },
];

export default function Founders() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section" ref={ref} style={{ position: "relative" }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">👨‍💻 Meet the Founders</div>
          <h2 className="section-title">
            The Minds Behind <span className="text-gradient">DS Nexa</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
          maxWidth: 800,
          margin: "0 auto 3rem",
        }}>
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 3 }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: f.gradient,
                  margin: "0 auto 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "#fff",
                  boxShadow: `0 0 30px ${f.gradient.includes("00f0ff") ? "rgba(0, 240, 255, 0.3)" : "rgba(192, 38, 211, 0.3)"}`,
                  position: "relative",
                }}
              >
                {f.initials}
                <div style={{
                  position: "absolute", bottom: 4, right: 4,
                  width: 20, height: 20, borderRadius: "50%",
                  background: "#22c55e", border: "3px solid var(--bg-secondary)",
                }} />
              </motion.div>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                {f.name}
              </h3>
              <p className="text-gradient" style={{
                fontSize: "0.8125rem", fontWeight: 600,
                marginBottom: "1rem",
              }}>
                {f.role}
              </p>
              <p style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}>
                {f.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card"
          style={{
            maxWidth: 700,
            margin: "0 auto",
            padding: "2.5rem",
            textAlign: "center",
            borderColor: "rgba(0, 240, 255, 0.15)",
          }}
        >
          <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>💡</div>
          <p style={{
            fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
            fontWeight: 600,
            lineHeight: 1.6,
            color: "var(--text-primary)",
          }}>
            &ldquo;We don&apos;t just code — we{" "}
            <span className="text-gradient">architect the future</span>
            {" "}for ambitious founders.&rdquo;
          </p>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--text-tertiary)",
            marginTop: "0.75rem",
          }}>
            — Deepak & Satyam, Founders of DS Nexa Solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}
