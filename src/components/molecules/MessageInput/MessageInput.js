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
  value,
}) => {
  const [disableButton, setDisableButton] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = e.target.value || e.target.elements[0].value
    if (text.trim().length > 0) {
      onSendMessage(e)
      setDisableButton(true)
    }
  }

  const handleChange = (e) => {
    const text = e.target.value
    setDisableButton(text.trim().length === 0)

    if (onChange) {
      onChange(e)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <StyledMessageInput id={id} data-testid={id} onSubmit={handleSubmit}>
      <Container flex alignItems="flex-end">
        <Textarea
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={value}
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
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default MessageInput
