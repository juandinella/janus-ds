import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

const getSizeForMobile = (size) => {
  if (Array.isArray(size) && size[0]) {
    return `font-size: var(--font-size-${size[0]});`
  }
  if (typeof size === 'string') {
    return `font-size: var(--font-size-${size});`
  }
  return ''
}

const getSizeForDesktop = (size) => {
  if (Array.isArray(size) && size[1]) {
    return `
      @media screen and (min-width: ${layout.breakpoints.sm}) {
        font-size: var(--font-size-${size[1]});
      }
    `
  }
  return ''
}

export default css`
  display: flex;
  line-height: 1.25;

  ${(props) => css`
    ${getSizeForMobile(props.size)}
    ${getSizeForDesktop(props.size)}
  `}

  ${(props) =>
    props.weight &&
    css`
      font-weight: var(--font-weight-${(props) => props.weight});
    `}

  ${(props) =>
    props.alignment &&
    css`
      text-align: ${(props) => props.alignment};
    `}

  ${(props) =>
    props.color &&
    css`
      color: var(--color-neutral-${(props) => props.color});
    `}

  ${(props) =>
    props.transform &&
    css`
      text-transform: ${(props) => props.transform};
    `}

  ${(props) =>
    props.lineClamp &&
    css`
      display: -webkit-box;
      line-clamp: ${(props) => props.lineClamp};
      -webkit-line-clamp: ${(props) => props.lineClamp};
      -webkit-box-orient: vertical;
      overflow: hidden;
    `}
`
