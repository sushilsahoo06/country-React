/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // <--- Make sure this line (or your main HTML file) is here
    "./src/**/*.{js,ts,jsx,tsx}", // If you have JavaScript/React/Vue files
    // Add any other paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}