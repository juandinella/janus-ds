import React from 'react'
import PropTypes from 'prop-types'
import styles from './Spacer.styles'
import Horizontal from './components/Horizontal/Horizontal'
import Vertical from './components/Vertical/Vertical'
import { options } from './constants'

/**
 * Provides empty space.
 */

const Spacer = ({ id, mobileSize, size, isPlayground }) => (
  <div
    css={styles}
    id={id}
    data-testid={id}
    size={size}
    mobileSize={mobileSize}
    isPlayground={isPlayground}
  />
)

Spacer.displayName = 'Spacer'

Spacer.propTypes = {
  /** Differents sizes of the spacer */
  size: PropTypes.oneOf(options.sizes),
  /* Size for mobile */
  mobileSize: PropTypes.oneOf(options.sizes),
  /** This Boolean attribute add border to see it on Storybook */
  isPlayground: PropTypes.bool,
  /** Spacer's id */
  id: PropTypes.string,
}

Spacer.defaultProps = {
  size: '4',
  isPlayground: false,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
