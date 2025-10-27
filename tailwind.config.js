/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#52B0D8",
        ink: "#0F172A",
        soft: "#F5F6FA",
        subtle: "#64748B",
        success: "#16A34A",
        warning: "#F59E0B",
        danger: "#DC2626"
      },
      boxShadow: {
        card: "0 8px 20px rgba(2, 12, 27, 0.06)"
      }
    }
  },
  plugins: []
};
