module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark gray
        secondary: '#3B82F6', // Blue
        accent: '#FBBF24', // Yellow
        background: '#F9FAFB', // Light gray
      },
      spacing: {
        '128': '32rem', // Custom spacing
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Custom border radius
      },
    },
  },
  plugins: [],
}