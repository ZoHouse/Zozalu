'use client';

import Link from 'next/link';
import { ButtonLink } from '@/components/Button';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Simple animation effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!titleRef.current) return;
      
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      
      // Subtle tilt effect
      titleRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 text-center px-4 relative overflow-hidden">
      {/* Clean background - no gradient overlay */}
      
      <h1 
        ref={titleRef}
        className="text-7xl md:text-9xl font-bold mb-6 tracking-tight relative transition-transform duration-200 ease-out"
        style={{ 
          fontFamily: 'var(--font-poppins), sans-serif',
          letterSpacing: '-0.03em'
        }}
      >
        <span className="relative inline-block">
          Zozalu
          <span className="absolute inset-0 blur-md opacity-10 bg-primary rounded-full" style={{ filter: 'blur(30px)' }} />
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl mb-10 max-w-2xl animate-fadeIn" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        A pop up initiative by Founders of Zo World
      </p>
      
      <div className="animate-fadeIn animation-delay-300">
        <ButtonLink 
          href="#get-involved" 
          size="lg"
          className="hover:scale-105 transition-transform font-poppins text-xl px-8 py-4"
        >
          Register Now
        </ButtonLink>
      </div>
      
      {/* Simple down arrow for scrolling */}
      <div className="absolute bottom-8 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="opacity-50"
          aria-hidden="true"
          title="Scroll down"
        >
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 