'use client';

import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import ReactLenis from '@studio-freight/react-lenis';
import Cursor from '../components/Cursor';
import SmoothScroll from '../components/SmoothScroll';
import ScrollProgress from '../components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jbMono.variable}`}>
      <head>
        <title>Bhavik Jain — Full Stack Developer & Backend Engineer</title>
        <meta
          name="description"
          content="Bhavik Jain — Full Stack Developer, Backend Engineer, DevOps. Building production-grade web platforms with React, Node.js, Docker, and AWS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#0A0A0B] text-[#F5F3F0] antialiased overflow-x-hidden">
        <Cursor />
        <ScrollProgress />
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothTouch: false }}>
          <SmoothScroll />
          <main className="relative w-full">{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
