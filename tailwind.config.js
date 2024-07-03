/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          500: '#2f5eff',
          700: '#0033ff',
        },
        'secondary': {
          500:'#6f6e6b',
          700:'#51514d',
        },
        'danger': {
          500: '#f83b3b',
          700: '#c11414',
        },
        'info': {
          500:'#a0786f',
          700:'#7b5653',
        },
      },
    },
    plugins: [],
  }
}
