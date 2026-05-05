/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fafc",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#1e293b",
          900: "#0f172a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        accent: {
          50: "#f8fafc",
          100: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#0f172a",
          900: "#020617",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
        display: ["Sora", "Space Grotesk", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        "gradient-light":
          "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)",
        "mesh-night":
          "radial-gradient(circle at 20% 20%, rgba(14,165,233,.28), transparent 38%), radial-gradient(circle at 80% 10%, rgba(34,197,94,.20), transparent 34%), radial-gradient(circle at 50% 85%, rgba(59,130,246,.24), transparent 45%)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("light", ".light &");
    },
  ],
};
