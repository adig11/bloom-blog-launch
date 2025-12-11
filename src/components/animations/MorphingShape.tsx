import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Shape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create an amber/orange gradient material
  const gradientColors = useMemo(() => ({
    color1: new THREE.Color('#c77b4a'),
    color2: new THREE.Color('#e8a066'),
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={gradientColors.color1}
          emissive={gradientColors.color2}
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.3}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

export const MorphingShape = () => {
  return (
    <div className="w-full h-full min-h-[280px] md:min-h-[320px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} color="#f5e6d3" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#e8a066" />
        <Shape />
      </Canvas>
    </div>
  );
};
