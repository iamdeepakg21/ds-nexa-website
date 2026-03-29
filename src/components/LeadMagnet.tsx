"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LeadMagnet() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section" ref={ref} style={{ position: "relative" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "clamp(2rem, 5vw, 4rem)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            borderColor: "rgba(0, 240, 255, 0.15)",
          }}
        >
          {/* Background decoration */}
          <div style={{
            position: "absolute", top: -80, right: -80,
            width: 250, height: 250, borderRadius: "50%",
            background: "var(--neon-cyan)", opacity: 0.03,
            filter: "blur(60px)",
          }} />
          <div style={{
            position: "absolute", bottom: -60, left: -60,
            width: 200, height: 200, borderRadius: "50%",
            background: "var(--neon-purple)", opacity: 0.03,
            filter: "blur(60px)",
          }} />

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize: "3rem", marginBottom: "1.5rem" }}
          >
            🎁
          </motion.div>

          <h2 style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700,
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}>
            Get a <span className="text-gradient">Free AI Website Audit</span>
          </h2>

          <p style={{
            fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
            color: "var(--text-secondary)",
            maxWidth: 500,
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}>
            Discover hidden performance issues, SEO gaps, and AI automation opportunities — completely free. No strings attached.
          </p>

          <div style={{
            display: "flex", gap: "1rem",
            justifyContent: "center", flexWrap: "wrap",
          }}>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#contact")}
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              🔍 Get Free Audit
            </motion.button>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo("#contact")}
              style={{ fontSize: "1rem", padding: "1rem 2rem" }}
            >
              📞 Book Strategy Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
