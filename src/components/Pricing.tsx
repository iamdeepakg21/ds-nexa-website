"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const plans = [
  {
    tier: "Starter",
    tagline: "Simple Shopify or WordPress sites, basic landing pages",
    price: "₹35,000 – ₹80,000",
    icon: "🌱",
    features: [
      "Shopify / WordPress setup",
      "Custom theme & design",
      "Mobile responsive",
      "Basic SEO optimization",
      "1 round of revisions",
      "2-week delivery",
    ],
    featured: false,
  },
  {
    tier: "Full-Stack",
    tagline: "Next.js custom web apps, mobile apps, complex e-commerce",
    price: "₹1,50,000 – ₹5,00,000+",
    icon: "⚡",
    features: [
      "Custom Next.js / React Native app",
      "Full backend & API development",
      "Database design & optimization",
      "Authentication & authorization",
      "Admin dashboard",
      "CI/CD & deployment",
      "3-6 week delivery",
    ],
    featured: true,
  },
  {
    tier: "AI + Automation",
    tagline: "Intelligent chatbots, business automation, AI integrations",
    price: "₹2,50,000 – ₹8,00,000+",
    icon: "🧠",
    features: [
      "Custom AI/GPT integrations",
      "Intelligent chatbot development",
      "Business process automation",
      "Data pipeline & analytics",
      "ML model integration",
      "Ongoing optimization & support",
      "4-8 week delivery",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="section" ref={ref} style={{ position: "relative" }}>
      <div className="blob blob-cyan" style={{ width: 350, height: 350, top: "10%", right: "-10%" }} />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">💰 Investment</div>
          <h2 className="section-title">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Indicative starting prices for premium-quality work. Final cost depends on scope and complexity.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          maxWidth: 1000,
          margin: "0 auto",
          alignItems: "stretch",
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.tier}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{
                y: -6,
                boxShadow: plan.featured
                  ? "var(--glow-combined)"
                  : "var(--glass-shadow)",
              }}
              className={`glass-card pricing-card ${plan.featured ? "featured" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                ...(plan.featured && {
                  transform: "scale(1.02)",
                  borderColor: "var(--border-glow)",
                }),
              }}
            >
              {plan.featured && (
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  padding: "0.25rem 0.75rem",
                  background: "var(--gradient-primary)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "var(--on-gradient)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>
                  Most Popular
                </div>
              )}

              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{plan.icon}</div>

              <h3 style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: "0.375rem",
                color: "var(--text-primary)",
              }}>
                {plan.tier}
              </h3>

              <p style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                marginBottom: "1.25rem",
                lineHeight: 1.5,
              }}>
                {plan.tagline}
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>Starting at</span>
                <div className="text-gradient" style={{
                  fontSize: "1.375rem",
                  fontWeight: 800,
                  marginTop: "0.25rem",
                }}>
                  {plan.price}
                </div>
              </div>

              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}>
                {plan.features.map((f) => (
                  <div key={f} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                  }}>
                    <span style={{ color: "var(--neon-cyan)", fontSize: "0.875rem" }}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              <motion.button
                className={plan.featured ? "btn-primary" : "btn-secondary"}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo("#contact")}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "0.8125rem",
            color: "var(--text-tertiary)",
            marginTop: "2rem",
            maxWidth: 600,
            margin: "2rem auto 0",
            lineHeight: 1.6,
          }}
        >
          Custom quotes provided after free consultation. We deliver premium quality at competitive Indian agency rates.
        </motion.p>
      </div>
    </section>
  );
}
