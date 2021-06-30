module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('assests/Snow-Animation-Background.svg')",
        dandelion: "url('assests/Live-Wave-Background.svg') ",
        // "footer-texture": "url('/img/footer-texture.png')",
      }),
    },
  },
  variants: {
    extend: {
      borderWidth: ["first"],
    },
  },
  plugins: [],
};
