import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

export default css`
  width: 100%;
  min-height: 100px;
  border: none;
  position: fixed;
  max-height: 85vh;
  z-index: 999999;
  left: unset;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (min-width: ${layout.breakpoints.sm}) {
    width: 400px;
  }
`
