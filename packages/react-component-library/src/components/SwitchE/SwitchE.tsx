import React, { useState, useEffect, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { warnIfOverwriting, getKey } from '../../helpers'
import { SWITCHE_SIZE, SwitchEOption } from '.'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledSwitch } from './partials/StyledSwitch'
import { StyledLegend } from './partials/StyledLegend'
import { StyledContainer } from './partials/StyledContainer'
import { SwitchOptionProps } from './SwitchEOption'

export type SwitchSizeType =
  | typeof SWITCHE_SIZE.SMALL
  | typeof SWITCHE_SIZE.FORMS

export interface SwitchProps extends ComponentWithClass, InputValidationProps {
  /**
   * HTML `name` attribute to apply to the component.
   */
  name: string
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string
  /**
   * Optional label to display as HTML legend.
   */
  label?: string
  /**
   * Optional handler invoked when the selected value changes.
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Size of the component.
   */
  size?: SwitchSizeType
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Collection of options to display within the Switch.
   */
  children:
    | React.ReactElement<SwitchOptionProps>
    | React.ReactElement<SwitchOptionProps>[]
}

export const SwitchE: React.FC<SwitchProps> = ({
  name,
  value,
  label,
  onChange,
  size = SWITCHE_SIZE.FORMS,
  isDisabled,
  isInvalid,
  children,
  ...rest
}) => {
  const [active, setActive] = useState<string | undefined>()
  const id = useMemo(() => uuidv4(), [])

  useEffect(() => {
    setActive(value)
  }, [value])

  return (
    <StyledSwitch
      $size={size}
      $isDisabled={isDisabled}
      $isInvalid={isInvalid}
      {...rest}
      data-testid="switch-wrapper"
    >
      {label && (
        <StyledLegend data-testid="switch-legend">{label}</StyledLegend>
      )}
      <StyledContainer>
        {React.Children.map(
          children,
          (child: React.ReactElement<SwitchOptionProps>) => {
            warnIfOverwriting(child.props, 'name', SwitchEOption.name)
            warnIfOverwriting(child.props, 'id', SwitchEOption.name)
            warnIfOverwriting(child.props, 'isActive', SwitchEOption.name)
            warnIfOverwriting(child.props, 'onChange', SwitchEOption.name)

            if (isDisabled) {
              warnIfOverwriting(child.props, 'isDisabled', SwitchEOption.name)
            }

            return React.cloneElement(child, {
              ...child.props,
              name,
              id,
              isDisabled: isDisabled || child.props.isDisabled,
              isActive: active === child.props.value,
              onChange: (e: React.FormEvent<HTMLInputElement>) => {
                setActive(child.props.value)
                onChange(e)
              },
              key: getKey('switch-option', child.props.label),
            })
          }
        )}
      </StyledContainer>
    </StyledSwitch>
  )
}

SwitchE.displayName = 'SwitchE'
