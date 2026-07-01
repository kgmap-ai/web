/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#5E0B15',
        'primary-light': '#7a121d',
      },
    },
  },
  plugins: [],
}