"use client";

import { useEffect, useRef } from "react";

/**
 * Showcase / Work Section — Horizontal scrollable gallery
 * Each project: image (or CSS gradient placeholder), title, desc, "View case study" link
 * Cards have quirky border-radius and amber accent border on hover
 */

const projects = [
  {
    id: 1,
    title: "AquaTrax Solutions",
    desc: "High-scale infrastructure & AI-powered utility management platform.",
    category: "Platform Engineering",
    image: "/projects/aquatrax.png",
    url: "https://aquatraxsolutions.com",
    gradient: "linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%)",
    tech: ["Next.js", "Node.js", "Go", "Docker"],
  },
  {
    id: 2,
    title: "Tanntrim",
    desc: "Premium leather goods store with luxury UI/UX and optimized conversion.",
    category: "E-commerce",
    image: "/projects/shopify_mockups.png",
    url: "https://www.tanntrim.com/",
    gradient: "linear-gradient(135deg, #2a1a3a 0%, #1a0d2a 100%)",
    tech: ["Shopify", "Liquid", "React"],
  },
  {
    id: 3,
    title: "Opulence",
    desc: "Headless Shopify storefront — 60% faster loads, +42% conversion.",
    category: "Headless Commerce",
    image: "/projects/opulence.png",
    url: "https://opulence-new.myshopify.com/",
    gradient: "linear-gradient(135deg, #2a2a1a 0%, #1a1a0d 100%)",
    tech: ["Shopify", "Next.js", "GraphQL"],
  },
  {
    id: 4,
    title: "Tweedle",
    desc: "Art-directed D2C carry essentials brand with seamless checkout.",
    category: "D2C Brand",
    image: "/projects/tweedle.png",
    url: "https://tweedle.in/",
    gradient: "linear-gradient(135deg, #3a1a2a 0%, #2a0d1a 100%)",
    tech: ["Shopify", "UI/UX", "Analytics"],
  },
  {
    id: 5,
    title: "Slant Essentials",
    desc: "Minimalist retail design — less is more, executed flawlessly.",
    category: "Retail Tech",
    image: "/projects/slant.png",
    url: "https://slant.co.in/",
    gradient: "linear-gradient(135deg, #1a3a2a 0%, #0d2a1a 100%)",
    tech: ["Shopify", "Custom Sections"],
  },
  {
    id: 6,
    title: "SafarWithAman",
    desc: "Curated travel booking platform for premium Himalayan expeditions and signature tours.",
    category: "Travel Curation",
    image: "/projects/safarwithaman.png",
    url: "https://safarwithaman.com",
    gradient: "linear-gradient(135deg, #3a2e1a 0%, #221a0d 100%)",
    tech: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
  },
];

export default function Showcase() {
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
      { threshold: 0.05 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="section" ref={sectionRef}>
      <div className="container">
        {/* Section header */}
        <div className="reveal delay-1" style={{ marginBottom: "var(--gap-xl)" }}>
          <span className="section-label">Selected Work</span>
          <h2 className="heading-lg">
            Projects that speak
            <br />
            <span className="text-accent">louder.</span>
          </h2>
        </div>
      </div>

      {/* Horizontal scroll gallery — full-width */}
      <div
        className="container"
        style={{ maxWidth: "none", paddingRight: 0 }}
      >
        <div className="showcase-scroll reveal delay-2">
          {projects.map((project) => (
            <div key={project.id} className="showcase-card card-accent-hover">
              {/* Image or gradient placeholder */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="showcase-image"
                  loading="lazy"
                />
              ) : (
                <div
                  className="showcase-placeholder"
                  style={{ background: project.gradient }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--color-text-muted)",
                      opacity: 0.4,
                    }}
                  >
                    {project.title.charAt(0)}
                  </span>
                </div>
              )}

              <div className="showcase-body">
                {/* Category tag */}
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-accent)",
                    marginBottom: "var(--gap-sm)",
                  }}
                >
                  {project.category}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "var(--color-text)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "var(--gap-md)",
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "var(--gap-md)" }}>
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.6875rem",
                        color: "var(--color-text-muted)",
                        background: "var(--color-elevated)",
                        padding: "0.25rem 0.5rem",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-link"
                >
                  View case study
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
