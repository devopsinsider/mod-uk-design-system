import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { color, fontSize } = selectors

function removeAutoFillBackground() {
  return css`
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-transition: background-color 9999s ease-out;
    }

    filter: none; // Firefox
  `
}

interface StyledInputProps {
  $hasLabel: boolean
  $isCondensed?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  border: 0;
  background: none;

  padding: ${({ $hasLabel, $isCondensed }) => {
    if ($isCondensed || !$hasLabel) {
      return '6px 12px 6px 11px'
    }

    return '22px 12px 6px 11px'
  }};

  -webkit-tap-highlight-color: transparent;

  ${removeAutoFillBackground()}

  color: ${color('neutral', '600')};
  font-size: ${({ $isCondensed }) =>
    $isCondensed ? fontSize('base') : fontSize('m')};

  height: ${({ $isCondensed }) => ($isCondensed ? '31px' : '44px')};

  &:focus {
    outline: 0;
  }
`
