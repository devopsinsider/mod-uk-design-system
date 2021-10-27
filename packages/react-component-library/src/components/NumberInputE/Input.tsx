import React from 'react'
import { isFinite, isNil } from 'lodash'

import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledInput } from '../TextInputE/partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInputE/partials/StyledLabel'

export interface InputProps extends InputValidationProps {
  hasFocus: boolean
  isDisabled?: boolean
  id?: string
  isCondensed: boolean
  label?: string
  name: string
  onBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  value?: number
}

export const Input: React.FC<InputProps> = ({
  hasFocus,
  isDisabled,
  id,
  isCondensed,
  label,
  placeholder = '',
  value,
  ...rest
}) => {
  const hasLabel = !!(label && label.length)

  return (
    <StyledInputWrapper>
      {hasLabel && (
        <StyledLabel
          $hasContent={!isNil(value)}
          $hasFocus={hasFocus}
          $isCondensed={isCondensed}
          htmlFor={id}
          data-testid="number-input-label"
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        $hasLabel={hasLabel}
        $isCondensed={isCondensed}
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        value={isFinite(value) ? value : ''}
        {...rest}
      />
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
