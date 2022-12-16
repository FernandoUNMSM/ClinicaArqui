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