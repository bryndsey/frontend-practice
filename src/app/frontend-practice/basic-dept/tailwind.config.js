/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/frontend-practice/basic-dept/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "rgb(var(--color-background) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
