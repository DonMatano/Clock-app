/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  mode: 'jit',
  purge: ['./public/index.html', 'src/**/*.{vue, js, ts, jsx, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '10xl': '11rem',
        '11xl': '12.5rem'
      },
      colors: {
        'secondary-black': 'hsl(0, 0%, 19%)',
        'light-white': 'rgba(255, 255, 255, 0.99)',
        'light-gray': 'rgba(216, 216, 216, 1)',
        'primary-gray': 'rgba(151, 151, 151, 1)',
        'dark': 'rgba(0, 0, 0, 0.75)',
      },
      backgroundImage: theme => ({
        'daytime-mobile':
          "url('https://res.cloudinary.com/dkn2tddji/image/upload/v1626880152/bg-image-mobile-daytime_is0mof.jpg')",
        'nighttime-mobile':
          "url('https://res.cloudinary.com/dkn2tddji/image/upload/v1626880152/bg-image-mobile-nighttime_egxcgp.jpg')",
        'daytime-tablet':
          "url('https://res.cloudinary.com/dkn2tddji/image/upload/v1626880193/bg-image-tablet-daytime_wbat4u.jpg')",
        'nighttime-tablet':
          "url('https://res.cloudinary.com/dkn2tddji/image/upload/v1626880193/bg-image-tablet-nighttime_mzytda.jpg')",
        'daytime-desktop':
          "url('https://res.cloudinary.com/dkn2tddji/image/upload/v1626880098/bg-image-desktop-daytime_h3q9o7.jpg')",
        'nighttime-desktop':
          "url('https://res.cloudinary.com/dkn2tddji/image/upload/v1626880098/bg-image-desktop-nighttime_oq3ltp.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
