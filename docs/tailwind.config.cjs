const colors = require('tailwindcss/colors');
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: colors.violet,
      }
    },
  },

  plugins: [],
};

module.exports = config;
