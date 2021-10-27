import styled, { css } from 'styled-components'

import { isIE11 } from '../../../helpers'
import {
  StyledLabel as StyledLabelBase,
  StyledLabelProps,
} from '../../../styled-components/partials/StyledLabel'

function getYPosition($isCondensed: boolean) {
  if ($isCondensed) {
    return isIE11() ? '8px' : '6px'
  }

  return isIE11() ? '15px' : '13px'
}

export const StyledLabel = styled(StyledLabelBase)<StyledLabelProps>`
  ${({ $isCondensed }) => css`
    transform: translate(11px, ${getYPosition($isCondensed)}) scale(1);
  `}

  ${({ $hasContent, $hasFocus, $isCondensed }) => {
    if (!$hasContent && !$hasFocus) {
      return null
    }

    if ($isCondensed) {
      return css`
        display: none;
      `
    }

    return css`
      transform: translate(11px, 8px) scale(0.75);
    `
  }}
`
