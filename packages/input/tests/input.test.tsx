import React, { useState } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Input } from '../src'

function BaseInput({ ...props }) {
  const [value, setValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <Input
      type="text"
      label="text"
      {...props}
      value={value}
      onChange={handleChange}
    />
  )
}

describe('Value', () => {
  test('sets the value correctly', () => {
    const view = render(<BaseInput />)
    const input = view.getByRole('textbox') as HTMLInputElement

    userEvent.type(input, 'osagai@iscool.com')
    expect(input).toHaveValue('osagai@iscool.com')
  })
})

describe('Disabled', () => {
  let input: HTMLInputElement

  beforeEach(() => {
    const view = render(<BaseInput isDisabled />)
    input = view.getByRole('textbox') as HTMLInputElement
  })

  test('sets the property on the input', () => {
    expect(input).toBeDisabled()
  })

  test('prevents the user from typing', () => {
    userEvent.type(input, 'osagai@iscool.com')
    expect(input).toHaveValue('')
  })
})

describe('Type number', () => {
  test('expect to see the spinner buttons', () => {
    const view = render(<BaseInput type="number" />)
    const buttons = view.getAllByRole('button', {
      hidden: true,
    })
    const stepUpButton = buttons[0]
    const stepDownButton = buttons[1]

    expect(stepUpButton).toBeInTheDocument()
    expect(stepDownButton).toBeInTheDocument()
  })

  test('expect to not see the spinner buttons when the input is disabled', () => {
    const view = render(<BaseInput type="number" isDisabled />)
    const buttons = view.queryByRole('button', {
      hidden: true,
    })

    expect(buttons).not.toBeInTheDocument()
  })

  test('expect the value of the input to change when spinners are pressed', () => {
    const view = render(<BaseInput type="number" />)
    const buttons = view.getAllByRole('button', {
      hidden: true,
    })
    const input = view.getByRole('spinbutton') as HTMLInputElement
    const stepUpButton = buttons[0]
    const stepDownButton = buttons[1]

    userEvent.click(stepUpButton)
    expect(input).toHaveValue(1)

    userEvent.click(stepDownButton)
    expect(input).toHaveValue(0)
  })
})

describe('Multiline(Textarea)', () => {
  test('expect to see the textarea HTML tag', () => {
    const { container } = render(<BaseInput multiline />)
    const textarea = container.querySelector('textarea')

    expect(textarea).toBeInTheDocument()
  })

  test('expect to have the correct initial rows', () => {
    const view = render(<BaseInput multiline />)
    const textarea = view.getByRole('textbox') as HTMLTextAreaElement

    expect(textarea.rows).toBe(1)
  })

  test('expect to have the correct rows when setted', () => {
    const view = render(<BaseInput multiline={3} />)
    const textarea = view.getByRole('textbox') as HTMLTextAreaElement

    expect(textarea.rows).toBe(3)
  })
})
