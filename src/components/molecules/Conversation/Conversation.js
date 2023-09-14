import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import styles from './Conversation.styles'
import Message from '../../atoms/Message'
import Container from '../../layout/Container'

/**
 * Messages
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledConversation = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const Conversation = ({ id, messages, children }) => {
  const lastMessageRef = useRef(null)
  const didScroll = useRef(false)

  useEffect(() => {
    if (didScroll.current === false) {
      didScroll.current = true
    } else if (lastMessageRef.current) {
      setTimeout(() => {
        lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [messages])

  return (
    <StyledConversation id={id} data-testid={id}>
      <Container flex direction="column" gap="xxs">
        {messages.map((message, index) => (
          <Container
            flex
            direction="column"
            gap="xs"
            key={message.id}
            alignItems={
              message.variant === 'incoming' ? 'flex-start' : 'flex-end'
            }
          >
            <Message
              ref={index === messages.length - 1 ? lastMessageRef : null}
              id={message.id}
              variant={message.variant}
            >
              {message.content}
            </Message>
          </Container>
        ))}
      </Container>
      {children}
    </StyledConversation>
  )
}

Conversation.displayName = 'Conversation'

Conversation.propTypes = {
  id: PropTypes.string,
}

export default Conversation
