/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        dada: {
          "0%": { opacity: "0", },
          "2%": { opacity: "0", transform: "translateY(-30px)"},
          "5%": { opacity: "1", transform: "translateY(0px)" },
          "17%": { opacity: "1", transform: "translateY(0px)" },
          "20%": { opacity: "0", transform: "translateY(30px)" },
        }
      },
      animation: {
        dada: "dada 10s linear infinite 0s",
      }
    },
  },
  plugins: [],
}
