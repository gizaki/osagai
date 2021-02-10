import React from 'react'
import { render } from '@testing-library/react'

import { Button } from '../src'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button type="button" />)
  })
})
