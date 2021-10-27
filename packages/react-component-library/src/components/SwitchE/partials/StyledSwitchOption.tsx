import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

interface StyledSwitchEOptionProps {
  $isActive?: boolean
  $isDisabled?: boolean
}

const { spacing, color } = selectors

export const StyledSwitchOption = styled.label<StyledSwitchEOptionProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${spacing('6')};
  border: 1px solid ${color('neutral', '200')};
  color: ${color('neutral', '400')};
  font-size: inherit;
  font-weight: 600;
  cursor: pointer;

  &:nth-child(n + 2) {
    margin-left: -1px;
  }

  &:first-of-type {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  &:last-of-type {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  &:hover,
  &:active {
    background-color: ${color('neutral', '100')};
    color: ${color('neutral', '400')};
    border-color: ${color('neutral', '200')};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${color('action', '600')};
      color: ${color('neutral', 'white')};
      border-color: ${color('action', '600')};
    `}

  ${({ $isDisabled, $isActive }) =>
    $isDisabled &&
    $isActive &&
    css`
      background-color: ${color('neutral', '100')};
      color: ${color('neutral', '400')};
    `}
`
