import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledSwitchOption } from './partials/StyledSwitchOption'
import { SwitchInput } from './partials/SwitchInput'
import { getKey } from '../../helpers'

export interface SwitchOptionProps extends ComponentWithClass {
  /**
   * Descriptive label associated with the selectable option.
   */
  label: string
  /**
   * Value associated with the selectable option (not visible).
   */
  value: string
  /**
   * Name attribute associated of the Switch.
   * @private
   */
  name?: string
  /**
   * Unique ID associated with the Switch.
   * @private
   */
  id?: string
  /**
   * Denotes whether this option is active or not.
   * @private
   */
  isActive?: boolean
  /**
   * Handler invoked when the option is selected by end user.
   * @private
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

export const SwitchEOption: React.FC<SwitchOptionProps> = ({
  label,
  value,
  name,
  id,
  isActive,
  onChange,
}) => {
  return (
    <StyledSwitchOption
      key={getKey('switch-option', label)}
      htmlFor={`${id}-${label}`}
      $isActive={isActive}
      aria-current={isActive}
      data-testid="switch-option"
    >
      {label}
      <SwitchInput
        type="radio"
        id={`${id}-${label}`}
        name={name || id}
        value={value}
        onClick={onChange}
        data-testid="switch-input"
      />
    </StyledSwitchOption>
  )
}

SwitchEOption.displayName = 'SwitchEOption'
