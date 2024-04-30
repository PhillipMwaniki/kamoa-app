/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlowCondensed: ['BarlowCondensed-Regular', 'sans-serif'],
        barlowCondensedBold: ['BarlowCondensed-Bold', 'sans-serif'],
        barlowCondensedSemiBold: ['BarlowCondensed-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
