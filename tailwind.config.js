module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        "move-forever": {
          "0%": { transform: "translate3d(-90px, 0, 0)" },
          "100%": { transform: "translate3d(85px, 0, 0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-slide": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-slide": "fade-slide 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
