module.exports = {
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    typography: theme => ({
      default: {
        css: {
          // color: theme('colors.cobalt'),
          color: false,
          '@apply text-cobalt dark:text-gray-300': '',
          'h1, h2, h3, h4': {
            // color: theme('colors.cobalt'),
            color: false,
            '@apply text-cobalt dark:text-gray-300': '',
          },
          h1: {
            fontWeight: 'bold',
            fontSize: theme('text.3xl'),
            textAlign: 'center',
          },
          h2: {
            marginTop: '1.5rem',
            marginBottom: '.75rem',
          },
          'h2 a': {
            color: theme('colors.cobalt'),
            textDecoration: 'none',
          },
          a: {
            color: theme('colors.cb-dusty-blue'),
            textDecoration: 'none',
            fontSize: '3rem',
          },
          'ul > li:before': {
            backgroundColor: 'transparent',
            display: 'none',
          },
          ul: {
            listStyle: 'none',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          },
          'ul > li': {
            paddingLeft: 0,
            margin: 0,
            textAlign: 'center',
          },
        },
      },
      xl: {
        css: {
          h1: {
            marginTop: 0,
            fontWeight: 'bold',
            fontSize: theme('text.3xl'),
          },
          h2: {
            marginTop: '2rem',
            marginBottom: '1rem',
          },
          'ul > li': {
            paddingLeft: 0,
          },
          a: {
            fontSize: '4rem',
          },
        },
      },
      sm: {
        css: {
          h1: {
            fontSize: theme('text.4xl'),
          },
        },
      },
    }),
    extend: {
      colors: {
        cobalt: '#193549',
        'cb-blue': '#193549',
        'cb-yellow': '#ffc600',
        'cb-orange': '#ff9d00',
        'cb-mint': '#2affdf',
        'cb-off-blue': '#0d3a58',
        'cb-dusty-blue': '#35434d',
        'cb-dark-blue': '#15232d',
        'cb-pink': '#fb94ff',
        'cb-light-blue': '#9effff',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'dark'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark'],
    borderColor: ['responsive', 'hover', 'dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
