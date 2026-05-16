/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08001A',
        'bg-card': 'rgba(255,255,255,0.04)',
        purple: {
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7C3AED',
          900: '#3B0764',
        },
        pink: {
          400: '#F472B6',
          500: '#EC4899',
          accent: '#D400FF',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        accent: ['Agbalumo', 'cursive'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: 'auto', letterSpacing: '0.01em', fontWeight: '800' }],
        'h2': ['40px', { lineHeight: 'auto', letterSpacing: '0em',   fontWeight: '700' }],
        'h3': ['24px', { lineHeight: 'auto', letterSpacing: '0.002em', fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}
