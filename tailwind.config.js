/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alata': ['alata', 'sans-serif'],
        'josefin-sans': ['josefin sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}