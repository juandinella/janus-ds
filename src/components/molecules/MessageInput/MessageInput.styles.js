import { css } from 'styled-components'

export default css`
  width: 100%;
  position: relative;
  padding: var(--spacing-xs);
  border-top: 1px solid var(--color-neutral-200);

  > div {
    border: 1px solid var(--color-neutral-200);
    border-radius: var(--border-radius-sm);
  }

  .message-btn {
    position: absolute;
    right: 0;
    top: 0;
  }
`
