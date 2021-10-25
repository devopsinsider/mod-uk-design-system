import React from 'react'
import { isFinite, isNil } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

import { Buttons } from './Buttons'
import { getId, hasClass } from '../../helpers'
import { Input } from './Input'
import { InputValidationProps } from '../../common/InputValidationProps'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { useFocus } from '../../hooks/useFocus'
import { useValue } from './useValue'
import { StyledIcon } from './partials/StyledIcon'
import { StyledDivider } from './partials/StyledDivider'
import { StyledFootnote } from './partials/StyledFootnote'
import { StyledNumberInput } from './partials/StyledNumberInput'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledPrefix } from './partials/StyledPrefix'
import { StyledSuffix } from './partials/StyledSuffix'

interface NumberInputBaseProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * Toggles whether to focus the input on initial render.
   */
  autoFocus?: boolean
  /**
   * Optional text footnote to display below the component.
   */
  footnote?: string
  /**
   * Optional HTML `id` attribute to apply to the internal input.
   */
  id?: string
  /**
   * Toggles whether or not to render a reduced height version of the component.
   */
  isCondensed?: boolean
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional descriptive text label to display within the component.
   */
  label?: string
  /**
   * Maximum value selectable by the component (upper bound).
   */
  max?: number
  /**
   * Minimum value selectable by the component (lower bound).
   */
  min?: number
  /**
   * HTML `name` attribute to apply to the internal input.
   */
  name: string
  /**
   * Optional handler called when the `onBlur` event is emitted.
   */
  onBlur?: (event: React.FormEvent) => void
  /**
   * Handler called when the value selected by the component changes.
   */
  onChange: (event: any) => void
  /**
   * Optional placeholder text to display within the component.
   */
  placeholder?: string
  /**
   * Stepped increment amount by which to increase/decrese component value.
   */
  step?: number
  /**
   * Currently selected value displayed by the component.
   */
  value?: number
}

export interface NumberInputWithIconProps extends NumberInputBaseProps {
  /**
   * Optional icon to display to the left of the input value.
   */
  icon?: React.ReactNode
  prefix?: never
  suffix?: never
}

export interface NumberInputWithPrefixProps extends NumberInputBaseProps {
  icon?: never
  /**
   * Optional value to display next to the component value.
   */
  prefix?: string
  suffix?: never
}

export interface NumberInputWithSuffixProps extends NumberInputBaseProps {
  icon?: never
  prefix?: never
  /**
   * Optional value to display next to the component value.
   */
  suffix?: string
}

export type NumberInputProps =
  | NumberInputWithIconProps
  | NumberInputWithPrefixProps
  | NumberInputWithSuffixProps

function formatValue(displayValue: number, prefix: string, suffix: string) {
  if (isNil(displayValue)) {
    return 'Not set'
  }

  if (prefix) {
    return `${prefix} ${displayValue}`
  }

  if (suffix) {
    return `${displayValue} ${suffix}`
  }

  return displayValue
}

function getNewValue(event: React.FormEvent<HTMLInputElement>): number {
  const { value } = event.currentTarget

  if (value === '') {
    return null
  }

  return parseInt(value, 10)
}

function isWithinRange(max: number, min: number, newValue: number) {
  const isNotBelowMin = isNil(min) || newValue >= min
  const isNotAboveMax = isNil(max) || newValue <= max

  return isNotBelowMin && isNotAboveMax
}

export const NumberInputE: React.FC<NumberInputProps> = ({
  className,
  footnote,
  icon,
  id = uuidv4(),
  isCondensed,
  isDisabled = false,
  isInvalid,
  isValid,
  label,
  max,
  min,
  name,
  onBlur,
  onChange,
  placeholder = '',
  prefix,
  step = 1,
  suffix,
  value,
  ...rest
}) => {
  const { committedValue, setCommittedValue } = useValue(value)
  const { hasFocus, onLocalFocus, onLocalBlur } = useFocus(onBlur)

  function setCommittedValueWithinRange(newValue: number) {
    if (
      (isFinite(newValue) && isWithinRange(max, min, newValue)) ||
      newValue === null
    ) {
      setCommittedValue(newValue)
      onChange({
        target: {
          name,
          value: newValue,
        },
      })
    }
  }

  const numberInputId = getId('number-input')

  return (
    <StyledNumberInput
      aria-label={label || 'Number input'}
      className={className}
      data-testid="number-input-container"
      id={numberInputId}
      role="spinbutton"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={committedValue || 0}
      aria-valuetext={String(formatValue(committedValue, prefix, suffix))}
    >
      <StyledOuterWrapper
        $hasFocus={hasFocus}
        $isCondensed
        $isDisabled={isDisabled}
        $isInvalid={isInvalid || hasClass(className, 'is-invalid')}
      >
        {icon && (
          <StyledIcon data-testid="number-input-icon">{icon}</StyledIcon>
        )}

        {prefix && (
          <>
            <StyledPrefix data-testid="number-input-prefix">
              {prefix}
            </StyledPrefix>
            <StyledDivider $isCondensed={isCondensed} />
          </>
        )}

        <Input
          aria-labelledby={numberInputId}
          hasFocus={hasFocus}
          id={id}
          isDisabled={isDisabled}
          isCondensed={isCondensed}
          isValid={isValid || hasClass(className, 'is-valid')}
          isInvalid={isInvalid || hasClass(className, 'is-invalid')}
          label={label}
          name={name}
          onChange={(event) => {
            const newValue = getNewValue(event)
            setCommittedValueWithinRange(newValue)
          }}
          onBlur={(event) => {
            const newValue = getNewValue(event)
            setCommittedValueWithinRange(newValue)

            onLocalBlur(event)
          }}
          onFocus={onLocalFocus}
          placeholder={placeholder}
          value={committedValue}
          {...rest}
        />

        {suffix && (
          <>
            <StyledDivider $isCondensed={isCondensed} />
            <StyledSuffix data-testid="number-input-suffix">
              {suffix}
            </StyledSuffix>
          </>
        )}

        <Buttons
          isCondensed={isCondensed}
          isDisabled={isDisabled}
          max={max}
          min={min}
          name={name}
          onClick={(e, newValue) => {
            setCommittedValueWithinRange(newValue)
          }}
          step={step}
          value={committedValue}
        />
      </StyledOuterWrapper>

      {footnote && (
        <StyledFootnote data-testid="number-input-footnote">
          {footnote}
        </StyledFootnote>
      )}
    </StyledNumberInput>
  )
}

NumberInputE.displayName = 'NumberInputE'
