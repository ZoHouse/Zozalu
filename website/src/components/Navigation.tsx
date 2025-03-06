'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Abstract', href: '#abstract' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Partners', href: '#partners' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Nodes', href: '#nodes' },
  { label: 'Bounties', href: '#bounties' },
  { label: 'Proof of Vibes', href: '#proof-of-vibes' },
  { label: 'Register', href: '#register' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
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
        className="lg:hidden p-2 text-foreground"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <title>Menu</title>
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <nav
        className={`${
          isMenuOpen
            ? 'absolute top-full left-0 right-0 bg-background border-b border-border'
            : 'hidden'
        } lg:block lg:relative lg:top-0 lg:bg-transparent lg:border-none`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 p-4 lg:p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block py-2 px-4 lg:px-2 text-sm transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary font-medium'
                    : 'text-foreground'
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