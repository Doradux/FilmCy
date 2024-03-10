/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "main-color": "#fe0b21",
        "main-hover": "#880713",
        gray: "#414247",
      },
      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('../../src/assets/index/hero.png')",
        registermobile:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('../../src/assets/register/bgmobile.png')",
        register:
          "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('../../src/assets/register/bg.png')",
        tv: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('../../src/assets/index/tv.webp')",
        grad: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(15,10,4,0) 80%, rgba(252,176,69,0) 100%)",
        movieselected: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../src/assets/moviesseries/exclusives/lopeinfo.webp')",
        blur: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
        indexbg: "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('../../src/assets/index/bg.avif')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
