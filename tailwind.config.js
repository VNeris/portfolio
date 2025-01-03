/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    container: {
      center: true,
      justifyContent: "center"
    },
    extend: {
      dropShadow: {
        'brilho': '0 0 7px #a46adf',
        'brilho-escuro': '0 0 10px #552c77', 
        },
      colors: {
        primary: {
          100:'#a46adf',
          200:'rgba(255, 255, 255, 0.87) #242424'
        },
        'amethyst': {
          '50': '#faf6fe',
          '100': '#f3ebfc',
          '200': '#e9dbf9',
          '300': '#d7bff3',
          '400': '#bf95eb',
          '500': '#a46adf',
          '600': '#904ecf',
          '700': '#7a3bb5',
          '800': '#673594',
          '900': '#552c77',
          '950': '#381457',
        },
        'shark': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#242424',
        },
      }
    },
  },
  plugins: [

  ]
}
