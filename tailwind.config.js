module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000" },
        blue: { A400: "#2478f5" },
        gray: {
          50: "#f9f9f9",
          100: "#f3f3f3",
          200: "#e8e8e8",
          "200_7e": "#e8e8e87e",
        },
        light_green: { 700: "#5cad2f", A200: "#b8ff65" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat", rubik: "Rubik", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
