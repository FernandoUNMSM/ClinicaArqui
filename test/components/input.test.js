import Input, { InputSimple } from '../../src/components/form/input'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'

import { render } from '@testing-library/react'

test('render input simple', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <InputSimple
        title='test'
        error={true}
        uppercase={true}
      />
    </ThemeProvider>
  )
})
test('render input', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <Input
        title='test'
        register={{ registro: () => { }, params: {} }}
        errors={{}}
      />
    </ThemeProvider>
  )
})
test('render number input', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <InputSimple
        title='test'
        type='number'
      />
    </ThemeProvider>
  )
})
test('render number input disabled', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <InputSimple
        title='test'
        type='number'
        disabled={true}
      />
    </ThemeProvider>
  )
})
test('render number input disabled', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <Input
        title='test'
        type='number'
        register={{ registro: () => { }, params: {} }}
        errors={{}}
        length='3'
      />
    </ThemeProvider>
  )
})