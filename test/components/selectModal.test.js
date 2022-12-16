import SelectModal from '../../src/components/modal/selectModal'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'

import { render } from '@testing-library/react'

test('render content', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <SelectModal
        buttonElement={<></>}
        width='100px'
        closeOnSelect={true}
        buttonWidth='auto'
        toUp={false}
        disabled={false}>
        <h1>test</h1>
      </SelectModal>
    </ThemeProvider>
  )
})