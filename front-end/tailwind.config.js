/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-100": "#FFFFFF",
        "light-300": "#F1F5F9",
        "light-500": "#64748B",
        "primary-100": "#1E293B",
        "primary-300": "#0F172A",
        "secondary-100": "#6366F1",
        "secondary-300": "#5152c4"
      }
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
