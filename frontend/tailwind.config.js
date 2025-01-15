//** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemon: ['Lemon', 'serif'],
        alfaSlab: ['"Alfa Slab One"', 'serif'],
        roboto: ['Roboto', 'serif'],
        righteous: ['Righteous', 'cursive'], 
        'zen-dots': ['Zen Dots', 'sans-serif'],

        
      },
      
    },
  },
  plugins: [],
}

