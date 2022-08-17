/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#1A1A1A',
          '200':'#FFEBA3',
        }
      },
      boxShadow: {
        '4xl': '0px 20px 40px rgba(139, 133, 110, 0.1)',
      },
      maxWidth: {
        '8xl': '1410px',
      },
      fontFamily:{
        'Vollkorn': ['Vollkorn','Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
