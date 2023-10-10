import { css } from 'styled-components'

export default css`
  width: 100%;
  border: 0 none;
  min-height: 43px;
  font-size: var(--font-size-sm);
  resize: none;
  outline: 0 none;
  border-radius: 10px;
  tab-size: 4;
  padding: var(--spacing-xs) var(--spacing-sm);

  @supports (-webkit-touch-callout: none) {
    font-size: 16px;
  }

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background-color: var(--color-neutral-300);
  }

  &::-webkit-scrollbar-thumb:vertical {
    background-color: var(--color-neutral-700);
    border-radius: 6px;
  }
`
