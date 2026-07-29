'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const GITHUB_USER = 'bhavikcodes';
const repo = (name) => `https://github.com/${GITHUB_USER}/${name}`;

const PROJECTS = [
  {
    id: 'arogyam',
    title: 'Arogyam',
    tagline: 'Hybrid disease surveillance and outbreak detection — geo-enabled, ML-driven',
    status: 'complete',
    stack: ['Node.js', 'Express', 'MongoDB Atlas', 'Machine Learning', 'RBAC', 'Geo-spatial'],
    bullets: [
      'Full-stack platform unifying citizen, community worker, and hospital reporting streams',
      '15+ REST APIs with role-based access control across three distinct user roles',
      'ML outbreak-detection engine surfacing disease clusters on interactive geo heatmaps',
      'AI chatbot guiding citizens through symptom reporting to improve data accuracy',
    ],
    github: repo('Arogyam'),
    live: 'https://arogyam-frontend-rust.vercel.app/user',
    featured: true,
  },
  {
    id: 'pingup',
    title: 'PingUp',
    tagline: 'Real-time video conferencing over WebRTC — P2P, sub-second latency',
    status: 'complete',
    stack: ['WebRTC', 'Socket.IO', 'Node.js', 'React', 'Render'],
    bullets: [
      'P2P architecture supporting both 1:1 and group meetings at <1s latency',
      'Video, audio, screen sharing, and in-call chat with Socket.IO signaling — <3s setup',
      'HTTPS-deployed on Render; verified with 5+ concurrent users over 20+ minute calls',
    ],
    github: repo('PingUp'),
    live: 'https://pingup-x6ol.onrender.com/',
    featured: true,
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    tagline: 'Full-stack travel listing platform — strict MVC, auth, and image workflows',
    status: 'complete',
    stack: ['Node.js', 'Express', 'MongoDB', 'MVC', 'Joi', 'Sessions'],
    bullets: [
      'Serving 20+ users across 50+ listings with 50+ uploaded images',
      'Authentication and role-based authorization via sessions, cookies, and password hashing',
      '10+ REST APIs in strict MVC with centralized error handling and Joi validation',
    ],
    github: repo('Wanderlust_project'),
    live: 'https://wanderlust-project-9x1g.onrender.com/',
    featured: true,
  },
];

function ProjectCard({ project, large }) {
  return (
    <div
      className={`proj-card-inner group relative flex flex-col border border-white/[0.07] bg-[#111113] hover:border-[#FF4D3D]/30 transition-colors duration-300 rounded-sm overflow-hidden h-full ${
        large ? 'p-8 lg:p-9' : 'p-6 lg:p-7'
      }`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Top accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF4D3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Ongoing badge */}
      {project.status === 'ongoing' && (
        <div className="inline-flex items-center gap-1.5 mb-4 w-fit ongoing-badge-glow rounded-sm px-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D3D] pulse-dot" />
          <span className="font-mono text-[9px] text-[#FF4D3D] tracking-[0.22em] uppercase">
            Ongoing
          </span>
        </div>
      )}

      {/* Title row */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <h3
          className={`font-display font-semibold text-[#F5F3F0] leading-tight tracking-tight group-hover:text-[#FF4D3D] transition-colors duration-300 ${
            large ? 'text-2xl lg:text-[26px]' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="interactive shrink-0 w-8 h-8 flex items-center justify-center border border-white/[0.08] text-[#5A5856] hover:border-[#FF4D3D]/40 hover:text-[#FF4D3D] transition-all duration-200 rounded-sm mt-0.5"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Tagline */}
      <p className="font-sans text-sm text-[#5A5856] leading-[1.65] mb-5">{project.tagline}</p>

      {/* Bullets */}
      <ul className="space-y-2 mb-6 flex-1">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-[7px] w-[3px] h-[3px] rounded-full bg-[#FF4D3D] shrink-0" />
            <span className="font-sans text-[12.5px] text-[#5A5856] leading-[1.65]">{b}</span>
          </li>
        ))}
      </ul>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[9px] text-[#FF4D3D]/75 bg-[#FF4D3D]/[0.07] border border-[#FF4D3D]/[0.14] px-2.5 py-1 rounded-sm tracking-[0.07em]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="interactive inline-flex items-center gap-1.5 font-mono text-[9.5px] text-[#5A5856] hover:text-[#F5F3F0] tracking-[0.12em] uppercase transition-colors duration-200"
        >
          <Github className="w-3 h-3" />
          View on GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="interactive inline-flex items-center gap-1.5 font-mono text-[9.5px] text-[#FF4D3D]/80 hover:text-[#FF4D3D] tracking-[0.12em] uppercase transition-colors duration-200"
          >
            <ExternalLink className="w-3 h-3" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.proj-header',
        { y: 30, opacity: 0 },
        {
          scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', immediateRender: false,
        }
      );

      // Dramatic "card lifts off the table" entrance — scale + rotateX + y
      // Staggered by column for a diagonal wave sweep
      const wrappers = containerRef.current.querySelectorAll('.proj-card-wrapper');
      wrappers.forEach((wrapper, i) => {
        const col = i % 3;
        gsap.fromTo(
          wrapper,
          {
            y: 80,
            rotateX: 18,
            scale: 0.88,
            opacity: 0,
            transformOrigin: 'bottom center',
            transformPerspective: 900,
          },
          {
            scrollTrigger: {
              trigger: wrapper,
              start: 'top 92%',
              toggleActions: 'play none none none',
            },
            y: 0,
            rotateX: 0,
            scale: 1,
            opacity: 1,
            duration: 0.85,
            delay: col * 0.09,
            ease: 'power3.out',
            immediateRender: false,
          }
        );
      });

      // Magnetic tilt hover on inner cards (desktop only)
      if (window.innerWidth >= 768) {
        const cards = containerRef.current.querySelectorAll('.proj-card-inner');
        const cleanups = [];

        cards.forEach((card) => {
          const onMove = (e) => {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
            const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
            gsap.to(card, {
              rotateY: x * 7,
              rotateX: -y * 5,
              duration: 0.5,
              ease: 'power2.out',
              transformPerspective: 900,
            });
          };
          const onLeave = () => {
            gsap.to(card, {
              rotateX: 0, rotateY: 0,
              duration: 0.75, ease: 'power3.out',
            });
          };
          card.addEventListener('mousemove', onMove);
          card.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            card.removeEventListener('mousemove', onMove);
            card.removeEventListener('mouseleave', onLeave);
          });
        });

        return () => cleanups.forEach((fn) => fn());
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full py-32 px-6 lg:px-16 border-b border-white/[0.05]"
      style={{ perspective: '1200px' }}
    >
      {/* Header */}
      <div className="proj-header flex items-end justify-between mb-16">
        <div>
          <span className="font-mono text-[11px] text-[#FF4D3D] tracking-[0.22em] uppercase block mb-3">
            Selected Work
          </span>
          <h2
            className="font-display font-black text-[#F5F3F0] leading-tight"
            style={{ fontSize: 'clamp(32px, 5vw, 72px)' }}
          >
            What I've Built
          </h2>
        </div>
        <span className="hidden md:block font-mono text-[10px] text-[#5A5856] tracking-[0.1em]">
          {PROJECTS.length} projects
        </span>
      </div>

      {/* Featured */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${
          rest.length ? 'mb-4' : ''
        }`}
      >
        {featured.map((p) => (
          <div key={p.id} className="proj-card-wrapper">
            <ProjectCard project={p} large />
          </div>
        ))}
      </div>

      {/* Rest */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p) => (
            <div key={p.id} className="proj-card-wrapper">
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
