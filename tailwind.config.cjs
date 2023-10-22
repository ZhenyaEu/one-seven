/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")

module.exports = withMT({
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fea428",
        secondary: "white",
        tertiary: "#3be8b0",/* 'rgba(10, 191, 80, 1)',  */
        "black-100": "#FAF5E9",
        "black-200": "#0abf54",
        "white-100": "#f3f3f3",
        "blue-100": "#fea428",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
});
