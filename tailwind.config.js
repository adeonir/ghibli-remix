module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          750: '#293548',
        },
        pink: {
          550: '#e43889',
        },
      },
    },
  },
  plugins: [],
}
