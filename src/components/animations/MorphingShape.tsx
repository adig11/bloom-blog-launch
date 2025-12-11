import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Sphere = ({ isHovered }: { isHovered: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Custom gradient shader with more visible texture
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
      // Base gradient colors - warm amber tones
      vec3 colorTop = vec3(0.95, 0.72, 0.50);    // Lighter warm amber
      vec3 colorMid = vec3(0.88, 0.58, 0.35);    // Mid amber
      vec3 colorBottom = vec3(0.72, 0.42, 0.22); // Darker amber/brown
      
      // Create gradient based on position
      float gradientY = vPosition.y * 0.5 + 0.5;
      vec3 baseColor = mix(colorBottom, colorMid, smoothstep(0.0, 0.5, gradientY));
      baseColor = mix(baseColor, colorTop, smoothstep(0.5, 1.0, gradientY));
      
      // Add fresnel rim effect for depth
      float fresnel = pow(1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 3.0);
      vec3 rimColor = vec3(1.0, 0.85, 0.7);
      baseColor = mix(baseColor, rimColor, fresnel * 0.4);
      
      // Add subtle specular highlight
      vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0));
      float specular = pow(max(0.0, dot(reflect(-lightDir, vNormal), vec3(0.0, 0.0, 1.0))), 32.0);
      baseColor += vec3(1.0, 0.95, 0.9) * specular * 0.5;
      
      // Add subtle bands for visible rotation
      float bands = sin(vPosition.y * 12.0 + vPosition.x * 2.0) * 0.03;
      baseColor += bands;
      
      gl_FragColor = vec4(baseColor, 1.0);
    }
  `;

  useFrame(() => {
    if (meshRef.current && !isHovered) {
      meshRef.current.rotation.y -= 0.012;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.1} rotation={[80 * (Math.PI / 180), 0, 0]}>
      <sphereGeometry args={[1, 128, 128]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};

export const GradientSphere = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-[240px] h-[240px] cursor-pointer relative -mr-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} />
        <directionalLight position={[-5, -2, 3]} intensity={0.3} />
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#fff5eb" />
        <Sphere isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

// Keep old export for backwards compatibility
export const MorphingShape = GradientSphere;
