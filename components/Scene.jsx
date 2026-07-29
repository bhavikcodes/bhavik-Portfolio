'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo, useState } from 'react';
import * as THREE from 'three';

function BlackHole() {
  const diskRef = useRef();
  const jetsRef = useRef();
  const starsRef = useRef();
  const groupRef = useRef();
  
  const particleCount = 10000;
  const jetCount = 2000;
  const starCount = 3000;

  const [hovered, setHovered] = useState(false);

  // Accretion Disk
  const [diskPositions, diskColors, diskAngles, diskRadii, diskSpeeds] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const ang = new Float32Array(particleCount);
    const rad = new Float32Array(particleCount);
    const spd = new Float32Array(particleCount);
    
    const colorInside = new THREE.Color('#FFFFFF');
    const colorMid = new THREE.Color('#00D4FF');
    const colorOut = new THREE.Color('#4F8EF7');
    
    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.pow(Math.random(), 2) * 6;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.05 / Math.sqrt(radius); // Keplerian
      
      ang[i] = angle;
      rad[i] = radius;
      spd[i] = speed;
      
      const y = (Math.random() - 0.5) * (0.2 + (8.5 - radius) * 0.05);
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      
      const factor = (radius - 2.5) / 6;
      const finalColor = new THREE.Color();
      if (factor < 0.3) {
        finalColor.lerpColors(colorInside, colorMid, factor / 0.3);
      } else {
        finalColor.lerpColors(colorMid, colorOut, (factor - 0.3) / 0.7);
      }
      col[i * 3] = finalColor.r;
      col[i * 3 + 1] = finalColor.g;
      col[i * 3 + 2] = finalColor.b;
    }
    return [pos, col, ang, rad, spd];
  }, []);

  // Jets
  const [jetPositions, jetVelocities, jetColors] = useMemo(() => {
    const pos = new Float32Array(jetCount * 3);
    const vel = new Float32Array(jetCount * 3);
    const col = new Float32Array(jetCount * 3);
    
    for (let i = 0; i < jetCount; i++) {
      const isUp = Math.random() > 0.5 ? 1 : -1;
      const y = (Math.random() * 15) * isUp;
      const radius = Math.random() * (0.5 + Math.abs(y) * 0.1);
      const angle = Math.random() * Math.PI * 2;
      
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      
      vel[i * 3] = 0;
      vel[i * 3 + 1] = isUp * (0.1 + Math.random() * 0.2);
      vel[i * 3 + 2] = 0;
      
      col[i * 3] = 0.0;
      col[i * 3 + 1] = 0.83; // #00D4FF
      col[i * 3 + 2] = 1.0;
    }
    return [pos, vel, col];
  }, []);

  // Stars
  const starPositions = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50 - 20;
    }
    return pos;
  }, []);

  const mouse = useRef(new THREE.Vector2());

  useFrame((state) => {
    mouse.current.x = THREE.MathUtils.lerp(mouse.current.x, (state.mouse.x * Math.PI) / 8, 0.05);
    mouse.current.y = THREE.MathUtils.lerp(mouse.current.y, (state.mouse.y * Math.PI) / 8, 0.05);
    
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x;
      groupRef.current.rotation.x = -mouse.current.y;
    }

    const speedMultiplier = hovered ? 1.5 : 1.0;

    if (diskRef.current) {
      const pos = diskRef.current.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        diskAngles[i] += diskSpeeds[i] * speedMultiplier;
        
        if (Math.random() < 0.001 * speedMultiplier) diskRadii[i] -= 0.1;
        if (diskRadii[i] < 2.0) diskRadii[i] = 2.5 + Math.random() * 6;

        const radius = diskRadii[i];
        const angle = diskAngles[i];
        
        pos[i * 3] = Math.cos(angle) * radius;
        pos[i * 3 + 2] = Math.sin(angle) * radius;
      }
      diskRef.current.geometry.attributes.position.needsUpdate = true;
    }

    if (jetsRef.current) {
      const pos = jetsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < jetCount; i++) {
        pos[i * 3 + 1] += jetVelocities[i * 3 + 1] * speedMultiplier;
        
        if (Math.abs(pos[i * 3 + 1]) > 15) {
          pos[i * 3 + 1] = 0;
          const radius = Math.random() * 0.5;
          const angle = Math.random() * Math.PI * 2;
          pos[i * 3] = Math.cos(angle) * radius;
          pos[i * 3 + 2] = Math.sin(angle) * radius;
        } else {
          const radius = Math.random() * (0.5 + Math.abs(pos[i * 3 + 1]) * 0.1);
          const angle = Math.random() * Math.PI * 2;
          pos[i * 3] = Math.cos(angle) * radius;
          pos[i * 3 + 2] = Math.sin(angle) * radius;
        }
      }
      jetsRef.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <group 
      ref={groupRef} 
      rotation={[0.3, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={starCount} array={starPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#E8F0FF" transparent opacity={0.6} sizeAttenuation />
      </points>

      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
      <mesh scale={1.05}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial color="#0A0A2E" transparent opacity={hovered ? 0.8 : 0.5} blending={THREE.AdditiveBlending} side={THREE.BackSide} />
      </mesh>

      <points ref={diskRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={diskPositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={particleCount} array={diskColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors transparent opacity={hovered ? 1.0 : 0.8} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>

      <points ref={jetsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={jetCount} array={jetPositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={jetCount} array={jetColors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.08} vertexColors transparent opacity={hovered ? 0.8 : 0.6} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
    </group>
  );
}

export default function Scene() {
  return (
    <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full z-0 pointer-events-auto">
      <Canvas camera={{ position: [0, 3, 15], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <BlackHole />
      </Canvas>
    </div>
  );
}
