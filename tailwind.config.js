/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "light-mode": '#F2F2F2',
        "secundary": '#244162',
      }
    },
  },
  plugins: [],
}

