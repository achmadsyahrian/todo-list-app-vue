/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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

        // Light Mode
        light: {
          primary: '#FAFAFA',
          secondary: '#FFFFFF',
          tertiary: '#f3f4f6', //gray-100
          quaternary: '#6b7280', //gray-500
        },
        
        // Dark Mode
        dark: {
          primary: '#09090B', //gray-900
          secondary: '#18181B', //slate-800
          tertiary: '#242427', //gray-700
          quaternary: '#9ca3af', //gray-400
        },
      },

    },
  },
  plugins: [],
}


