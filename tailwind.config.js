
module.exports = {
  content: [
    "./docs/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#ADD8E6'
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        istok: ['Istok Web', 'sans-serif'],
      },

      
    },
    screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '1024px',
    },
  },
  plugins: [],
}