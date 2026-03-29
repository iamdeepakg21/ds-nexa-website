"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Transparency First",
    content: "We value your privacy as much as our own code. At DS Nexa Solutions, we believe in radical transparency. We don't sell your data, we don't 'rent' your attention, and we don't track you across the web. We build software; we don't harvest humans."
  },
  {
    title: "2. Data We Collect",
    content: "We only collect what you explicitly give us. When you fill out our contact form, we receive your Name, Email, and Project Details. This information is used solely to respond to your inquiry and potentially work together on your project."
  },
  {
    title: "3. Third-Party Services",
    content: "To provide a seamless experience, we use a few trusted partners: Web3Forms (for contact form processing) and Vercel (for high-speed global hosting). These partners are GDPR and CCPA compliant and do not use your information for their own purposes."
  },
  {
    title: "4. Cookies & Tracking",
    content: "Our website uses minimal, essential cookies only. We don't use invasive tracking pixels or fingerprinting. We might use basic, anonymous analytics to understand which of our projects people find most interesting, but we never link this to your personal identity."
  },
  {
    title: "5. Your Rights",
    content: "You are the owner of your data. At any time, you can email us at contact@dsnexasolutions.co.in to request a copy of the data we have, or to ask us to delete it entirely. We will comply within 24 hours."
  },
  {
    title: "6. Security",
    content: "We treat your data with the same engineering rigor we apply to our high-scale distributed systems. All communications are encrypted (SSL/TLS), and our infrastructure is monitored for security threats 24/7."
  }
];

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      
      <section className="section" style={{ paddingTop: "8rem" }}>
        <div className="blob blob-purple" style={{ width: 500, height: 500, top: "-10%", left: "-10%" }} />
        <div className="blob blob-cyan" style={{ width: 400, height: 400, bottom: "10%", right: "-5%" }} />

        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">🔐 Legal & Privacy</div>
            <h1 className="heading-lg">Privacy <span className="text-gradient">Policy</span></h1>
            <p className="section-subtitle">
              Last Updated: March 2026. Zero fluff. Just transparency.
            </p>
          </motion.div>

          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card"
              style={{ padding: "3rem", marginBottom: "3rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {sections.map((section, i) => (
                  <div key={i}>
                    <h2 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
                      {section.title}
                    </h2>
                    <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ textAlign: "center", padding: "2rem" }}
            >
              <p style={{ color: "var(--text-tertiary)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Questions? Concerns? Just want to say hello?
              </p>
              <Link href="/#contact" className="btn-primary">
                Contact Us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
