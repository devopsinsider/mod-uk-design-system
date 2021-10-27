import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color } = selectors

interface StyledInlineButtonsProps {
  $isDisabled: boolean
}

export const StyledInlineButtons = styled.div<StyledInlineButtonsProps>`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  &:disabled {
    border-left: 1px solid ${color('neutral', '200')};
  }
`
