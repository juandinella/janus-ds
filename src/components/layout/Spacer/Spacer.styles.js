import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

export default css`
  ${(props) =>
    props.size &&
    css`
      min-width: ${(props) =>
        props.mobileSize ? `${props.mobileSize}px` : `${props.size}px`};
      min-height: ${(props) =>
        props.mobileSize ? `${props.mobileSize}px` : `${props.size}px`};

      @media screen and (min-width: ${() => layout.breakpoints.sm}) {
        width: ${(props) => `${props.size}px`};
        height: ${(props) => `${props.size}px`};
        min-width: ${(props) => `${props.size}px`};
        min-height: ${(props) => `${props.size}px`};
      }
    `}

  ${(props) =>
    props.isPlayground &&
    css`
      border: 2px dashed;
      border-color: var(--color-neutral-900);
    `}
`
