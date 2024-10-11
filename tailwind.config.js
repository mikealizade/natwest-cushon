/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem"],
      sm: ["0.875rem"],
      base: ["1rem"],
      lg: ["1.125rem"],
      xl: ["1.75rem"],
      xl2: ["2.25rem", { lineHeight: "3.75rem" }],
    },
    extend: {
      colors: {
        primary: "#de1f85", // pink
        secondary: "#f5f0f3", // mauve
        base: "2b2b2b", // text
        white: "#ffffff",
        subHeader: "#971a69",
      },
    },
  },
  plugins: [],
};
