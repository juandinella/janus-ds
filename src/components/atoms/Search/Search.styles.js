import { css } from 'styled-components'

export default css`
  width: 100%;
  background-color: var(--bg-base);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-xs);
  padding: var(--spacing-xxs);

  .search-icon {
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    outline: none;
    width: 100%;
    background-color: var(--bg-base);
    border: 0 none;
    color: var(--color-neutral-700);
    font-size: var(--font-size-md);
    border-radius: var(--border-radius-xs);
  }
`
