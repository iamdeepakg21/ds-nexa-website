"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We dive deep into your business, goals, and challenges to build a clear roadmap.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Planning",
    desc: "Architecture design, tech stack selection, and sprint planning for efficient delivery.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Development",
    desc: "Agile sprints with weekly demos. You see progress in real-time, not after months.",
    icon: "💻",
  },
  {
    number: "04",
    title: "Testing",
    desc: "Rigorous QA, performance testing, and security audits before anything goes live.",
    icon: "🧪",
  },
  {
    number: "05",
    title: "Launch & Scale",
    desc: "Smooth deployment, monitoring, and ongoing optimization to maximize growth.",
    icon: "🚀",
  },
];

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="process" className="section" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">⚙️ How We Work</div>
          <h2 className="section-title">
            Our <span className="text-gradient">Battle-Tested</span> Process
          </h2>
          <p className="section-subtitle">
            A systematic approach that ensures quality, speed, and transparency at every step.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hide-mobile" style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0",
          position: "relative",
          maxWidth: 1100,
          margin: "0 auto",
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                  style={{
                    position: "absolute",
                    top: 28,
                    left: "50%",
                    width: "100%",
                    height: 2,
                    background: "var(--gradient-primary)",
                    opacity: 0.3,
                    transformOrigin: "left",
                  }}
                />
              )}

              {/* Dot */}
              <motion.div
                whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--gradient-glow)",
                  border: "2px solid var(--border-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "1.25rem",
                  position: "relative",
                  zIndex: 2,
                  cursor: "default",
                }}
              >
                {step.icon}
              </motion.div>

              <div style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                color: "var(--neon-cyan)",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}>
                STEP {step.number}
              </div>

              <h3 style={{
                fontSize: "1.0625rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "var(--text-primary)",
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: 180,
                margin: "0 auto",
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="hide-desktop" style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          position: "relative",
          paddingLeft: "2rem",
        }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: "1.25rem",
            width: 2,
            background: "var(--gradient-primary)",
            opacity: 0.2,
          }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--gradient-glow)",
                border: "2px solid var(--border-glow)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.125rem",
                flexShrink: 0,
                position: "relative",
                left: "-0.5rem",
              }}>
                {step.icon}
              </div>
              <div>
                <span style={{
                  fontSize: "0.625rem",
                  fontWeight: 700,
                  color: "var(--neon-cyan)",
                  letterSpacing: "0.1em",
                }}>
                  STEP {step.number}
                </span>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: "0.25rem 0" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
