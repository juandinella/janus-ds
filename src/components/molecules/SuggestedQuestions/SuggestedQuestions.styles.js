import { css } from 'styled-components'

export default css`
  display: flex;
  padding: 0 var(--spacing-xs);

  > div {
    &::-webkit-scrollbar {
      height: 4px;
      width: 4px;
      background: var(--color-neutral-300);
    }
    &::-webkit-scrollbar-thumb:horizontal {
      background: var(--color-neutral-700);
      border-radius: 6px;
    }
  }
`
