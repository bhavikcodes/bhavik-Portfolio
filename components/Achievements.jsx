'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Award, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '500+', label: 'DSA Problems' },
  { value: '1700', label: 'LeetCode Peak' },
  { value: '5★', label: 'C++ HackerRank' },
  { value: 'Top 15%', label: 'LeetCode Global' },
];

const HACKATHONS = [
  {
    event: 'EY Hackathon',
    result: 'Finalist',
    year: '2026',
    desc: "Selected as a finalist in Ernst & Young's competitive national-level tech hackathon.",
  },
  {
    event: 'Indradhanu Hackathon',
    result: 'Top 20',
    year: '2025',
    desc: "Ranked in the top 20 teams at Indradhanu's national multi-track hackathon.",
  },
];

const CERTIFICATIONS = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'DataCamp · in partnership with AWS', year: '2025' },
  { name: 'GitHub Foundations Certification', issuer: 'GitHub', year: '2025' },
  { name: 'SQL Intermediate Concepts', issuer: 'HackerRank', year: '2024' },
];

/* Reveal helper — triggers per-element so nothing can get stuck invisible */
function revealItem(el, delay = 0) {
  gsap.fromTo(
    el,
    { y: 26, opacity: 0 },
    {
      scrollTrigger: {
        trigger: el,
        start: 'top 92%',
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 0.65,
      delay,
      ease: 'power2.out',
      immediateRender: false,
    }
  );
}

export default function Achievements() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        '.ach-header',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          immediateRender: false,
        }
      );

      // Stat cards — stagger as a group when the row enters
      const statCards = containerRef.current.querySelectorAll('.stat-card');
      gsap.fromTo(
        statCards,
        { y: 30, opacity: 0, scale: 0.96 },
        {
          scrollTrigger: { trigger: statCards[0], start: 'top 88%' },
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          immediateRender: false,
        }
      );

      // Every other card individually — guarantees visibility regardless of viewport size
      const individual = containerRef.current.querySelectorAll('.reveal-card');
      individual.forEach((el, i) => revealItem(el, i * 0.04));

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="relative w-full py-32 px-6 lg:px-16 border-b border-white/[0.05]"
    >
      {/* Header */}
      <div className="ach-header mb-16">
        <span className="font-mono text-[11px] text-[#FF4D3D] tracking-[0.22em] uppercase block mb-3">
          Recognition
        </span>
        <h2
          className="font-display font-black text-[#F5F3F0] leading-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}
        >
          Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* ── Left column: stats + hackathons ── */}
        <div className="lg:col-span-7 space-y-8">

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="stat-card border border-white/[0.07] bg-[#111113] p-5 text-center rounded-sm"
              >
                <div className="font-display font-black text-[#FF4D3D] text-2xl lg:text-3xl mb-1.5">
                  {s.value}
                </div>
                <div className="font-mono text-[9px] text-[#5A5856] tracking-[0.12em] uppercase leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Hackathons */}
          <div>
            <h3 className="font-mono text-[10px] text-[#999795] tracking-[0.2em] uppercase mb-4">
              Hackathons &amp; Competitions
            </h3>
            <div className="space-y-3">
              {HACKATHONS.map((h, i) => (
                <div
                  key={i}
                  className="reveal-card group flex items-start gap-4 p-5 border border-white/[0.07] bg-[#111113] hover:border-[#FF4D3D]/25 transition-colors duration-300 rounded-sm"
                >
                  <Trophy className="w-4 h-4 text-[#FF4D3D] mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <span className="font-sans text-sm font-medium text-[#F5F3F0] group-hover:text-[#FF4D3D] transition-colors duration-300">
                        {h.event}
                      </span>
                      <span className="font-mono text-[9px] text-[#FF4D3D] bg-[#FF4D3D]/10 px-2 py-0.5 rounded-sm tracking-[0.1em]">
                        {h.result}
                      </span>
                      <span className="font-mono text-[9px] text-[#5A5856] ml-auto">{h.year}</span>
                    </div>
                    <p className="font-sans text-xs text-[#5A5856] leading-[1.6]">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right column: certifications + publications ── */}
        <div className="lg:col-span-5 space-y-8">

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-[10px] text-[#999795] tracking-[0.2em] uppercase mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((c, i) => (
                <div
                  key={i}
                  className="reveal-card group flex items-start gap-3 p-4 border border-white/[0.07] bg-[#111113] hover:border-[#FF4D3D]/25 transition-colors duration-300 rounded-sm"
                >
                  <Award className="w-3.5 h-3.5 text-[#FF4D3D] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-[12.5px] font-medium text-[#F5F3F0] group-hover:text-[#FF4D3D] transition-colors duration-300 mb-0.5 leading-snug">
                      {c.name}
                    </p>
                    <p className="font-mono text-[9px] text-[#5A5856] tracking-[0.06em]">
                      {c.issuer} · {c.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
