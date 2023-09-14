import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Vertical.styles'
import { options } from '../../constants'
import spacerStyles from '../../Spacer.styles'

/**
 * Spacer.Vertical
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledSpacerVertical = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const Vertical = ({
  id,
  mobileSize,
  size = '4',
  height = '100%',
  isPlayground = false,
  maxHeight = 'auto',
}) => (
  <StyledSpacerVertical
    css={[spacerStyles, styles]}
    isPlayground={isPlayground}
    id={id}
    data-testid={id}
    size={size}
    mobileSize={mobileSize}
    style={{
      height,
      maxHeight,
    }}
  />
)

Vertical.displayName = 'SpacerVertical'

Vertical.propTypes = {
  /** Differents sizes of the spacer */
  size: PropTypes.oneOf(options.sizes),
  /* Size for mobile */
  mobileSize: PropTypes.oneOf(options.sizes),
  /** This Boolean attribute add border to see it on Storybook */
  isPlayground: PropTypes.bool,
  /** Different heights of the spacer */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Different max-heights of the spacer */
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Spacer's id */
  id: PropTypes.string,
}

export default Vertical
