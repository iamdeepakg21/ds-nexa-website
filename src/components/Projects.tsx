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
    image: "/projects/aquatrax.png",
    alt: "AquaTrax Solutions - High-scale infrastructure and AI dashboard preview",
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
    image: "/projects/shopify_mockups.png",
    alt: "Tanntrim - Premium leather goods Shopify store mockup",
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
    image: "/projects/shopify_mockups.png",
    alt: "Opulence - Luxury fashion hub headless Shopify storefront",
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
    image: "/projects/shopify_mockups.png",
    alt: "Tweedle - Premium carry essentials e-commerce shop",
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
    image: "/projects/shopify_mockups.png",
    alt: "Slant Essentials - Minimalist retail tech product design showcase",
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
                boxShadow: "var(--glow-combined)",
              }}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                perspective: 1000,
              }}
            >
              <div style={{
                height: 200,
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }} role="img" aria-label={project.alt}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 40%, var(--bg-primary) 100%)",
                  opacity: 0.9
                }} />
                {/* Visual indicator for the preview button */}
                <div style={{
                   position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                   background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
                   padding: '0.75rem 1.5rem', borderRadius: 'var(--radius-full)',
                   fontSize: '0.8rem', fontWeight: 600, color: '#fff',
                   opacity: 0, pointerEvents: 'none', transition: 'opacity 0.3s'
                }} className="card-hover-indicator">
                  View Detail
                </div>
                <div style={{
                  position: "absolute", bottom: 12, right: 16,
                  background: "rgba(0,0,0,0.5)",
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
                    background: "var(--badge-bg)",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    border: "1px solid var(--badge-border)",
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "0.25rem", color: "var(--text-primary)" }}>
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

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: '1.5rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.65rem", color: "var(--text-tertiary)",
                      background: "var(--bg-tertiary)",
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
                    display: "flex", alignItems: "center", gap: '1rem',
                  }}
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    style={{ 
                      fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
                      padding: '0.65rem 1.25rem', background: 'var(--gradient-secondary)',
                      borderRadius: 'var(--radius-full)', color: '#fff',
                      flex: 1, textAlign: 'center', boxShadow: '0 4px 12px rgba(34, 211, 238, 0.2)'
                    }} 
                    className="hover:scale-[1.03] active:scale-[0.98] transition-all"
                    aria-label={`Visit ${project.title} live website`}
                  >
                    Visit Site ↗
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
              background: "var(--overlay-scrim)",
              backdropFilter: "blur(16px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 850, maxHeight: "90vh",
                background: "var(--bg-secondary)", borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-primary)",
                boxShadow: 'var(--glass-shadow)',
                overflow: "hidden", display: 'flex', flexDirection: 'column'
              }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <div style={{ height: 320, backgroundImage: `url(${selected.image})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }} role="img" aria-label={selected.alt}>
                 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 20%, var(--bg-secondary))' }} />
                 <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'var(--overlay-scrim)', border: 'none', color: '#fff', borderRadius: '50%', width: 44, height: 44, cursor: 'pointer', zIndex: 10 }} aria-label="Close modal">✕</button>
              </div>
              <div style={{ padding: "3rem", overflowY: 'auto' }}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '2rem'}}>
                  <div>
                    <h2 id="modal-title" style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1, color: "var(--text-primary)" }}>{selected.title}</h2>
                    <p style={{ color: "var(--text-secondary)", marginTop: "1rem", lineHeight: 1.8, fontSize: '1.05rem', maxWidth: 480 }}>{selected.problem}</p>
                  </div>
                  <a 
                    href={selected.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      padding: '1rem 2rem', background: 'var(--gradient-secondary)', color: '#fff', borderRadius: 'var(--radius-full)',
                      fontWeight: 800, fontSize: '1rem', textDecoration: 'none', whiteSpace: 'nowrap',
                      boxShadow: '0 8px 24px rgba(34, 211, 238, 0.2)'
                    }}
                    className="hover:scale-105 active:scale-95 transition-all"
                    aria-label={`Open ${selected.title} in new tab`}
                  >
                    Open Live Site ↗
                  </a>
                </div>

                <div style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3rem" }}>
                  <div>
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ color: "var(--neon-cyan)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "3px", fontWeight: 800, marginBottom: '0.75rem' }}>Our Engineering Approach</h4>
                      <p style={{ fontSize: "1rem", color: 'var(--text-primary)', lineHeight: 1.8 }}>{selected.solution}</p>
                    </div>
                    <div>
                      <h4 style={{ color: "var(--text-tertiary)", textTransform: "uppercase", fontSize: "0.75rem", letterSpacing: "2px", fontWeight: 700, marginBottom: '1rem' }}>Technology Stack</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {selected.tech.map(t => (
                          <span key={t} style={{ padding: '0.4rem 0.8rem', background: 'var(--bg-tertiary)', borderRadius: '6px', fontSize: '0.8rem', color: "var(--text-secondary)", border: "1px solid var(--border-primary)" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ background: "var(--accent-subtle)", padding: "2.5rem", borderRadius: "20px", border: '1px solid var(--border-primary)' }}>
                    <h4 style={{ color: "var(--neon-magenta)", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "3px", fontWeight: 800, marginBottom: '1rem' }}>Business Impact</h4>
                    <div style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: '0.5rem' }} className="text-gradient">{selected.metrics.primary} {selected.metrics.label}</div>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{selected.result}</p>
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
