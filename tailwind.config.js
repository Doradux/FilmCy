/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#fe0b21",
        "main-hover": "#880713",
        "gray": "#414247",
      },
      backgroundImage: {
        'hero': "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('../../src/assets/hero.png')",
      }
    },
  },
  plugins: [],
}