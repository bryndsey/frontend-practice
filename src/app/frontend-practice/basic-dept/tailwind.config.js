/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/frontend-practice/basic-dept/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        backdrop: "rgb(var(--color-backdrop) / <alpha-value>)",
        content: "rgb(var(--color-content) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  important: "#basic-dept-root",
};
