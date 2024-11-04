module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: 'var(--custom-blue)', // Use the CSS variable here
      },
      keyframes: {
        slowRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slowRotate: 'slowRotate 3s linear infinite',
      },
    },
  },
  plugins: [],
};