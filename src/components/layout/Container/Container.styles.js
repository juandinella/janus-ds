import { css } from 'styled-components'
import layout from '../../../styles/theme/layout'

const parseTwoDimensionalSpacing = (spacing) => {
  const dimension1 = spacing && spacing.split(' ')[0]
  const dimension2 =
    (spacing && spacing.split(' ')[1]) ||
    (spacing && spacing.split(' ')[0])

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
      border-color: var(--color-purple-600);
      min-height: 100px;
    `}



  ${(props) => {
    const [gapColumnMobile, gapRowMobile] = parseTwoDimensionalSpacing(props.mobileGap)
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
    const [spaceColumnMobile, spaceRowMobile] = parseTwoDimensionalSpacing(props.mobileSpace)
    const [spaceColumn, spaceRow] = parseTwoDimensionalSpacing(props.space)

    return (
      props.space &&
      css`
        padding: var(--spacing-${spaceColumnMobile ? spaceColumnMobile : spaceColumn})
          var(--spacing-${spaceRowMobile ? spaceRowMobile : spaceRow});

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          padding: var(--spacing-${spaceColumn}) var(--spacing-${spaceRow});
        }
      `
    )
  }}

  ${(props) => {
    if (props.justifyContent) {
      const [mobileJustifyContent, desktopJustifyContent] = props.justifyContent.split(",").map(s => s.trim())

      return css`
        justify-content: ${mobileJustifyContent};

        @media screen and (min-width: ${layout.breakpoints.sm}) {
          justify-content: ${desktopJustifyContent || mobileJustifyContent};
        }
      `
    }
  }}
`
