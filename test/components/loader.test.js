import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import Loader from '../../src/components/loader/spinLoader'

test('render content', () => {
  const component = render(<Loader />)
})