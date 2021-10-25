import React from 'react'
import capitalize from 'lodash/capitalize'
import { IconAdd, IconRemove } from '@defencedigital/icon-library'

import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledButton } from './partials/StyledButton'

type ButtonType =
  | typeof NUMBER_INPUT_BUTTON_TYPE.DECREASE
  | typeof NUMBER_INPUT_BUTTON_TYPE.INCREASE

interface ButtonProps {
  isCondensed: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type: ButtonType
}

const svgLookup = {
  [NUMBER_INPUT_BUTTON_TYPE.DECREASE]: <IconRemove />,
  [NUMBER_INPUT_BUTTON_TYPE.INCREASE]: <IconAdd />,
}

export const Button: React.FC<ButtonProps> = ({
  isCondensed,
  isDisabled,
  onClick,
  type,
}) => (
  <StyledButton
    $isCondensed={isCondensed}
    $isDisabled={isDisabled}
    aria-label={`${capitalize(type)} the input value`}
    data-testid={`number-input-${type}`}
    type="button"
    disabled={isDisabled}
    onClick={onClick}
  >
    {svgLookup[type]}
  </StyledButton>
)

Button.displayName = 'Button'
