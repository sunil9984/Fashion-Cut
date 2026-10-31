/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#111111",
        darkCard: "#1C1C1C",
        darkBorder: "#2A2A2A",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3E5AB",
          dark: "#AA820A",
          hover: "#E5C158"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Montserrat', 'serif'],
        display: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
