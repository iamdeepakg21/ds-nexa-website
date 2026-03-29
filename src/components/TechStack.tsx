"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const techStack = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "Python", slug: "python" },
  { name: "Django", slug: "django" },
  { name: "Go", slug: "go" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Docker", slug: "docker" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Redis", slug: "redis" },
  { name: "Kafka", slug: "apachekafka" },
  { name: "n8n", slug: "n8n" },
  { name: "Flask", slug: "flask" },
  { name: "OpenAI", slug: "openai" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Shopify", slug: "shopify" },
  { name: "GitHub", slug: "github" },
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
            From edge runtimes to streaming pipelines and replicated data — we use the industry standards for engineering excellence.
          </p>
        </motion.div>

        {/* Floating Marquee Animation */}
        <div style={{ position: "relative", padding: "2rem 0" }}>
          {/* Top Row: Left to Right */}
          <div style={{ display: "flex", width: "fit-content", gap: "1rem", overflow: "hidden" }}>
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: "1rem" }}
            >
              {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="glass-card"
                  style={{
                    padding: "1rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    minWidth: 160,
                    backdropFilter: "blur(12px)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div style={{ 
                    width: 24, height: 24, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    filter: 'brightness(0) invert(1)', // Force pure white
                    opacity: 0.8
                  }}>
                    <img 
                      src={`https://cdn.simpleicons.org/${tech.slug}`} 
                      alt={tech.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row: Right to Left */}
          <div style={{ display: "flex", width: "fit-content", gap: "1rem", overflow: "hidden", marginTop: "1rem" }}>
            <motion.div
              animate={{ x: [-2000, 0] }}
              transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              style={{ display: "flex", gap: "1rem" }}
            >
              {[...techStack, ...techStack, ...techStack].reverse().map((tech, i) => (
                <div
                  key={`${tech.name}-reverse-${i}`}
                  className="glass-card"
                  style={{
                    padding: "1rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    minWidth: 160,
                    backdropFilter: "blur(12px)",
                    border: "1px solid var(--border-primary)",
                    borderRadius: "var(--radius-lg)",
                  }}
                >
                  <div style={{ 
                    width: 24, height: 24, 
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    filter: 'brightness(0) invert(1)', // Force pure white
                    opacity: 0.8
                  }}>
                    <img 
                      src={`https://cdn.simpleicons.org/${tech.slug}`} 
                      alt={tech.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      loading="lazy"
                    />
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
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
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          marginTop: "4rem",
        }}>
          {[
            {
              title: "Edge Runtimes",
              desc: "Deploy logic globally with sub-millisecond cold starts using Next.js Edge and Go.",
              slug: "vercel",
            },
            {
              title: "AI Workflows",
              desc: "Native OpenAI and LLM integration for intelligent automation and data pipelines.",
              slug: "openai",
            },
            {
              title: "Scale Automations",
              desc: "Complex multi-step orchestrations with n8n and Python for business efficiency.",
              slug: "n8n",
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
              <div style={{ 
                width: 48, height: 48, marginBottom: "1rem", opacity: 0.9,
                filter: 'brightness(0) invert(1)'
              }}>
                <img 
                  src={`https://cdn.simpleicons.org/${feature.slug}`} 
                  alt={feature.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>{feature.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{feature.desc}</p>
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
