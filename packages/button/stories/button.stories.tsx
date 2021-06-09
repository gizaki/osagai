import React from 'react'
import { Plus } from 'akar-icons'
import { Button } from '../src'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['contained', 'outlined', 'text'],
    },
    iconPlacement: {
      control: {
        type: 'inline-radio',
      },
      options: ['right', 'left'],
    },
    onClick: {
      action: 'clicked',
    },
  },
}

export const Default = (args: any) => <Button {...args}>Button</Button>

export const WithIcon = (args: any) => (
  <Button {...args} icon={<Plus />}>
    Button
  </Button>
)
