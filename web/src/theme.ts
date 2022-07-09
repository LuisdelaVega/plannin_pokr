import { extendTheme } from '@chakra-ui/react'

const SHARED_BRAND_COLORS = {
  primary: {
    900: '#9faf79',
  },
  info: {
    900: '#4c4b52',
  },
  success: {
    900: '#65af5c',
  },
  warning: {
    900: '#e29f24',
  },
  danger: {
    900: '#f44336',
  },
  main: {
    900: '#9faf79',
  },
}

// Call `extendTheme` and pass your custom values
export const light = extendTheme({
  spacing: {
    8: '1rem',
  },
  colors: {
    ...SHARED_BRAND_COLORS,
    shades: {
      900: '#F4F7F4',
    },
    accent: {
      900: '#7E807D',
    },
  },
})

export const dark = extendTheme({
  spacing: {
    8: '1rem',
  },
  colors: {
    ...SHARED_BRAND_COLORS,
    accent: {
      900: '#717A7A',
    },
    shades: {
      900: '#4C4B52',
    },
  },
})
