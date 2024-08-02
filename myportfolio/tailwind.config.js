/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#1589e9",
        secondary:"#C7E1F6"
      },
      boxShadow:{
        button_shadow:"inset 3px 3px 20px #68B2EF",
      },
      height:{
        imgHeight:"80vh",
      }
    },
  },
  plugins: [require('tailwindcss-textshadow'),],
}

