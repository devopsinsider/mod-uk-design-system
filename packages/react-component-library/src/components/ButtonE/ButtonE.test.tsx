import React, { FormEvent } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { IconBrightnessLow } from '@defencedigital/icon-library'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { ButtonE } from './index'

describe('Button', () => {
  let wrapper: RenderResult
  let onClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let blurSpy: jest.SpyInstance
  let button: HTMLElement

  beforeEach(() => {
    onClickSpy = jest.fn()
    blurSpy = jest.fn()
  })

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(<ButtonE onClick={onClickSpy}>Click me</ButtonE>)
      button = wrapper.getByText('Click me').parentElement
    })

    it('should default the type to "button"', () => {
      expect(button).toHaveAttribute('type', 'button')
    })

    it('should not render an icon', () => {
      expect(wrapper.queryByTestId('button-icon')).toBeNull()
    })

    describe('when the button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(button, {
          target: {
            blur: blurSpy,
          },
        })
      })

      it('should blur the button so it does not remain active', () => {
        expect(blurSpy).toHaveBeenCalledTimes(1)
      })

      it('should handle the click event', () => {
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the onClick callback has not been specified', () => {
    beforeEach(() => {
      wrapper = render(<ButtonE>Click me</ButtonE>)
      button = wrapper.getByText('Click me').parentElement
    })

    describe('when the button is clicked', () => {
      beforeEach(() => {
        fireEvent.click(button, {
          target: {
            blur: blurSpy,
          },
        })
      })

      it('should blur the button so it does not remain active', () => {
        expect(blurSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the type is specified', () => {
    it.each`
      type        | expected
      ${'button'} | ${'button'}
      ${'submit'} | ${'submit'}
    `('should set the type attribute to $type', ({ type, expected }) => {
      wrapper = render(
        <ButtonE onClick={onClickSpy} type={type}>
          Click me
        </ButtonE>
      )
      button = wrapper.getByText('Click me').parentElement

      expect(button).toHaveAttribute('type', expected)
    })
  })

  describe('when an icon is specified with text', () => {
    beforeEach(() => {
      wrapper = render(<ButtonE icon={<IconBrightnessLow />}>Click me</ButtonE>)
    })

    it('should render an icon', () => {
      expect(wrapper.getByTestId('button-icon')).toBeInTheDocument()
    })

    it('should render the icon with an `aria-hidden` attribute', () => {
      expect(wrapper.queryByTestId('button-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })
  })

  describe('when an icon is specified without text', () => {
    let consoleWarnSpy: jest.SpyInstance
    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')
      wrapper = render(<ButtonE icon={<IconBrightnessLow />} />)
    })

    it('should render an icon', () => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'WARN - RNDS - An icon-only button should have the title attribute set'
      )
    })
  })

  describe('when the button is loading', () => {
    beforeEach(() => {
      wrapper = render(
        <ButtonE icon={<IconBrightnessLow />} isLoading>
          Click me
        </ButtonE>
      )
    })

    it('disables the button', () => {
      expect(wrapper.getByTestId('button')).toBeDisabled()
    })

    it('hides the user-provided icon', () => {
      expect(wrapper.getByTestId('button-icon')).toHaveStyleRule(
        'visibility',
        'hidden'
      )
    })

    it('hides the button text', () => {
      expect(wrapper.getByTestId('button-icon')).toHaveStyleRule(
        'visibility',
        'hidden'
      )
    })

    it('shows a loading icon with the `aria-hidden` attribute', () => {
      expect(wrapper.getByTestId('loading-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })
  })
})
