"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    category: "Full Stack & E-commerce",
    icon: "🛍️",
    items: [
      {
        title: "Custom Shopify Apps & Pages",
        desc: "High-conversion product pages, custom cart logic, and private Shopify apps built for high-scale D2C brands.",
        icon: "📦",
      },
      {
        title: "WordPress to Headless",
        desc: "Modernizing legacy WordPress sites with high-performance Headless CMS architectures.",
        icon: "📝",
      },
      {
        title: "Next.js Web Applications",
        desc: "Blazing-fast, SEO-optimized SaaS platforms and dashboards with edge runtime optimization.",
        icon: "⚡",
      },
    ],
  },
  {
    category: "Advanced Intelligence",
    icon: "🧠",
    items: [
      {
        title: "AI Workflows & LLMs",
        desc: "Integrating OpenAI and custom LLM pipelines into your business logic to automate complex decision-making.",
        icon: "🤖",
      },
      {
        title: "Distributed Backend & APIs",
        desc: "Robust, scalable REST/GraphQL APIs built with Go and Node.js for planet-scale traffic.",
        icon: "🔗",
      },
      {
        title: "Intelligent Automation",
        desc: "End-to-end business process automation that eliminates manual data entry and operational bottlenecks.",
        icon: "⚙️",
      },
    ],
  },
  {
    category: "Mobile & Infrastructure",
    icon: "📱",
    items: [
      {
        title: "React Native & Flutter",
        desc: "Premium cross-platform mobile apps built from scratch to maintenance with native-level performance.",
        icon: "📲",
      },
      {
        title: "Cloud & DevOps (CI/CD)",
        desc: "Automated deployment pipelines, Docker containerization, and Kubernetes orchestration.",
        icon: "🐳",
      },
      {
        title: "Scalable Data Layers",
        desc: "High-performance caching with Redis and distributed data storage with PostgreSQL & Cassandra.",
        icon: "🐘",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="section" style={{ position: "relative" }}>
      <div className="blob blob-cyan" style={{ width: 400, height: 400, top: "10%", right: "-10%" }} />
      <div className="blob blob-purple" style={{ width: 300, height: 300, bottom: "10%", left: "-5%" }} />

      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">💻 Capabilities</div>
          <h2 className="section-title">
            Engineering <span className="text-gradient">Solutions for Tomorrow</span>
          </h2>
          <p className="section-subtitle">
            From custom Shopify ecosystems to planet-scale distributed infrastructure — we deliver the stack that wins.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {services.map((group) => (
            <div key={group.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{group.icon}</span>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
                  {group.category}
                </h3>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {group.items.map((service) => (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    className="glass-card"
                    whileHover={{
                      y: -8,
                      borderColor: "var(--border-glow)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    }}
                    style={{ padding: "2rem", cursor: "default", background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div style={{
                      width: 52, height: 52, borderRadius: "12px",
                      background: "var(--gradient-glow)",
                      border: "1px solid var(--border-glow)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.5rem", marginBottom: "1.5rem",
                    }}>
                      {service.icon}
                    </div>
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
                      {service.title}
                    </h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
