// src/components/Hologram/Hologram.js
import React, { useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Grid } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// Avatar Model Component
function AvatarModel({ position, scale }) {
  const avatarRef = useRef();
  const { scene } = useGLTF("/ImageToStl.com_droid.glb"); // Load the 3D model

  // Add subtle animation
  useFrame(({ clock }) => {
    if (avatarRef.current) {
      avatarRef.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <primitive
      ref={avatarRef}
      object={scene}
      position={position}
      scale={scale}
    />
  );
}

// Resize Handler Component
function ResizeHandler() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      camera.aspect = gl.domElement.clientWidth / gl.domElement.clientHeight;
      camera.updateProjectionMatrix();
      gl.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [camera, gl]);

  return null;
}

// Main Hologram Component
export default function Hologram() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 8], fov: 35 }} // Adjust camera position and FOV
      style={{ width: "100%", height: "100%", background: "transparent" }} // Make the canvas fill its container
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <directionalLight position={[-5, 5, 5]} intensity={0.5} /> {/* Rim light */}

      {/* 3D Model and Environment */}
      <Suspense fallback={null}>
        <AvatarModel position={[0, -1.5, 0]} scale={[0.5, 0.5, 0.5]} /> {/* Scale down the model */}
        <Environment preset="studio" /> {/* Use a neutral environment */}
        <Grid args={[10, 10]} position={[0, -1.5, 0]} cellColor="gray" cellOpacity={0.5} /> {/* Transparent grid floor */}
      </Suspense>

      {/* Orbit Controls */}
      <OrbitControls
        enableZoom={false} // Disable zoom
        enablePan={false} // Disable panning
        minPolarAngle={Math.PI / 4} // Limit vertical rotation
        maxPolarAngle={Math.PI / 2} // Limit vertical rotation
      />

      {/* Resize Handler */}
      <ResizeHandler />

      {/* Post-Processing (Optional Bloom Effect) */}
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.5} luminanceSmoothing={0.9} /> {/* Subtle bloom for lighting */}
      </EffectComposer>
    </Canvas>
  );
}