import { css } from 'styled-components'

export default css`
  display: flex;
  width: 100%;
  resize: none;
  border: 0 none;
  min-height: 43px;
  height: 43px;
  padding: var(--spacing-xs) var(--spacing-sm);
  padding-right: 30px;
  max-height: 140px;
  font-size: var(--font-size-sm);
  position: relative;
  font-family: inherit;
  user-select: text;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-y: auto;
  outline: 0 none;
  border-radius: 10px;
  tab-size: 4;

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
