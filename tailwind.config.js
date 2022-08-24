/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      primary: "Akaya Telivigala, cursive",
      secondary: "Sora, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        body: "#151B4E",
        white: "#fff",
        pink: "pink",
        transparent: "transparent",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        Secondmove: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
