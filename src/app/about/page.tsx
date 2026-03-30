"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const milestones = [
  { year: "2024", title: "The Foundation", desc: "Started with a vision to merge high-scale distributed systems with premium, cinematic design." },
  { year: "2025", title: "The AI Shift", desc: "Successfully integrated LLM workflows into business automation for 20+ global clients." },
  { year: "2026", title: "Planet Scale", desc: "Executing 50+ high-fidelity projects across India and international markets with perfect ROI." }
];

export default function AboutPage() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: "10rem", paddingBottom: "6rem" }}>
        <div className="blob blob-cyan" style={{ width: 600, height: 600, top: "-15%", left: "-10%" }} />
        
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", maxWidth: 900, margin: "0 auto" }}
          >
            <div className="section-badge">Our North Star</div>
            <h1 className="heading-xl">Engineering <span className="text-gradient">Digital Universes</span></h1>
            <p className="section-subtitle" style={{ fontSize: "1.25rem", marginTop: "1.5rem" }}>
              DS Nexa Solutions is a **premium software consulting company** and **IT service solutions provider**. We don't just build websites; we engineer high-performance, immersive digital experiences that scale with your ambition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="grid-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>The <span className="text-gradient">Craft</span> of Scale</h2>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Founded with a mission to bridge the gap between heavy-duty engineering and premium product design, DS Nexa Solutions was built on three core pillars: **Performance, Scalability, and Global Excellence.**
              </p>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Based in India and serving a global clientele, we've delivered 50+ projects ranging from complex Shopify ecosystems to AI-driven automation pipelines. We believe every byte of code should move the needle for your business.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card"
              style={{ padding: "3rem", position: "relative", overflow: "hidden" }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>🚀</div>
              <h3 className="heading-md" style={{ marginBottom: "1rem" }}>Built for the Future</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                We use the same primitives that power the world's most successful tech companies—Next.js, Go, Python, and Distributed Data—to ensure your product never hits a ceiling.
              </p>
              <div style={{ position: "absolute", bottom: -20, right: -20, width: 100, height: 100, background: "var(--gradient-primary)", filter: "blur(60px)", opacity: 0.2 }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The <span className="text-gradient">Trajectory</span></h2>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: 800, margin: "0 auto" }}>
            {milestones.map((ms, i) => (
              <motion.div
                key={ms.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: "2rem", display: "flex", gap: "2rem", alignItems: "center" }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--neon-cyan)", minWidth: 100 }}>{ms.year}</div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)" }}>{ms.title}</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>{ms.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Universe */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: "4rem", textAlign: "center", border: "1px solid var(--neon-cyan)", boxShadow: "var(--glow-cyan)" }}
          >
            <h2 className="heading-lg" style={{ marginBottom: "1.5rem" }}>Ready to <span className="text-gradient">Launch</span>?</h2>
            <p style={{ maxWidth: 600, margin: "0 auto 2.5rem", color: "var(--text-secondary)" }}>
              Whether you're a startup looking for its first MVP or an enterprise scaling to millions, we have the engineering power to get you there.
            </p>
            <Link href="/#contact" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem" }}>
              Start the Conversation →
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
