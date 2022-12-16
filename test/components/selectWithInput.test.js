import SelectWithInput from '../../src/components/form/selectWithInput'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ThemeProvider } from 'styled-components'
import { theme } from './../../src/styles/config/themes'

import { render } from '@testing-library/react'

test('render content', () => {
  const component = render(
    <ThemeProvider theme={theme.light}>
      <SelectWithInput
        values={[{name: 'aaaa'}]}
        actualValue={{name: 'aaaa'}}
        setSelectedValue={() => { }}
        title='test'
      />
    </ThemeProvider>
  )
})