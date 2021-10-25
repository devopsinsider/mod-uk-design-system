import React from 'react'

import { Button } from './Button'
import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledButtons } from './partials/StyledButtons'
import { StyledDivider } from './partials/StyledDivider'

export interface ButtonsProps {
  isCondensed: boolean
  isDisabled: boolean
  max?: number
  min?: number
  name: string
  onClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: number
  ) => void
  step?: number
  value: number
}

export const Buttons: React.FC<ButtonsProps> = ({
  isCondensed,
  isDisabled,
  onClick,
  step,
  value,
}) => {
  function onButtonClick(getNewValue: () => number) {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      const target = event.currentTarget
      target.blur()

      const newValue = getNewValue()
      onClick(event, newValue)
    }
  }

  return (
    <StyledButtons $isDisabled={isDisabled}>
      <Button
        isCondensed={isCondensed}
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) - step)}
        type={NUMBER_INPUT_BUTTON_TYPE.DECREASE}
      />
      <StyledDivider $isCondensed={isCondensed} />
      <Button
        isCondensed={isCondensed}
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) + step)}
        type={NUMBER_INPUT_BUTTON_TYPE.INCREASE}
      />
    </StyledButtons>
  )
}

Buttons.displayName = 'Buttons'
