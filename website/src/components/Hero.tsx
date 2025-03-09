'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Tilt effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      titleRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/herobg.png"
          alt="Zozalu Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="max-w-3xl space-y-6">
          <h1 
            ref={titleRef}
            className="text-7xl md:text-9xl font-bold text-white tracking-tight 
            [text-shadow:_0_2px_4px_rgba(0,0,0,0.4),_0_4px_8px_rgba(0,0,0,0.3),_0_8px_16px_rgba(0,0,0,0.3)]"
          >
            Zozalu
          </h1>
          <div className="space-y-2">
            <p className="text-2xl md:text-4xl text-white font-light tracking-wide 
            [text-shadow:_0_2px_4px_rgba(0,0,0,0.4),_0_4px_8px_rgba(0,0,0,0.3)]">
              A Pop Up Initiative by
            </p>
            <p className="text-2xl md:text-4xl text-white font-medium tracking-wide 
            [text-shadow:_0_2px_4px_rgba(0,0,0,0.4),_0_4px_8px_rgba(0,0,0,0.3)]">
              Founders of Zo World
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <title>Scroll down</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 