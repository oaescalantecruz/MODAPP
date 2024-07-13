/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".components/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141511",
        secondary: "#82E0AA",
        accent: "#5B2C6F",
        danger: "#DF1309"
      }
    },
  },
  plugins: [],
}

