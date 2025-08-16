import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function MovingStars() {
  const starsRef = useRef();

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02; // slow rotation
      starsRef.current.rotation.x += delta * 0.005; // subtle tilt
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={80} depth={50} count={4000} factor={4} fade />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <Suspense fallback={null}>
          <MovingStars />
        </Suspense>
      </Canvas>
    </div>
  );
}
