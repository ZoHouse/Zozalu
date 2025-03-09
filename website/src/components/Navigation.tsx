'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'TLDR', href: '#abstract' },
  { label: 'Schedule', href: '#event-details' },
  { label: 'Food', href: '#meal-plan' },
  { label: 'Nodes', href: '#infrastructure' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Partners', href: '#partners' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(item => ({
        id: item.href.substring(1),
        offset: document.getElementById(item.href.substring(1))?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const currentSection = sections.reduce((acc, section) => {
        return scrollPosition >= section.offset ? section.id : acc;
      }, sections[0]?.id || '');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="lg:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <Image 
          src="/spinner_Z_4.gif" 
          alt="Menu" 
          width={24} 
          height={24}
          className="rounded-full"
        />
      </button>

      {/* Navigation links */}
      <nav
        className={`${
          isMenuOpen
            ? 'absolute top-full left-0 right-0 bg-[#111111] border-b border-border'
            : 'hidden'
        } lg:block lg:relative lg:top-0 lg:bg-transparent lg:border-none`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 p-4 lg:pl-0 lg:pr-4">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-4 lg:px-2 text-sm transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-medium'
                    : 'text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation; 