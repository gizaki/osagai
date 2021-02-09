import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from '../src/button'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button isFullWidth />)

    screen.debug()
  })
})
