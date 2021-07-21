/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  purge: ['./public/index.html', 'src/**/*.{vue, js, ts, jsx, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'daytime-mobile':
          "url('/images/img/mobile/bg-image-daytime.jpg')",
        'nighttime-mobile':
          "url('/images/img/mobile/bg-image-nighttime.jpg')",
        'daytime-tablet':
          "url('/images/img/tablet/bg-image-daytime.jpg')",
        'nighttime-tablet':
          "url('/images/img/tablet/bg-image-nighttime.jpg')",
        'daytime-desktop':
          "url('/images/img/desktop/bg-image-daytime.jpg')",
        'nighttime-desktop':
          "url('/images/img/desktop/bg-image-nighttime.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
