/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray900: '#999999',
        gray700: '#777777',
        gray500: '#DDDDDD',
        gray300: '#CCCCCC',
        blueLight: '#7695EC',
        greenLight: '#47B960',
        redLight: '#FF5151'
      }
    },
  },
  plugins: [],
}

