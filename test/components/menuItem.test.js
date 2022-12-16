import MenuItem from '../../src/components/menu'
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
        <MenuItem title='test' icon={<></>}/>
      </ThemeProvider>
    </BrowserRouter>
  )
})
test('render content menu item', () => {
  const component = render(
    <BrowserRouter>
      <ThemeProvider theme={theme.light}>
        <MenuItem title='test' icon={<></>}>
          <h2>test</h2>
        </MenuItem>
      </ThemeProvider>
    </BrowserRouter>
  )
})