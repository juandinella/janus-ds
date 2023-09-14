import { css } from 'styled-components'

export default css`
  border-top: 1px solid var(--color-neutral-200);
  border-bottom: 1px solid var(--color-neutral-200);
  padding: var(--spacing-xs);
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background: var(--color-neutral-300);
  }
  &::-webkit-scrollbar-thumb:vertical {
    background: var(--color-neutral-700);
    border-radius: 6px;
  }
`
