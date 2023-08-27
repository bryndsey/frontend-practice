/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/frontend-practice/oh-studio/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-neue-montreal)"],
      },
    },
  },
  plugins: [],
  important: "#oh-studio-root",
};
