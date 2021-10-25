import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

interface StyledDividerProps {
  $isCondensed?: boolean
}

export const StyledDivider = styled.div<StyledDividerProps>`
  position: relative;
  top: 9px;
  border-left: 1px solid ${color('neutral', '200')};
  height: 24px;

  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      top: 5px;
      height: 21px;
    `}
`
