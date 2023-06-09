/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#CCD6DE',
          200: '#000A12',
          300: '#AABBC8',
          400: '#00111E',
          500: '#8099AD',
          600: '#001A2E',
          700: '#557892',
          800: '#00233D',
          900: '#2B5676',
          1000: '#002B4C',
          1100: '#00345B',
          1200: '#00345B',
        },
        magenta: {
          100: '#E1CCD7',
          200: '#15000B',
          300: '#CDAABC',
          400: '#230012',
          500: '#B4809A',
          600: '#35011B',
          700: '#9B5679',
          800: '#460124',
          900: '#822B58',
          1000: '#58012D',
          1100: '#690136',
          1200: '#690136',
        },
        peach: {
          100: '#FBEFED',
          200: '#2F2321',
          300: '#F8E4E0',
          400: '#4E3A36',
          500: '#F4D7D1',
          600: '#755852',
          700: '#F0CAC2',
          800: '#9B756D',
          900: '#EDBCB2',
          1000: '#C29288',
          1100: '#E9AFA3',
          1200: '#E9AFA3',
        },
        deepBlue: {
          100: '#CCE1EE',
          200: '#001522',
          300: '#ABCDE3',
          400: '#012339',
          500: '#80B4D5',
          600: '#013556',
          700: '#569BC7',
          800: '#014672',
          900: '#2C82B9',
          1000: '#02588E',
          1100: '#0269AB',
          1200: '#0269AB',
        },
        skyBlue: {
          100: '#EEF9FE',
          200: '#222D32',
          300: '#E2F5FE',
          400: '#384B54',
          500: '#D3F0FD',
          600: '#54717E',
          700: '#C5EBFD',
          800: '#7096A8',
          900: '#B6E6FC',
          1000: '#8CBBD2',
          1100: '#A8E1FC',
          1200: '#A8E1FC',
        },
        grey: {
          100: '#D6D6D6',
          200: '#0A0A0A',
          300: '#BABABA',
          400: '#101010',
          500: '#979797',
          600: '#181818',
          700: '#757575',
          800: '#202020',
          900: '#535353',
          1000: '#282828',
          1100: '#303030',
          1200: '#303030',
        },
      },
    },
  },
  plugins: [],
};
