import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a1a',
        cream: '#faf7f2',
        sage: '#7a8b6f',
        clay: '#c97c5d',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
