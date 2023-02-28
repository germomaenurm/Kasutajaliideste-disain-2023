/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zonaBold: ['Zona Bold', 'sans-serif'],
        zonaLight: ['Zona Light', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
