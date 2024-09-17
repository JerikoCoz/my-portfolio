// tailwind.config.js
module.exports = {
  content: [
    "./docs/**/*.{html,js}", // Make sure this path matches where your files are
  ],
  theme: {
    extend: {
      colors: {
        lightblue: '#ADD8E6' // Example custom color
      },
      
    },
  },
  plugins: [],
}