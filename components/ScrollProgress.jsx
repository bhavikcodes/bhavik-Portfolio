'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let raf;
    const tick = () => {
      const el = barRef.current;
      if (el) {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        if (total > 0) {
          el.style.transform = `scaleX(${Math.min(1, window.scrollY / total)})`;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      style={{ background: 'rgba(255,255,255,0.04)' }}
    >
      <div
        ref={barRef}
        className="h-full bg-[#FF4D3D] origin-left"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  );
}
