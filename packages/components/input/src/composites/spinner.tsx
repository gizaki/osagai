/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
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

interface SpinnerSvgProps {
  direction: 'up' | 'down'
}

function SpinnerSvg({ direction }: SpinnerSvgProps) {
  // eslint-disable-next-line operator-linebreak
  const path =
    direction === 'up' ? 'M12 7L6 15L18 15L12 7Z' : 'M12 17L6 9L18 9L12 17Z'

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
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
          <SpinnerSvg direction="up" />
        </div>
      </div>

      <div
        role="button"
        className="osg-input-spinner-button"
        tabIndex={-1}
        onClick={handleStep(-1)}
      >
        <div className="osg-input-spinner-icon">
          <SpinnerSvg direction="down" />
        </div>
      </div>
    </div>
  )
}
