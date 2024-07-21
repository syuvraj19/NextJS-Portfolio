/** @type {import('tailwindcss').Config} */
const { color } = require("framer-motion");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {

       Conv : {
        ".sliding-text-container": { "@apply flex overflow-hidden": true },
        ".sliding-text": {
          "@apply inline-block opacity-0 transition-opacity duration-[0.5s] ease-[ease-in-out]": true
        },
        ".sliding-text.active": { "@apply opacity-100": true }
      },


      boxShadow:{
        neon:"0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')"
      },
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
        apple:["SF Pro"],
        pac: ["Pacifico, cursive"]

      },
      colors: {
        dark: "#1b1b1b",
        light: "#C8e6ff",
        primary: "#ef233c", 
        primaryDark: "#58E6D9", 
        dc1:"#9d60ec",
        dc2:"1b1b1b"
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",


      },

      
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
};
