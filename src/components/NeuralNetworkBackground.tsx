import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface NeuronProps {
  position: [number, number, number];
  delay: number;
}

function Neuron({ position, delay }: NeuronProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.scale.setScalar(0.8 + Math.sin(t * 2) * 0.2);
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      if (material) {
        material.opacity = 0.6 + Math.sin(t * 2) * 0.3;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0.7} />
    </mesh>
  );
}

function Connections({ nodes }: { nodes: [number, number, number][] }) {
  const linesRef = useRef<THREE.LineSegments>(null);
  
  const geometry = useMemo(() => {
    const positions: number[] = [];
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        );
        
        if (dist < 3) {
          positions.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (linesRef.current) {
      const material = linesRef.current.material as THREE.LineBasicMaterial;
      if (material) {
        material.opacity = 0.15 + Math.sin(state.clock.elapsedTime) * 0.05;
      }
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.2} />
    </lineSegments>
  );
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 80; i++) {
      positions.push([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6 - 2
      ]);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Connections nodes={nodes} />
      {nodes.map((pos, i) => (
        <Neuron key={i} position={pos} delay={i * 0.1} />
      ))}
    </group>
  );
}

function DataParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const velocitiesRef = useRef<Float32Array | null>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(150 * 3);
    const vel = new Float32Array(150 * 3);
    
    for (let i = 0; i < 150; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      
      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    velocitiesRef.current = vel;
    return pos;
  }, []);

  useFrame(() => {
    if (pointsRef.current && velocitiesRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const posArray = posAttr.array as Float32Array;
      const velocities = velocitiesRef.current;
      
      for (let i = 0; i < 150; i++) {
        posArray[i * 3] += velocities[i * 3];
        posArray[i * 3 + 1] += velocities[i * 3 + 1];
        posArray[i * 3 + 2] += velocities[i * 3 + 2];
        
        if (Math.abs(posArray[i * 3]) > 8) velocities[i * 3] *= -1;
        if (Math.abs(posArray[i * 3 + 1]) > 6) velocities[i * 3 + 1] *= -1;
        if (Math.abs(posArray[i * 3 + 2]) > 4) velocities[i * 3 + 2] *= -1;
      }
      
      posAttr.needsUpdate = true;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#10b981" size={0.03} transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function NeuralNetworkBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(180deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <NeuralNetwork />
        <DataParticles />
      </Canvas>
    </div>
  );
}
