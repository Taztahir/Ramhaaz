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
      },
    },
  },

  plugins: [],
}