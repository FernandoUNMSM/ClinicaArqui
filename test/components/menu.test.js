import MenuClinica from '../../src/components/menu'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'


test('render content', () => {
  const component = render(
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <MenuClinica />
      </ThemeProvider>
    </BrowserRouter>
  )
})

test('render content menu off', () => {
  const component = render(
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <MenuClinica status={false}/>
      </ThemeProvider>
    </BrowserRouter>
  )
})