import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { Checkbox } from '.'
import { Button } from '../Button'
import { FormikGroup } from '../FormikGroup'

export default { component: Checkbox, title: 'Checkbox' } as Meta

export const Default = (props: any) => <Checkbox {...props} />

Default.args = {
  id: undefined,
  label: 'Default checkbox',
  name: 'default',
  isChecked: true,
}

export const Disabled = (props: any) => <Checkbox {...props} />

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled checkbox',
  name: 'disabled',
}

export const Invalid = (props: any) => <Checkbox {...props} />

Invalid.args = {
  id: undefined,
  label: 'Invalid checkbox',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormik = () => {
  const CheckboxForm = () => {
    interface Data {
      [key: string]: boolean
    }

    const initialValues: Data = {
      example1: true,
      example2: false,
      example3: false,
    }

    const validationSchema = yup.object().shape({
      example: yup.string(),
    })

    const FormikCheckbox = withFormik(Checkbox)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            name="example1"
            component={FormikCheckbox}
            label="Option 1"
            type="checkbox"
          />
          <Field
            name="example2"
            component={FormikCheckbox}
            label="Option 2"
            type="checkbox"
          />
          <Field
            name="example3"
            component={FormikCheckbox}
            label="Option 3"
            type="checkbox"
          />
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
}

WithFormik.storyName = 'Formik'

export const WithFormikGroup = () => {
  const CheckboxForm = () => {
    interface Data {
      [key: string]: string
    }

    const initialValues: Data = {
      example: '',
      exampleWithError: '',
    }

    const validationSchema = yup.object().shape({
      exampleWithError: yup.array().min(0).required('Field is required'),
    })

    const FormikCheckbox = withFormik(Checkbox)

    return (
      <Formik
        initialErrors={{ exampleWithError: 'Field is required' }}
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikGroup label="Select an option">
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 1"
              value="Option 1"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 2"
              value="Option 2"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 3"
              value="Option 3"
              type="checkbox"
            />
          </FormikGroup>
          <br />
          <FormikGroup label="Select another option">
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 1"
              value="Another option 1"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 2"
              value="Another option 2"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 3"
              value="3"
              type="checkbox"
            />
          </FormikGroup>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
}

WithFormikGroup.storyName = 'Formik Group'
