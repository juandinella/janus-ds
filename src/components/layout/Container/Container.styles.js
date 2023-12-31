import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

const parseTwoDimensionalSpacing = (spacing) => {
  const dimension1 = spacing && spacing.split(' ')[0]
  const dimension2 =
    (spacing && spacing.split(' ')[1]) || (spacing && spacing.split(' ')[0])

  return [dimension1, dimension2]
}

export default css`
  width: 100%;
  position: relative;
  min-width: 1px;

  ${(props) =>
    props.flex &&
    css`
      display: flex;
      flex: 1;
    `}

  ${(props) =>
    props.isPlayground &&
    css`
      border: 2px dashed;
      border-color: var(--color-neutral-900);
      min-height: 100px;
    `}

  ${(props) => {
    const [gapColumnMobile, gapRowMobile] = parseTwoDimensionalSpacing(
      props.mobileGap,
    )
    const [gapColumn, gapRow] = parseTwoDimensionalSpacing(props.gap)

    return (
      props.gap &&
      css`
        gap: var(--spacing-${gapColumnMobile ? gapColumnMobile : gapColumn})
          var(--spacing-${gapRowMobile ? gapRowMobile : gapRow});

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          gap: var(--spacing-${gapColumn}) var(--spacing-${gapRow});
        }
      `
    )
  }}

  ${(props) => {
    const [spaceColumnMobile, spaceRowMobile] = parseTwoDimensionalSpacing(
      props.mobileSpace,
    )
    const [spaceColumn, spaceRow] = parseTwoDimensionalSpacing(props.space)

    return (
      props.space &&
      css`
        padding: var(
            --spacing-${spaceColumnMobile ? spaceColumnMobile : spaceColumn}
          )
          var(--spacing-${spaceRowMobile ? spaceRowMobile : spaceRow});

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          padding: var(--spacing-${spaceColumn}) var(--spacing-${spaceRow});
        }
      `
    )
  }}


  ${(props) => {
    if (props.justifyContent) {
      const [mobileJustifyContent, desktopJustifyContent] = props.justifyContent
        .split(',')
        .map((s) => s.trim())

      return css`
        justify-content: ${mobileJustifyContent};

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          justify-content: ${desktopJustifyContent || mobileJustifyContent};
        }
      `
    }
  }}

  ${(props) => {
    if (props.alignItems) {
      const [mobileAlignItems, desktopAlignItems] = props.alignItems
        .split(',')
        .map((s) => s.trim())

      return css`
        align-items: ${mobileAlignItems};

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          align-items: ${desktopAlignItems || mobileAlignItems};
        }
      `
    }
  }}

  ${(props) => {
    if (props.direction) {
      const [mobileDirection, desktopDirection] = props.direction
        .split(',')
        .map((s) => s.trim())

      return css`
        flex-direction: ${mobileDirection};

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          flex-direction: ${desktopDirection || mobileDirection};
        }
      `
    }
  }}

  ${(props) => {
    if (props.overflow) {
      const [overflowX, overflowY] = props.overflow
        .split(',')
        .map((s) => s.trim())

      return css`
        overflow: ${overflowX} ${overflowY};
      `
    }
  }}

  ${(props) =>
    props.whiteSpace &&
    css`
      white-space: ${(props) => props.whiteSpace};
    `}
`
