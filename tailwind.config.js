require('dotenv').config();
const isProduction = process.env.PRODUCTION || false;

module.exports = {
  purge: {
    enabled: isProduction,
    content: ['./src/**/*.html', './src/**/*.ts', './src/**/*.scss'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#2196f2',
        secondary: '#fec007',
      },
    },
  },
  variants: {},
  plugins: [],
};
