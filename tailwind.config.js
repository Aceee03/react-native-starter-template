/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/index.tsx", "./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        regular: ["SpaceGrotesk_400Regular"],
        medium: ["SpaceGrotesk_500Medium"],
        bold: ["SpaceGrotesk_700Bold"],
      },
      colors: {
        primary: "#030014",
        secondary: "#00000",
        accent: "#AB8BFF"
      }
    },
  },
  plugins: [],
}