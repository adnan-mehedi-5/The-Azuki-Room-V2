import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C5A880',
          hover: '#D8BF9B',
          muted: '#A88D68',
          subtle: 'rgba(197, 168, 128, 0.25)',
          glow: 'rgba(197, 168, 128, 0.15)',
        },
        obsidian: {
          DEFAULT: '#0E0D0C',
          surface: '#161513',
          card: '#1F1D1A',
          border: 'rgba(243, 239, 230, 0.08)',
        },
        ivory: {
          DEFAULT: '#F3EFE6',
          muted: '#A8A196',
          dark: '#EAE5DA',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        jp: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
