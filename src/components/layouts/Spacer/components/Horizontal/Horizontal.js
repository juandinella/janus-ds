import React from 'react'
import PropTypes from 'prop-types'
import spacerStyles from '../../Spacer.styles'
import styles from './Horizontal.styles'
import { options } from '../../constants'

/**
 * Spacer.Horizontal
 */

const Horizontal = ({ id, mobileSize, size, isPlayground }) => (
  <div
    css={[spacerStyles, styles]}
    isPlayground={isPlayground}
    id={id}
    data-testid={id}
    size={size}
    mobileSize={mobileSize}
  />
)

Horizontal.displayName = 'SpacerHorizontal'

Horizontal.propTypes = {
  /** Differents sizes of the spacer */
  size: PropTypes.oneOf(options.sizes),
  /* Size for mobile */
  mobileSize: PropTypes.oneOf(options.sizes),
  /** This Boolean attribute add border to see it on Storybook */
  isPlayground: PropTypes.bool,
  /** Spacer's id */
  id: PropTypes.string,
}

Horizontal.defaultProps = {
  size: '4',
  isPlayground: false,
}

export default Horizontal
