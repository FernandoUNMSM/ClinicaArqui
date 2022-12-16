import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'

import { ButtonSolid } from './../../src/styles/globals/globalButtons'

test('render button size large', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <ButtonSolid size='large' />
    </ThemeProvider>
  )
})
test('render button size medium', () => {
  // comentario
  const component = render(
    <ThemeProvider theme={theme.light}>
      <ButtonSolid size='medium' />
    </ThemeProvider>
  )
})
test('render button size small', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <ButtonSolid size='small' />
    </ThemeProvider>
  )
})
test('render button size action', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <ButtonSolid size='action' />
    </ThemeProvider>
  )
})
test('render button active', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <ButtonSolid active={true}/>
    </ThemeProvider>
  )
})