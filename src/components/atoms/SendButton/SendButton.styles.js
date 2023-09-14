import { css } from 'styled-components'

export default css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  max-width: 42px;
  max-height: 42px;
  background-color: var(--bg-base);
  border-radius: 100%;
  transition: background-color var(--transition-225);

  &:hover {
    background-color: var(--bg-primary-lightest);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`
