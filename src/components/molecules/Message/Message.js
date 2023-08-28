import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { options } from './constants'
import styles from './Message.styles'

import Avatar from '../../atoms/Avatar'
import Bubble from '../../atoms/Bubble'
import Spacer from '../../layout/Spacer'

/**
 * Message
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessage = styled.div.withConfig({shouldForwardProp})`${styles}`

const Message = ({ id, direction, position, children }) => {
  return (
    <StyledMessage id={id} direction={direction} position={position}>
      {direction === 'incoming' &&
        <>
          <Avatar size='sm'>GR</Avatar>
          <Spacer size='8' />
        </>
      }
      <Bubble variant={direction}>{children}</Bubble>
    </StyledMessage>
  )
}

Message.displayName = 'Message'

Message.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(options.directions),
}

Message.defaultProps = {}

export default Message
