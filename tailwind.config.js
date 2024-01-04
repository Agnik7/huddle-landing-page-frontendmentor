/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': '640px',
      'md': '768px',
      'xmd': '860px',
      'lg': '1024px',
      'mxs': '550px',
      'xs': '500px',
      'xms': '430px',
      'xxs': '400px',
      'xxs': '350px',
      'xxxs':'330px',
      'xxms': '465px',
      'xlg': '1240px',
      'xxlg': '1440px',
      'xxxlg': '1500px',
      'xxxmlg':'1600px',
      'xxxxlg': '2000px'
    },
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

