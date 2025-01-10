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
      },

      fontFamily: {

      },

      backgroundImage: {
        "yellow-gradient":"linear-gradient(to bottom, #FAAB02 0%, #539D43 100%)",

      },   
    },
  },
  plugins: [],
}