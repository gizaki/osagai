/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { createElement, useRef, useState } from 'react'
import classnames from 'classnames'
import { Spinner } from './composites/spinner'
import '../styles/input.style.scss'

type Type =
  | 'text'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'url'
  | 'date'
  | 'datetime-local'
  | 'month'
  | 'time'
  | 'week'

type InputMode =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url'

export interface InputProps {
  /**
   * Enable automatic completion by the browser
   */
  autoComplete?: 'on' | 'off'

  /**
   * Automatically focus the input
   */
  doesAutoFocus?: boolean

  /**
   * ID for the input
   */
  id?: string

  /**
   * Choose the keyboard that should be used on mobile devices
   */
  inputMode?: InputMode

  /**
   * Specify if the input is disabled
   */
  isDisabled?: boolean

  /**
   * Label for the input
   */
  label: React.ReactNode

  /**
   * Visually hide the label
   */
  hasHiddenLabel?: boolean

  /**
   * Mimics the behavior of the native HTML attribute, limiting the maximum value
   */
  max?: number | string

  /**
   * Maximum character length for an input
   */
  maxLength?: number

  /**
   * Mimics the behavior of the native HTML attribute, limiting the minimum value
   */
  min?: number | string

  /**
   * Minimum character length for an input
   */
  minLength?: number

  /**
   * Allow for multiple lines of input
   */
  multiline?: boolean | number

  /**
   * Name of the input
   */
  name?: string

  /**
   * Callback when focus is removed
   */
  onBlur?(event: React.ChangeEvent<HTMLInputElement>): void

  /**
   * Callback when value is changed
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void

  /**
   * Callback when input is focused
   */
  onFocus?(event: React.ChangeEvent<HTMLInputElement>): void

  /**
   * A regular expression to check the value against
   */
  pattern?: string

  /**
   * Hint text to display
   */
  placeholder?: string

  /**
   * Disable editing of the input
   */
  isReadOnly?: boolean

  /**
   * Defines a specific role attribute for the input
   */
  role?: string

  /**
   * Indicate whether value should have spelling checked
   */
  hasSpellCheck?: boolean

  /**
   * Limit increment value for numeric and date-time inputs
   */
  step?: number

  /**
   * Determine type of input
   */
  type?: Type

  /**
   * Initial value for the input
   */
  value?: string
}

export function Input({
  autoComplete,
  doesAutoFocus,
  id,
  inputMode,
  isDisabled,
  label,
  hasHiddenLabel,
  max,
  maxLength,
  min,
  minLength,
  multiline,
  name,
  onChange,
  pattern,
  placeholder,
  isReadOnly,
  role,
  hasSpellCheck,
  step,
  type,
  value,
}: InputProps) {
  const [rows, setRows] = useState(
    typeof multiline === 'number' ? multiline : 1,
  )

  const inputRef = useRef<HTMLInputElement>(null)

  /**
   * Use a typeof check here as Typescript mostly protects us from non-stringy
   * values but overzealous usage of `any` in consuming apps means people have
   * been known to pass a number in, so make it clear that doesn't work.
   */
  const _value = typeof value === 'string' ? value : ''

  const inputClasses = classnames('osg-input', {
    [`osg-input--multiline`]: multiline,
  })

  const labelBoxClasses = classnames('osg-input-label-box', {
    [`osg-input-label-box--hidden`]: hasHiddenLabel,
  })

  /**
   * TODO: Find the correct way to type this
   * @param event React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   */
  function handleChange(event: any): void {
    onChange && onChange(event)

    if (multiline) {
      const textareaLineHeight = 24

      const previousRows = event.target.rows
      event.target.rows = typeof multiline === 'number' ? multiline : 1

      const currentRows = Math.floor(
        event.target.scrollHeight / textareaLineHeight,
      )

      if (currentRows === previousRows) {
        event.target.rows = currentRows
      }

      setRows(currentRows)
    }
  }

  function handleStep(step: number): void {
    if (!inputRef.current) return

    step === 1 ? inputRef.current.stepUp() : inputRef.current.stepDown()
  }

  const props = {
    autoComplete,
    autoFocus: doesAutoFocus,
    className: inputClasses,
    disabled: isDisabled,
    id,
    inputMode,
    max,
    maxLength,
    min,
    minLength,
    name,
    onChange: handleChange,
    pattern,
    placeholder,
    ref: inputRef,
    role,
    rows: multiline && rows,
    readOnly: isReadOnly,
    spellCheck: hasSpellCheck,
    step,
    type,
    value: _value,
  }

  const input = createElement(multiline ? 'textarea' : 'input', props)
  // eslint-disable-next-line operator-linebreak
  const spinner =
    type === 'number' && step !== 0 && !isDisabled && !isReadOnly ? (
      <Spinner onChange={(step) => handleStep(step)} />
    ) : null

  return (
    <div>
      <div className={labelBoxClasses}>
        <label className="osg-input-label" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="osg-input-box">
        {input}
        {spinner}
        <div className="osg-input-backdrop" />
      </div>
    </div>
  )
}
