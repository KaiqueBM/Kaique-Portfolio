/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
],
theme: {
    extend: {
        height: {
            '530': '530px',
            '100': '26rem',
        },
        fontFamily: {
            'roboto': ['roboto mono'],
            'poppins': ['poppins'],
            'overpass': ['overpass']
        },
        padding: {
            '2.5': '0.60rem'
        }
    },
},
plugins: [],
}

