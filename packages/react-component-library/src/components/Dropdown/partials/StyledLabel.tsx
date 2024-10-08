import styled, { css } from 'styled-components'

interface StyledLabelProps {
  isDisabled: boolean
}

export const StyledLabel = styled.div<StyledLabelProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.25;
    `}
`
