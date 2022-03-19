module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Fredoka', 'sans-serif']
    },
    extend: {
      colors:{
        "primary-1": "#BCCCAE",
        "primary-2": "#859666",
        "secondary-1": "#DFE0DD",
        "secondary-2": "#C4CAB3",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
