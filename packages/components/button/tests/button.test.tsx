import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { Plus } from 'react-feather'
import { Button } from '../src'

test('renders children(text) correctly', () => {
  render(<Button type="button">Button</Button>)
  expect(screen.getByRole('button')).toHaveTextContent('Button')
})

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick} />)
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('not calls onClick prop when clicked if is disabled', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick} isDisabled />)
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(0)
})

test('renders an icon correctly', () => {
  render(<Button icon={<Plus data-testid="svg" />} />)

  const button = screen.getByRole('button')
  const svg = screen.getByTestId('svg')

  expect(button).toContainElement(svg)
})
