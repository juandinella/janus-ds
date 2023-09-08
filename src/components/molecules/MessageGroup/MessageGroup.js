import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { options } from './constants'
import styles from './MessageGroup.styles'

import Avatar from '../../atoms/Avatar'
import Message from '../../atoms/Message'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'

/**
 * MessageGroup
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessageGroup = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const MessageGroup = ({ id, direction, avatarText, messages }) => {
  const lastMessageRef = useRef(null)

  useEffect(() => {
    if (lastMessageRef.current) {
      setTimeout(() => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [messages])

  const calculatePosition = (index, arrayLength) => {
    switch (true) {
      case arrayLength === 1:
        return 'single'
      case index === 0:
        return 'first'
      case index === arrayLength - 1:
        return 'last'
      default:
        return 'middle'
    }
  }

  return (
    <StyledMessageGroup direction={direction} id={id} data-testid={id}>
      <Container flex alignItems="flex-end">
        {direction === 'incoming' && (
          <>
            <Avatar size="sm">{avatarText}</Avatar>
            <Spacer size="8" />
          </>
        )}
        <Container
          flex
          direction="column"
          gap="xxxs"
          alignItems={direction === 'incoming' ? 'flex-start' : 'flex-end'}
        >
          {messages.map((message, index) => (
            <Message
              ref={index === messages.length - 1 ? lastMessageRef : null}
              key={message.id}
              id={message.id}
              variant={direction}
              position={calculatePosition(index, messages.length)}
            >
              {message.children}
            </Message>
          ))}
        </Container>
        <Spacer size="16" />
      </Container>
    </StyledMessageGroup>
  )
}

MessageGroup.displayName = 'MessageGroup'

MessageGroup.propTypes = {
  direction: PropTypes.oneOf(options.directions),
}

MessageGroup.defaultProps = {}

export default MessageGroup
