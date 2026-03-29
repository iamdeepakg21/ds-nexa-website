"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const problems = [
  { icon: "🐌", text: "Slow development cycles delaying your launch" },
  { icon: "📉", text: "Poor scalability killing growth momentum" },
  { icon: "🔄", text: "Manual repetitive processes draining your team" },
  { icon: "💸", text: "High maintenance costs eating into margins" },
];

const solutions = [
  { icon: "⚡", text: "Lightning-fast, scalable applications" },
  { icon: "🤖", text: "AI-powered automation that works 24/7" },
  { icon: "🏗️", text: "Clean, future-proof architecture" },
  { icon: "📊", text: "Data-driven decisions, not guesswork" },
];

export default function ProblemSolution() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section" style={{ position: "relative" }}>
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">🔥 Why DS Nexa</div>
          <h2 className="section-title">
            Your Problems. <span className="text-gradient">Our Solutions.</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}
          className="grid-2"
        >
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card"
            style={{
              padding: "2rem",
              borderColor: "rgba(239, 68, 68, 0.2)",
            }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--radius-md)",
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                ❌
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#ef4444" }}>
                The Problem
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    background: "rgba(239, 68, 68, 0.05)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(239, 68, 68, 0.1)",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{p.icon}</span>
                  <span style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    {p.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card"
            style={{
              padding: "2rem",
              borderColor: "rgba(0, 240, 255, 0.2)",
            }}
          >
            <div style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: "var(--radius-md)",
                background: "rgba(0, 240, 255, 0.1)",
                border: "1px solid rgba(0, 240, 255, 0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                ✅
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                <span className="text-gradient">Our Solution</span>
              </h3>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {solutions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    background: "var(--gradient-glow)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-glow)",
                  }}
                >
                  <span style={{ fontSize: "1.25rem" }}>{s.icon}</span>
                  <span style={{ fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                    {s.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
