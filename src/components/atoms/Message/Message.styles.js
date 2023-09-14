import { css } from 'styled-components'
import getContrastRatio from '../../../utils/getContrastRatio'

const getReadableTextColor = (backgroundColor) => {
  const black = '171717'
  const white = 'FFFFFF'

  const contrastWithBlack = getContrastRatio(backgroundColor, black)
  const contrastWithWhite = getContrastRatio(backgroundColor, white)

  if (contrastWithBlack > contrastWithWhite) {
    return `#${black}`
  } else {
    return `#${white}`
  }
}

export default css`
  padding: var(--spacing-xxs) var(--spacing-xs);
  font-size: var(--font-size-sm);
  max-width: 305px;
  white-space: pre-line;
  border-radius: var(--border-radius-md);
  line-height: 1.5;

  ${(props) =>
    props.variant === 'incoming' &&
    css`
      color: var(--color-neutral-900);
      background-color: var(--color-neutral-100);
    `}

  ${(props) =>
    props.variant === 'outgoing' &&
    css`
      color: ${getReadableTextColor(props.backgroundColor)};
      background-color: ${props.backgroundColor};
    `}

  ${(props) =>
    props.loading &&
    css`
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
    `}
`
