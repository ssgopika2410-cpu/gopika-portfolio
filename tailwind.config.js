/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F3EC',
        bone: '#EFEBE1',
        ink: '#17150F',
        charcoal: '#2A2722',
        stone: '#8C867A',
        lilac: '#A79CC9',
        gold: '#D9A441',
        moss: '#6E7F65',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'clamp-hero': 'clamp(3.5rem, 13vw, 11rem)',
        'clamp-xl': 'clamp(2.5rem, 7vw, 6rem)',
        'clamp-lg': 'clamp(1.8rem, 4vw, 3.2rem)',
      },
    },
  },
  plugins: [],
}
