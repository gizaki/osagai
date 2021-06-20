/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Triangle } from 'react-feather'
import '../../styles/input.style.scss'

type HandleStepFn = (step: number) => void

export interface SpinnerProps {
  /**
   * Callback when value is changed
   */
  onChange: HandleStepFn

  /**
   * Callback when the spinner is clicked
   */
  onClick?(): void
}

export function Spinner({ onChange, onClick }: SpinnerProps) {
  function handleStep(step: number) {
    return () => onChange(step)
  }

  return (
    <div className="osg-input-spinner" onClick={onClick} aria-hidden>
      <div
        role="button"
        className="osg-input-spinner-button"
        tabIndex={-1}
        onClick={handleStep(1)}
      >
        <div className="osg-input-spinner-icon">
          <Triangle />
        </div>
      </div>

      <div
        role="button"
        className="osg-input-spinner-button"
        tabIndex={-1}
        onClick={handleStep(-1)}
      >
        <div className="osg-input-spinner-icon">
          <Triangle style={{ transform: 'rotate(180deg)' }} />
        </div>
      </div>
    </div>
  )
}
