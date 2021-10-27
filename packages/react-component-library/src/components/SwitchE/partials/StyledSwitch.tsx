import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { SwitchSizeType } from '../SwitchE'
import { StyledContainer } from './StyledContainer'
import { StyledSwitchOption } from './StyledSwitchOption'
import { StyledLegend } from './StyledLegend'

interface StyledSwitchProps {
  $size?: SwitchSizeType
  $isDisabled?: boolean
  $isInvalid?: boolean
}

const { fontSize, color } = selectors

export const StyledSwitch = styled.fieldset<StyledSwitchProps>`
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  font-size: ${fontSize('m')};

  ${({ $size }) =>
    $size === 'small' &&
    css`
      font-size: ${fontSize('s')};

      ${StyledContainer} {
        height: 33px;
      }

      ${StyledSwitchOption} {
        &:first-of-type {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        &:last-of-type {
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    `};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      ${StyledContainer} {
        background-color: ${color('neutral', '000')};
      }

      ${StyledSwitchOption} {
        border-color: transparent;
        cursor: not-allowed;
      }
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      ${StyledContainer} {
        box-shadow: 0 0 0 3px ${color('danger', '800')};
      }

      ${StyledLegend} {
        color: ${color('danger', '800')};
      }
    `}
`
