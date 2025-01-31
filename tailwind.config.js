/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1536px", // Add the 2xl breakpoint
        "3xl": "1920px", // Add the 3xl breakpoint
      },

      colors: {
        green: "#569f42",
        darkGreen: "#029400",
        white: "#ffffff",
        black: "#000000",
        darkGray: "#282A28",
        lightGray: "#5A5C59",
        lightestGray: "#D9D9D9",
        darkBlue: "#041C41",
        navyBlue: "#061037",
        blue: "#041D3F",
        
      },

      fontFamily: {},

      backgroundImage: {
        "green-gradient": "linear-gradient(to right, #F0AA06 0%, #64A03C 100%)",
        "yellow-gradient":"linear-gradient(to right, #64A03C  10%, #F0AA06 100%)",
        "gray-gradient": "linear-gradient(to bottom left, #000000 0%, #2E2D29 100%)",
        "orange-gradient": "linear-gradient(to right, rgba(43, 179, 45, 0.1) 0%, rgba(255, 168, 40, 0.09) 100%)",
        "black-gradient": "linear-gradient(to right, #003600 0%, #000000 100%)",
        "greish-gradient": "linear-gradient(to bottom, #000000 50%, #1B200C 100%)",
        "white-gradient":  "linear-gradient(to right, #2BB32A 10%, #FFFFFF 100%)",

      },

      animation: {
        'border': 'border 4s linear infinite',
    },
    keyframes: {
        'border': {
            to: { '--border-angle': '360deg' },
        }
    }  
    },
  },
  plugins: [],
};
