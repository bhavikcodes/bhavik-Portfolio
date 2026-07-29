'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e) => {
      const t = e.target;
      setHovered(
        t.tagName === 'A' ||
          t.tagName === 'BUTTON' ||
          !!t.closest('a') ||
          !!t.closest('button') ||
          t.classList.contains('interactive')
      );
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: '#FF4D3D', boxShadow: '0 0 8px #FF4D3D' }}
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.08 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{ border: '1px solid rgba(255,77,61,0.35)' }}
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          scale: hovered ? 2 : 1,
          borderColor: hovered ? 'rgba(255,107,91,0.7)' : 'rgba(255,77,61,0.35)',
          backgroundColor: hovered ? 'rgba(255,77,61,0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
