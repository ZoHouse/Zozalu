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

  // Smooth scroll to next section
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-8 text-center px-4 relative overflow-hidden bg-background">
      {/* Clean background - no gradient overlay */}
      
      <h1 
        ref={titleRef}
        className="text-7xl md:text-9xl font-bold mb-2 tracking-tight relative transition-transform duration-200 ease-out"
      >
        Zozalu
      </h1>
      
      <p className="text-xl md:text-2xl mb-4 max-w-2xl animate-fadeIn text-foreground">
        A Pop Up Initiative by Founder Members of Zo World
      </p>
      
      {/* Simple down arrow for scrolling */}
      <button
        type="button"
        className="absolute bottom-4 animate-bounce bg-transparent border-none cursor-pointer text-foreground"
        aria-label="Scroll down for more content"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="opacity-50 hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          <polyline points="7 13 12 18 17 13" />
          <polyline points="7 6 12 11 17 6" />
        </svg>
      </button>
    </section>
  );
};

export default Hero; 