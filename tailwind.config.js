/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./node_modules/flowbite/**/*.js", "./more/*.html"],
  theme: {
    fontFamily: {
      body: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        // Primary Color
        orange: "#FFB20F",

        putih: "#FCFCFF",
        hitam: "#1f1f1f",
      },
      screens: {
        // => @media (max-width: 280px)
        xs: { max: "280px" },

        // => @media (max-width: 320px)
        sm: { max: "320px" },

        // => @media (max-width: 550px)
        md: { max: "550px" },

        // => @media (max-width: 1024px)
        lg: { max: "1024px" },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
