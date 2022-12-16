import Profile from '../../src/components/profile'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'

import { render } from '@testing-library/react'

test('render content', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <Profile />
    </ThemeProvider>
  )
})