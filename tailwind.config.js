/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'hero-background': "url(images/desktop/image-hero.jpg)"
    },
  },
  plugins: [],
}