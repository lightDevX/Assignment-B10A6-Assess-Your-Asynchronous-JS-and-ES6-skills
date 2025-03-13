/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,css}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },

  },
  plugins: [require("@tailwindcss/typography"),],
}