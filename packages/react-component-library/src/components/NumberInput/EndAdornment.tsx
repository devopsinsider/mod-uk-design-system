import React from 'react'

import { EndAdornmentButton } from './EndAdornmentButton'
import { END_ADORNMENT_TYPE } from './constants'
import { StyledNumberInputControls } from './partials/StyledNumberInputControls'

export interface EndAdornmentProps {
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

export const EndAdornment: React.FC<EndAdornmentProps> = ({
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
    <StyledNumberInputControls>
      <EndAdornmentButton
        isCondensed={isCondensed}
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) + step)}
        type={END_ADORNMENT_TYPE.INCREASE}
      />
      <EndAdornmentButton
        isCondensed={isCondensed}
        isDisabled={isDisabled}
        onClick={onButtonClick(() => (value || 0) - step)}
        type={END_ADORNMENT_TYPE.DECREASE}
      />
    </StyledNumberInputControls>
  )
}

EndAdornment.displayName = 'EndAdornment'
