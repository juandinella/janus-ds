import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import styled from 'styled-components'
import styles from './MessageInput.styles'
import ContentEditable from '../../atoms/ContentEditable'
import SendButton from '../../atoms/SendButton'
import Container from '../../layout/Container'
import Spacer from '../../layout/Spacer'

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessageInput = styled.div.withConfig({ shouldForwardProp })`${styles}`

const MessageInput = ({ onSendMessage }) => {
  const ref = useRef(null)

  const handleSendClick = () => {
    if (ref.current) {
      const message = ref.current.innerHTML.trim()

      if (message.length > 0) {
        onSendMessage(message)
        ref.current.innerHTML = ''
      }
    }
  }

  return (
    <StyledMessageInput>
      <Container flex>
        <ContentEditable
          ref={ref}
          ariaLabel="Escribe un mensaje"
        />
        <Spacer size='12' />
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
