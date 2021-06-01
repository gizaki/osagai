import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from '../src'

describe('Button', () => {
  test('renders Button component', () => {
    render(<Button type="button">Button</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Button')
  })
})
