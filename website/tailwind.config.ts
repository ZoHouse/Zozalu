import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        'neon-blue': 'var(--neon-blue)',
        'neon-pink': 'var(--neon-pink)',
        'neon-purple': 'var(--neon-purple)',
        'neon-yellow': 'var(--neon-yellow)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 15px rgba(0, 255, 102, 0.5)',
        'neon-blue': '0 0 15px rgba(0, 238, 255, 0.5)',
        'neon-pink': '0 0 15px rgba(255, 0, 200, 0.5)',
        'neon-purple': '0 0 15px rgba(157, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-primary',
    'text-neon-blue',
    'text-neon-pink',
    'text-neon-purple',
    'text-neon-yellow',
  ],
};

export default config; 