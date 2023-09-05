import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components'
import styles from './MessageInput.styles'
import SendButton from '../../atoms/SendButton'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'
import ContentEditable from '../ContentEditable'

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessageInput = styled.div.withConfig({ shouldForwardProp })`${styles}`

const MessageInput = ({ id, onSendMessage }) => {
  const ref = useRef(null)

  const sendMessage = () => {
    if (ref.current) {
      let message = ref.current.innerHTML
      message = message.replace(/<br\s*\/?>/g, '\n').replace(/&nbsp;/g, ' ')
      message = message.replace(/<\/?[^>]+(>|$)/g, "")
      message = message.trim()
      if (message.length > 0) {
        onSendMessage(message)
        ref.current.innerHTML = ''
      }
    }
  }


  const handleSendClick = () => {
    sendMessage()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <StyledMessageInput id={id} data-testid={id}>
      <Container flex alignItems='flex-end'>
        <ContentEditable
          ref={ref}
          ariaLabel="Escribe un mensaje"
          onKeyDown={handleKeyDown}
        />
        <Spacer size="12" />
        <SendButton onClick={handleSendClick} />
      </Container>
    </StyledMessageInput>
  )
}


MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
}

MessageInput.defaultProps = {}

export default MessageInput
