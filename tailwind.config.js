/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0b0b0f",
        brand: "#8b5cf6",
        teal: "#06b6d4",
        amber: "#f59e0b"
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,.35)",
        card: "0 10px 30px rgba(0,0,0,.35)",
      },
      backgroundImage: {
        'radials': "radial-gradient(800px 400px at 0% 0%, rgba(139,92,246,.2), transparent 40%), radial-gradient(800px 400px at 100% 0%, rgba(6,182,212,.2), transparent 40%), radial-gradient(800px 400px at 50% 100%, rgba(245,158,11,.12), transparent 40%)",
        'grid': "linear-gradient(transparent 23px, rgba(255,255,255,.06) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,.06) 24px)"
      }
    },
  },
  plugins: [],
}
