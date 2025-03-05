'use client';

import { ThemeProvider } from './ClientThemeProvider';
import ThemeToggle from './ThemeToggle';

export default function ClientThemeToggle() {
  console.log('ClientThemeToggle rendering');
  
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
} 