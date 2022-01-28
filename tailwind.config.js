module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
