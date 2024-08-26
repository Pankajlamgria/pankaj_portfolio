/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jumpdown: {
          "0%": { opacity: "0", transform: "scale(1)" },
          "20%": { opacity: ".4" },
          "100%": { opacity: "0", transform: "scale(1.8)"},
        },
        
      },

      colors: {
        primary: "#1589e9",
        secondary: "#C7E1F6",
        text: "#73b9f2",
        background: "rgb(34, 34, 34)",
        shadowText:"rgba(255, 255, 255, 0.8)",
      },
      boxShadow: {
        button_shadow: "inset 3px 3px 20px #68B2EF",
        img_shadow: "1px 1px 120px 2px #5cadf0",
        hover_shadow: "1px 1px 20px 1px #5cadf0",
      },
      height: {
        imgHeight: "70vh",
      },
      dropShadow: {
        "3xl": "2px 2px 10px #73b9f2",
      },
      animation: {
        jumpdown: "jumpdown 0.6s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
