const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: '#000',
      white: '#f5f5f5',
    },
    fontFamily: {
      sans: '"Helvetica", "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    screens: {
      ...defaultTheme.screens,
      'lg-max': { max: '1023px' },
    },
    extend: {
      height: {
        screen: ['100vh', '100svh'],
      },
      minHeight: {
        screen: ['100vh', '100svh'],
      },
      maxHeight: {
        screen: ['100vh', '100svh'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
