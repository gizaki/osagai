import React, { useState } from 'react'
import { Input } from '../src'
// import { Button } from '../../button/src'

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    id: 'input',
    label: 'Email',
  },
}

export const Default = (args: any) => <Input {...args} />

export const Number = () => {
  const [value, setValue] = useState('10')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Input
        type="number"
        value={value}
        label="Quantity"
        isDisabled
        step={1}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
    </div>
  )
}

export const Multiline = () => {
  const [value, setValue] = useState('2900 Osagai Street\nBizkaia, 48620')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Input
        type="text"
        value={value}
        label="Street"
        multiline={3}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
      />
    </div>
  )
}
