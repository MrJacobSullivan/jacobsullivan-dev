const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./components/**.*.tsx', './pages/**.*.tsx', './styles/**.*.tsx'],
  darkMode: 'class',
  theme: {
    colors: require('tailwindcss-open-color'),
    extend: {
      fontFamily: {
        system: [...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.0')
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'markdown'
    })
  ]
};
