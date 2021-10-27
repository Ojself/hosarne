// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend:{
      colors: {
        kb_warning: "#ff0f0f",
        kb_blue: "#083B7A",
        kb_yellow: "#F5BF3A",
        kb_white: "#FFFFFF",
        kb_gray: "#717171",
        kb_dark: "#404040",
        kb_hr: "#D1DCE7",
        kb_success: "#5CB85C",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
