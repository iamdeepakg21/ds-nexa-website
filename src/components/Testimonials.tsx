"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Testimonials — Two featured quotes side by side, manual prev/next arrows.
 * Large amber decorative quote marks. Diagonal lines background pattern.
 * Smooth crossfade transition between quote pairs.
 */

const testimonials = [
  {
    quote: "DSN EXA didn't just build our platform — they architected our competitive advantage. The system handles 10x our projected load without blinking.",
    name: "Alex Rivera",
    role: "CTO, Lumina",
  },
  {
    quote: "From concept to production in 5 weeks. Their edge intelligence solution cut our inference latency from 800ms to under 12ms. Genuinely transformative.",
    name: "Samira K.",
    role: "Product Lead, NexaCore",
  },
  {
    quote: "The automation system gave us back 25 hours every week. What used to require a team of three now runs on autopilot.",
    name: "Marcus Chen",
    role: "Operations Head, Vertex",
  },
  {
    quote: "Best engineering team we've ever worked with. Period. They think in systems, not features — and that makes all the difference.",
    name: "Priya Sharma",
    role: "Founder, HealthSync",
  },
];

export default function Testimonials() {
  const [pairIndex, setPairIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const totalPairs = Math.ceil(testimonials.length / 2);

  const navigate = useCallback((dir: number) => {
    setFade(false);
    setTimeout(() => {
      setPairIndex((prev) => (prev + dir + totalPairs) % totalPairs);
      setFade(true);
    }, 250);
  }, [totalPairs]);

  const currentPair = testimonials.slice(pairIndex * 2, pairIndex * 2 + 2);

  useEffect(() => {
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

  return (
    <section
      id="testimonials"
      className="section diagonal-lines"
      ref={sectionRef}
      style={{ position: "relative" }}
    >
      <div className="container">
        {/* Header */}
        <div className="reveal delay-1" style={{ marginBottom: "var(--gap-xl)" }}>
          <span className="section-label">Testimonials</span>
          <h2 className="heading-lg">
            Trusted by
            <br />
            <span className="text-accent">builders.</span>
          </h2>
        </div>

        {/* Quotes grid */}
        <div
          className="testimonial-grid reveal delay-2"
          style={{
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          {currentPair.map((t, i) => (
            <div key={`${pairIndex}-${i}`} className="testimonial-card">
              <span className="testimonial-quote-mark">&ldquo;</span>
              <p className="testimonial-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {totalPairs > 1 && (
          <div className="testimonial-nav reveal delay-3">
            <button
              className="testimonial-nav-btn"
              onClick={() => navigate(-1)}
              aria-label="Previous testimonials"
            >
              ←
            </button>
            <button
              className="testimonial-nav-btn"
              onClick={() => navigate(1)}
              aria-label="Next testimonials"
            >
              →
            </button>
            <span
              style={{
                marginLeft: "var(--gap-sm)",
                fontSize: "0.8125rem",
                color: "var(--color-text-muted)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {pairIndex + 1} / {totalPairs}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
