import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { options } from './constants'
import styles from './Text.styles'

/**
 * Text
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledText = styled.p.withConfig({shouldForwardProp})`${styles}`

const Text = ({ id, type, size, weight, alignment, transform, color, lineClamp, children}) => {
  return <StyledText id={id} as={type} size={size} weight={weight} alignment={alignment} transform={transform} lineClamp={lineClamp} color={color}>{children}</StyledText>
}

Text.displayName = 'Text'

Text.propTypes = {
  /** Component id */
  id: PropTypes.string,
  /** Content to be included in the component */
  children: PropTypes.node.isRequired,
  /* One of: h1, h2, h3, h4, h5, h6, span or p */
  type: PropTypes.oneOf(options.types).isRequired,
  /** Size of the text */
  size: PropTypes.oneOfType([
    PropTypes.oneOf(options.sizes),
    PropTypes.arrayOf(PropTypes.oneOf(options.sizes))
  ]),
  /** Text's font weight */
  weight: PropTypes.oneOf(options.weights),
  /** Transform text */
  transform: PropTypes.oneOf(options.transforms),
  /** Text's Alignmnet */
  alignment: PropTypes.oneOf(options.alignments),
  /** Text's color */
  color: PropTypes.oneOf(options.colors),
  /** Clamp text */
  lineClamp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

Text.defaultProps = {
  type: 'p',
  color: 'neutral-darker',
}

export default Text
