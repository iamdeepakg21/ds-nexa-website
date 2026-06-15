"use client";

import { useEffect, useRef } from "react";

/**
 * Services Section — Numbered timeline-style rows
 * Each service: number | title + description | arrow
 * Background: slow-scrolling marquee ticker at ultra-low opacity
 */

const services = [
  {
    num: "01",
    title: "Cloud-native Engineering",
    desc: "Kubernetes-orchestrated microservices, edge runtimes, and infrastructure that auto-scales from zero to planet-level traffic without breaking a sweat.",
  },
  {
    num: "02",
    title: "Edge Intelligence",
    desc: "Deploy AI models and data processing at the edge — sub-millisecond inference latency, real-time decision-making, no round-trip to the cloud.",
  },
  {
    num: "03",
    title: "Automation & Workflows",
    desc: "End-to-end business process automation that eliminates manual bottlenecks. From multi-step orchestrations to intelligent data pipelines.",
  },
  {
    num: "04",
    title: "Data Strategy",
    desc: "High-performance data layers, streaming pipelines, and analytics infrastructure built for teams drowning in data but starving for insight.",
  },
];

const marqueeText = "CLOUD-NATIVE · EDGE INTELLIGENCE · AUTOMATION · DATA STRATEGY · ";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="services" className="section" ref={sectionRef} style={{ position: "relative", overflow: "hidden" }}>
      {/* Background marquee ticker */}
      <div className="marquee-bg" aria-hidden="true">
        <div className="marquee-track">
          <span className="marquee-text">{marqueeText}{marqueeText}</span>
          <span className="marquee-text">{marqueeText}{marqueeText}</span>
        </div>
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div className="reveal delay-1" style={{ marginBottom: "var(--gap-xl)" }}>
          <span className="section-label">What We Do</span>
          <h2 className="heading-lg">
            Solutions that don&apos;t feel
            <br />
            <span className="text-accent">solved.</span>
          </h2>
        </div>

        {/* Service rows */}
        <div>
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`service-row reveal delay-${i + 2}`}
            >
              <span className="service-number">{s.num}</span>
              <div>
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.desc}</p>
              </div>
              <span className="service-arrow arrow-shift">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
