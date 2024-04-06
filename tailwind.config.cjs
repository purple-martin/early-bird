/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './pages/**/*.{astro,html,ts,tsx}',
    './components/**/*.{astro,html,ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,ts,js}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  darkMode: 'class',
  theme: {
    extend: {
      backgroundOpacity: {
        15: '0.15',
        35: '0.35',
        65: '0.65',
      },
    },
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // colors: {
    //   blue: '#1fb6ff',
    //   purple: '#7e5bef',
    //   pink: '#ff49db',
    //   orange: '#ff7849',
    //   green: '#13ce66',
    //   yellow: '#ffc82c',
    //   'gray-dark': '#273444',
    //   gray: '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    // extend: {
    //   spacing: {
    //     128: '32rem',
    //     144: '36rem',
    //   },
    //   borderRadius: {
    //     '4xl': '2rem',
    //   },
    // },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    nextui({
      addCommonColors: true,
      themes: {
        'purple-dark': {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff',
            },
            focus: '#F182F6',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
      },
    }),
  ],
};
