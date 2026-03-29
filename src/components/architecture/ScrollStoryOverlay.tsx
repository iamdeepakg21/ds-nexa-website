"use client";

import { Scroll } from "@react-three/drei";
import { motion } from "framer-motion";
import { SCROLL_PAGES } from "./constants";

const story = [
  {
    k: "01",
    title: "Entry — App Core",
    accent: "var(--neon-cyan)",
    body: "The glowing core represents your application layer: stateful, observable, and ready to orchestrate traffic across the entire mesh.",
  },
  {
    k: "02",
    title: "Frontend Plane",
    accent: "var(--neon-blue)",
    body: "Next.js surfaces, CDN edges, and an API gateway assemble into a single perceptual layer — low latency, SSR where it matters, and edge-ready delivery.",
  },
  {
    k: "03",
    title: "Service Mesh",
    accent: "var(--neon-magenta)",
    body: "Microservices materialize as independent deployable units. Kafka-style rings visualize ordered, replayable streams between bounded contexts.",
  },
  {
    k: "04",
    title: "Data & Replication",
    accent: "var(--neon-purple)",
    body: "Distributed storage rings emulate multi-node replication. Structured grids echo relational truth — PostgreSQL, migrations, and schema evolution as code.",
  },
  {
    k: "05",
    title: "Orchestration",
    accent: "var(--neon-cyan)",
    body: "Pods scale under a load-balanced edge. Kubernetes-style placement hints at health checks, rolling updates, and autoscaling policies tuned for cost and SLOs.",
  },
  {
    k: "06",
    title: "Full Topology",
    accent: "var(--gradient-accent)",
    body: "End-to-end data flows light up: ingress → services → streams → storage → compute. Particle activity suggests live telemetry and continuous delivery.",
  },
  {
    k: "07",
    title: "Disassemble",
    accent: "var(--text-tertiary)",
    body: "Scroll back up — layers collapse in reverse. The same choreography reads as teardown: ideal for incident visualization or capacity storytelling.",
  },
] as const;

export default function ScrollStoryOverlay() {
  const totalVh = SCROLL_PAGES * 100;

  return (
    <Scroll html style={{ width: "100%", height: `${totalVh}vh` }}>
      <div
        style={{
          position: "absolute",
          top: "12vh",
          width: "100%",
          textAlign: "center",
          padding: "0 1.25rem",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "var(--text-tertiary)",
              marginBottom: "1rem",
            }}
          >
            Ds Nexa Solutions
          </p>
          <h1
            className="heading-xl font-display"
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              letterSpacing: "-0.04em",
              background: "var(--gradient-hero-text)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Engineering Scalable
            <br />
            Digital Universes
          </h1>
          <p
            style={{
              marginTop: "1.25rem",
              color: "var(--text-secondary)",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.65,
            }}
          >
            High-scale distributed architecture — assembled and disassembled in scroll space.
          </p>
          <div
            style={{
              marginTop: "2rem",
              width: 1,
              height: 96,
              background: "linear-gradient(to bottom, var(--neon-cyan), transparent)",
              margin: "2rem auto 0",
              opacity: 0.5,
            }}
          />
        </motion.div>
      </div>

      {story.map((block, i) => (
        <div
          key={block.k}
          style={{
            position: "absolute",
            top: `${100 + i * 100 + 18}vh`,
            left: "clamp(1rem, 8vw, 5rem)",
            width: "min(520px, 90vw)",
            pointerEvents: "none",
          }}
        >
          <span
            className="font-display"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.28em",
              color: block.accent,
              fontWeight: 600,
            }}
          >
            {block.k}
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              margin: "0.5rem 0 0",
              color: "var(--text-primary)",
              lineHeight: 1.1,
            }}
          >
            {block.title}
          </h2>
          <p
            style={{
              marginTop: "1rem",
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
            }}
          >
            {block.body}
          </p>
        </div>
      ))}
    </Scroll>
  );
}
