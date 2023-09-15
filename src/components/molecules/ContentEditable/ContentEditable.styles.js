import { css } from 'styled-components'

export default css`
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  max-height: 140px;
  font-size: var(--font-size-sm);
  flex-grow: 1;
  position: relative;
  font-family: inherit;
  user-select: text;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: initial;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
  -webkit-user-modify: read-write;
  overflow-wrap: break-word;
  -webkit-line-break: after-white-space;
  outline: 0 none;
  border-radius: 10px;

  &:empty:not(:focus):before {
    content: attr(placeholder);
    color: var(--color-neutral-500);
    font-size: var(--font-size-sm);
  }

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
