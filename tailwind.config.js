/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: '#ff6700',
      gray: "#444",
      gray_ddd:"#ddd",
      white:"#ffff",
      red_b10000: "#b10000",
      black:"#000"
    },
  },
  plugins: [],
}
