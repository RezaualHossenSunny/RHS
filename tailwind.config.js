/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comon':'#4CAF4F'
      },
    },
    maxWidth: {
      'container':'1140px',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
   
    }
  },
  plugins: [],
}