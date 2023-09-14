import { css } from 'styled-components'
import layout from '../../../../../styles/theme/layout'

export default css`
  display: inline-block;

  ${(props) =>
    props.size &&
    css`
      height: ${(props) =>
        props.mobileSize ? `${props.mobileSize}px` : `${props.size}px`};

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        height: ${(props) => `${props.size}px`};
      }
    `}

  ${(props) =>
    props.isPlayground &&
    css`
      border: 2px dashed;
      border-color: var(--color-neutral-900);
    `}
`
