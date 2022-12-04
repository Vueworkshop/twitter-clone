/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontSize: {
        base: "18px"
      },
      colors: {
        'primary': '#1DA1F2',
      }
    },
  },
  plugins: [],
}
