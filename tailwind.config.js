module.exports = {
  content: ['**.*.js', '**.*.jsx', '**.*.ts', '**.*.tsx'],
  theme: {
    colors: require('tailwindcss-open-color')
  },
  plugins: [require('@tailwindcss/typography')]
};
