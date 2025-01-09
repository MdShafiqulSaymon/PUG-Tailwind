module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        divider: 'var(--divider)',
      },
      zIndex: {
        '201': '201',
        '202': '202',
      }
    }
  },
  plugins: [],
}