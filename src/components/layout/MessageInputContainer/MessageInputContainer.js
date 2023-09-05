import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './MessageInputContainer.styles'

/**
 * MessageInputContainer
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessageInputContainer = styled.div.withConfig({shouldForwardProp})`${styles}`

const MessageInputContainer = ({ id, children }) => {
  return <StyledMessageInputContainer id={id} data-testid={id}>{children}</StyledMessageInputContainer>
}

MessageInputContainer.displayName = 'MessageInputContainer'

MessageInputContainer.propTypes = {
  /** Component id */
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

MessageInputContainer.defaultProps = {}

export default MessageInputContainer
