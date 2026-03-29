"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "AquaTrax Solutions",
    url: "https://aquatraxsolutions.com",
    subtitle: "High-Scale Infrastructure & AI",
    category: "Software Engineering",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    image: "/Users/deepakgupta/.gemini/antigravity/brain/b77b3cca-510c-4db3-96a2-b9c1a484a282/aquatrax_preview_1774802446625.png",
    problem: "Need for a high-performance, scalable tech presence with integrated AI tools.",
    solution: "End-to-end architecture design from edge runtimes to streaming pipelines and replicated data.",
    result: "Global reach with sub-50ms latency for distributed users.",
    metrics: { primary: "100%", label: "Uptime" },
    tech: ["Next.js", "Node.js", "Go", "Docker", "K8s"],
  },
  {
    id: 2,
    title: "Tanntrim",
    url: "https://www.tanntrim.com/",
    subtitle: "Premium Shopify Store",
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    image: "/Users/deepakgupta/.gemini/antigravity/brain/b77b3cca-510c-4db3-96a2-b9c1a484a282/shopify_premium_mockups_1774802558280.png",
    problem: "Seeking a luxury shopping experience for upscale leather goods.",
    solution: "Custom Shopify development with high-fidelity UI/UX and optimized conversion paths.",
    result: "Significant increase in average order value and luxury brand perception.",
    metrics: { primary: "4.8/5", label: "User Rating" },
    tech: ["Shopify", "Tailwind", "Liquid", "React"],
  },
  {
    id: 3,
    title: "Opulence",
    url: "https://opulence-new.myshopify.com/",
    subtitle: "Luxury Fashion Hub",
    category: "Shopify / E-comm",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    image: "/Users/deepakgupta/.gemini/antigravity/brain/b77b3cca-510c-4db3-96a2-b9c1a484a282/shopify_premium_mockups_1774802558280.png",
    problem: "High abandonment rates on generic Shopify themes.",
    solution: "Completely custom-built headless storefront for maximum speed and creative freedom.",
    result: "60% faster page loads compared to previous theme.",
    metrics: { primary: "+42%", label: "Conversion" },
    tech: ["Shopify", "Next.js", "Vercel", "GraphQL"],
  },
  {
    id: 4,
    title: "Tweedle",
    url: "https://tweedle.in/",
    subtitle: "Premium Carry Essentials",
    category: "D2C Brands",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    image: "/Users/deepakgupta/.gemini/antigravity/brain/b77b3cca-510c-4db3-96a2-b9c1a484a282/shopify_premium_mockups_1774802558280.png",
    problem: "Need for a unique brand identity in a crowded carry-goods market.",
    solution: "Art-directed e-commerce experience with custom interactions and seamless checkout.",
    result: "Rapid growth in the D2C space with loyal customer base.",
    metrics: { primary: "100k+", label: "Monthly Users" },
    tech: ["Shopify", "UI/UX", "SEO", "Analytics"],
  },
  {
    id: 5,
    title: "Slant Essentials",
    url: "https://slant.co.in/",
    subtitle: "Minimalist Product Design",
    category: "Retail Tech",
    gradient: "linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)",
    image: "/Users/deepakgupta/.gemini/antigravity/brain/b77b3cca-510c-4db3-96a2-b9c1a484a282/shopify_premium_mockups_1774802558280.png",
    problem: "Traditional retail UI failing to reflect minimalist product values.",
    solution: "A 'less-is-more' design philosophy implemented through custom Shopify sections.",
    result: "Perfect alignment between product design and digital storefront.",
    metrics: { primary: "0.2s", label: "FCP Time" },
    tech: ["Shopify", "Precision", "Minimalism", "JS"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section" style={{ position: "relative" }}>
      <div className="blob blob-purple" style={{ width: 500, height: 500, top: "0%", right: "-15%" }} />

      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">🏆 Featured Work</div>
          <h2 className="section-title">
            Engineering <span className="text-gradient">Premium Results</span>
          </h2>
          <p className="section-subtitle">
            From custom Shopify apps to global distributed architecture — we build for high-scale impact.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card"
              onClick={() => setSelected(project)}
              whileHover={{
                y: -8,
                rotateX: 1,
                rotateY: -1,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0, 240, 255, 0.1)",
              }}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                perspective: 1000,
                background: "rgba(15, 23, 42, 0.4)",
              }}
            >
              <div style={{
                height: 200,
                background: "var(--bg-card)",
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                position: "relative",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, rgba(15, 23, 42, 0.8) 100%)",
                }} />
                <div style={{
                  position: "absolute", bottom: 12, right: 16,
                  background: "rgba(0,0,0,0.4)",
                  backdropFilter: "blur(8px)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.7rem", fontWeight: 700, color: "#fff",
                }}>
                  {project.metrics.primary} {project.metrics.label}
                </div>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}>
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 700, color: "var(--neon-cyan)",
                    background: "rgba(0, 240, 255, 0.08)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: "0.85rem", color: "var(--text-secondary)",
                  lineHeight: 1.6, marginBottom: "1.25rem",
                  display: "-webkit-box", WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                  {project.subtitle}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.65rem", color: "var(--text-tertiary)",
                      background: "rgba(255,255,255,0.03)",
                      padding: "0.25rem 0.5rem",
                      borderRadius: "4px",
                      border: "1px solid var(--border-primary)",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "1.5rem", paddingTop: "1rem",
                    borderTop: "1px solid var(--border-primary)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    style={{ fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }} 
                    className="text-gradient hover:opacity-80 transition-opacity"
                  >
                    Visit Project ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 100,
              background: "rgba(2, 6, 23, 0.9)",
              backdropFilter: "blur(12px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem",
            }}
          >
            {/* Modal Detail Placeholder - Keeping original logic but using project data */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 800, maxHeight: "90vh",
                background: "var(--bg-secondary)", borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-primary)",
                overflow: "hidden",
              }}
            >
              <div style={{ height: 260, backgroundImage: `url(${selected.image})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, var(--bg-secondary))' }} />
                 <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', borderRadius: '50%', width: 40, height: 40, cursor: 'pointer' }}>✕</button>
              </div>
              <div style={{ padding: "2.5rem" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 800 }}>{selected.title}</h2>
                <p style={{ color: "var(--text-secondary)", marginTop: "1rem", lineHeight: 1.8 }}>{selected.problem}</p>
                <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                  <div>
                    <h4 style={{ color: "var(--neon-cyan)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "2px", fontWeight: 700 }}>Our Solution</h4>
                    <p style={{ fontSize: "0.95rem", marginTop: "0.5rem", lineHeight: 1.6 }}>{selected.solution}</p>
                  </div>
                  <div style={{ background: "rgba(0, 240, 255, 0.05)", padding: "1.5rem", borderRadius: "12px" }}>
                    <h4 style={{ color: "var(--neon-magenta)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "2px", fontWeight: 700 }}>The Impact</h4>
                    <div style={{ fontSize: "1.5rem", fontWeight: 800 }} className="text-gradient">{selected.metrics.primary} {selected.metrics.label}</div>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>{selected.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
