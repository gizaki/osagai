import React from 'react'

export interface ButtonProps {
  /**
   * Some docs here
   */
  type: 'button' | 'submit' | 'reset'
}

export const Button = ({ type, ...rest }: ButtonProps) => (
  <button type={type} {...rest}>
    Hello!
  </button>
)
