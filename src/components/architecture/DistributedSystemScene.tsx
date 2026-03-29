"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Sparkles, Text, Line, Environment, Float, RoundedBox, MeshTransmissionMaterial, TorusKnot, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { COLORS, SCENE_COUNT } from "./constants";

function smoothstep(t: number) {
  const x = THREE.MathUtils.clamp(t, 0, 1);
  return x * x * (3 - 2 * x);
}

function CoreNode() {
  const scroll = useScroll();
  const inner = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const entry = scroll.range(0, 1 / SCENE_COUNT);
    const full = scroll.range((SCENE_COUNT - 1) / SCENE_COUNT, 1 / SCENE_COUNT);
    const s = smoothstep(Math.max(entry, 0.08) + full * 0.25);
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    if (inner.current) {
      inner.current.scale.setScalar((0.45 + s * 0.55) * pulse);
    }
    if (shell.current) {
      shell.current.scale.setScalar((0.55 + s * 0.55) * pulse);
      shell.current.rotation.y = state.clock.elapsedTime * 0.2;
      shell.current.rotation.x = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        <group ref={inner}>
          <mesh castShadow>
            <icosahedronGeometry args={[1, 4]} />
            <meshPhysicalMaterial
              color={COLORS.core}
              emissive={COLORS.magenta}
              emissiveIntensity={1.2}
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </group>
        <mesh ref={shell} castShadow>
          <sphereGeometry args={[1.2, 64, 64]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.05}
            anisotropy={0.2}
            distortion={0.3}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#ffffff"
            transmission={1}
            roughness={0.05}
          />
        </mesh>
        <pointLight color={COLORS.magenta} intensity={4} distance={8} decay={2} />
      </group>
    </Float>
  );
}

function FrontendLayer() {
  const scroll = useScroll();
  const g = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = smoothstep(scroll.range(1 / SCENE_COUNT, 1 / SCENE_COUNT));
    const merge = smoothstep(scroll.range((SCENE_COUNT - 1) / SCENE_COUNT, 1 / SCENE_COUNT));
    const v = Math.min(1, t + merge * 0.6);
    if (g.current) {
      g.current.scale.setScalar(Math.max(0.001, v));
      g.current.rotation.y = state.clock.elapsedTime * 0.1 * v;
    }
  });

  const boxes = [
    { p: [-1.2, 0.6, 0.3], c: COLORS.blue },
    { p: [1.1, 0.4, -0.2], c: COLORS.cyan },
    { p: [0, -0.5, 0.5], c: COLORS.purple },
  ] as const;

  return (
    <group ref={g} position={[2.5, 1.2, 0]}>
      {boxes.map((b, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
          <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.15} smoothness={4} position={b.p} castShadow>
            <MeshTransmissionMaterial
              backside
              samples={4}
              thickness={0.4}
              color={b.c}
              transmission={0.9}
              roughness={0.1}
              chromaticAberration={0.03}
            />
          </RoundedBox>
          <pointLight position={b.p as any} color={b.c} intensity={2} distance={3} />
        </Float>
      ))}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.04, 32, 100]} />
          <meshPhysicalMaterial
            color={COLORS.cyan}
            emissive={COLORS.cyan}
            emissiveIntensity={1.5}
            metalness={1}
            roughness={0.1}
            clearcoat={1}
          />
        </mesh>
      </Float>
      <Text position={[0, 1.5, 0]} fontSize={0.2} color="#ffffff" anchorX="center" outlineWidth={0.015} outlineColor={COLORS.cyan}>
        EDGE NETWORK
      </Text>
    </group>
  );
}

function KafkaRings({ v }: { v: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = state.clock.elapsedTime * 0.25 * v;
  });
  return (
    <group ref={ref} position={[0, 0, 0]}>
      {[0.9, 1.3, 1.7].map((r, i) => (
        <Line
          key={r}
          points={circlePoints(r, 64 + i * 16)}
          color={COLORS.cyan}
          lineWidth={2}
          transparent
          opacity={0.4 + i * 0.1}
        />
      ))}
    </group>
  );
}

function circlePoints(r: number, seg: number) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= seg; i++) {
    const a = (i / seg) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r * 0.35, Math.sin(a) * r * 0.2));
  }
  return pts;
}

function BackendLayer() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = smoothstep(scroll.range(2 / SCENE_COUNT, 1 / SCENE_COUNT));
    const merge = smoothstep(scroll.range((SCENE_COUNT - 1) / SCENE_COUNT, 1 / SCENE_COUNT));
    const v = Math.min(1, t + merge * 0.55);
    if (group.current) {
      group.current.scale.setScalar(Math.max(0.001, v));
      group.current.rotation.y = state.clock.elapsedTime * 0.05 * v;
    }
  });

  return (
    <group ref={group} position={[-2.5, -0.4, 0.5]}>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
        <TorusKnot args={[0.9, 0.2, 128, 32]} castShadow>
           <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={0.8}
            color={COLORS.purple}
            transmission={0.95}
            roughness={0.15}
            chromaticAberration={0.06}
            anisotropy={0.5}
          />
        </TorusKnot>
        <pointLight color={COLORS.magenta} intensity={3} distance={5} />
      </Float>
      <KafkaBridge />
    </group>
  );
}

function KafkaBridge() {
  const scroll = useScroll();
  const ref = useRef<THREE.Group>(null);
  useFrame(() => {
    const t = smoothstep(scroll.range(2 / SCENE_COUNT, 1 / SCENE_COUNT));
    if (ref.current) ref.current.visible = t > 0.05;
  });
  return (
    <group ref={ref}>
      <KafkaRings v={1} />
    </group>
  );
}

function DataLayer() {
  const scroll = useScroll();
  const g = useRef<THREE.Group>(null);
  const nodes = 6;

  useFrame((state) => {
    const t = smoothstep(scroll.range(3 / SCENE_COUNT, 1 / SCENE_COUNT));
    const merge = smoothstep(scroll.range((SCENE_COUNT - 1) / SCENE_COUNT, 1 / SCENE_COUNT));
    const v = Math.min(1, t + merge * 0.55);
    if (g.current) {
      g.current.scale.setScalar(Math.max(0.001, v));
      g.current.rotation.y = state.clock.elapsedTime * -0.05;
    }
  });

  return (
    <group ref={g} position={[0, -2.5, -0.5]}>
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
        {Array.from({ length: nodes }).map((_, i) => {
          const a = (i / nodes) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.5, 0, Math.sin(a) * 1.5]} castShadow>
              <cylinderGeometry args={[0.25, 0.25, 0.8, 32]} />
              <meshPhysicalMaterial
                color={COLORS.dim}
                emissive={COLORS.magenta}
                emissiveIntensity={0.5}
                roughness={0.2}
                metalness={0.9}
                clearcoat={1}
                clearcoatRoughness={0.1}
                transparent
                opacity={0.85}
              />
            </mesh>
          );
        })}
        <mesh position={[0, -0.45, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 2, 64]} />
          <meshPhysicalMaterial
            color={COLORS.blue}
            emissive={COLORS.cyan}
            emissiveIntensity={0.2}
            transparent
            opacity={0.15}
            metalness={0.8}
            roughness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>
      <Text position={[0, 1.2, 0]} fontSize={0.2} color="#ffffff" anchorX="center" outlineWidth={0.015} outlineColor={COLORS.magenta}>
        GLOBAL DATA LAYER
      </Text>
    </group>
  );
}

function InfraLayer() {
  const scroll = useScroll();
  const g = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = smoothstep(scroll.range(4 / SCENE_COUNT, 1 / SCENE_COUNT));
    const merge = smoothstep(scroll.range((SCENE_COUNT - 1) / SCENE_COUNT, 1 / SCENE_COUNT));
    const v = Math.min(1, t + merge * 0.55);
    if (g.current) {
      g.current.scale.setScalar(Math.max(0.001, v));
    }
  });

  return (
    <group ref={g} position={[2.8, -2.2, -1]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[3, 0.2, 3]} />
          <MeshTransmissionMaterial
             samples={4}
             thickness={1}
             color={COLORS.blue}
             transmission={0.8}
             roughness={0.1}
             chromaticAberration={0.05}
          />
        </mesh>
        {Array.from({ length: 9 }).map((_, i) => {
          const x = (i % 3) - 1;
          const z = Math.floor(i / 3) - 1;
          return (
            <mesh key={i} position={[x * 0.8, 0.3, z * 0.8]} castShadow>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshPhysicalMaterial
                color={COLORS.cyan}
                emissive={COLORS.blue}
                emissiveIntensity={1}
                roughness={0.1}
                metalness={1}
                clearcoat={1}
              />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
}

function SystemFlows() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);

  const lines = useRef(
    (() => {
      const a = new THREE.Vector3(0, 0, 0);
      const targets = [
        new THREE.Vector3(2.5, 1.2, 0),
        new THREE.Vector3(-2.5, -0.4, 0.5),
        new THREE.Vector3(0, -2.5, -0.5),
        new THREE.Vector3(2.8, -2.2, -1),
      ];
      return targets.map((b) => {
        const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(0, 1.2, 0));
        const curve = new THREE.QuadraticBezierCurve3(a.clone(), mid, b.clone());
        return curve.getPoints(50);
      });
    })()
  );

  useFrame(() => {
    const t = smoothstep(scroll.range(5 / SCENE_COUNT, 1 / SCENE_COUNT));
    const full = smoothstep(scroll.range((SCENE_COUNT - 1) / SCENE_COUNT, 1 / SCENE_COUNT));
    const v = Math.min(1, t + full * 0.85);
    if (group.current) {
      group.current.visible = v > 0.02;
      group.current.scale.setScalar(0.9 + v * 0.1);
    }
  });

  return (
    <group ref={group}>
      {lines.current.map((pts, i) => (
        <Line key={i} points={pts} color={COLORS.cyan} lineWidth={2.5} transparent opacity={0.5} />
      ))}
      <Sparkles count={150} scale={12} size={3} speed={0.4} opacity={0.8} color={COLORS.cyan} />
      <Sparkles count={100} scale={10} size={2} speed={0.6} opacity={0.6} color={COLORS.magenta} />
    </group>
  );
}

function DisassemblySpread({ children }: { children: React.ReactNode }) {
  const scroll = useScroll();
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    const spread = scroll.range(0, 1);
    ref.current.position.y = spread * 0.5;
    ref.current.rotation.y = scroll.offset * Math.PI * 0.35;
  });

  return <group ref={ref}>{children}</group>;
}

export default function DistributedSystemScene() {
  return (
    <>
      {/* High Quality Lighting & Environment for glass reflections */}
      <Environment preset="city" environmentIntensity={0.6} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffffff" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <spotLight position={[-10, 10, -10]} intensity={2.5} color={COLORS.blue} angle={0.5} penumbra={0.8} />
      <pointLight position={[0, 0, 5]} intensity={1} color={COLORS.cyan} />

      <DisassemblySpread>
        <group>
          <CoreNode />
          <FrontendLayer />
          <BackendLayer />
          <DataLayer />
          <InfraLayer />
          <SystemFlows />
          
          <ContactShadows
            position={[0, -4, 0]}
            opacity={0.6}
            scale={20}
            blur={2.5}
            far={10}
            resolution={512}
            color="#000000"
          />
        </group>
      </DisassemblySpread>
    </>
  );
}
