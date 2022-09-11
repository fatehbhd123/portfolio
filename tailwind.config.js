/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../dist/images/home.jpg')",
        'bg': "url('../dist/images/about.jpg')",
      }
    },
  },
  plugins: [],
}