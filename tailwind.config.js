/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme1: {
          green: "#005430",
          light: "#ef5350",
          main: "#f44336", // Cette valeur est souvent utilisée comme "couleur principale"
          dark: "#7f1d1d",
        },
      },
    },
    plugins: [],
  },
};


