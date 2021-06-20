import React, { useState } from 'react'
import { Input } from '../src'

export default {
  title: 'Components/Input',
  component: Input,
}

export const Default = () => {
  const [value, setValue] = useState('')

  return (
    <Input
      label="Name"
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }}
    />
  )
}

export const Number = () => {
  const [value, setValue] = useState('2')

  return (
    <Input
      type="number"
      value={value}
      label="Quantity"
      step={1}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }}
    />
  )
}

export const Multiline = () => {
  const [value, setValue] = useState('2900 Osagai Street\nBizkaia, 48620')

  return (
    <Input
      type="text"
      value={value}
      label="Street"
      multiline={3}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
      }}
    />
  )
}
