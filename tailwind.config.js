/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' // Pastikan Vue file diikutkan
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Base Color
        base: {
          primary: '#dc2626', //red-600
          secondary: '#fca5a5', //red-300
        },

        // Dark Mode
        dark: {
          primary: '#09090B', //gray-900
          secondary: '#18181B', //slate-800
          tertiary: '#242427', //gray-700
        },
      },

    },
  },
  plugins: [],
}


