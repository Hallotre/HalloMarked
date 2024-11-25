/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        myred: {
          100: "#ffdacc",
          200: "#ffb599",
          300: "#ff8f66",
          400: "#ff6a33",
          500: "#ff4500",
          600: "#cc3700",
          700: "#992900",
          800: "#661c00",
          900: "#330e00"
        },
        myblue: {
          100: "#ccddf6",
          200: "#99bbed",
          300: "#669ae4",
          400: "#3378db",
          500: "#0056d2",
          600: "#0045a8",
          700: "#00347e",
          800: "#002254",
          900: "#00112a"
        },
        myyellow: {
          100: "#fff3cd",
          200: "#ffe69c",
          300: "#ffda6a",
          400: "#ffcd39",
          500: "#ffc107",
          600: "#cc9a06",
          700: "#997404",
          800: "#664d03",
          900: "#332701"
        },
        
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}