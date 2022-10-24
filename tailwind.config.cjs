/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize:{
        xs:14,
        sm:16,
        md:18,
        lg:20,
        xl:24,
        '2xl':32,
    },

    colors:{
        transparent:'transparent',
        black:'#0a0908',
        white:'#FFF',
        red:'#9d0208',

        gray:{
        900:'#121214',
        800:'#202024',
        400:'#7C7C8A',
        200:'#C4C4CC',

        },

    },

    extend: {
      fontFamily:{
        sans:'Inter, sans-serit'
      },

    },
  },
  plugins: [],
}
