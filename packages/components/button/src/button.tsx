import React from 'react'
import classnames from 'classnames'
import '../styles/button.style.scss'

export interface ButtonProps {
  /**
   * Specify the content to display inside the button
   */
  children?: string | string[]

  /**
   * Specify an icon to display inside the button
   */
  icon?: React.ReactElement

  /**
   * Specify where the icon should be placed
   */
  iconPlacement?: 'right' | 'left'

  /**
   * Specify if the button is disabled
   */
  isDisabled?: boolean

  /**
   * Specify if the button is full width
   */
  isFullWidth?: boolean

  /**
   * Callback when clicked
   */
  onClick?(): void

  /**
   * Specify the type of the button
   * @default button
   */
  type?: 'button' | 'submit' | 'reset'

  /**
   * Specify the variant of the button
   * @default outlined
   */
  variant?: 'contained' | 'outlined' | 'text'
}

export function Button({
  children,
  icon,
  iconPlacement = 'left',
  isDisabled,
  isFullWidth,
  onClick,
  type = 'button',
  variant = 'outlined',
}: ButtonProps) {
  const buttonClasses = classnames('osg-button', {
    [`osg-button--${variant}`]: variant,
    [`osg-button--full-width`]: isFullWidth,
    [`osg-button--${variant}--disabled`]: isDisabled,
    [`osg-button--icon-placement--${iconPlacement}`]: icon && iconPlacement,
  })

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={onClick}
    >
      {icon && icon}
      {children}
    </button>
  )
}
