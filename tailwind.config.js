const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Ubuntu', 'sans-serif'],
      'body': ['Work Sans', 'sans-serif']
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.blueGray,
      purple: colors.purple
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
