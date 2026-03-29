"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    title: "TeleMed Pro",
    subtitle: "Doctor Consultation App",
    category: "Healthcare",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    problem: "Long wait times and fragmented patient-doctor communication.",
    solution: "Built a full-stack telemedicine platform with AI symptom checker, video calls, and EHR integration.",
    result: "340% increase in consultation bookings, 4.9/5 patient satisfaction.",
    metrics: { primary: "340%", label: "Booking Increase" },
    tech: ["Next.js", "Node.js", "OpenAI", "WebRTC", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Shopify AI Assistant",
    subtitle: "Intelligent E-commerce Automation",
    category: "E-commerce",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    problem: "High cart abandonment and manual customer support.",
    solution: "Custom Next.js + OpenAI-powered chatbot that handles 87% of queries and suggests personalized products.",
    result: "42% reduction in cart abandonment, $1.2M additional revenue in first 90 days.",
    metrics: { primary: "$1.2M", label: "Revenue Added" },
    tech: ["Next.js", "Shopify API", "OpenAI", "Redis", "Tailwind"],
  },
  {
    id: 3,
    title: "NexaFlow",
    subtitle: "Business Process Automation",
    category: "SaaS",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    problem: "Manual operations wasting 25+ hours/week for a growing SaaS startup.",
    solution: "End-to-end automation platform using Node.js, Go, and AI workflows.",
    result: "Saved 180+ hours/month and reduced operational costs by 63%.",
    metrics: { primary: "63%", label: "Cost Reduction" },
    tech: ["Node.js", "Go", "OpenAI", "PostgreSQL", "Docker"],
  },
  {
    id: 4,
    title: "EduPulse",
    subtitle: "AI-Powered Learning Platform",
    category: "Education",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
    problem: "Low student engagement in online courses.",
    solution: "Next.js + React Native app with personalized AI learning paths and real-time progress analytics.",
    result: "4.2x increase in course completion rate.",
    metrics: { primary: "4.2×", label: "Completion Rate" },
    tech: ["Next.js", "React Native", "OpenAI", "Supabase", "D3.js"],
  },
  {
    id: 5,
    title: "FinTrack Dashboard",
    subtitle: "SaaS Financial Intelligence",
    category: "Fintech",
    gradient: "linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)",
    problem: "Founders drowning in spreadsheets and delayed insights.",
    solution: "Real-time AI analytics dashboard with predictive cash-flow forecasting.",
    result: "Clients reported 3x faster financial decision-making.",
    metrics: { primary: "3×", label: "Faster Decisions" },
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "Chart.js"],
  },
  {
    id: 6,
    title: "HealthSync",
    subtitle: "AI Clinic Management System",
    category: "Healthcare",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    problem: "Chaotic appointment scheduling and record keeping.",
    solution: "Complete automation suite with predictive scheduling and HIPAA-compliant AI insights.",
    result: "Reduced no-show rate by 71%.",
    metrics: { primary: "71%", label: "No-Show Reduction" },
    tech: ["Next.js", "Node.js", "OpenAI", "PostgreSQL", "HIPAA"],
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
          <div className="section-badge">🌟 Our Work</div>
          <h2 className="section-title">
            Projects That <span className="text-gradient">Speak Results</span>
          </h2>
          <p className="section-subtitle">
            Real problems. Intelligent solutions. Measurable outcomes.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
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
                rotateX: 2,
                rotateY: -2,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0, 240, 255, 0.1)",
              }}
              style={{
                cursor: "pointer",
                overflow: "hidden",
                perspective: 1000,
              }}
            >
              {/* Card Header */}
              <div style={{
                height: 140,
                background: project.gradient,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                }} />
                <div style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "rgba(255,255,255,0.9)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  zIndex: 1,
                }}>
                  {project.title}
                </div>
                {/* Floating metric */}
                <div style={{
                  position: "absolute", bottom: 12, right: 16,
                  background: "rgba(0,0,0,0.3)",
                  backdropFilter: "blur(10px)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.75rem", fontWeight: 600, color: "#fff",
                }}>
                  {project.metrics.primary} {project.metrics.label}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  marginBottom: "0.75rem",
                }}>
                  <span style={{
                    fontSize: "0.6875rem", fontWeight: 600, color: "var(--neon-cyan)",
                    background: "rgba(0, 240, 255, 0.1)",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                  {project.subtitle}
                </h3>
                <p style={{
                  fontSize: "0.8125rem", color: "var(--text-secondary)",
                  lineHeight: 1.6, marginBottom: "1rem",
                  display: "-webkit-box", WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                  {project.problem}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} style={{
                      fontSize: "0.6875rem", color: "var(--text-tertiary)",
                      background: "var(--bg-card)",
                      padding: "0.1875rem 0.5rem",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--border-secondary)",
                    }}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span style={{
                      fontSize: "0.6875rem", color: "var(--text-muted)",
                      padding: "0.1875rem 0.5rem",
                    }}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <motion.div
                  style={{
                    marginTop: "1rem", paddingTop: "1rem",
                    borderTop: "1px solid var(--border-primary)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}
                >
                  <span style={{ fontSize: "0.8125rem", fontWeight: 500 }} className="text-gradient">
                    View Case Study →
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 100,
              background: "rgba(0,0,0,0.8)",
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "100%", maxWidth: 700, maxHeight: "85vh",
                overflowY: "auto",
                background: "var(--bg-secondary)",
                borderRadius: "var(--radius-xl)",
                border: "1px solid var(--border-primary)",
                overflow: "hidden",
              }}
            >
              {/* Modal Header */}
              <div style={{
                height: 180, background: selected.gradient,
                position: "relative",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)",
                }} />
                <div style={{ textAlign: "center", zIndex: 1 }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fff" }}>
                    {selected.title}
                  </div>
                  <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", marginTop: "0.25rem" }}>
                    {selected.subtitle}
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    position: "absolute", top: 16, right: 16,
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(0,0,0,0.3)", border: "none",
                    color: "#fff", cursor: "pointer", fontSize: "1.25rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "2rem" }}>
                <div style={{
                  display: "flex", gap: "0.5rem", marginBottom: "2rem", flexWrap: "wrap",
                }}>
                  <span style={{
                    fontSize: "0.75rem", fontWeight: 600, color: "var(--neon-cyan)",
                    background: "rgba(0, 240, 255, 0.1)",
                    padding: "0.375rem 0.875rem",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                  }}>
                    {selected.category}
                  </span>
                  {selected.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: "0.75rem", color: "var(--text-tertiary)",
                      background: "var(--bg-card)",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid var(--border-secondary)",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Problem */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{
                    fontSize: "0.8125rem", fontWeight: 600, color: "#ef4444",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                  }}>
                    ❌ The Problem
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {selected.problem}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{
                    fontSize: "0.8125rem", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                  }}>
                    <span className="text-gradient">✅ Our Solution</span>
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {selected.solution}
                  </p>
                </div>

                {/* Result */}
                <div style={{
                  padding: "1.5rem", borderRadius: "var(--radius-lg)",
                  background: "var(--gradient-glow)",
                  border: "1px solid var(--border-glow)",
                }}>
                  <h4 style={{
                    fontSize: "0.8125rem", fontWeight: 600,
                    textTransform: "uppercase", letterSpacing: "0.05em",
                    marginBottom: "0.75rem", color: "var(--neon-cyan)",
                  }}>
                    📊 Results
                  </h4>
                  <div style={{
                    fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem",
                  }} className="text-gradient">
                    {selected.metrics.primary} {selected.metrics.label}
                  </div>
                  <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {selected.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
