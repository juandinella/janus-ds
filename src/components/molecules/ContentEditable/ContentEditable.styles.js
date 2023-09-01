import { css } from 'styled-components'

export default css`
  background-color: var(--bg-base);
  width: 100%;
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-xs) var(--spacing-sm);
  max-height: 140px;
  font-size: var(--font-size-md);
  color: var(--text-color-neutral-darker);
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

  &:focus-visible {
    box-shadow: 0 0 0 2px white, 0 0 0 4px #e4ceff;
  }
`
