'use client';

import Link from 'next/link';
import { ButtonLink } from './Button';
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
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-16 text-center px-4 relative overflow-hidden">
      {/* Animated background gradient - inspired by Dylan Brouwer's site */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-neon-purple via-neon-blue to-primary blur-3xl animate-gradient" />
      
      <h1 
        ref={titleRef}
        className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter relative transition-transform duration-200 ease-out"
      >
        <span className="relative inline-block">
          Zozalu
          <span className="absolute inset-0 blur-md opacity-30 bg-primary rounded-full" style={{ filter: 'blur(25px)' }} />
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-muted mb-8 max-w-2xl opacity-0 animate-fadeIn">
        A pop up initiative by Founders of Zo World
      </p>
      
      <div className="opacity-0 animate-fadeIn animation-delay-300">
        <ButtonLink 
          href="#get-involved" 
          size="lg"
          className="hover:scale-105 transition-transform"
        >
          Register Now
        </ButtonLink>
      </div>
    </section>
  );
};

export default Hero; 