import React from 'react'

export interface ButtonProps {
  /**
   * Specify the type of the button
   */
  type: 'button' | 'submit' | 'reset'
}

export function Button({ type, ...rest }: ButtonProps) {
  return (
    <button type={type} {...rest}>
      Hello from osagai!
    </button>
  )
}
