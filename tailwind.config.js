/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Bixxy Bee dark backgrounds
        // Use deep navy/charcoal (avoid pure black) for a premium, calmer contrast.
        'bee-dark': '#0b1220',
        'bee-darker': '#070b12',
        'bee-navy': '#111827',
        // Yellow accents - bright and energetic
        'bee-yellow': '#FFD700',
        'bee-yellow-dark': '#FFC700',
        'bee-yellow-light': '#FFEA4D',
        // Black and white
        // Avoid pure black in UI surfaces; keep near-black for text/ink.
        'bee-black': '#0b0f16',
        'bee-white': '#FFFFFF',
        'bee-white-100': '#FFFFFF',
        'bee-white-50': '#F9FAFB',
        // Gray scale - soft neutrals
        'bee-gray': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        // Slate for text
        'bee-slate': {
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#1f2937',
          800: '#111827',
        },
        // Primary accent - bright yellow
        'bee-accent': '#FFD700',
        'bee-accent-dark': '#FFC700',
        'bee-accent-light': '#FFEA4D',
        // Secondary accent - honey orange
        'bee-highlight': '#FFA500',
        // Success/info colors
        'bee-success': '#10b981',
        'bee-steel': '#757575',
        'bee-silver': '#bdbdbd',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
