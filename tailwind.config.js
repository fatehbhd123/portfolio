/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../assets/images/home.jpg')",
        'bg': "url('../assets/images/about.jpg')",
      }
    },
  },
  plugins: [],
}