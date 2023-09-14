import { css } from 'styled-components'

export default css`
  display: flex;
  padding: var(--spacing-xxxs);

  svg path {
    transition: fill var(--transition-225);
  }

  &:hover {
    svg path {
      fill: var(--color-neutral-900);
    }
  }
`
