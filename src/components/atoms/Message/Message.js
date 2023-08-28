import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { options } from './constants'
import styles from './Message.styles'


/**
 * Message
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessage = styled.div.withConfig({shouldForwardProp})`${styles}`

const Message = ({ id, variant, position, children }) => {
  return <StyledMessage id={id} variant={variant} position={position}>{children}</StyledMessage>
}

Message.displayName = 'Message'

Message.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(options.variants),
  position: PropTypes.oneOf(options.positions),
}

Message.defaultProps = {
  position: 'single'
}

export default Message
