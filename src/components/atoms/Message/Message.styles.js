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
  word-break: break-word;

  ${(props) =>
    props.variant === 'assistant' &&
    css`
      color: var(--color-neutral-900);
      background-color: var(--color-neutral-100);
    `}

  ${(props) =>
    props.variant === 'user' &&
    css`
      color: ${getReadableTextColor(props.backgroundColor)};
      background-color: ${props.backgroundColor};
    `}
`
