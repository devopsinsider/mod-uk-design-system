import { IconLoader } from '@defencedigital/icon-library'
import React, { FormEvent } from 'react'

import {
  BUTTON_E_SIZE,
  BUTTON_E_VARIANT,
  BUTTON_E_ICON_POSITION,
} from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledButton } from './partials/StyledButton'
import { StyledIconWrapper } from './partials/StyledIconWrapper'
import { StyledText } from './partials/StyledText'
import { StyledIconLoaderWrapper } from './partials/StyledIconLoader'

export type ButtonESizeType =
  | typeof BUTTON_E_SIZE.SMALL
  | typeof BUTTON_E_SIZE.FORMS

export type ButtonEVariantType =
  | typeof BUTTON_E_VARIANT.PRIMARY
  | typeof BUTTON_E_VARIANT.SECONDARY
  | typeof BUTTON_E_VARIANT.TERTIARY
  | typeof BUTTON_E_VARIANT.DANGER

export type ButtonEIconPositionType =
  | typeof BUTTON_E_ICON_POSITION.LEFT
  | typeof BUTTON_E_ICON_POSITION.RIGHT

interface ButtonEBaseProps extends Omit<ComponentWithClass, 'children'> {
  /**
   * Position of the optional icon.
   */
  iconPosition?: ButtonEIconPositionType
  /**
   * Optional handler called when the component is clicked.
   */
  onClick?: (event: FormEvent<HTMLButtonElement>) => void
  /**
   * Size of the component.
   */
  size?: ButtonESizeType
  /**
   * HTML type of the component (forms should use the `submit` type).
   */
  type?: 'button' | 'submit'
}

export interface ButtonEDisableableWithTextProps extends ButtonEBaseProps {
  /**
   * Toggles whether the component is disabled or not (preventing user
   * interaction).
   *
   * (Note that this flag isn't supported for tertiary buttons as tertiary
   * buttons don't have a disabled state.)
   */
  isDisabled?: boolean
  /**
   * Whether an operation is in progress and the button temporarily can't be
   * used. If set, the button will be disabled and a loading icon displayed in
   * place of the button text.
   *
   * (Note that this flag isn't supported for tertiary buttons as tertiary
   * buttons don't have a disabled state.)
   */
  isLoading?: boolean
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?:
    | typeof BUTTON_E_VARIANT.PRIMARY
    | typeof BUTTON_E_VARIANT.SECONDARY
    | typeof BUTTON_E_VARIANT.DANGER
  /**
   * Text to display within the component.
   */
  children: string
  /**
   * Optional icon to display beside the component text.
   */
  icon?: React.ReactNode
  /**
   * Value for the HTML title attribute. Should be set for
   * icon-only buttons to make them accessible.
   */
  title?: string
}

export interface ButtonEDisableableIconOnlyProps extends ButtonEBaseProps {
  isDisabled?: boolean
  isLoading?: boolean
  variant?:
    | typeof BUTTON_E_VARIANT.PRIMARY
    | typeof BUTTON_E_VARIANT.SECONDARY
    | typeof BUTTON_E_VARIANT.DANGER
  children?: never
  icon: React.ReactNode
  title: string
}

export interface ButtonENonDisableableWithTextProps extends ButtonEBaseProps {
  isDisabled?: never
  isLoading?: never
  variant: typeof BUTTON_E_VARIANT.TERTIARY
  children: string
  icon?: React.ReactNode
  title?: string
}

export interface ButtonENonDisableableIconOnlyProps extends ButtonEBaseProps {
  isDisabled?: never
  isLoading?: never
  variant: typeof BUTTON_E_VARIANT.TERTIARY
  children?: never
  icon: React.ReactNode
  title: string
}

export type ButtonEProps =
  | ButtonEDisableableWithTextProps
  | ButtonEDisableableIconOnlyProps
  | ButtonENonDisableableWithTextProps
  | ButtonENonDisableableIconOnlyProps

export const ButtonE: React.FC<ButtonEProps> = ({
  children,
  className,
  isDisabled,
  isLoading,
  icon,
  iconPosition = BUTTON_E_ICON_POSITION.RIGHT,
  onClick,
  size = BUTTON_E_SIZE.FORMS,
  title,
  type = 'button',
  variant = BUTTON_E_VARIANT.PRIMARY,
  ...rest
}) => {
  return (
    <StyledButton
      className={className}
      $variant={variant}
      $size={size}
      $iconPosition={iconPosition}
      data-testid="button"
      disabled={isDisabled || isLoading}
      type={type}
      aria-label={children}
      title={title}
      onClick={(e) => {
        e.currentTarget.blur()

        if (onClick) {
          onClick(e)
        }
      }}
      {...rest}
    >
      {isLoading && (
        <StyledIconLoaderWrapper data-testid="loading-icon" aria-hidden>
          <IconLoader size={size === BUTTON_E_SIZE.FORMS ? 26 : 21} />
        </StyledIconLoaderWrapper>
      )}
      <StyledText $isLoading={isLoading}>{children}</StyledText>
      {icon && (
        <StyledIconWrapper
          $buttonHasText={Boolean(children)}
          $buttonSize={size}
          $iconPosition={iconPosition}
          $isLoading={isLoading}
          aria-hidden
          data-testid="button-icon"
        >
          {icon}
        </StyledIconWrapper>
      )}
    </StyledButton>
  )
}

ButtonE.displayName = 'ButtonE'
