/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-white': '#F8F8F8',
      },
      fontFamily: {
        caprasimo: ['Caprasimo', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
