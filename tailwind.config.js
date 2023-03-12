/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFEIE0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg,#FF616A,0%,#FFC837,1005)",
        "mobile-home": "url('./assets/HomepageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "Sans-Serif"],
        montserrat: ["Montserrat", "Sans-Serif"],
      },
      content: {
        evolvetext: "url('./assets/Evolvetext.png')",
        abstractWaves: "url('./assets/abstractWaves.png')",
        sparkles: "url('./assets/sparkles.png')",
        circles: "url('./assets/circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
