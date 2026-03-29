"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const base = new THREE.Vector3(0, 0, 12);
const target = new THREE.Vector3();

export default function MouseCameraRig({ strength = 0.55 }: { strength?: number }) {
  const { camera, pointer } = useThree();
  const current = useRef(new THREE.Vector3());

  useFrame(() => {
    target.set(pointer.x * strength, pointer.y * (strength * 0.65), 12);
    current.current.lerp(target, 0.06);
    camera.position.copy(base).add(current.current);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
