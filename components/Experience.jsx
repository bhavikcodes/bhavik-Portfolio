'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARRIAGES = [
  {
    id: 'srijan',
    stop: '01',
    company: 'Srijan Web Pvt. Ltd.',
    role: 'Web Development Intern',
    duration: 'Mar 2026 – Present',
    type: 'Current',
    desc: 'Building a production-grade legal SaaS platform for real client-facing workflows. Shipped 10+ frontend modules and integrated 20+ REST APIs across 80+ production endpoints, implemented Redis-backed single-device session enforcement, and deployed the stack on AWS EC2 behind Nginx with GitHub Actions pipelines.',
    tags: ['React', 'Tailwind CSS', 'JWT Auth', 'Redis', 'Docker', 'AWS EC2', 'Nginx', 'GitHub Actions'],
  },
  {
    id: 'ccextractor',
    stop: '02',
    company: 'CCExtractor',
    role: 'Open Source Contributor',
    duration: 'Open Source',
    type: 'Remote',
    desc: 'Contributed to a GSoC organisation — merged 10+ pull requests and resolved 10+ issues while fixing UI bugs across the codebase. Raised UI test coverage from 90% to 95% with new component test cases, and iterated on maintainer code reviews to pass CI/CD checks.',
    tags: ['React', 'TypeScript', 'Node.js', 'Jest', 'Git'],
  },
  {
    id: 'education',
    stop: '03',
    isEdu: true,
    school: 'University Institute of Technology, RGPV',
    degree: 'B.Tech — Computer Science and Engineering · Bhopal',
    duration: 'Sep 2023 – Aug 2027',
    cgpa: '7.42 / 10',
    languages: ['C++', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
    stats: [
      { v: '500+', l: 'DSA Problems' },
      { v: '1700', l: 'LeetCode Peak' },
      { v: '5★', l: 'C++ HackerRank' },
      { v: '7.42', l: 'CGPA / 10' },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const stationRef = useRef(null); // pinned element
  const trainRef = useRef(null);   // sliding train

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({

        /* ─── MOBILE: simple reveal stack ─── */
        '(max-width: 767px)': () => {
          sectionRef.current.querySelectorAll('.exp-mob-card').forEach((el) => {
            gsap.fromTo(el,
              { x: -36, opacity: 0 },
              {
                scrollTrigger: { trigger: el, start: 'top 88%' },
                x: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
                immediateRender: false,
              }
            );
          });
        },

        /* ─── DESKTOP: pinned horizontal train ─── */
        '(min-width: 768px)': () => {
          if (!trainRef.current || !stationRef.current) return;

          const STOPS = CARRIAGES.length;
          // Each carriage is one full viewport width
          const getDistance = () => -(STOPS - 1) * window.innerWidth;

          gsap.to(trainRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              // Each stop = 1 × viewport height of scroll travel
              end: () => `+=${(STOPS - 1) * window.innerHeight}`,
              pin: stationRef.current,
              anticipatePin: 1,
              scrub: 1.8,
              invalidateOnRefresh: true,
            },
            x: getDistance,
            ease: 'none',
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative border-b border-white/[0.05]"
    >
      {/* ══════════ DESKTOP: pinned train station ══════════ */}
      <div
        ref={stationRef}
        className="hidden md:block h-screen overflow-hidden relative"
      >
        {/* Section label — fixed inside station, always visible */}
        <div className="absolute top-10 left-10 lg:left-16 z-20 pointer-events-none">
          <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.22em] uppercase block mb-2">
            Experience &amp; Education
          </span>
          <p className="font-display font-black text-[#F5F3F0] text-xl lg:text-2xl tracking-tight">
            Where I've Worked
          </p>
        </div>

        {/* Stop counter — bottom right, always visible */}
        <div className="absolute bottom-10 right-10 lg:right-16 z-20 pointer-events-none">
          <span className="font-mono text-[10px] text-[#5A5856] tracking-[0.14em]">
            {CARRIAGES.length} stops
          </span>
        </div>

        {/* ── Train: all carriages in a horizontal row ── */}
        <div
          ref={trainRef}
          className="flex h-full"
          style={{ width: `${CARRIAGES.length * 100}vw`, willChange: 'transform' }}
        >
          {CARRIAGES.map((car, i) => (
            <div
              key={car.id}
              className="h-full flex-shrink-0 flex items-center px-10 lg:px-16"
              style={{ width: '100vw' }}
            >
              {car.isEdu ? (
                /* ── Education carriage ── */
                <div className="grid grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
                  {/* Left: school */}
                  <div className="border border-white/[0.07] bg-[#111113] rounded-sm p-8">
                    <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.18em] uppercase block mb-5">
                      Education · {car.stop} / 0{CARRIAGES.length}
                    </span>
                    <h3 className="font-display font-bold text-[#F5F3F0] text-2xl lg:text-3xl tracking-tight mb-1">
                      {car.school}
                    </h3>
                    <p className="font-sans text-sm text-[#999795] mb-6">{car.degree}</p>
                    <div className="flex items-center justify-between pt-5 border-t border-white/[0.06]">
                      <span className="font-mono text-[10px] text-[#5A5856] tracking-[0.1em]">
                        {car.duration}
                      </span>
                      <span className="font-mono text-xl font-bold text-[#FF4D3D]">{car.cgpa}</span>
                    </div>
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      {car.stats.map((s) => (
                        <div key={s.l} className="border border-white/[0.07] p-3 text-center rounded-sm">
                          <div className="font-display font-black text-[#FF4D3D] text-lg">{s.v}</div>
                          <div className="font-mono text-[8px] text-[#5A5856] tracking-[0.1em] uppercase mt-0.5">{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: languages */}
                  <div className="border border-white/[0.07] bg-[#111113] rounded-sm p-8">
                    <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.18em] uppercase block mb-5">
                      Languages
                    </span>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {car.languages.map((l) => (
                        <span key={l} className="font-mono text-[10px] text-[#999795] border border-white/[0.07] px-3 py-1.5 rounded-sm hover:border-[#FF4D3D]/30 hover:text-[#FF4D3D] transition-all duration-200 cursor-default">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Job carriage ── */
                <div className="w-full max-w-3xl mx-auto">
                  <div className="border border-white/[0.07] bg-[#111113] rounded-sm p-10 lg:p-12 relative overflow-hidden">
                    {/* Decorative stop number */}
                    <span
                      aria-hidden="true"
                      className="absolute right-8 bottom-6 font-display font-black text-[#F5F3F0] select-none"
                      style={{ fontSize: 'clamp(80px, 14vw, 180px)', opacity: 0.03, lineHeight: 1 }}
                    >
                      {car.stop}
                    </span>

                    {/* Stop indicator */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.18em] uppercase">
                        Stop {car.stop} / 0{CARRIAGES.length}
                      </span>
                      <span className="w-8 h-[1px] bg-[#FF4D3D]/40" />
                      <span className="font-mono text-[10px] text-[#5A5856] tracking-[0.12em] uppercase">
                        {car.type}
                      </span>
                    </div>

                    {/* Company name */}
                    <h3
                      className="font-display font-black text-[#F5F3F0] tracking-tight mb-2 leading-none"
                      style={{ fontSize: 'clamp(28px, 4vw, 60px)' }}
                    >
                      {car.company}
                    </h3>
                    <p className="font-sans text-base text-[#999795] mb-2">{car.role}</p>
                    <p className="font-mono text-[10px] text-[#5A5856] tracking-[0.1em] mb-8">{car.duration}</p>

                    <p className="font-sans text-base text-[#5A5856] leading-[1.75] mb-8 max-w-xl">
                      {car.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {car.tags.map((t) => (
                        <span key={t} className="font-mono text-[9px] text-[#FF4D3D]/75 bg-[#FF4D3D]/[0.07] border border-[#FF4D3D]/[0.14] px-2.5 py-1 rounded-sm tracking-[0.07em]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ MOBILE: stacked cards ══════════ */}
      <div className="md:hidden py-24 px-6 space-y-6">
        <div className="mb-10">
          <span className="font-mono text-[11px] text-[#FF4D3D] tracking-[0.22em] uppercase block mb-3">
            Experience &amp; Education
          </span>
          <h2 className="font-display font-black text-[#F5F3F0] text-4xl leading-tight">
            Where I've Worked
          </h2>
        </div>

        {CARRIAGES.map((car) =>
          car.isEdu ? (
            <div key={car.id}>
              <div className="exp-mob-card border border-white/[0.07] bg-[#111113] rounded-sm p-6 mb-4">
                <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.18em] uppercase block mb-3">Education</span>
                <h3 className="font-display font-bold text-[#F5F3F0] text-xl tracking-tight mb-1">{car.school}</h3>
                <p className="font-sans text-sm text-[#999795] mb-4">{car.degree}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/[0.05]">
                  <span className="font-mono text-[9.5px] text-[#5A5856]">{car.duration}</span>
                  <span className="font-mono text-base font-bold text-[#FF4D3D]">{car.cgpa}</span>
                </div>
              </div>
              <div className="exp-mob-card border border-white/[0.07] bg-[#111113] rounded-sm p-6">
                <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.18em] uppercase block mb-3">Languages</span>
                <div className="flex flex-wrap gap-1.5">
                  {car.languages.map((l) => (
                    <span key={l} className="font-mono text-[9px] text-[#999795] border border-white/[0.07] px-2.5 py-1.5 rounded-sm">{l}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div key={car.id} className="exp-mob-card border border-white/[0.07] bg-[#111113] rounded-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[9px] text-[#FF4D3D] bg-[#FF4D3D]/10 px-2 py-0.5 rounded-sm tracking-[0.1em]">
                  Stop {car.stop}
                </span>
                <span className="font-mono text-[9px] text-[#5A5856] tracking-[0.1em] uppercase">{car.type}</span>
              </div>
              <h3 className="font-display font-bold text-[#F5F3F0] text-xl tracking-tight mb-1">{car.company}</h3>
              <p className="font-sans text-sm text-[#999795] mb-1">{car.role}</p>
              <p className="font-mono text-[9.5px] text-[#5A5856] mb-4 tracking-[0.08em]">{car.duration}</p>
              <p className="font-sans text-sm text-[#5A5856] leading-[1.7] mb-4">{car.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {car.tags.map((t) => (
                  <span key={t} className="font-mono text-[9px] text-[#FF4D3D]/75 bg-[#FF4D3D]/[0.07] border border-[#FF4D3D]/[0.14] px-2.5 py-1 rounded-sm">{t}</span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
