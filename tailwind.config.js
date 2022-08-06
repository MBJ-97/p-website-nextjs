module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      accent: "#32a6e4",
      blue: "#74ccef",
      purple: "#c957d3",
      white: "#ffffff",
      black: "#000000",
      red: "#ff0000",
      gray: "#121212",
    },
    extend: {
      keyframes: {
        bouncy: {
          "0%, 100%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
        },
        firstLoadImage: {
          "0%": { opacity: 0, transform: "translateY(-30px)" },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        firstLoadText: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
      },
      animation: {
        bouncy: "bouncy 3s ease-in-out infinite",
        imageLoad: "firstLoadImage 1.5s ease-in",
        textLoad: "firstLoadText 1.8s ease-in",
      },
    },
  },
  plugins: [],
};
