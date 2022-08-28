module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    colors: {
      'light-blue': '#3ac4e5',
      'oranye': '#ff6854',
      'dark-blue': '#343e61',
      'gray': '#70768f',
    },
    extend:{
      backgroundImage: {
        'hero-tiga': "url('/images/hero_main_3.jpg')",
      }
    }
  },
  variants: {
      extend: {},
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
