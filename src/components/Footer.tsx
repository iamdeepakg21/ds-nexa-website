"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Services: [
    { label: "Shopify Development", href: "#services" },
    { label: "WordPress Development", href: "#services" },
    { label: "Next.js Applications", href: "#services" },
    { label: "AI Integration", href: "#services" },
    { label: "Business Automation", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Our Process", href: "#process" },
    { label: "Portfolio", href: "#projects" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Case Studies", href: "#projects" },
    { label: "Free AI Audit", href: "#contact" },
    { label: "Book Consultation", href: "#contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      borderTop: "1px solid var(--border-primary)",
      background: "var(--bg-secondary)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Glow line at top */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 1,
        background: "var(--gradient-primary)", opacity: 0.4,
      }} />

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        {/* Top section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }} className="grid-4">
          <div>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "1.5rem" }}>
              <img 
                src="/brand/logo.png" 
                alt="DS Nexa Solutions Logo" 
                className="logo-adaptive"
                style={{ height: "100px", width: "auto" }} 
              />
            </div>
            <p style={{
              fontSize: "0.875rem", color: "var(--text-secondary)",
              lineHeight: 1.7, maxWidth: 300, marginBottom: "1.5rem",
            }}>
              Engineering scalable digital universes — Contact us at contact@dsnexasolutions.co.in for premium software and AI solutions.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              style={{ fontSize: "0.8125rem", padding: "0.625rem 1.5rem" }}
            >
              Start Your Project →
            </motion.button>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{
                fontSize: "0.8125rem", fontWeight: 600,
                color: "var(--text-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.25rem",
              }}>
                {title}
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {links.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="footer-link"
                    style={{
                      background: "none", border: "none",
                      cursor: "pointer", fontFamily: "inherit",
                      textAlign: "left", padding: 0,
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid var(--border-primary)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} DS Nexa Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <button
              onClick={() => scrollTo("#")}
              className="footer-link"
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollTo("#")}
              className="footer-link"
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", padding: 0 }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
