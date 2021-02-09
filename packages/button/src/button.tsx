import React, { forwardRef } from 'react'

export interface ButtonProps {
  /**
   * Some docs here
   */
  isFullWidth: boolean
}

export const Button = forwardRef(function Button(props: ButtonProps, ref) {
  return <button type="button">Hey from osagai</button>
})
