/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_bg: "#7a919d", // ← custom color name and hex
      },
    },
  },
  plugins: [],
};
