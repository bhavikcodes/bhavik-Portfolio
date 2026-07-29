'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Each word becomes a target for the scrubbed timeline
const WORDS = [
  "I'M", 'PASSIONATE', 'ABOUT',
  'BUILDING', 'PRODUCTS',
  'AND', 'CONSTANTLY',
  'LEARNING.',
];

// Which words go on which "line" for layout
const LINES = [
  ["I'M", 'PASSIONATE', 'ABOUT'],
  ['BUILDING', 'PRODUCTS'],
  ['AND', 'CONSTANTLY'],
  ['LEARNING.'],
];

export default function Statement() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show everything immediately
      gsap.set('.stmt-word', { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll('.stmt-word');

      // Mobile: no pin, simple stagger fade-in
      ScrollTrigger.matchMedia({
        '(max-width: 767px)': () => {
          gsap.fromTo(
            words,
            { opacity: 0.1, y: 18 },
            {
              scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
              opacity: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.7,
              ease: 'power3.out',
              immediateRender: false,
            }
          );
        },

        // Desktop: pin the section and scrub words to scroll progress
        '(min-width: 768px)': () => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: '+=90vh',
              pin: true,
              anticipatePin: 1,
              scrub: 1.2,
            },
          });

          tl.fromTo(
            words,
            { opacity: 0.08, y: 22 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.18,
              ease: 'power2.out',
            }
          );

          // Body text fades in at the end
          tl.fromTo(
            '.stmt-body',
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, ease: 'power2.out' },
            '-=0.3'
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-32 lg:py-44 px-6 lg:px-16 border-b border-white/[0.05]"
    >
      {/* Label */}
      <div className="mb-10">
        <span className="font-mono text-[11px] text-[#FF4D3D] tracking-[0.22em] uppercase">
          My Journey
        </span>
      </div>

      {/* Big animated text — keep line breaks via block rows */}
      <div className="space-y-1">
        {LINES.map((line, i) => (
          <div key={i} className="flex flex-wrap gap-x-[0.28em]">
            {line.map((word, j) => (
              <span
                key={j}
                className="stmt-word font-display font-black text-[#F5F3F0] leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(36px, 7.5vw, 116px)' }}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Body copy */}
      <p className="stmt-body mt-12 font-sans text-base text-[#5A5856] leading-[1.8] max-w-[540px]">
        Most of what I know came from shipping things that had to actually work — production
        APIs, session systems, deploy pipelines. I care about the layer underneath the UI: how
        data is modelled, how requests are secured, how a build gets from a laptop to a server
        without anyone babysitting it. Strong fundamentals, then the frameworks.
      </p>
    </section>
  );
}
