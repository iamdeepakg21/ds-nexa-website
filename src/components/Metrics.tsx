"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedCounter({ end, suffix = "", decimals = 0, duration = 2000 }: {
  end: number; suffix?: string; decimals?: number; duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 4.8, suffix: "×", decimals: 1, label: "Average ROI for Clients", icon: "📈" },
  { value: 87, suffix: "%", decimals: 0, label: "Projects Delivered Under 6 Weeks", icon: "⚡" },
  { value: 340, suffix: "%", decimals: 0, label: "Average Growth in Client Metrics", icon: "🔥" },
];

export default function Metrics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="results" className="section" ref={ref} style={{ position: "relative" }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">📊 Results</div>
          <h2 className="section-title">
            Numbers That <span className="text-gradient">Speak Volumes</span>
          </h2>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: 900,
          margin: "0 auto",
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4, boxShadow: "0 0 40px rgba(0, 240, 255, 0.12)" }}
              className="glass-card"
              style={{
                padding: "2.5rem 2rem",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: -30, right: -30,
                width: 100, height: 100, borderRadius: "50%",
                background: "var(--gradient-primary)", opacity: 0.05,
              }} />

              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{m.icon}</div>

              <div className="stat-value text-gradient">
                <AnimatedCounter end={m.value} suffix={m.suffix} decimals={m.decimals} />
              </div>

              <p style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                marginTop: "0.75rem",
                lineHeight: 1.5,
              }}>
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
