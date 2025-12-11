import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom gradient shader
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vec3 color1 = vec3(0.91, 0.63, 0.40); // #e8a066 warm amber
      vec3 color2 = vec3(0.78, 0.48, 0.29); // #c77b4a darker amber
      float gradient = vNormal.y * 0.5 + 0.5;
      vec3 color = mix(color2, color1, gradient);
      
      // Add subtle rim lighting
      float rim = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
      rim = pow(rim, 2.0) * 0.3;
      color += rim;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame(() => {
    if (meshRef.current && !isHovered) {
      // Rotate clockwise (negative y rotation)
      meshRef.current.rotation.y -= 0.008;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.2}>
      <sphereGeometry args={[1, 64, 64]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export const MorphingShape = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full min-h-[280px] md:min-h-[320px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, -3, 3]} intensity={0.4} />
        <Sphere isHovered={isHovered} />
      </Canvas>
    </div>
  );
};
