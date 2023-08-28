import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './Bubble.styles'
import { options } from './constants'


/**
 * Bubble
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledBubble = styled.div.withConfig({shouldForwardProp})`${styles}`

const Bubble = ({ id, variant, position, children }) => {
  return <StyledBubble id={id} variant={variant} position={position}>{children}</StyledBubble>
}

Bubble.displayName = 'Bubble'

Bubble.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(options.variants),
  position: PropTypes.oneOf(options.positions),
}

Bubble.defaultProps = {}

export default Bubble
