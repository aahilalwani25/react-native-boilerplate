/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'media',
  theme: {
  
    extend: {
      colors:{
        light:{
          white:'#ffffff',
          black:'#000000',
        },
        dark:{
          primary:'#000000'
        }
      }
    },
  },
  plugins: [],
}

