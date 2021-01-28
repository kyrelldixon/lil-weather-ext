const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/popup/**/*.{svelte,html}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    ...colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
