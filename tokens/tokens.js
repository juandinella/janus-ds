const choices = {
  color: {
    neutral: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0A0A0A',
    },
  },

  boxShadow: {
    none: 'none',
    main: '0px 5px 40px rgba(0, 0, 0, 0.15);',
  },

  borderRadius: {
    none: '0',
    sm: '6px',
    md: '10px',
    lg: '12px',
    round: '100%',
  },

  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },

  spacing: {
    0: '0',
    xxxs: '0.25rem',
    xxs: '0.5rem',
    xs: '0.75rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '3.5rem',
    xxxl: '4rem',
  },

  fontSize: {
    xs: '0.75em',
    sm: '0.875em',
    md: '1em',
    lg: '1.125em',
    xl: '1.25em',
  },

  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semi: 600,
    bold: 700,
  },

  transition: {
    225: '225ms ease',
  },
}

const decisions = {
  textColor: {},
  bg: {},
}

module.exports = { choices, decisions }
