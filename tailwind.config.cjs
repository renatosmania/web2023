/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "1fr max-content 1fr",
        18: "0.6fr",
        20: "1.6fr",
      },
    },
  },
  plugins: [],
};
