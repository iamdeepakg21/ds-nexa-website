"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const HeroBackground = dynamic(() => import("./HeroBackground"), {
  ssr: false,
  loading: () => (
    <div style={{ position: "absolute", inset: 0, background: "var(--bg-primary)" }} />
  ),
});

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <HeroBackground />

      {/* Gradient overlays */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "radial-gradient(ellipse at 50% 50%, transparent 0%, var(--bg-primary) 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", zIndex: 1,
        background: "linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="section-badge" style={{ margin: "0 auto 1.5rem" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--neon-cyan)", display: "inline-block", animation: "pulseGlow 2s ease-in-out infinite" }} />
            Now Accepting New Projects for 2026
          </div>
        </motion.div>

        <motion.h1
          className="heading-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ maxWidth: 900, margin: "0 auto 1.5rem" }}
        >
          We Build{" "}
          <span className="text-shimmer">Future-Ready</span>
          <br />
          Software & AI Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--text-secondary)",
            maxWidth: 640,
            margin: "0 auto 2.5rem",
            lineHeight: 1.7,
          }}
        >
          Scalable apps, intelligent automation, and AI that actually moves the needle — for ambitious startups and global businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("#contact")}
            style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
          >
            🚀 Start Your Project
          </motion.button>
          <motion.button
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo("#contact")}
            style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}
          >
            📞 Book Free 30-min Consultation
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{
            marginTop: "4rem",
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "4.8×", label: "Avg. Client ROI" },
            { value: "$50+", label: "Starting Per Hour" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div className="text-gradient" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)", marginTop: "0.25rem" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 24, height: 40, borderRadius: 12,
              border: "2px solid var(--border-primary)",
              display: "flex", alignItems: "flex-start", justifyContent: "center",
              paddingTop: 8,
            }}
          >
            <div style={{
              width: 3, height: 8, borderRadius: 3,
              background: "var(--gradient-primary)",
            }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
