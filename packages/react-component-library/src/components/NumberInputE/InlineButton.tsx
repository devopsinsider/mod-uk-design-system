import React from 'react'
import capitalize from 'lodash/capitalize'
import { IconAdd, IconRemove } from '@defencedigital/icon-library'

import { NUMBER_INPUT_BUTTON_TYPE } from './constants'
import { StyledInlineButton } from './partials/StyledInlineButton'

type ButtonType =
  | typeof NUMBER_INPUT_BUTTON_TYPE.DECREASE
  | typeof NUMBER_INPUT_BUTTON_TYPE.INCREASE

interface InlineButtonProps {
  isCondensed: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type: ButtonType
}

const iconLookup = {
  [NUMBER_INPUT_BUTTON_TYPE.DECREASE]: <IconRemove />,
  [NUMBER_INPUT_BUTTON_TYPE.INCREASE]: <IconAdd />,
}

export const InlineButton: React.FC<InlineButtonProps> = ({
  isCondensed,
  isDisabled,
  onClick,
  type,
}) => (
  <StyledInlineButton
    $isCondensed={isCondensed}
    aria-label={`${capitalize(type)} the input value`}
    data-testid={`number-input-${type}`}
    type="button"
    disabled={isDisabled}
    onClick={onClick}
  >
    {iconLookup[type]}
  </StyledInlineButton>
)

InlineButton.displayName = 'InlineButton'
