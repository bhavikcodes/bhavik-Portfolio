'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-16 h-16 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-white/[0.05]'
          : ''
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      {/* Logo */}
      <a
        href="/"
        className="font-sans text-sm font-medium text-[#F5F3F0] tracking-tight hover:text-[#FF4D3D] transition-colors duration-200 interactive"
      >
        Bhavik Jain
      </a>

      {/* Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[11px] font-medium text-[#999795] hover:text-[#F5F3F0] tracking-[0.1em] uppercase transition-colors duration-200 interactive"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right actions */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/bhavikcodes"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="interactive w-8 h-8 flex items-center justify-center text-[#999795] hover:text-[#F5F3F0] transition-colors duration-200"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/bhavikxjain"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="interactive w-8 h-8 flex items-center justify-center text-[#999795] hover:text-[#F5F3F0] transition-colors duration-200"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:bj541023@gmail.com"
          className="interactive hidden md:flex items-center gap-2 ml-2 px-4 py-1.5 border border-[#FF4D3D]/50 text-[#FF4D3D] text-[10px] font-mono tracking-[0.12em] uppercase hover:bg-[#FF4D3D] hover:text-white transition-all duration-200 rounded-sm"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
}
