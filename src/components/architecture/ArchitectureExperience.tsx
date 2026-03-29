"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { Canvas, type RootState } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import DistributedSystemScene from "./DistributedSystemScene";
import MouseCameraRig from "./MouseCameraRig";
import ScrollStoryOverlay from "./ScrollStoryOverlay";
import { SCROLL_PAGES } from "./constants";

function onCanvasCreated(state: RootState) {
  state.gl.domElement.addEventListener(
    "webglcontextlost",
    (e) => {
      e.preventDefault();
    },
    false
  );
}

function SceneFallback() {
  return null;
}

export default function ArchitectureExperience() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const handleCreated = useCallback((s: RootState) => onCanvasCreated(s), []);

  return (
    <section
      id="architecture-story"
      className="architecture-root"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        backgroundColor: "var(--immersive-bg)",
        overflowX: "hidden",
        overflowY: "visible",
        isolation: "isolate",
      }}
    >
      <div
        className="architecture-grain"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.06,
          zIndex: 10,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: "100vh",
        }}
      >
        {ready ? (
          <Canvas
            camera={{ position: [0, 0, 12], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{
              alpha: false,
              antialias: true,
              powerPreference: "high-performance",
              stencil: false,
              depth: true,
            }}
            style={{ width: "100%", height: "100%", display: "block" }}
            onCreated={handleCreated}
          >
            <color attach="background" args={["#020617"]} />
            <Suspense fallback={<SceneFallback />}>
              <ScrollControls pages={SCROLL_PAGES} damping={0.22}>
                <MouseCameraRig strength={0.45} />
                <DistributedSystemScene />
                <ScrollStoryOverlay />
              </ScrollControls>
            </Suspense>
          </Canvas>
        ) : (
          <div className="page-skeleton-hero" style={{ width: "100%" }} aria-hidden />
        )}
      </div>
    </section>
  );
}
