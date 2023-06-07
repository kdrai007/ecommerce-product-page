/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      // Primary
      Orange: ' hsl(26, 100%, 55%)',
      PaleOrange: ' hsl(25, 100%, 94%)',
      White: '#fff',
      lightCyan: 'hsl(193, 38%, 86%)',
      neonGreen: 'hsl(150, 100%, 66%)',
      Black: 'black',

      // Neutral
      grayishBlue: 'hsl(217, 19%, 38%)',
      pGray: '#808080',
      darkGrayishBlue: 'hsl(217, 19%, 24%)',
      darkBlue: 'hsl(218, 23%, 16%)',
    },
    fontSize: {
      xs: '0.75rem', // Extra Small
      sm: '0.875rem', // Small
      base: '1rem', // Base
      lg: '1.125rem', // Large
      xl: '1.25rem', // Extra Large
      '2xl': '1.5rem', // 2 Extra Large
      '3xl': '1.99rem', // 3 Extra Large
      '4xl': '2.25rem', // 4 Extra Large
      '5xl': '3rem', // 5 Extra Large
      '6xl': '4rem', // 6 Extra Large
    },
    extend: {},
    screens: {
      sm: '640px', // Small screens
      md: '768px', // Medium screens
      lg: '1024px', // Large screens
      xl: '1290px', // Extra-large screens
      '2xl': '1536px', // 2X extra-large screens
      // Add your custom breakpoints here
    },
  },
  plugins: [],
};
