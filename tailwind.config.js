/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        // Primary brand colors - Yellow/Amber
        primary: {
          DEFAULT: '#fbbf24',
          dark: '#f59e0b',
          light: '#fcd34d',
        },
        // Accent colors - Yellow variations
        accent: {
          DEFAULT: '#f59e0b',
          dark: '#d97706',
          light: '#fde68a',
        },
        // Neutral colors - Dark theme
        gray: {
          50: '#18181b',
          100: '#27272a',
          200: '#3f3f46',
          300: '#52525b',
          400: '#71717a',
          500: '#a1a1aa',
          600: '#d4d4d8',
          700: '#e4e4e7',
          800: '#f4f4f5',
          900: '#fafafa',
        },
        // Semantic colors
        success: '#22c55e',
        warning: '#fbbf24',
        error: '#ef4444',
        info: '#06b6d4',
      },
    },
  },
  plugins: [],
}

