import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { SwitchSizeType } from '../SwitchE'
import { StyledSwitchOption } from './StyledSwitchOption'

interface StyledSwitchProps {
  $size?: SwitchSizeType
}

const { fontSize, spacing } = selectors

export const StyledSwitch = styled.fieldset<StyledSwitchProps>`
  border: none;
  padding: 0;
  margin: 0;
  font-size: ${fontSize('base')};
  position: relative;

  ${({ $size }) => {
    if ($size === 'small') {
      return `
      font-size: ${fontSize('s')};

      ${StyledSwitchOption}::before {
        padding: ${spacing('8')} ${spacing('11')};
      }
      `
    }

    return ``
  }}
`
