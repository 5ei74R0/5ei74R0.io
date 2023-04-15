/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  content: [
    "./node_modules/flowbite.{js,ts}",
  ],
  plugins: [
    require('flowbite/plugin'),
    require('nord4tailwind'),
  ],
}

