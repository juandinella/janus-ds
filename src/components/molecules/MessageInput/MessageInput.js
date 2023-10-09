import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components'
import styles from './MessageInput.styles'
import SendButton from '../../atoms/SendButton'
import Container from '../../layout/Container'
import Textarea from '../Textarea'

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessageInput = styled.form.withConfig({ shouldForwardProp })`
  ${styles}
`

const MessageInput = ({
  id,
  onSendMessage = () => null,
  onChange = () => null,
  placeholder,
}) => {
  const [message, setMessage] = useState('')
  const [disableButton, setDisableButton] = useState(true)

  const sendMessage = () => {
    if (message.trim().length > 0) {
      onSendMessage(message.trim())
      setMessage('')
      setDisableButton(true)
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
    setDisableButton(e.target.value.trim().length === 0)
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <StyledMessageInput id={id} data-testid={id} onSubmit={handleSubmit}>
      <Container flex alignItems="flex-end">
        <Textarea
          value={message}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <span className="message-btn">
          <SendButton disabled={disableButton} />
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
