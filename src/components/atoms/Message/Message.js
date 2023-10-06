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

const Message = React.forwardRef(
  ({ id, variant, children, backgroundColor = '#171717' }, ref) => {
    return (
      <StyledMessage
        ref={ref}
        id={id}
        data-testid={id}
        variant={variant}
        backgroundColor={backgroundColor}
      >
        <span data-testid={`${id}-children`}>{children}</span>
      </StyledMessage>
    )
  },
)

Message.displayName = 'Message'

Message.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(options.variants),
  backgroundColor: PropTypes.string,
}

export default Message
