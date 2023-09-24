/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#006633",
        background: "#F6F5EF",
        home__background: "#ffffff",
      },
      dropShadow: {
        "2xl": "2px 2px 3px rgba(255,255,255,0.2)",
      },
      backgroundImage: {
        banner: `url('../public/images/banner.png')`,
      },
    },
  },
  plugins: [],
};
