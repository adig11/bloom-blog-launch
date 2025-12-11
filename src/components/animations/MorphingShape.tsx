import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Custom gradient shader - darker, fully opaque
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      // Darker, fully opaque amber tones
      vec3 colorTop = vec3(0.85, 0.55, 0.30);    // Darker warm amber
      vec3 colorMid = vec3(0.72, 0.42, 0.22);    // Mid darker amber
      vec3 colorBottom = vec3(0.55, 0.30, 0.15); // Deep brown
      
      // Create gradient based on position
      float gradientY = vPosition.y * 0.5 + 0.5;
      vec3 baseColor = mix(colorBottom, colorMid, smoothstep(0.0, 0.5, gradientY));
      baseColor = mix(baseColor, colorTop, smoothstep(0.5, 1.0, gradientY));
      
      // Add fresnel rim effect for depth
      float fresnel = pow(1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.5);
      vec3 rimColor = vec3(0.95, 0.70, 0.45);
      baseColor = mix(baseColor, rimColor, fresnel * 0.5);
      
      // Add subtle specular highlight
      vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
      float specular = pow(max(0.0, dot(reflect(-lightDir, vNormal), vec3(0.0, 0.0, 1.0))), 32.0);
      baseColor += vec3(1.0, 0.90, 0.80) * specular * 0.4;
      
      gl_FragColor = vec4(baseColor, 1.0);
    }
  `;

  // Floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh scale={1.45}>
        <sphereGeometry args={[1, 128, 128]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
};

export const GradientSphere = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Gradient border ring */}
      <div 
        className="absolute w-[280px] h-[280px] rounded-full animate-float"
        style={{
          background: 'linear-gradient(135deg, hsl(28, 85%, 55%) 0%, hsl(28, 70%, 40%) 50%, hsl(28, 60%, 30%) 100%)',
          padding: '4px',
        }}
      >
        <div className="w-full h-full rounded-full bg-background" />
      </div>
      
      {/* Sphere canvas */}
      <div className="w-[260px] h-[260px] relative z-10 animate-float">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} />
          <directionalLight position={[-5, -2, 3]} intensity={0.4} />
          <pointLight position={[0, 3, 2]} intensity={0.6} color="#fff5eb" />
          <Sphere />
        </Canvas>
      </div>
    </div>
  );
};

// Keep old export for backwards compatibility
export const MorphingShape = GradientSphere;
