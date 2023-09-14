import { css } from 'styled-components'

export default css`
  display: flex;
  padding: var(--spacing-xxs) var(--spacing-xs);
  background-color: var(--color-neutral-100);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  transition: background-color var(--transition-225);
  padding: var(--spacing-xs);

  &:hover {
    background-color: var(--color-neutral-200);
  }
`
