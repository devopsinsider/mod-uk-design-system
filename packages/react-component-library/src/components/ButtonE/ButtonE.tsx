import { IconLoader } from '@defencedigital/icon-library'
import React, { FormEvent } from 'react'

import {
  BUTTON_E_SIZE,
  BUTTON_E_VARIANT,
  BUTTON_E_ICON_POSITION,
} from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import logger from '../../utils/logger'
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

interface BaseButtonEProps extends ComponentWithClass {
  /**
   * Text to display within the component.
   */
  children?: string
  /**
   * Optional icon to display beside the component text.
   */
  icon?: React.ReactNode
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
   * Optional value for the HTML title attribute. Should be set for
   * icon-only buttons to make them accessible.
   */
  title?: string
  /**
   * HTML type of the component (forms should use the `submit` type).
   */
  type?: 'button' | 'submit'
}

interface DisableableButtonEProps extends BaseButtonEProps {
  /**
   * Toggles whether the component is disabled or not (preventing user
   * interaction).
   *
   * For tertiary buttons, this flag must be false or unset as tertiary buttons
   * don't have a disabled state.
   */
  isDisabled?: boolean
  /**
   * Whether an operation is in progress and the button temporarily can't be
   * used. If set, the button will be disabled and a loading icon displayed in
   * place of the button text.
   *
   * For tertiary buttons, this flag must be false or unset as tertiary buttons
   * don't have a loading state.
   */
  isLoading?: boolean
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?:
    | typeof BUTTON_E_VARIANT.PRIMARY
    | typeof BUTTON_E_VARIANT.SECONDARY
    | typeof BUTTON_E_VARIANT.DANGER
}

interface NonDisableableButtonEProps extends BaseButtonEProps {
  isDisabled?: false
  isLoading?: false
  variant: typeof BUTTON_E_VARIANT.TERTIARY
}

export type ButtonEProps = DisableableButtonEProps | NonDisableableButtonEProps

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
  if (!children && !title && icon) {
    logger.warn('An icon-only button should have the title attribute set')
  }

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
