import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
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
const StyledMessageGroup = styled.div.withConfig({shouldForwardProp})`${styles}`

const MessageGroup = ({ direction, messages }) => {
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
    <StyledMessageGroup direction={direction}>
      <Container flex alignItems='flex-end'>
        {direction === 'incoming' && (
          <>
            <Avatar size='sm'>JD </Avatar>
            <Spacer size='8' />
          </>
        )}
        <Container flex direction='column' gap='xxxs' alignItems={direction === 'incoming' ? 'flex-start': 'flex-end'}>
          {messages.map((message, index) => (
            <Message
              key={message.id}
              id={message.id}
              variant={direction}
              position={calculatePosition(index, messages.length)}
            >
              {message.children}
            </Message>
          ))}
        </Container>
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