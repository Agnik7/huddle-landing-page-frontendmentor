/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-pink": "hsl(322, 100%, 66%)",
        "primary-light-pink": "hsl(321, 100%, 78%)",
        "primary-light-red": "hsl(0, 100%, 63%)",
        "neutral-dark-cyan": "hsl(192, 100%, 9%)",
        "neutral-pale-blue": "hsl(207, 100%, 98%)"
      },
      fontFamily:{
        "header": ["Poppins", "sans-serif"],
        "body": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

