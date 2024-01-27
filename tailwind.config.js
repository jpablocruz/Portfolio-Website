/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
 theme: {
  extend: {},
  colors: {
   darkBlue: "#0e172a",
   blue: "#00a4ef",
   celeste: "#1da1f1",
   celesteLight: "#7dd8ec",
   sky: "#cef0f8",
   red: "#f14f21",
   green: "#7fb901",
   yellow: "#feb800",
   gray: "#1c1c1c",
   grayLight: "#8c8c8c",
   white: "#FFFFFF",
  },
  fontSize: {
   small: "0.8rem",
   semibase: "0.92rem",
   base: "1.1rem",
   lg: "1.5rem",
   xl: "2.7rem",
   iconSize: "2rem",
  },
 },
 plugins: [],
};
