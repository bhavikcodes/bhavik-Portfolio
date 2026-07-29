'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TechEcosystem = dynamic(() => import('./TechEcosystem'), {
  ssr: false,
  loading: () => null,
});

const CHARS = 'BHAVIK'.split('');

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: 3D canvas drifts up as user scrolls away from hero
      gsap.to('.hero-3d-layer', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: -120,
        opacity: 0,
        ease: 'none',
      });

      // Ghost text drifts up slower (subtle depth)
      gsap.to('.hero-ghost', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
        y: -60,
        ease: 'none',
      });

      // Foreground name moves faster than ghost — creates depth separation
      gsap.to('.hero-name', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        y: -90,
        ease: 'none',
      });

      // Name chars burst in from below
      gsap.from('.hero-char', {
        y: 110,
        opacity: 0,
        duration: 1.1,
        stagger: 0.045,
        ease: 'power4.out',
        delay: 0.35,
      });
      // Surname
      gsap.from('.hero-surname', {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.85,
      });
      // Rest fades in
      gsap.from('.hero-fade', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-end pb-20 overflow-hidden"
    >
      {/* Ghost name — decorative background text */}
      <div
        aria-hidden="true"
        className="hero-ghost absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span
          className="font-display font-black text-white whitespace-nowrap"
          style={{
            fontSize: 'clamp(140px, 26vw, 440px)',
            opacity: 0.025,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          BHAVIK
        </span>
      </div>

      {/* 3D Tech Ecosystem — right half, behind content but above ghost */}
      <div className="hero-3d-layer absolute right-0 top-0 w-full lg:w-[58%] h-full z-10 pointer-events-auto">
        <TechEcosystem />
      </div>

      {/* Main content — pointer-events-none on container; children get it back */}
      <div className="relative z-20 px-6 lg:px-16 pointer-events-none">

        {/* Availability badge */}
        <div className="hero-fade inline-flex items-center gap-2 mb-8 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-[#FF4D3D] pulse-dot" />
          <span className="font-mono text-[10px] text-[#999795] tracking-[0.18em] uppercase">
            Available for Internships · Full-Time
          </span>
        </div>

        {/* ANSHIKA — full clip overflow so chars animate from below */}
        <div className="hero-name overflow-hidden mb-1">
          <h1
            className="font-display font-black text-[#F5F3F0] leading-[0.88] tracking-tight flex"
            style={{ fontSize: 'clamp(64px, 12.5vw, 196px)' }}
          >
            {CHARS.map((char, i) => (
              <span key={i} className="hero-char inline-block">
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* JAIN — lighter weight, slight offset */}
        <div className="overflow-hidden mb-10">
          <p
            className="hero-surname font-display font-light text-[#5A5856] leading-[0.88] tracking-tight"
            style={{ fontSize: 'clamp(44px, 8vw, 124px)' }}
          >
            JAIN
          </p>
        </div>

        {/* Role tagline */}
        <p className="hero-fade font-sans text-sm font-medium text-[#5A5856] tracking-[0.12em] uppercase mb-3">
          Full Stack Developer · Backend Engineer · DevOps
        </p>

        {/* Short bio */}
        <p className="hero-fade font-sans text-base text-[#5A5856] leading-[1.75] max-w-[480px] mb-10">
          Building production web platforms end to end — from React interfaces to Dockerised
          deployments on AWS. B.Tech CSE @ RGPV Bhopal — Class of 2027
        </p>

        {/* CTA buttons — restore pointer events */}
        <div className="hero-fade flex flex-wrap items-center gap-3 pointer-events-auto">
          <a
            href="/bhavik.pdf"
            target="_blank"
            rel="noreferrer"
            className="interactive group flex items-center gap-2 px-5 py-2.5 bg-[#FF4D3D] text-white text-[10px] font-mono uppercase tracking-[0.14em] hover:bg-[#FF6B5B] transition-colors duration-200 rounded-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
          <a
            href="https://github.com/bhavikcodes"
            target="_blank"
            rel="noreferrer"
            className="interactive flex items-center gap-2 px-5 py-2.5 border border-white/[0.1] text-[#999795] text-[10px] font-mono uppercase tracking-[0.14em] hover:border-white/25 hover:text-[#F5F3F0] transition-all duration-200 rounded-sm"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhavikxjain"
            target="_blank"
            rel="noreferrer"
            className="interactive flex items-center gap-2 px-5 py-2.5 border border-white/[0.1] text-[#999795] text-[10px] font-mono uppercase tracking-[0.14em] hover:border-white/25 hover:text-[#F5F3F0] transition-all duration-200 rounded-sm"
          >
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a
            href="mailto:bj541023@gmail.com"
            className="interactive flex items-center gap-2 px-5 py-2.5 border border-white/[0.1] text-[#999795] text-[10px] font-mono uppercase tracking-[0.14em] hover:border-white/25 hover:text-[#F5F3F0] transition-all duration-200 rounded-sm"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 right-8 z-20 flex items-center gap-2 pointer-events-none"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      >
        <span className="font-mono text-[9px] text-[#5A5856] tracking-[0.18em] uppercase">Scroll</span>
        <ArrowDown className="w-3 h-3 text-[#5A5856]" />
      </motion.div>
    </section>
  );
}
