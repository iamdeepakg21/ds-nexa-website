"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Architecture", href: "#architecture-story" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#tech-stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("ds-nexa-theme", next);
    } catch {
      /* ignore */
    }
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="nav-glass"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "0.75rem 0" : "1rem 0",
          transition: "padding 0.3s ease",
          borderBottom: scrolled
            ? "1px solid var(--border-primary)"
            : "1px solid transparent",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/brand/logo.png" 
              alt="DS Nexa Solutions Logo" 
              style={{ height: "120px", width: "auto" }} 
            />
          </motion.a>

          {/* Desktop Links */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "var(--text-secondary)", fontSize: "0.875rem",
                  fontWeight: 500, fontFamily: "inherit",
                }}
                whileHover={{ color: "var(--neon-cyan)", y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              style={{
                width: 40, height: 40, borderRadius: "var(--radius-full)",
                background: "var(--bg-elevated)", border: "1px solid var(--border-primary)",
                cursor: "pointer", display: "flex", alignItems: "center",
                justifyContent: "center", color: "var(--text-secondary)",
                boxShadow: "var(--shadow-sm)",
              }}
              aria-label="Toggle color theme"
            >
              <span className="theme-toggle-icon theme-toggle-icon--sun" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              </span>
              <span className="theme-toggle-icon theme-toggle-icon--moon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </span>
            </motion.button>

            {/* CTA Button */}
            <motion.button
              className="btn-primary hide-mobile"
              onClick={() => scrollTo("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: "0.625rem 1.5rem", fontSize: "0.8125rem" }}
            >
              Start Your Project
            </motion.button>

            {/* Mobile Hamburger */}
            <button
              className="hide-desktop"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: 40, height: 40, background: "var(--bg-card)",
                border: "1px solid var(--border-primary)",
                borderRadius: "var(--radius-md)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "4px",
              }}
              aria-label="Toggle mobile menu"
            >
              <span style={{
                width: 18, height: 2, background: "var(--text-primary)",
                borderRadius: 2, transition: "all 0.3s",
                transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
              }} />
              <span style={{
                width: 18, height: 2, background: "var(--text-primary)",
                borderRadius: 2, transition: "all 0.3s",
                opacity: mobileOpen ? 0 : 1,
              }} />
              <span style={{
                width: 18, height: 2, background: "var(--text-primary)",
                borderRadius: 2, transition: "all 0.3s",
                transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
              }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu-overlay hide-desktop"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "fixed", top: 0, right: 0, width: "80%",
                maxWidth: 320, height: "100vh",
                background: "var(--bg-secondary)",
                borderLeft: "1px solid var(--border-primary)",
                padding: "6rem 2rem 2rem",
                display: "flex", flexDirection: "column", gap: "0.5rem",
              }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-primary)", fontSize: "1.125rem",
                    fontWeight: 500, fontFamily: "inherit", padding: "0.75rem 0",
                    textAlign: "left", borderBottom: "1px solid var(--border-primary)",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                className="btn-primary"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollTo("#contact")}
                style={{ marginTop: "1rem", justifyContent: "center" }}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
