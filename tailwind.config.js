/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mob': {'max': '760px'},
        'apple': {'max': '1500px'},
        'app':{"min": "1500px"},
      }
    },
  },
  plugins: [],
}

