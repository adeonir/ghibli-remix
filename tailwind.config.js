module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          750: '#293548',
        },
        teal: {
          550: '#11a798',
        },
      },
    },
  },
  plugins: [],
}
