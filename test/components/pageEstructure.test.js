import PageEstructure from '../../src/components/pageEstructure'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'

import { render } from '@testing-library/react'


test('render content', () => {
  const component = render(
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <PageEstructure />
      </ThemeProvider>
    </BrowserRouter>
  )
})