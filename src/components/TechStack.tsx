"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStack = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Go", icon: "🔵" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Kafka", icon: "📨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Cassandra", icon: "⬡" },
  { name: "OpenAI", icon: "🧠" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Three.js", icon: "🌐" },
  { name: "TypeScript", icon: "📘" },
  { name: "Docker", icon: "🐳" },
  { name: "Redis", icon: "🏮" },
  { name: "Shopify", icon: "🛍️" },
  { name: "WordPress", icon: "📝" },
  { name: "CI/CD", icon: "🚀" },
  { name: "AI Workflows", icon: "⚙️" },
];

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech-stack" className="section" ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <div className="blob blob-cyan" style={{ width: 400, height: 400, bottom: "-10%", left: "-10%" }} />
      <div className="blob blob-purple" style={{ width: 300, height: 300, top: "0%", right: "-10%" }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-badge">Distributed stack</div>
          <h2 className="section-title">
            Built for <span className="text-gradient">Planet Scale</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 700, margin: "0 auto" }}>
            From edge runtimes to streaming pipelines and replicated data — the same primitives we visualize in the hero.
          </p>
        </motion.div>

        {/* Floating Marquee Animation */}
        <div style={{ position: "relative", padding: "2rem 0" }}>
          {/* Top Row: Left to Right */}
          <div style={{ display: "flex", width: "fit-content", gap: "1rem", overflow: "hidden" }}>
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: "1rem" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="glass-card"
                  style={{
                    padding: "1rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    minWidth: 160,
                    backdropFilter: "blur(12px)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{tech.icon}</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row: Right to Left */}
          <div style={{ display: "flex", width: "fit-content", gap: "1rem", overflow: "hidden", marginTop: "1rem" }}>
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: "1rem" }}
            >
              {[...techStack, ...techStack].reverse().map((tech, i) => (
                <div
                  key={`${tech.name}-reverse-${i}`}
                  className="glass-card"
                  style={{
                    padding: "1rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    minWidth: 160,
                    backdropFilter: "blur(12px)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{tech.icon}</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Feature Grid below for depth */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
          marginTop: "4rem",
        }}>
          {[
            {
              title: "Edge Runtimes",
              desc: "Deploy logic globally with sub-millisecond cold starts using Next.js Edge and Go.",
              icon: "⚡",
            },
            {
              title: "AI Workflows",
              desc: "Native OpenAI and LLM integration for intelligent automation and data pipelines.",
              icon: "🧠",
            },
            {
              title: "Planet-Scale Data",
              desc: "Replicated PostgreSQL, Cassandra, and Redis for high-availability distributed storage.",
              icon: "🐘",
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card"
              style={{ padding: "1.5rem", textAlign: "left", position: "relative", overflow: "hidden" }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{feature.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>{feature.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{feature.desc}</p>
              <div style={{
                position: "absolute", bottom: 0, right: 0, width: 60, height: 60,
                background: "var(--gradient-primary)", filter: "blur(40px)", opacity: 0.1,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
