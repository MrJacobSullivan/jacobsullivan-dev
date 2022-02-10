const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    colors: require('tailwindcss-open-color'),
    extend: {
      fontFamily: {
        system: [...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
