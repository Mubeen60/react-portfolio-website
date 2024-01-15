/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       height:{
        height500: "500px",
        height648: "648px",
        height750: "750px",
       },
    colors:{
        primaryBackground: "#101010",
        secondaryBackground:"#191910",
        icons:" #f9004d",
        textColor: "#fff",
        textSecondary: "rgba(198, 201,216,75)",
        hoverBg:"f9004d",
        blackbg:"#000000",
        bgRed:"#f9004d",

       }
    },
  },
  plugins: [],
}

