import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import styles from './MessageInput.styles'
import SendButton from '../../atoms/SendButton'
import Container from '../../layout/Container'
import ContentEditable from '../ContentEditable'

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessageInput = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const processMessage = (html) => {
  let message = html
  message = message.replace(/<br\s*\/?>/g, '\n').replace(/&nbsp;/g, ' ')
  message = message.replace(/<\/?[^>]+(>|$)/g, '')
  return message.trim()
}

const MessageInput = ({
  id,
  onSendMessage = () => null,
  onChange = () => null,
  placeholder,
}) => {
  const [disableButton, setDisableButton] = useState(true)
  const ref = useRef(null)

  const sendMessage = () => {
    const message = processMessage(ref.current.innerHTML)
    if (message.length > 0) {
      onSendMessage(message)
      ref.current.innerHTML = ''
      setDisableButton(true)
    }
  }

  const handleChange = () => {
    const message = processMessage(ref.current.innerHTML)
    setDisableButton(message.length === 0)
    if (onChange) {
      onChange(message)
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
      <Container flex alignItems="flex-end">
        <ContentEditable
          ref={ref}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onInput={handleChange}
        />
        <span className="message-btn">
          <SendButton onClick={handleSendClick} disabled={disableButton} />
        </span>
      </Container>
    </StyledMessageInput>
  )
}

MessageInput.propTypes = {
  id: PropTypes.string,
  onSendMessage: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default MessageInput
