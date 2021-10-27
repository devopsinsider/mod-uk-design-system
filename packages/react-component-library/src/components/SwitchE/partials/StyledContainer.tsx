import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

const { spacing, color } = selectors

export const StyledContainer = styled.div`
  display: inline-flex;
  padding: ${spacing('2')};
  border: 1px solid ${color('neutral', '200')};
  background-color: ${color('neutral', '000')};
  border-radius: 4px;
`
