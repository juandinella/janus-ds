import PropTypes from 'prop-types'
import React from 'react'
import styles from './ComponentName.styles'
import { options } from './constants'

/**
 * ComponentName
 */

const ComponentName = ({ children }) => {
  return <div css={styles}>{children}</div>
}

ComponentName.displayName = 'ComponentName'

ComponentName.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types),
}

ComponentName.defaultProps = {}

export default ComponentName
