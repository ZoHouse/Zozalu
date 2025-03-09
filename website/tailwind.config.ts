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
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
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
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 20px 10px rgba(0, 255, 102, 0.3)',
            transform: 'translateY(-4px)',
          },
          '50%': {
            'box-shadow': '0 0 30px 15px rgba(0, 255, 102, 0.5)',
            transform: 'translateY(-6px)',
          },
        },
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