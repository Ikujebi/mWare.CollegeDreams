module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'var(--custom-blue)', // Use the CSS variable here
      }
    },
  },
  plugins: [],
};