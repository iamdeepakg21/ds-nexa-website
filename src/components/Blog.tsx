"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const posts = [
  {
    title: "How AI Automation is Saving Startups 30+ Hours/Week",
    excerpt: "Discover how intelligent workflows and GPT-powered tools are revolutionizing startup operations in 2026.",
    tag: "AI & Automation",
    readTime: "5 min read",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
  },
  {
    title: "Why Next.js is the Future of SaaS",
    excerpt: "From server components to edge rendering — why the world's best SaaS products are built on Next.js.",
    tag: "Engineering",
    readTime: "7 min read",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
  },
  {
    title: "Building Scalable Apps in 2026",
    excerpt: "A practical guide to architecture decisions that let your product scale from 100 to 100K users.",
    tag: "Architecture",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
  },
];

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">🧾 Insights</div>
          <h2 className="section-title">
            Latest from <span className="text-gradient">Our Blog</span>
          </h2>
          <p className="section-subtitle">
            Thoughts, guides, and insights from our engineering team.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
          maxWidth: 1000,
          margin: "0 auto",
        }}>
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
              className="glass-card blog-card"
              style={{ cursor: "pointer", overflow: "hidden" }}
            >
              {/* Image Placeholder */}
              <div style={{
                height: 180,
                background: post.gradient,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 60%)",
                }} />
                {/* Decorative elements */}
                <div style={{
                  position: "absolute", top: "20%", left: "10%",
                  width: 60, height: 60, borderRadius: "50%",
                  border: "2px solid rgba(255,255,255,0.2)",
                  animation: "float 4s ease-in-out infinite",
                }} />
                <div style={{
                  position: "absolute", bottom: "15%", right: "15%",
                  width: 40, height: 40, borderRadius: "var(--radius-md)",
                  border: "2px solid rgba(255,255,255,0.15)",
                  transform: "rotate(45deg)",
                  animation: "float 5s ease-in-out infinite reverse",
                }} />
                <span style={{ fontSize: "3rem", zIndex: 1, filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" }}>
                  {post.tag === "AI & Automation" ? "🤖" : post.tag === "Engineering" ? "⚡" : "🏗️"}
                </span>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}>
                  <span style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    color: "var(--neon-cyan)",
                    background: "rgba(0, 240, 255, 0.1)",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontSize: "1.0625rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.4,
                }}>
                  {post.title}
                </h3>

                <p style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}>
                  {post.excerpt}
                </p>

                <span className="text-gradient" style={{ fontSize: "0.8125rem", fontWeight: 600 }}>
                  Read More →
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
