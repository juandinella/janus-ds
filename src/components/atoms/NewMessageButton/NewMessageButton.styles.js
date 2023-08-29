import { css } from 'styled-components'

export default css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;
  background-color: var(--bg-base);
  border-radius: 100%;

  &:hover {
    background-color: var(--bg-primary-lightest);
  }
`
