import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { Field, Formik, Form } from 'formik'
import { withFormik } from '../../enhancers/withFormik'
import { Button } from '../Button'

import { SwitchE, SwitchEOption, SwitchProps, SWITCHE_SIZE } from '.'

export default {
  component: SwitchE,
  title: 'SwitchE (Experimental)',
  subcomponents: { SwitchEOption },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const Template: Story<SwitchProps> = (props) => (
  <SwitchE {...props}>
    <SwitchEOption label="Option 1" value="1" />
    <SwitchEOption label="Option 2" value="2" />
    <SwitchEOption label="Option 3" value="3" />
  </SwitchE>
)

export const Default = Template.bind({})
Default.args = {
  name: 'switch-default',
}

export const WithLegend = Template.bind({})
WithLegend.storyName = 'With legend'
WithLegend.args = {
  name: 'switch-legend',
  label: 'Example legend',
}

export const SelectedValue = Template.bind({})
SelectedValue.storyName = 'With value selected'
SelectedValue.args = {
  name: 'switch-selected-value',
  value: '2',
}

export const Small = Template.bind({})
Small.storyName = 'Small'
Small.args = {
  name: 'switch-small',
  size: SWITCHE_SIZE.SMALL,
}

export const WithFormik: Story<SwitchProps> = () => {
  interface Data {
    'switch-formik': string
  }

  const initialValues: Data = {
    'switch-formik': '3',
  }

  const FormikSwitch = withFormik(Template)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('onSubmit')}
      render={({ setFieldValue }) => {
        return (
          <Form>
            <Field
              name="switch-formik"
              component={FormikSwitch}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setFieldValue('example-switch-field', event.currentTarget.value)
              }}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )
      }}
    />
  )
}

WithFormik.storyName = 'Formik'
