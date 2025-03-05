'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  console.log('ThemeProvider rendering');
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage if available, but only on client
  useEffect(() => {
    console.log('ThemeProvider mount effect running');
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      console.log('Saved theme from localStorage:', savedTheme);
      if (savedTheme) {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Update document with theme class whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    
    console.log('Theme changed to:', theme);
    const root = window.document.documentElement;
    root.classList.remove('light-theme', 'dark-theme');
    root.classList.add(`${theme}-theme`);
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error setting theme in localStorage:', error);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current theme:', theme);
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // To avoid hydration mismatch, only render once mounted
  if (!mounted) {
    console.log('ThemeProvider not yet mounted, returning children without context');
    return <>{children}</>;
  }

  console.log('ThemeProvider fully mounted, providing context');
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  console.log('useTheme hook called');
  const context = useContext(ThemeContext);
  console.log('useTheme context:', context);
  if (context === undefined) {
    console.error('useTheme called outside of ThemeProvider!');
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 