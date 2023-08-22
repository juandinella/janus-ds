import React from 'react'
import PropTypes from 'prop-types'
import spacerStyles from '../../Spacer.styles'
import styles from './Vertical.styles'
import { options } from '../../constants'

/**
 * Spacer.Vertical
 */

const Vertical = ({ id, mobileSize, size, height, isPlayground, maxHeight }) => (
  <div
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

Vertical.defaultProps = {
  size: '4',
  height: '100%',
  maxHeight: 'auto',
  isPlayground: false,
}
export default Vertical
