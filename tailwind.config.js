/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        secondary: "#3B82F6",
        accent: "#F59E0B",
        background: "#F9FAFB",
        text: "#111827",
        prim: "orange-400",
      },
    },
  },
  plugins: [],
};
