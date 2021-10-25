import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

interface StyledButtonsProps {
  $isDisabled: boolean
}

export const StyledButtons = styled.div<StyledButtonsProps>`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  ${({ $isDisabled }) =>
    !$isDisabled &&
    css`
      border-left: 1px solid ${color('neutral', '200')};
    `}
`
