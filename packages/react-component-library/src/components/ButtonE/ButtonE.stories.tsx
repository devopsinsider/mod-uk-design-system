import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IconBrightnessLow } from '@defencedigital/icon-library'
import { ButtonE, ButtonEProps } from './index'
import {
  BUTTON_E_SIZE,
  BUTTON_E_VARIANT,
  BUTTON_E_ICON_POSITION,
} from './constants'

export default {
  component: ButtonE,
  title: 'Button (Experimental)',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta

const Template: Story<ButtonEProps> = (args) => <ButtonE {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default',
}

export const Primary = Template.bind({})
Primary.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  children: 'Primary',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.storyName = 'Primary, disabled'
PrimaryDisabled.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  isDisabled: true,
  children: 'Primary, disabled',
}

export const PrimaryLoading = Template.bind({})
PrimaryLoading.storyName = 'Primary, loading'
PrimaryLoading.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  isLoading: true,
  children: 'Primary, loading',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: BUTTON_E_VARIANT.SECONDARY,
  children: 'Secondary',
}

export const SecondaryDisabled = Template.bind({})
SecondaryDisabled.storyName = 'Secondary, disabled'
SecondaryDisabled.args = {
  variant: BUTTON_E_VARIANT.SECONDARY,
  isDisabled: true,
  children: 'Secondary, disabled',
}

export const SecondaryLoading = Template.bind({})
SecondaryLoading.storyName = 'Secondary, loading'
SecondaryLoading.args = {
  variant: BUTTON_E_VARIANT.SECONDARY,
  isLoading: true,
  children: 'Secondary, loading',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  variant: BUTTON_E_VARIANT.TERTIARY,
  children: 'Tertiary',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: BUTTON_E_VARIANT.DANGER,
  children: 'Danger',
}

export const DangerDisabled = Template.bind({})
DangerDisabled.storyName = 'Danger, disabled'
DangerDisabled.args = {
  variant: BUTTON_E_VARIANT.DANGER,
  isDisabled: true,
  children: 'Danger, disabled',
}

export const DangerLoading = Template.bind({})
DangerLoading.storyName = 'Danger, loading'
DangerLoading.args = {
  variant: BUTTON_E_VARIANT.DANGER,
  isLoading: true,
  children: 'Danger, loading',
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.storyName = 'With left icon'
WithLeftIcon.args = {
  children: 'Default',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_E_ICON_POSITION.LEFT,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.storyName = 'With right icon'
WithRightIcon.args = {
  children: 'Default',
  icon: <IconBrightnessLow />,
  iconPosition: BUTTON_E_ICON_POSITION.RIGHT,
}

export const IconNoText = Template.bind({})
IconNoText.storyName = 'Icon, no text'
IconNoText.args = {
  children: null,
  icon: <IconBrightnessLow />,
  title: 'Reduce brightness',
}

export const Small = Template.bind({})
Small.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  size: BUTTON_E_SIZE.SMALL,
  children: 'Small',
}

export const SmallLoading = Template.bind({})
SmallLoading.storyName = 'Small, loading'
SmallLoading.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  size: BUTTON_E_SIZE.SMALL,
  children: 'Small, loading',
  isLoading: true,
}

export const SmallIconNoText = Template.bind({})
SmallIconNoText.storyName = 'Small, with icon, no text '
SmallIconNoText.args = {
  variant: BUTTON_E_VARIANT.PRIMARY,
  size: BUTTON_E_SIZE.SMALL,
  icon: <IconBrightnessLow />,
  title: 'Reduce brightness',
}
