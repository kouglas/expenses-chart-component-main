/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM Sans': ['DM Sans', 'sans-serif'],
      }
    },
    screens: {
      'mobile': '375px',
      'desktop': '1440px',
    }
  },
  plugins: [],
}

