import { css } from 'styled-components'

export default css`
  display: flex;
  padding: var(--spacing-xxs) var(--spacing-xxs);
  background-color: white;
  border: 1px solid var(--color-neutral-900);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  transition: all var(--transition-225);
  max-width: max-content;

  &:hover {
    background-color: var(--color-neutral-900);
    color: white;
  }
`
