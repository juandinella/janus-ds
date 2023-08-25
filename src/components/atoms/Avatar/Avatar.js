import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Avatar.styles'
import { options } from './constants'

/**
 * Avatar
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledAvatar = styled.div.withConfig({shouldForwardProp})`${styles}`

const Avatar = ({ id, size, isOnline, children }) => {
  return <StyledAvatar id={id} size={size} isOnline={isOnline}>{children}</StyledAvatar>
}

Avatar.displayName = 'Avatar'

Avatar.propTypes = {
  /** Component id */
  id: PropTypes.string,
  /** Content to be included in the component */
  children: PropTypes.node.isRequired,
  /** Size of the component */
  size: PropTypes.oneOf(options.sizes),
  /** It shows online status */
  isOnline: PropTypes.bool,
}

Avatar.defaultProps = {}

export default Avatar
