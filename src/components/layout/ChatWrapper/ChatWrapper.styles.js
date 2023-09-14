import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

export default css`
  display: flex;
  box-shadow: var(--box-shadow-main);
  border-radius: var(--border-radius-lg);
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 824px;
  background-color: white;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: ${layout.breakpoints.sm}) {
    width: 400px;
    position: static;
  }
`
