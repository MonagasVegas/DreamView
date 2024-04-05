/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sedgwick: ['Sedgwick Ave', 'cursive'],
      },
      colors: {
      'bg-dark': '#282828',
      'bg-light': '#2A303C',
      'primary': '#554F95',
      'secondary': '#91c870'
    },
  },
  plugins: [],
}
}