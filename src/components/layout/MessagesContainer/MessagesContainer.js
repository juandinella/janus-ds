import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './MessagesContainer.styles'


/**
 * MessagesContainer
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessagesContainer = styled.div.withConfig({shouldForwardProp})`${styles}`

const MessagesContainer = ({ id, children }) => {
  return <StyledMessagesContainer id={id}>{children}</StyledMessagesContainer>
}

MessagesContainer.displayName = 'MessagesContainer'

MessagesContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

MessagesContainer.defaultProps = {}

export default MessagesContainer
