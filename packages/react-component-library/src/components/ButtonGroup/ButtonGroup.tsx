import React from 'react'

import { ButtonGroupItemProps } from '.'
import { BUTTON_SIZE } from '../Button'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import logger from '../../utils/logger'
import { StyledButtonGroup } from './partials/StyledButtonGroup'

export type ButtonGroupSizeType =
  | typeof BUTTON_SIZE.LARGE
  | typeof BUTTON_SIZE.REGULAR
  | typeof BUTTON_SIZE.SMALL
  | typeof BUTTON_SIZE.XLARGE

export interface ButtonGroupProps extends ComponentWithClass {
  /**
   * Collection of `ButtonGroupItem` components to display as part of the group.
   */
  children: React.ReactElement<ButtonGroupItemProps>[]
  /**
   * Size of the component.
   */
  size?: ButtonGroupSizeType
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  size = BUTTON_SIZE.REGULAR,
  ...rest
}) => {
  const mappedChildren = React.Children.map(
    children,
    (child: React.ReactElement<ButtonGroupItemProps>) => {
      if (child.props.size) {
        logger.warn(
          'Prop `size` on `ButtonGroupItem` will be replaced by `size` from `ButtonGroup`'
        )
      }

      return React.cloneElement(child, {
        ...child.props,
        size,
      })
    }
  )

  return (
    <StyledButtonGroup
      $size={size}
      role="group"
      data-testid="buttongroup"
      {...rest}
    >
      {mappedChildren}
    </StyledButtonGroup>
  )
}

ButtonGroup.displayName = 'ButtonGroup'
