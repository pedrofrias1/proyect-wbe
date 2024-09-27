/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'Iphone 14pro': '430px',
        // => @media (min-width: 430px) { ... }
  
        'Iphone 12 ': '390px',
        // => @media (min-width: 390px) { ... }

      },
    },
  },
  plugins: [],
}

