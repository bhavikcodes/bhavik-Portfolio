'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Float, Line } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';

const NODES = [
  {
    id: 'react',
    label: 'React',
    pos: [1.8, 1.0, 0.2],
    techs: ['Next.js', 'Tailwind', 'TypeScript'],
  },
  {
    id: 'node',
    label: 'Node.js',
    pos: [-2.0, 0.6, 0.4],
    techs: ['Express', 'REST APIs', 'JWT'],
  },
  {
    id: 'realtime',
    label: 'Real-Time',
    pos: [0.2, -1.9, 0.5],
    techs: ['WebRTC', 'Socket.IO', 'WebSockets'],
  },
  {
    id: 'databases',
    label: 'Databases',
    pos: [2.3, -0.6, -0.3],
    techs: ['MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'docker',
    label: 'Docker',
    pos: [-1.9, -1.0, -0.4],
    techs: ['Nginx', 'GitHub Actions', 'CI/CD'],
  },
  {
    id: 'aws',
    label: 'AWS',
    pos: [0.3, 1.9, -0.5],
    techs: ['EC2', 'S3', 'Lambda'],
  },
];

const EDGES = [
  [0, 1], // React ↔ Node.js (full stack)
  [0, 2], // React ↔ Real-Time (client transport)
  [1, 2], // Node.js ↔ Real-Time (Socket.IO signaling)
  [1, 3], // Node.js ↔ Databases (data layer)
  [1, 4], // Node.js ↔ Docker (containerised services)
  [3, 5], // Databases ↔ AWS (managed data)
  [4, 5], // Docker ↔ AWS (deploy pipeline)
];

function NodeSphere({ id, label, pos, techs, activeId, onHover, onLeave }) {
  const meshRef = useRef();
  const ringRef = useRef();
  const scaleRef = useRef(1);
  const glowRef = useRef(0.2);
  const isActive = activeId === id;

  const techOffsets = useMemo(
    () =>
      techs.map((_, i) => {
        const angle = (i / techs.length) * Math.PI * 2 - Math.PI / 4;
        return [Math.cos(angle) * 1.2, Math.sin(angle) * 0.8, 0];
      }),
    [techs]
  );

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const targetScale = isActive ? 1.45 : 1.0;
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, targetScale, delta * 7);
    meshRef.current.scale.setScalar(scaleRef.current);

    const targetGlow = isActive ? 0.7 + Math.sin(state.clock.elapsedTime * 3) * 0.15 : 0.2;
    glowRef.current = THREE.MathUtils.lerp(glowRef.current, targetGlow, delta * 5);
    meshRef.current.material.emissiveIntensity = glowRef.current;

    if (ringRef.current) {
      ringRef.current.material.opacity = THREE.MathUtils.lerp(
        ringRef.current.material.opacity,
        isActive ? 0.55 : 0.12,
        delta * 6
      );
    }
  });

  const floatSpeed = useMemo(() => 1.1 + (id.charCodeAt(0) % 5) * 0.08, [id]);

  return (
    <Float speed={floatSpeed} rotationIntensity={0} floatIntensity={0.25} floatingRange={[-0.06, 0.06]}>
      <group position={pos}>
        {/* Main sphere */}
        <mesh
          ref={meshRef}
          onPointerOver={(e) => { e.stopPropagation(); onHover(id); }}
          onPointerOut={() => onLeave()}
        >
          <sphereGeometry args={[0.21, 24, 24]} />
          <meshStandardMaterial
            color={isActive ? '#FF6B5B' : '#FF4D3D'}
            emissive="#FF2200"
            emissiveIntensity={0.2}
            roughness={0.15}
            metalness={0.05}
          />
        </mesh>

        {/* Glow ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.27, 0.31, 32]} />
          <meshBasicMaterial color="#FF4D3D" transparent opacity={0.12} side={THREE.DoubleSide} />
        </mesh>

        {/* Label */}
        <Html
          center
          position={[0, 0.46, 0]}
          distanceFactor={9}
          zIndexRange={[0, 10]}
          style={{ pointerEvents: 'none' }}
        >
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '8.5px',
              fontWeight: 500,
              color: isActive ? '#F5F3F0' : '#666460',
              whiteSpace: 'nowrap',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
              userSelect: 'none',
            }}
          >
            {label}
          </span>
        </Html>

        {/* Tech tags on hover */}
        {isActive &&
          techs.map((tech, i) => (
            <Html
              key={i}
              center
              position={techOffsets[i]}
              distanceFactor={9}
              zIndexRange={[0, 10]}
              style={{ pointerEvents: 'none' }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '7.5px',
                  color: '#FF4D3D',
                  background: 'rgba(255,77,61,0.1)',
                  border: '1px solid rgba(255,77,61,0.3)',
                  padding: '2px 7px',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                }}
              >
                {tech}
              </span>
            </Html>
          ))}
      </group>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef();
  const [activeId, setActiveId] = useState(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.11;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.14) * 0.055;
    }
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[4, 4, 4]} color="#FF4D3D" intensity={1.0} />
      <pointLight position={[-4, -3, -4]} color="#ffffff" intensity={0.15} />

      <group ref={groupRef}>
        {/* Connections */}
        {EDGES.map(([i, j], k) => {
          const hi = activeId === NODES[i].id || activeId === NODES[j].id;
          return (
            <Line
              key={k}
              points={[NODES[i].pos, NODES[j].pos]}
              color={hi ? '#FF4D3D' : '#252525'}
              lineWidth={hi ? 1.5 : 0.5}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((node) => (
          <NodeSphere
            key={node.id}
            {...node}
            activeId={activeId}
            onHover={setActiveId}
            onLeave={() => setActiveId(null)}
          />
        ))}
      </group>
    </>
  );
}

export default function TechEcosystem() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Scene />
    </Canvas>
  );
}
