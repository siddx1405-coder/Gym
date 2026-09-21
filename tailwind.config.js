/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brandRed: '#E61C24',
        brandDark: '#0D0D0D',
        brandGold: '#D4AF37',
      }
    },
  },
  plugins: [],
}