'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Code2, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/bhavikcodes', icon: Github, external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavikxjain', icon: Linkedin, external: true },
  { label: 'LeetCode', href: 'https://leetcode.com/u/bhavikcodes/', icon: Code2, external: true },
  { label: 'Codolio', href: 'https://codolio.com/profile/bhavikcodes', icon: BarChart3, external: true },
  { label: 'bj541023@gmail.com', href: 'mailto:bj541023@gmail.com', icon: Mail, external: false },
];

export default function Footer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // "LET'S" slides in from left, "CONNECT" from right — they meet in the middle
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.footer-headline',
          start: 'top 88%',
          end: 'top 25%',
          scrub: 1.2,
        },
      });
      tl.fromTo('.footer-lets',    { x: -90, opacity: 0 }, { x: 0, opacity: 1, ease: 'power3.out' }, 0);
      tl.fromTo('.footer-connect', { x:  90, opacity: 0 }, { x: 0, opacity: 1, ease: 'power3.out' }, 0);

      // Email + social fade up
      gsap.fromTo('.footer-cta', { y: 28, opacity: 0 }, {
        scrollTrigger: { trigger: '.footer-cta', start: 'top 90%' },
        y: 0, opacity: 1, duration: 0.75, ease: 'power2.out', immediateRender: false,
      });
      gsap.fromTo('.footer-links', { y: 22, opacity: 0 }, {
        scrollTrigger: { trigger: '.footer-links', start: 'top 90%' },
        y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', immediateRender: false,
      });
      gsap.fromTo('.footer-bar', { opacity: 0 }, {
        scrollTrigger: { trigger: '.footer-bar', start: 'top 95%' },
        opacity: 1, duration: 0.6, ease: 'power1.out', immediateRender: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative w-full pt-28 pb-14 px-6 lg:px-16 overflow-hidden"
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,77,61,0.055) 0%, transparent 68%)' }}
      />

      {/* LET'S CONNECT — split from sides */}
      <div
        className="footer-headline relative mb-14 leading-none select-none"
        style={{ fontSize: 'clamp(52px, 9.5vw, 152px)' }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end flex-wrap gap-x-4">
          <span className="footer-lets font-display font-black text-[#252525]">LET'S</span>
          <span
            className="footer-connect font-display font-black"
            style={{
              background: 'linear-gradient(135deg, #FF6B5B 0%, #FF4D3D 55%, #C8281A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            CONNECT
          </span>
        </div>
      </div>

      {/* Email CTA */}
      <a
        href="mailto:bj541023@gmail.com"
        className="footer-cta interactive group inline-flex items-center gap-3 mb-12 transition-colors duration-300"
      >
        <span className="font-sans text-lg text-[#F5F3F0] group-hover:text-[#FF4D3D] transition-colors duration-300">
          bj541023@gmail.com
        </span>
        <span className="w-9 h-9 border border-white/[0.1] rounded-full flex items-center justify-center text-[#999795] group-hover:border-[#FF4D3D]/50 group-hover:text-[#FF4D3D] transition-all duration-300">
          <Mail className="w-3.5 h-3.5" />
        </span>
      </a>

      {/* Social pills */}
      <div className="footer-links flex flex-wrap items-center gap-3 mb-20">
        {SOCIAL_LINKS.map(({ label, href, icon: Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="interactive flex items-center gap-2 px-5 py-2.5 border border-white/[0.08] text-[#999795] text-[10px] font-mono tracking-[0.12em] uppercase hover:border-white/20 hover:text-[#F5F3F0] transition-all duration-200 rounded-sm"
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </a>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer-bar border-t border-white/[0.05] pt-7 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-mono text-[9.5px] text-[#3A3835] tracking-[0.18em] uppercase">
          © 2026 Bhavik Jain
        </p>
        <p className="font-mono text-[9.5px] text-[#3A3835] tracking-[0.1em]">
          B.Tech CSE · UIT RGPV Bhopal · Class of 2027
        </p>
      </div>
    </footer>
  );
}
