/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      colors: {
        blue: {
          500: "#3498db", // Customize your blue color here
        },
        dark_purple: "#000235",
        btn_primary: "#7e7ee3",
        heading_color: "#abd9d9"
      },
      fontFamily: {
        Poppins: "Poppins"
      },
    },
  },

  plugins: [],
}