/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js, ts, tsx, jsx}'],
  theme: {
    extend: {
      colors: {
        red: 'rgba(182, 36, 39, 1)',
        black: 'rgba(43, 43, 43, 1)',
        yellow: 'yellow',
      },
    },
  },
  plugins: [],
};
