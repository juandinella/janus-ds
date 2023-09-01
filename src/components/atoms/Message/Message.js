import isPropValid from '@emotion/is-prop-valid'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { options } from './constants'
import styles from './Message.styles'

/**
 * Message
 */

const shouldForwardProp = (prop) => isPropValid(prop)
const StyledMessage = styled.div.withConfig({ shouldForwardProp })`
  ${styles}
`

const Message = React.forwardRef(({ id, variant, position, children }, ref) => {
  return (
    <StyledMessage
      ref={ref}
      id={id}
      data-testid={id}
      variant={variant}
      position={position}
    >
      <span data-testid={`${id}-children`}>{children}</span>
    </StyledMessage>
  )
})

Message.displayName = 'Message'

Message.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(options.variants),
  position: PropTypes.oneOf(options.positions),
}

Message.defaultProps = {
  position: 'single',
}

export default Message
