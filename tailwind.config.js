module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        red: { 100: "#ffe0ce", "100_01": "#ecd6c8" },
        gray: {
          50: "#fff9f5",
          400: "#c4c4c4",
          600: "#787878",
          700: "#626262",
          900: "#191919",
          "50_01": "#fff9f6",
          "600_02": "#6e6e6e",
          "400_01": "#c0c0c0",
          "50_02": "#f9fdff",
        },
        white: { A700: "#ffffff" },
        orange: { A700: "#fd650b" },
        blue_gray: { 100: "#d9d9d9", 600: "#406f85", "100_01": "#d6d6d6", "100_02": "#cfcfcf" },
        yellow: { 50: "#fff7f0" },
        deep_orange: { 50: "#fbeee6", 400: "#ff8b46" },
      },
      boxShadow: { xs: "0px 30px  30px 0px #91aebb33" },
      fontFamily: { manrope: "Manrope", markoone: "Marko One" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
