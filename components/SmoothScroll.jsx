'use client';

import { useEffect } from 'react';
import { useLenis } from '@studio-freight/react-lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  const lenis = useLenis();

  // Sync Lenis virtual scroll with GSAP ScrollTrigger
  useEffect(() => {
    if (!lenis) return;
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, [lenis]);

  // Smooth anchor-link scrolling via Lenis
  useEffect(() => {
    if (!lenis) return;
    const ease = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) lenis.scrollTo(target, { offset: -64, duration: 1.4, easing: ease });
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((a) => a.addEventListener('click', onClick));
    return () => links.forEach((a) => a.removeEventListener('click', onClick));
  }, [lenis]);

  // Refresh trigger positions once layout settles (fonts + images)
  useEffect(() => {
    const refresh = () => setTimeout(() => ScrollTrigger.refresh(), 200);
    if (document.readyState === 'complete') refresh();
    else window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return null;
}
