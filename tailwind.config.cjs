/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{astro,html,ts,tsx}',
    './components/**/*.{astro,html,ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,ts,js}',
  ],
  prefix: '',
  theme: {
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
