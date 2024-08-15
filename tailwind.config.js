/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors"); // bonus color that can be imported frm tailwind

export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // add custom colors in tailwind config file
        primary: "#202225",
        secondary: "#5865f2",
        gray: colors.neutral, // import trueGray colors from tailwind; frm version 3, trueGray renamed to neutral in Tailwind
        gray: {
          // overide trueGray colors to discord colors
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e5e3e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
    },
  },
  plugins: [],
};
