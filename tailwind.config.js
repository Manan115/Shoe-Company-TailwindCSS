/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'media560': "560px",
        'media440': "440px",
        'media1200': "1200px"
      },
      backgroundImage :{
        'testimonial-section': "url('../images/testimonial-bg.png')",
      }
    },
  },
  plugins: [],
}

