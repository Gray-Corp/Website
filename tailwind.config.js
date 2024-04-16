/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mob': {'max': '760px'},
      }
    },
  },
  plugins: [],
}

