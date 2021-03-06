// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        xxs: ".55rem",
      },
      colors: {
        primary: "#00bcd4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
