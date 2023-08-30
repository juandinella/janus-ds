import { css } from 'styled-components'

const bubbleVariants = {
  incoming: css`
    color: var(--text-color-neutral-lighter);
    background-color: var(--color-purple-500);
  `,
  outgoing: css`
    color: var(--text-color-neutral-darker);
    background-color: var(--bg-primary-lighter);
  `,
}

const bubblePositions = {
  incoming: {
    single: css`
      border-radius: var(--border-radius-lg);
    `,
    first: css`
      border-radius: var(--border-radius-lg) var(--border-radius-lg) var(--border-radius-lg) var(--border-radius-xs);
    `,
    middle: css`
      border-radius: var(--border-radius-xs) var(--border-radius-lg) var(--border-radius-lg) var(--border-radius-xs);
    `,
    last: css`
      border-radius: var(--border-radius-xs) var(--border-radius-lg) var(--border-radius-lg) var(--border-radius-lg);
    `
  },
  outgoing: {
    single: css`
      border-radius: var(--border-radius-lg);
    `,
    first: css`
      border-radius: var(--border-radius-lg) var(--border-radius-lg) var(--border-radius-xs) var(--border-radius-lg);
    `,
    middle: css`
      border-radius: var(--border-radius-lg) var(--border-radius-xs) var(--border-radius-xs) var(--border-radius-lg);
    `,
    last: css`
      border-radius: var(--border-radius-lg) var(--border-radius-xs) var(--border-radius-lg) var(--border-radius-lg);
    `
  }
}

export default css`
  padding: var(--spacing-xxs) var(--spacing-xs);
  font-size: var(--font-size-md);
  max-width: 604px;

  ${(props) => props.variant && bubbleVariants[props.variant]}
  ${(props) => {
    if (props.variant && props.position) {
      return bubblePositions[props.variant][props.position]
    }
  }}
`
