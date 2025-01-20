/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       green: "569f42",
       white: "#ffffff",
       black: "#000000",
       darkGray: "#282A28",
       lightGray: "#5A5C59",
       darkBlue: "#041C41",
       navyBlue: "#061037",
       blue: "#041D3F",
      },

      fontFamily: {

      },

      backgroundImage: {
        "green-gradient": "linear-gradient(to right, #F0AA06 0%, #64A03C 100%)",
      "gray-gradient": "linear-gradient(to bottom left, #000000 0%, #2E2D29 100%)"

      },   
    },
  },
  plugins: [],
}