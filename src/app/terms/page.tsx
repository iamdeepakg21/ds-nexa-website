"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const termSections = [
  {
    title: "1. Acceptance of Terms",
    content: "By engaging with DS Nexa Solutions or using our website, you agree to these terms. We keep things simple: we provide high-end engineering, and you agree to use our services and site responsibly. These terms are a binding agreement between you and DS Nexa Solutions."
  },
  {
    title: "2. Our Services",
    content: "We specialize in 'Engineering Scalable Digital Universes'—this includes Shopify/WordPress development, custom Next.js applications, AI integrations, and business automation. Each project is governed by a specific Statement of Work (SOW) that outlines the exact deliverables and timelines."
  },
  {
    title: "3. Intellectual Property",
    content: "This is the important part: Once the final payment is made, you own the code. We grant you full ownership of the custom software we build for you. We only retain the right to showcase the work in our portfolio (unless we've signed a specific NDA)."
  },
  {
    title: "4. Payment Terms",
    content: "For project-based work, we typically operate on a 50/50 model (50% upfront, 50% on completion) or milestones. For hourly consulting at $20/hr, we bill bi-weekly. Late payments may result in a temporary pause of services."
  },
  {
    title: "5. Limitation of Liability",
    content: "While we build for 'Planet Scale' and follow extreme engineering rigors, software is complex. DS Nexa Solutions is not liable for indirect, incidental, or consequential damages resulting from the use of our services beyond the amount paid for the specific project."
  },
  {
    title: "6. Zero-Harassment Policy",
    content: "We believe in mutual respect. We reserve the right to terminate any project or engagement immediately if our team is subjected to harassment, discrimination, or abusive behavior."
  }
];

export default function TermsPage() {
  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />
      
      <section className="section" style={{ paddingTop: "8rem" }}>
        <div className="blob blob-cyan" style={{ width: 500, height: 500, top: "-10%", right: "-10%" }} />
        <div className="blob blob-purple" style={{ width: 400, height: 400, bottom: "10%", left: "-5%" }} />

        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge">⚖️ Legal Framework</div>
            <h1 className="heading-lg">Terms of <span className="text-gradient">Service</span></h1>
            <p className="section-subtitle">
              The rules of engagement for engineering excellence. Simple and fair.
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
                {termSections.map((section, i) => (
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
                Need a custom NDA or have specific legal requirements?
              </p>
              <Link href="/#contact" className="btn-primary">
                Let's Discuss →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
