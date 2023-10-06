import { css } from 'styled-components'

export default css`
  padding: var(--spacing-xxs) var(--spacing-xs);
  font-size: var(--font-size-sm);
  max-width: max-content;
  white-space: pre-line;
  border-radius: var(--border-radius-md);
  line-height: 1.5;
  word-break: break-word;
  color: var(--color-neutral-900);
  background-color: var(--color-neutral-100);
  min-height: 37px;
  align-items: center;
  display: flex;
  gap: 5px;

  span {
    width: 10px;
    height: 10px;
    border-radius: var(--border-radius-round);
    animation: dots-animation 1.5s infinite ease-in-out;

    @media screen and (prefers-reduced-motion) {
      animation: none;
    }

    &:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }
    &:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }
    &:nth-child(3) {
      animation-delay: calc(300ms * 3);
    }

    @keyframes dots-animation {
      0% {
        background-color: var(--color-neutral-100);
      }
      20% {
        background-color: var(--color-neutral-400);
      }
      44% {
        background-color: var(--color-neutral-700);
      }
    }
  }
`
