"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    category: "Core Development",
    icon: "💻",
    items: [
      {
        title: "Shopify Development",
        desc: "Custom stores, theme dev, and integrations that convert.",
        icon: "🛍️",
      },
      {
        title: "WordPress Development",
        desc: "Stunning, high-performance WordPress sites & plugins.",
        icon: "📝",
      },
      {
        title: "Next.js Full Stack Apps",
        desc: "Blazing-fast, SEO-optimized web applications.",
        icon: "⚡",
      },
      {
        title: "Custom Web & Mobile Apps",
        desc: "Native & cross-platform apps built for scale.",
        icon: "📱",
      },
    ],
  },
  {
    category: "Advanced Solutions",
    icon: "🧠",
    items: [
      {
        title: "AI Integration",
        desc: "Chatbots, GPT, computer vision, and AI-powered automation.",
        icon: "🤖",
      },
      {
        title: "API Development",
        desc: "Robust, scalable RESTful and GraphQL APIs.",
        icon: "🔗",
      },
      {
        title: "Business Automation",
        desc: "End-to-end workflows that eliminate manual processes.",
        icon: "⚙️",
      },
    ],
  },
  {
    category: "Growth & Optimization",
    icon: "📈",
    items: [
      {
        title: "SEO Optimization",
        desc: "Data-driven SEO strategies that drive organic growth.",
        icon: "🔍",
      },
      {
        title: "UI/UX Design",
        desc: "Beautiful, intuitive interfaces users love.",
        icon: "🎨",
      },
      {
        title: "Performance Optimization",
        desc: "Speed, core vitals, and conversion optimization.",
        icon: "🚀",
      },
      {
        title: "Ongoing Support",
        desc: "Dedicated maintenance and continuous improvement.",
        icon: "🛡️",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
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
          <div className="section-badge">💻 What We Build</div>
          <h2 className="section-title">
            Services That <span className="text-gradient">Move the Needle</span>
          </h2>
          <p className="section-subtitle">
            From MVPs to enterprise-scale platforms — we deliver end-to-end solutions that drive real business impact.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {services.map((group) => (
            <div key={group.category}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{group.icon}</span>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  {group.category}
                </h3>
                <div style={{ flex: 1, height: 1, background: "var(--border-primary)" }} />
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "1rem",
                }}
              >
                {group.items.map((service) => (
                  <motion.div
                    key={service.title}
                    variants={cardVariants}
                    className="glass-card"
                    whileHover={{
                      y: -6,
                      borderColor: "var(--border-glow)",
                      boxShadow: "var(--glow-combined)",
                    }}
                    style={{ padding: "1.5rem", cursor: "default" }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: "var(--radius-md)",
                      background: "var(--gradient-glow)",
                      border: "1px solid var(--border-glow)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.25rem", marginBottom: "1rem",
                    }}>
                      {service.icon}
                    </div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                      {service.title}
                    </h4>
                    <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
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
