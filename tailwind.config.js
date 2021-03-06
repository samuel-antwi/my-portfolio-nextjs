module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      textColor: (theme) => theme('colors'),
      textColor: {
        primary: '#e31c6d',
        secondary: '#11ccc9',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: '#252a35',
        primary_1: '#e31c6d',
        secondary: '#11ccc9',
        nav: '#1b252f',
        portfolio: '#f5f5f5',
        contact: '#252A34',
        input: '#1e252c',
      }),
      borderColor: (theme) => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        primary: '#252a35',
        primary_1: '#e31c6d',
        secondary: '#11ccc9',
      }),
      screens: {
        xxs: '280px',
        xs: '360px',
        smd: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      maxHeight: {
        100: '30rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
