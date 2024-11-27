'use client'

import { createTheme } from '@mantine/core'

export const theme = createTheme({
  black: '#1c1c1c',
  colors: {
    primary: [
      '#ffe9ec',
      '#ffd4d7',
      '#f5a7ad',
      '#ec7780',
      '#e54f5a',
      '#e23542',
      '#e12636',
      '#c81828',
      '#b31023',
      '#9d011c',
    ],
    gray: [
      '#f5f5f5',
      '#e7e7e7',
      '#cdcdcd',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#656565',
      '#575757',
    ],
  },
  primaryColor: 'primary',
  primaryShade: {
    dark: 8,
    light: 5,
  },
  fontFamily: 'var(--font)',
  components: {
    Button: {
      defaultProps: {
        radius: 'lg',
      },
    },
    ActionIcon: {
      defaultProps: {
        color: '#1c1c1c',
      },
    },
  },
})
