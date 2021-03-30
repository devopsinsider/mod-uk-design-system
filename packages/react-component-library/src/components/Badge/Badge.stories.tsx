import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import {
  Badge,
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from '.'

export default { component: Badge, title: 'Badge' } as Meta

export const Default = ({
  color,
  colorVariant,
  size,
  variant,
  children,
}: any) => (
  <Badge
    color={color}
    colorVariant={colorVariant}
    size={size}
    variant={variant}
  >
    {children}
  </Badge>
)

Default.args = {
  color: BADGE_COLOR.ACTION,
  colorVariant: BADGE_COLOR_VARIANT.FADED,
  size: BADGE_SIZE.REGULAR,
  variant: BADGE_VARIANT.REGULAR,
  children: 'Hello, World!',
}
