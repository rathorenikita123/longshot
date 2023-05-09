/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.pug",
    "./src/**/*.md",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

