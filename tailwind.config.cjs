module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1440px",
      xl: "1920px",
      "2xl": "2560px",
    },
    extend: {
      colors: {
        "primary-color": "#FF3E00",
        "t-color": "#353535",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  plugins: [],
};
