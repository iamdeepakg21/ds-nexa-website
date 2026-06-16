"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    setMobileOpen(false);

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`nav${scrolled ? " scrolled" : ""}`}
        style={{
          padding: scrolled ? "0.625rem 0" : "1rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img
              src="/brand/logo.png"
              alt="DsNexa Solutions"
              className="logo-img"
            />
          </Link>

          {/* Desktop Nav Links — centered */}
          <div
            className="hide-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.25rem",
            }}
          >
            {/* Services Dropdown */}
            <div className="nav-item-dropdown">
              <button className="nav-link" onClick={() => scrollTo("#services")}>
                Services <span style={{ fontSize: "0.625rem", marginLeft: "2px", display: "inline-block", transform: "translateY(-1px)" }}>▼</span>
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => scrollTo("#services")}>
                  <span className="dropdown-item-title">Cloud-native Engineering</span>
                  <span className="dropdown-item-desc">High-scale cloud infrastructure</span>
                </button>
                <button className="dropdown-item" onClick={() => scrollTo("#services")}>
                  <span className="dropdown-item-title">Edge Intelligence</span>
                  <span className="dropdown-item-desc">On-device AI and smart systems</span>
                </button>
                <button className="dropdown-item" onClick={() => scrollTo("#services")}>
                  <span className="dropdown-item-title">Automation & Workflows</span>
                  <span className="dropdown-item-desc">Enterprise business integrations</span>
                </button>
                <button className="dropdown-item" onClick={() => scrollTo("#services")}>
                  <span className="dropdown-item-title">Data Strategy</span>
                  <span className="dropdown-item-desc">Pipelines, storage, and analytics</span>
                </button>
              </div>
            </div>

            {/* Work */}
            <button onClick={() => scrollTo("#work")} className="nav-link">
              Work
            </button>

            {/* Testimonials */}
            <button onClick={() => scrollTo("#testimonials")} className="nav-link">
              Testimonials
            </button>

            {/* Company Dropdown */}
            <div className="nav-item-dropdown">
              <button className="nav-link" onClick={() => scrollTo("/about")}>
                Company <span style={{ fontSize: "0.625rem", marginLeft: "2px", display: "inline-block", transform: "translateY(-1px)" }}>▼</span>
              </button>
              <div className="dropdown-menu">
                <Link href="/about" className="dropdown-item">
                  <span className="dropdown-item-title">About Us</span>
                  <span className="dropdown-item-desc">Our mission and story</span>
                </Link>
                <Link href="/privacy" className="dropdown-item">
                  <span className="dropdown-item-title">Privacy Policy</span>
                  <span className="dropdown-item-desc">How we protect your data</span>
                </Link>
                <Link href="/terms" className="dropdown-item">
                  <span className="dropdown-item-title">Terms & Conditions</span>
                  <span className="dropdown-item-desc">Legal terms and use rules</span>
                </Link>
              </div>
            </div>

            {/* Contact */}
            <button onClick={() => scrollTo("#contact")} className="nav-link">
              Contact
            </button>
          </div>

          {/* Right side: CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              className="btn-outline hide-mobile"
              onClick={() => scrollTo("#contact")}
              style={{ padding: "0.625rem 1.5rem", fontSize: "0.8125rem" }}
            >
              Let&apos;s talk
            </button>

            {/* Hamburger */}
            <button
              className={`hamburger${mobileOpen ? " active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div className={`mobile-overlay${mobileOpen ? " open" : ""}`}>
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            className="mobile-menu-link"
            style={{ transitionDelay: `${0.1 + i * 0.05}s` }}
          >
            {link.label}
          </button>
        ))}

        <div style={{ width: "40px", height: "1.5px", background: "var(--color-border)", margin: "0.5rem 0" }} />

        <Link
          href="/about"
          className="mobile-menu-link"
          style={{ fontSize: "1.25rem", color: "var(--color-text-secondary)", transitionDelay: `${0.1 + navLinks.length * 0.05}s` }}
          onClick={() => setMobileOpen(false)}
        >
          About Us
        </Link>
        <Link
          href="/privacy"
          className="mobile-menu-link"
          style={{ fontSize: "1.25rem", color: "var(--color-text-secondary)", transitionDelay: `${0.1 + (navLinks.length + 1) * 0.05}s` }}
          onClick={() => setMobileOpen(false)}
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="mobile-menu-link"
          style={{ fontSize: "1.25rem", color: "var(--color-text-secondary)", transitionDelay: `${0.1 + (navLinks.length + 2) * 0.05}s` }}
          onClick={() => setMobileOpen(false)}
        >
          Terms & Conditions
        </Link>

        <button
          onClick={() => scrollTo("#contact")}
          className="mobile-menu-link"
          style={{ color: "var(--color-accent)", marginTop: "1rem", transitionDelay: `${0.1 + (navLinks.length + 3) * 0.05}s` }}
        >
          Let&apos;s talk →
        </button>
      </div>
    </>
  );
}
