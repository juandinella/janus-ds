import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from './ChatWrapper.styles'

/**
 * ChatWrapper
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledChatWrapper = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const ChatWrapper = ({ id, children }) => {
  return (
    <StyledChatWrapper id={id} data-testid={id}>
      {children}
    </StyledChatWrapper>
  )
}

ChatWrapper.displayName = 'ChatWrapper'

ChatWrapper.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ChatWrapper
