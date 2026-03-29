"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStack = [
  { name: "Next.js", icon: "▲", color: "#fff" },
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "Node.js", icon: "🟢", color: "#68a063" },
  { name: "Go", icon: "🔵", color: "#00add8" },
  { name: "Kubernetes", icon: "☸️", color: "#326ce5" },
  { name: "Kafka", icon: "📨", color: "#a855f7" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "Cassandra", icon: "⬡", color: "#1287b1" },
  { name: "OpenAI", icon: "🧠", color: "#10a37f" },
  { name: "Tailwind", icon: "🎨", color: "#38bdf8" },
  { name: "Three.js", icon: "🌐", color: "#fff" },
  { name: "TypeScript", icon: "📘", color: "#3178c6" },
  { name: "Docker", icon: "🐳", color: "#2496ed" },
];

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="tech-stack" className="section" ref={ref} style={{ position: "relative" }}>
      <div className="blob blob-cyan" style={{ width: 300, height: 300, bottom: "20%", left: "-10%" }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">Distributed stack</div>
          <h2 className="section-title">
            Built for <span className="text-gradient">Planet Scale</span>
          </h2>
          <p className="section-subtitle">
            From edge runtimes to streaming pipelines and replicated data — the same primitives we visualize in the hero.
          </p>
        </motion.div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          maxWidth: 800,
          margin: "0 auto",
        }}>
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.04,
                borderColor: "var(--border-glow)",
                boxShadow: "var(--glow-combined)",
              }}
              className="glass-card"
              style={{
                padding: "1rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                cursor: "default",
                minWidth: 140,
              }}
            >
              <motion.span
                style={{ fontSize: "1.5rem" }}
                animate={inView ? {
                  y: [0, -5, 0],
                } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              >
                {tech.icon}
              </motion.span>
              <span style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
