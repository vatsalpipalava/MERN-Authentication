/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}

// // single component styles
// "./node_modules/@nextui-org/theme/dist/components/button.js", 
// // or you can use a glob pattern (multiple component styles)
// './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'

// "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",