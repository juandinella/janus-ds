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

const Text = ({ id, type, size, weight, alignment, transform, color, children}) => {
  return <StyledText id={id} as={type} size={size} weight={weight} alignment={alignment} transform={transform} color={color}>{children}</StyledText>
}

Text.displayName = 'Text'

Text.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(options.types).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(options.sizes),
    PropTypes.arrayOf(PropTypes.oneOf(options.sizes))
  ]),
  weight: PropTypes.oneOf(options.weights),
  transform: PropTypes.oneOf(options.transforms),
  alignment: PropTypes.oneOf(options.alignments),
  color: PropTypes.oneOf(options.colors),
}

Text.defaultProps = {
  type: 'p',
  color: 'neutral-dark',
}

export default Text
