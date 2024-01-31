/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'lg': '1700px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    // function({ addUtilities }) {
    //   const newUtilities = {
    //     '.border-gradient': {
    //       'border-image': 'linear-gradient(to bottom, #5C93A7, #E15253)',
    //       'border-image-slice': 1
    //     },
    //   }
    //   addUtilities(newUtilities)
    // }
  ],
}

