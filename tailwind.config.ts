import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#fdfaf5',
          100: '#f8f2e6',
          200: '#f2e9d8',
          300: '#e8ddc8',
          400: '#d9ccb4',
          500: '#c4b49a',
        },
        ink: {
          DEFAULT: '#1c1917',
          muted:   '#78716c',
          faint:   '#a8a29e',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
