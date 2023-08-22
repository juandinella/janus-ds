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
    yellow: {
      50: '#FFFBEB',
      100: '#FDF2C8',
      200: '#FBDD74',
      300: '#FACE4F',
      400: '#F9B926',
      500: '#F2980E',
      600: '#D77208',
      700: '#B24F0B',
      800: '#903D10',
      900: '#773310',
      950: '#441904',
    },
    red: {
      50: '#FDF3F3',
      100: '#FCE4E4',
      200: '#FACECE',
      300: '#F6ABAB',
      400: '#EE7B7B',
      500: '#E45858',
      600: '#CF3333',
      700: '#AE2727',
      800: '#902424',
      900: '#782424',
      950: '#410E0E',
    },
    green: {
      50: '#EEFBF4',
      100: '#D7F4E3',
      200: '#B1E9CA',
      300: '#7FD6AD',
      400: '#4ABD8A',
      500: '#2CB67D',
      600: '#198258',
      700: '#146849',
      800: '#12533C',
      900: '#104432',
      950: '#08261D',
    },
    purple: {
      50: '#F4F1FF',
      100: '#EDE5FF',
      200: '#DBCEFF',
      300: '#C1A7FF',
      400: '#A576FF',
      500: '#8C3FFF',
      600: '#8118FF',
      700: '#7506FB',
      800: '#6205D2',
      900: '#4F06A7',
      950: '#300075',
    },
  },

  boxShadow: {
    none: 'none',
    sm: '0px 4px 50px rgba(55, 55, 68, 0.05)',
    md: '0px 4px 8px  rgba(55, 55, 68, 0.05)',
    lg: '0px 8px 30px rgba(55, 55, 68, 0.1)',
    xl: '0px 0px 6px rgba(0, 0, 0, 0.25)',
  },

  borderRadius: {
    none: '0',
    xs: '8px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '20px',
    xxl: '26px',
  },

  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },

  spacing: {
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
    sm: '0.8125em',
    md: '0.9375em',
    lg: '1.125em',
    xl: '1.5em',
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },

  transition: {
    225: '225ms ease',
  },
}

const decisions = {
  textColor: {
    primary: choices.color.purple[500],
  },
}

module.exports = { choices, decisions }
