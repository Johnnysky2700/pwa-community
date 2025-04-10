/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5A0FC8',
        "secondary-100": "#E2E2D5",
        "secondary-200": "#888883",
      },
    },
  },
  plugins: [],
}
