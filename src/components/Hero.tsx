"use client";

import { useEffect, useRef } from "react";

/**
 * Hero Section — Asymmetric split layout
 * Left: headline with outline text + CTA + tilted badge
 * Right: terminal illustration + floating geometric shape
 * Background: dot grid pattern
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Intersection Observer for reveal animations
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="dot-grid"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Floating geometric shape — top right */}
      <div
        className="geo-shape float"
        style={{
          top: "15%",
          right: "8%",
          transform: "rotate(45deg)",
        }}
      />

      {/* Second geometric — bottom left */}
      <div
        className="geo-shape rotate-slow"
        style={{
          bottom: "12%",
          left: "5%",
          width: "50px",
          height: "50px",
          borderRadius: "var(--radius-sm)",
        }}
      />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "var(--gap-xl)",
          alignItems: "center",
          paddingTop: "clamp(3rem, 8vh, 6rem)",
          paddingBottom: "clamp(3rem, 8vh, 6rem)",
        }}
      >
        {/* Left column — content */}
        <div>
          {/* Section label */}
          <div className="reveal delay-1">
            <span className="section-label">
              System Architecture · AI Integration · Digital Transformation
            </span>
          </div>

          {/* Main headline */}
          <h1 className="heading-display reveal delay-2" style={{ marginBottom: "var(--gap-md)" }}>
            Build without
            <br />
            <span className="text-outline">boundaries.</span>
          </h1>

          {/* Supporting text */}
          <p
            className="reveal delay-3"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.1875rem)",
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "var(--gap-lg)",
            }}
          >
            We engineer cloud-native systems, edge intelligence, and AI
            workflows for ambitious teams that refuse to settle for &ldquo;good
            enough.&rdquo;
          </p>

          {/* CTA */}
          <div className="reveal delay-4" style={{ display: "flex", flexWrap: "wrap", gap: "var(--gap-sm)", alignItems: "center" }}>
            <button className="btn-primary" onClick={() => scrollTo("#contact")}>
              Start a project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Tilted badge */}
          <div className="reveal delay-5">
            <span className="tilted-badge">
              Now Booking Q3 2026
            </span>
          </div>
        </div>

        {/* Right column — terminal illustration */}
        <div className="reveal delay-3 hide-mobile" style={{ display: "flex", justifyContent: "flex-end" }}>
          <div className="terminal">
            <div className="terminal-header">
              <span className="terminal-dot terminal-dot--red" />
              <span className="terminal-dot terminal-dot--yellow" />
              <span className="terminal-dot terminal-dot--green" />
            </div>
            <div className="terminal-body">
              <div className="terminal-line">
                <span className="terminal-prompt">→</span>
                <span><span className="terminal-keyword">const</span> stack = &#123;</span>
              </div>
              <div className="terminal-line" style={{ paddingLeft: "1.5rem" }}>
                <span>infra: <span className="terminal-string">&quot;cloud-native&quot;</span>,</span>
              </div>
              <div className="terminal-line" style={{ paddingLeft: "1.5rem" }}>
                <span>ai: <span className="terminal-string">&quot;edge-ready&quot;</span>,</span>
              </div>
              <div className="terminal-line" style={{ paddingLeft: "1.5rem" }}>
                <span>scale: <span className="terminal-string">&quot;planet&quot;</span>,</span>
              </div>
              <div className="terminal-line">
                <span>&#125;;</span>
              </div>
              <div style={{ height: "0.75rem" }} />
              <div className="terminal-line">
                <span className="terminal-prompt">→</span>
                <span><span className="terminal-keyword">await</span> dsnexa.build(stack);</span>
              </div>
              <div className="terminal-line">
                <span className="terminal-comment">// deploying to 42 edge regions...</span>
              </div>
              <div className="terminal-line" style={{ marginTop: "0.25rem" }}>
                <span className="terminal-prompt">→</span>
                <span className="terminal-cursor cursor-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "10px",
            border: "1.5px solid var(--color-border)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "6px",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "6px",
              borderRadius: "2px",
              background: "var(--color-accent)",
              animation: "float 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: left;
          }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          #hero .container {
            grid-template-columns: 1.2fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
