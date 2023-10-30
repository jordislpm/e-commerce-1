/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amazonBlue: '#232F3E',   // Color principal de Amazon
        amazonOrange: '#FF9900', // Color de destaque de Amazon
        amazonGreen: '#00CD67',  // Color de estado "En stock"
        amazonRed: '#FF4546',    // Color de estado "Agotado"
      },
    },
  },
  plugins: [],
}

