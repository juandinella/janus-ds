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
  color: var(--color-neutral-900);

  &:hover {
    background-color: var(--color-neutral-900);
    color: white;
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px white,
      0 0 0 4px #e5e5e5;
  }
`
