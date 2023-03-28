/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        DEFAULT: '250ms',
      },
      colors: {
        primary: '#23386F',
        secondary: {
          light: '#757575',
          medium: '#101010',
          DEFAULT: '#2F2F2F',
          projectTitle: '#2C2A29',
          projectDes: '#807C79'
        },
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      screens: {
        xl: '1366px',
        '2xl': '1366px',
      },
    },
  },
  variants: {
    extend: {
      // fontWeight: ['hover'],
      width: ['responsive'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}