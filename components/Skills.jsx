'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE = [
  {
    num: '01',
    label: 'Frontend Development',
    title: 'FRONTEND\nDEVELOPMENT',
    techs: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript',
      'Tailwind CSS', 'HTML', 'CSS', 'Context API',
      'React Hooks', 'React Router', 'Axios',
    ],
    highlight: 'Production interfaces built for real client-facing workflows',
  },
  {
    num: '02',
    label: 'Backend & APIs',
    title: 'BACKEND\n& APIs',
    techs: [
      'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication',
      'WebSockets', 'Socket.IO', 'WebRTC', 'MVC Architecture',
      'Session Management',
    ],
    highlight: 'Secure, well-structured APIs from auth to real-time transport',
  },
  {
    num: '03',
    label: 'Cloud & DevOps',
    title: 'CLOUD &\nDEVOPS',
    techs: [
      'Docker', 'GitHub Actions', 'AWS EC2', 'AWS S3', 'AWS IAM',
      'AWS Lambda', 'AWS RDS', 'AWS CloudFront', 'Nginx', 'Redis', 'CI/CD',
    ],
    highlight: 'Containerised builds and deployments that ship themselves',
  },
  {
    num: '04',
    label: 'Databases & Data',
    title: 'DATABASES\n& DATA',
    techs: [
      'MongoDB', 'MySQL', 'PostgreSQL', 'Redis',
      'SQL', 'Schema Design', 'Query Optimization', 'Caching',
    ],
    highlight: 'Relational and document stores, chosen to fit the problem',
  },
  {
    num: '05',
    label: 'Languages & Core CS',
    title: 'LANGUAGES\n& CORE CS',
    techs: [
      'C++', 'JavaScript', 'TypeScript', 'SQL', 'DSA', 'OOPs',
      'DBMS', 'Operating Systems', 'Computer Networks',
      'Git', 'Jest', 'Hoppscotch',
    ],
    highlight: '500+ DSA problems solved — fundamentals behind the frameworks',
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  // Arrays of refs for each panel (number side + content side)
  const numRefs = useRef([]);
  const contentRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      /* ─── MOBILE: simple per-item reveal ─── */
      ScrollTrigger.matchMedia({
        '(max-width: 767px)': () => {
          sectionRef.current.querySelectorAll('.skill-mob').forEach((el) => {
            gsap.fromTo(el,
              { y: 32, opacity: 0 },
              {
                scrollTrigger: { trigger: el, start: 'top 88%' },
                y: 0, opacity: 1, duration: 0.65, ease: 'power2.out',
                immediateRender: false,
              }
            );
          });
        },

        /* ─── DESKTOP: pinned flip-clock ─── */
        '(min-width: 768px)': () => {
          const nums = numRefs.current.filter(Boolean);
          const contents = contentRefs.current.filter(Boolean);
          if (!nums.length || !contents.length) return;

          // ── Numbers: calendar page fold (rotateX around top edge) ──
          gsap.set(nums, { transformOrigin: '50% 0%' });           // pivot at top
          gsap.set(nums.slice(1), { rotateX: -90, opacity: 0 });   // pre-folded above

          // ── Contents: slow train (pure Y translate, no rotation) ──
          gsap.set(contents.slice(1), { y: 90, opacity: 0 });      // waiting below

          // Each segment = 2 units → 1.5 × vh per transition = slow & deliberate
          const SEG = 2;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              // 1.5 × viewport height per skill step = slow train feel
              end: () => `+=${(EXPERTISE.length - 1) * window.innerHeight * 1.5}`,
              pin: pinRef.current,
              anticipatePin: 1,
              scrub: 3,           // higher = smoother / more lag
              invalidateOnRefresh: true,
            },
          });

          for (let i = 1; i < EXPERTISE.length; i++) {
            const base = (i - 1) * SEG;

            // ── EXIT current ──
            // Number: calendar fold — top edge fixed, page folds up & away
            tl.to(nums[i - 1], {
              rotateX: 90,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.in',
            }, base + 0.4);

            // Content: train departing — slides smoothly UP and out
            tl.to(contents[i - 1], {
              y: -90,
              opacity: 0,
              duration: 0.55,
              ease: 'power2.inOut',
            }, base + 0.4);

            // ── ENTER next ──
            // Number: new page falls down from above (calendar flip in)
            tl.to(nums[i], {
              rotateX: 0,
              opacity: 1,
              duration: 0.55,
              ease: 'power2.out',
            }, base + 1.05);

            // Content: train arriving — slides smoothly UP from below
            tl.to(contents[i], {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
            }, base + 1.05);
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative border-b border-white/[0.05]"
    >
      {/* ══════════ DESKTOP: pinned flip-clock ══════════ */}
      <div
        ref={pinRef}
        className="hidden md:grid h-screen"
        style={{
          gridTemplateColumns: '38% 62%',
          perspective: '1400px',
        }}
      >
        {/* ── LEFT 38%: section label + stacked number panels ── */}
        <div className="relative flex flex-col justify-center pl-10 lg:pl-16 overflow-hidden border-r border-white/[0.05]">
          {/* Fixed label — always visible */}
          <div className="absolute top-10 left-10 lg:left-16 z-10">
            <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.22em] uppercase block mb-2">
              Expertise
            </span>
            <p className="font-display font-black text-[#F5F3F0] text-xl lg:text-2xl tracking-tight">
              What I Build With
            </p>
          </div>

          {/* Stacked number panels */}
          {EXPERTISE.map((item, i) => (
            <div
              key={item.num}
              ref={(el) => { numRefs.current[i] = el; }}
              className="absolute inset-0 flex flex-col items-start justify-center pl-10 lg:pl-16"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Ghost giant number */}
              <span
                aria-hidden="true"
                className="font-display font-black text-[#F5F3F0] select-none leading-none"
                style={{
                  fontSize: 'clamp(120px, 20vw, 280px)',
                  opacity: 0.09,
                  letterSpacing: '-0.04em',
                }}
              >
                {item.num}
              </span>
              {/* Real counter label */}
              <span className="font-mono text-xs text-[#FF4D3D] tracking-[0.18em] mt-3">
                {item.num} / 0{EXPERTISE.length}
              </span>
            </div>
          ))}
        </div>

        {/* ── RIGHT 62%: stacked content panels ── */}
        <div className="relative flex items-center overflow-hidden">
          {EXPERTISE.map((item, i) => (
            <div
              key={item.num}
              ref={(el) => { contentRefs.current[i] = el; }}
              className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3
                className="font-display font-black text-[#F5F3F0] leading-tight tracking-tight mb-3 whitespace-pre-line"
                style={{ fontSize: 'clamp(26px, 3.2vw, 52px)' }}
              >
                {item.title}
              </h3>
              <p className="font-sans text-sm text-[#5A5856] mb-7">{item.highlight}</p>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9.5px] text-[#999795] border border-white/[0.07] px-2.5 py-1.5 rounded-sm hover:border-[#FF4D3D]/35 hover:text-[#FF4D3D] transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ MOBILE: stacked list ══════════ */}
      <div className="md:hidden py-24 px-6">
        <div className="mb-12">
          <span className="font-mono text-[11px] text-[#FF4D3D] tracking-[0.22em] uppercase block mb-3">
            Expertise
          </span>
          <h2 className="font-display font-black text-[#F5F3F0] text-4xl leading-tight">
            What I Build With
          </h2>
        </div>
        <div className="divide-y divide-white/[0.05]">
          {EXPERTISE.map((item) => (
            <div key={item.num} className="skill-mob py-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-[10px] text-[#FF4D3D] tracking-[0.1em]">{item.num}</span>
                <h3 className="font-display font-semibold text-[#F5F3F0] text-lg tracking-tight">
                  {item.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {item.techs.map((tech) => (
                  <span key={tech} className="font-mono text-[9px] text-[#999795] border border-white/[0.07] px-2 py-1 rounded-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
