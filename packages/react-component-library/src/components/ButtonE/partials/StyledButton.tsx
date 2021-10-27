import styled, { css } from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'
import { rgba } from 'polished'

import {
  BUTTON_E_VARIANT,
  BUTTON_E_SIZE,
  BUTTON_E_ICON_POSITION,
} from '../constants'
import {
  ButtonEVariantType,
  ButtonESizeType,
  ButtonEIconPositionType,
} from '../ButtonE'

interface StyledButtonProps {
  $variant: ButtonEVariantType
  $size: ButtonESizeType
  $iconPosition: ButtonEIconPositionType
}

const { color, spacing, fontSize, animation } = selectors

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  height: 46px;
  display: inline-flex;
  flex-direction: ${({ $iconPosition }) =>
    $iconPosition === BUTTON_E_ICON_POSITION.LEFT ? 'row-reverse' : 'row'};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  outline: 0;
  padding: 0 ${spacing('6')};
  font-size: ${fontSize('m')};
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  transition: all ${animation('default')};
  white-space: nowrap;

  &,
  &:hover {
    text-decoration: none;
  }

  ${({ $size }) =>
    $size === BUTTON_E_SIZE.SMALL &&
    css`
      border-radius: 10px;
      height: 33px;
      font-size: ${fontSize('base')};
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.PRIMARY &&
    css`
      border: 1px solid ${color('action', '600')};
      color: ${color('neutral', 'white')};
      background-color: ${color('action', '600')};

      &:focus,
      &:hover {
        background-color: ${color('action', '700')};
      }

      &:active {
        background-color: ${color('action', '800')};
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.SECONDARY &&
    css`
      color: ${color('neutral', '500')};
      background-color: ${color('neutral', 'white')};
      border: 1px solid ${color('neutral', '200')};

      &:focus,
      &:hover {
        background-color: ${color('neutral', 'white')};
      }

      &:active {
        background-color: ${color('neutral', '100')};
      }
    `}

  ${({ $variant }) =>
    ($variant === BUTTON_E_VARIANT.PRIMARY ||
      $variant === BUTTON_E_VARIANT.SECONDARY) &&
    css`
      box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)};

      &:focus,
      &:hover {
        box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)},
          0 0 0 3px ${color('action', '100')};
      }

      &:active {
        box-shadow: 0 0 0 3px ${color('action', '100')};
      }

      &:disabled {
        &,
        &:hover,
        &:active,
        &:focus {
          background: ${color('neutral', '000')};
          border: 1px solid ${color('neutral', '200')};
          box-shadow: none;
          color: ${color('neutral', '300')};
          cursor: not-allowed;
        }
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.TERTIARY &&
    css`
      background-color: transparent;
      background-image: none;
      border: 1px solid transparent;
      color: ${color('neutral', '500')};
      text-decoration: underline;

      &:focus,
      &:hover {
        color: ${color('action', '600')};
        text-decoration: underline;
      }
    `}

  ${({ $variant }) =>
    $variant === BUTTON_E_VARIANT.DANGER &&
    css`
      background-color: ${color('danger', '700')};
      border: 1px solid ${color('danger', '700')};
      color: ${color('neutral', 'white')};

      &:focus,
      &:hover {
        background-color: ${color('danger', '800')};
        box-shadow: 0 1px 3px ${rgba(0, 0, 0, 0.1)},
          0 0 0 3px ${color('danger', '100')};
      }

      &:active {
        background-color: ${color('danger', '900')};
        box-shadow: 0 0 0 3px ${color('danger', '100')};
      }

      &:disabled {
        &,
        &:hover,
        &:active,
        &:focus {
          background: ${color('danger', '000')};
          border: 1px solid ${color('neutral', '200')};
          box-shadow: none;
          color: ${color('neutral', '300')};
          cursor: not-allowed;
        }
      }
    `}
`
